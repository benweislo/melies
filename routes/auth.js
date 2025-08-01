const express = require('express');
const bcrypt = require('bcryptjs');
const winston = require('winston');
const { 
  validateLogin, 
  generateTokens, 
  verifyRefreshToken,
  authenticateToken 
} = require('../middleware/auth');

const router = express.Router();

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

// In-memory user storage (replace with database in production)
// Passwords are hashed with bcrypt
let users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@melies.com',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'admin',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
  },
  {
    id: 2,
    username: 'teacher1',
    email: 'teacher@melies.com',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'teacher',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
  },
  {
    id: 3,
    username: 'student1',
    email: 'student@melies.com',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'student',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
  }
];

// Blacklisted tokens (in production, use Redis)
let tokenBlacklist = new Set();

// Login endpoint
router.post('/login', validateLogin, async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find user by username or email
    const user = users.find(u => 
      (u.username === username || u.email === username) && u.isActive
    );

    if (!user) {
      logger.warn('Login attempt with invalid username', { 
        username, 
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
      return res.status(401).json({ 
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      logger.warn('Login attempt with invalid password', { 
        username: user.username,
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
      return res.status(401).json({ 
        error: 'Invalid credentials',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Update last login
    user.lastLogin = new Date().toISOString();

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user);

    logger.info('Successful login', { 
      userId: user.id,
      username: user.username,
      role: user.role,
      ip: req.ip
    });

    // Return tokens and user info (excluding password)
    const { password: _, ...userInfo } = user;
    res.json({
      message: 'Login successful',
      user: userInfo,
      accessToken,
      refreshToken,
      expiresIn: '15m'
    });

  } catch (error) {
    logger.error('Login error', { 
      error: error.message,
      stack: error.stack,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Refresh token endpoint
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ 
        error: 'Refresh token required',
        code: 'TOKEN_MISSING'
      });
    }

    // Check if token is blacklisted
    if (tokenBlacklist.has(refreshToken)) {
      return res.status(401).json({ 
        error: 'Token has been revoked',
        code: 'TOKEN_REVOKED'
      });
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);
    
    // Find user
    const user = users.find(u => u.id === decoded.id && u.isActive);
    if (!user) {
      return res.status(401).json({ 
        error: 'User not found or inactive',
        code: 'USER_NOT_FOUND'
      });
    }

    // Generate new tokens
    const tokens = generateTokens(user);

    // Blacklist old refresh token
    tokenBlacklist.add(refreshToken);

    logger.info('Token refreshed', { 
      userId: user.id,
      username: user.username,
      ip: req.ip
    });

    res.json({
      message: 'Token refreshed successfully',
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresIn: '15m'
    });

  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Invalid refresh token',
        code: 'TOKEN_INVALID'
      });
    }

    logger.error('Token refresh error', { 
      error: error.message,
      stack: error.stack,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Logout endpoint
router.post('/logout', authenticateToken, (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    // Blacklist refresh token if provided
    if (refreshToken) {
      tokenBlacklist.add(refreshToken);
    }

    logger.info('User logged out', { 
      userId: req.user.id,
      username: req.user.username,
      ip: req.ip
    });

    res.json({ 
      message: 'Logged out successfully',
      code: 'LOGOUT_SUCCESS'
    });

  } catch (error) {
    logger.error('Logout error', { 
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

// Get current user profile
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const user = users.find(u => u.id === req.user.id && u.isActive);
    
    if (!user) {
      return res.status(404).json({ 
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    const { password: _, ...userProfile } = user;
    res.json({
      user: userProfile
    });

  } catch (error) {
    logger.error('Profile fetch error', { 
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

// Change password endpoint
router.post('/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ 
        error: 'Current password and new password are required',
        code: 'MISSING_FIELDS'
      });
    }

    // Password strength validation
    if (newPassword.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      return res.status(400).json({ 
        error: 'New password must be at least 8 characters and contain uppercase, lowercase, and number',
        code: 'WEAK_PASSWORD'
      });
    }

    const user = users.find(u => u.id === req.user.id && u.isActive);
    if (!user) {
      return res.status(404).json({ 
        error: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Current password is incorrect',
        code: 'INVALID_PASSWORD'
      });
    }

    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    // Update password
    user.password = hashedPassword;
    user.updatedAt = new Date().toISOString();

    logger.info('Password changed', { 
      userId: user.id,
      username: user.username,
      ip: req.ip
    });

    res.json({ 
      message: 'Password changed successfully',
      code: 'PASSWORD_CHANGED'
    });

  } catch (error) {
    logger.error('Password change error', { 
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

// Export users for other routes (temporary, replace with database)
router.getUsersData = () => users;
router.setUsersData = (newUsers) => { users = newUsers; };

module.exports = router;

