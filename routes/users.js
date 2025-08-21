const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const winston = require('winston');
const { authenticateToken, requireRole, validateUserCreation } = require('../middleware/auth');

const router = express.Router();

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

const { getUsersData, setUsersData } = require('../data/users');

// Get all users (admin only)
router.get('/', authenticateToken, requireRole(['admin', 'teacher']), (req, res) => {
  try {
    const users = getUsersData();
    const safeUsers = users.map(user => {
      const { password, ...safeUser } = user;
      return safeUser;
    });

    res.json({
      users: safeUsers,
      total: safeUsers.length
    });

  } catch (error) {
    logger.error('Get users error', { 
      error: error.message,
      userId: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Get user by ID (admin or own profile)
router.get('/:id', authenticateToken, (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const requestingUserId = req.user.id;
    const isAdmin = req.user.role === 'admin';

    // Users can only access their own profile unless they're admin
    if (!isAdmin && userId !== requestingUserId) {
      return res.status(403).json({ 
        error: 'Access denied',
        code: 'ACCESS_DENIED'
      });
    }

    const users = getUsersData();
    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({ 
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    const { password, ...safeUser } = user;
    res.json({ user: safeUser });

  } catch (error) {
    logger.error('Get user error', { 
      error: error.message,
      userId: req.user?.id,
      requestedId: req.params.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Create new user (admin only)
router.post('/', authenticateToken, requireRole(['admin']), validateUserCreation, async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const users = getUsersData();

    // Check if username or email already exists
    const existingUser = users.find(u => 
      u.username === username || u.email === email
    );

    if (existingUser) {
      return res.status(409).json({ 
        error: 'Username or email already exists',
        code: 'USER_EXISTS'
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: Math.max(...users.map(u => u.id)) + 1,
      username,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastLogin: null,
      isActive: true
    };

    users.push(newUser);
    setUsersData(users);

    logger.info('User created', { 
      newUserId: newUser.id,
      username: newUser.username,
      role: newUser.role,
      createdBy: req.user.id,
      ip: req.ip
    });

    const { password: _, ...safeUser } = newUser;
    res.status(201).json({
      message: 'User created successfully',
      user: safeUser
    });

  } catch (error) {
    logger.error('Create user error', { 
      error: error.message,
      createdBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Update user (admin or own profile)
router.put('/:id', authenticateToken, [
  body('email').optional().isEmail().normalizeEmail(),
  body('username').optional().trim().isLength({ min: 3, max: 50 }),
  body('role').optional().isIn(['student', 'teacher', 'admin'])
], (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const userId = parseInt(req.params.id);
    const requestingUserId = req.user.id;
    const isAdmin = req.user.role === 'admin';
    const { email, username, role } = req.body;

    // Users can only update their own profile unless they're admin
    if (!isAdmin && userId !== requestingUserId) {
      return res.status(403).json({ 
        error: 'Access denied',
        code: 'ACCESS_DENIED'
      });
    }

    // Only admins can change roles
    if (role && !isAdmin) {
      return res.status(403).json({ 
        error: 'Only administrators can change user roles',
        code: 'ROLE_CHANGE_DENIED'
      });
    }

    const users = getUsersData();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ 
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    // Check for duplicate username/email
    if (username || email) {
      const duplicate = users.find(u => 
        u.id !== userId && (u.username === username || u.email === email)
      );
      if (duplicate) {
        return res.status(409).json({ 
          error: 'Username or email already exists',
          code: 'USER_EXISTS'
        });
      }
    }

    // Update user
    const updatedUser = {
      ...users[userIndex],
      ...(email && { email }),
      ...(username && { username }),
      ...(role && { role }),
      updatedAt: new Date().toISOString()
    };

    users[userIndex] = updatedUser;
    setUsersData(users);

    logger.info('User updated', { 
      userId: updatedUser.id,
      updatedBy: req.user.id,
      changes: { email, username, role },
      ip: req.ip
    });

    const { password, ...safeUser } = updatedUser;
    res.json({
      message: 'User updated successfully',
      user: safeUser
    });

  } catch (error) {
    logger.error('Update user error', { 
      error: error.message,
      userId: req.params.id,
      updatedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Delete user (admin only, cannot delete self)
router.delete('/:id', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const requestingUserId = req.user.id;

    // Admin cannot delete themselves
    if (userId === requestingUserId) {
      return res.status(400).json({ 
        error: 'Cannot delete your own account',
        code: 'SELF_DELETE_DENIED'
      });
    }

    const users = getUsersData();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ 
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    const deletedUser = users[userIndex];
    
    // Soft delete - mark as inactive instead of removing
    users[userIndex] = {
      ...deletedUser,
      isActive: false,
      deletedAt: new Date().toISOString(),
      deletedBy: requestingUserId
    };

    setUsersData(users);

    logger.info('User deleted', { 
      deletedUserId: userId,
      deletedUsername: deletedUser.username,
      deletedBy: req.user.id,
      ip: req.ip
    });

    res.json({
      message: 'User deleted successfully',
      code: 'USER_DELETED'
    });

  } catch (error) {
    logger.error('Delete user error', { 
      error: error.message,
      userId: req.params.id,
      deletedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Get user statistics (admin only)
router.get('/stats/overview', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    const users = getUsersData();
    const activeUsers = users.filter(u => u.isActive);
    
    const stats = {
      total: activeUsers.length,
      byRole: {
        admin: activeUsers.filter(u => u.role === 'admin').length,
        teacher: activeUsers.filter(u => u.role === 'teacher').length,
        student: activeUsers.filter(u => u.role === 'student').length
      },
      recentLogins: activeUsers.filter(u => {
        if (!u.lastLogin) return false;
        const loginDate = new Date(u.lastLogin);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return loginDate > weekAgo;
      }).length,
      inactive: users.filter(u => !u.isActive).length
    };

    res.json({ stats });

  } catch (error) {
    logger.error('Get user stats error', { 
      error: error.message,
      requestedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

module.exports = router;

