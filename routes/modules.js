const express = require('express');
const { body, validationResult } = require('express-validator');
const winston = require('winston');
const { authenticateToken, requireRole } = require('../middleware/auth');

const router = express.Router();

// Configure logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()]
});

// In-memory modules storage (replace with database in production)
let modules = [
  {
    id: 1,
    name: "Introduction à l'Animation",
    description: "Les bases de l'animation traditionnelle et numérique",
    chapters: [
      {
        id: 1,
        title: "Histoire de l'Animation",
        description: "Découvrez l'évolution de l'animation depuis ses débuts",
        videoUrl: null,
        pdfUrl: null,
        pdfDescription: null,
        order: 1,
        duration: 1800, // 30 minutes in seconds
        isPublished: true
      },
      {
        id: 2,
        title: "Principes Fondamentaux",
        description: "Les 12 principes de l'animation de Disney",
        videoUrl: null,
        pdfUrl: null,
        pdfDescription: null,
        order: 2,
        duration: 2400, // 40 minutes
        isPublished: true
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: 1,
    isPublished: true,
    order: 1
  },
  {
    id: 2,
    name: "Animation 3D Avancée",
    description: "Techniques avancées d'animation 3D avec Blender",
    chapters: [
      {
        id: 3,
        title: "Modélisation de Personnages",
        description: "Créer des personnages 3D expressifs",
        videoUrl: null,
        pdfUrl: null,
        pdfDescription: null,
        order: 1,
        duration: 3600, // 60 minutes
        isPublished: true
      }
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: 1,
    isPublished: true,
    order: 2
  }
];

// Validation middleware for modules
const validateModule = [
  body('name')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Module name must be between 3 and 100 characters'),
  
  body('description')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  
  body('order')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Order must be a positive integer'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }
    next();
  }
];

// Validation middleware for chapters
const validateChapter = [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Chapter title must be between 3 and 100 characters'),
  
  body('description')
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters'),
  
  body('videoUrl')
    .optional()
    .isURL()
    .withMessage('Video URL must be valid'),
  
  body('pdfUrl')
    .optional()
    .isURL()
    .withMessage('PDF URL must be valid'),
  
  body('duration')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Duration must be a positive integer (seconds)'),
  
  body('order')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Order must be a positive integer'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }
    next();
  }
];

// Get all modules (all authenticated users)
router.get('/', authenticateToken, (req, res) => {
  try {
    const { includeUnpublished = false } = req.query;
    const isTeacherOrAdmin = ['teacher', 'admin'].includes(req.user.role);
    
    let filteredModules = modules;
    
    // Students can only see published modules
    if (!isTeacherOrAdmin || includeUnpublished === 'false') {
      filteredModules = modules.filter(m => m.isPublished);
    }

    // Filter chapters based on user role
    const modulesWithFilteredChapters = filteredModules.map(module => ({
      ...module,
      chapters: module.chapters.filter(chapter => 
        isTeacherOrAdmin || chapter.isPublished
      )
    }));

    res.json({
      modules: modulesWithFilteredChapters,
      total: modulesWithFilteredChapters.length
    });

  } catch (error) {
    logger.error('Get modules error', { 
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

// Get module by ID
router.get('/:id', authenticateToken, (req, res) => {
  try {
    const moduleId = parseInt(req.params.id);
    const isTeacherOrAdmin = ['teacher', 'admin'].includes(req.user.role);
    
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
      return res.status(404).json({ 
        error: 'Module not found',
        code: 'MODULE_NOT_FOUND'
      });
    }

    // Check if user can access unpublished module
    if (!module.isPublished && !isTeacherOrAdmin) {
      return res.status(403).json({ 
        error: 'Access denied to unpublished module',
        code: 'ACCESS_DENIED'
      });
    }

    // Filter chapters based on user role
    const moduleWithFilteredChapters = {
      ...module,
      chapters: module.chapters.filter(chapter => 
        isTeacherOrAdmin || chapter.isPublished
      )
    };

    res.json({ module: moduleWithFilteredChapters });

  } catch (error) {
    logger.error('Get module error', { 
      error: error.message,
      moduleId: req.params.id,
      userId: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Create new module (admin/teacher only)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), validateModule, (req, res) => {
  try {
    const { name, description, order, isPublished = false } = req.body;
    
    // Check for duplicate name
    const existingModule = modules.find(m => 
      m.name.toLowerCase() === name.toLowerCase()
    );
    
    if (existingModule) {
      return res.status(409).json({ 
        error: 'Module with this name already exists',
        code: 'MODULE_EXISTS'
      });
    }

    const newModule = {
      id: Math.max(...modules.map(m => m.id)) + 1,
      name,
      description,
      chapters: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: req.user.id,
      isPublished: req.user.role === 'admin' ? isPublished : false, // Only admin can publish directly
      order: order || modules.length + 1
    };

    modules.push(newModule);

    logger.info('Module created', { 
      moduleId: newModule.id,
      moduleName: newModule.name,
      createdBy: req.user.id,
      ip: req.ip
    });

    res.status(201).json({
      message: 'Module created successfully',
      module: newModule
    });

  } catch (error) {
    logger.error('Create module error', { 
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

// Update module (admin/teacher only, teachers can only update their own)
router.put('/:id', authenticateToken, requireRole(['admin', 'teacher']), validateModule, (req, res) => {
  try {
    const moduleId = parseInt(req.params.id);
    const { name, description, order, isPublished } = req.body;
    
    const moduleIndex = modules.findIndex(m => m.id === moduleId);
    
    if (moduleIndex === -1) {
      return res.status(404).json({ 
        error: 'Module not found',
        code: 'MODULE_NOT_FOUND'
      });
    }

    const existingModule = modules[moduleIndex];
    
    // Teachers can only update modules they created
    if (req.user.role === 'teacher' && existingModule.createdBy !== req.user.id) {
      return res.status(403).json({ 
        error: 'You can only update modules you created',
        code: 'ACCESS_DENIED'
      });
    }

    // Check for duplicate name (excluding current module)
    if (name) {
      const duplicateModule = modules.find(m => 
        m.id !== moduleId && m.name.toLowerCase() === name.toLowerCase()
      );
      
      if (duplicateModule) {
        return res.status(409).json({ 
          error: 'Module with this name already exists',
          code: 'MODULE_EXISTS'
        });
      }
    }

    // Update module
    const updatedModule = {
      ...existingModule,
      ...(name && { name }),
      ...(description && { description }),
      ...(order && { order }),
      ...(req.user.role === 'admin' && isPublished !== undefined && { isPublished }),
      updatedAt: new Date().toISOString()
    };

    modules[moduleIndex] = updatedModule;

    logger.info('Module updated', { 
      moduleId: updatedModule.id,
      moduleName: updatedModule.name,
      updatedBy: req.user.id,
      ip: req.ip
    });

    res.json({
      message: 'Module updated successfully',
      module: updatedModule
    });

  } catch (error) {
    logger.error('Update module error', { 
      error: error.message,
      moduleId: req.params.id,
      updatedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Delete module (admin only)
router.delete('/:id', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    const moduleId = parseInt(req.params.id);
    
    const moduleIndex = modules.findIndex(m => m.id === moduleId);
    
    if (moduleIndex === -1) {
      return res.status(404).json({ 
        error: 'Module not found',
        code: 'MODULE_NOT_FOUND'
      });
    }

    const deletedModule = modules[moduleIndex];
    modules.splice(moduleIndex, 1);

    logger.info('Module deleted', { 
      moduleId: deletedModule.id,
      moduleName: deletedModule.name,
      deletedBy: req.user.id,
      ip: req.ip
    });

    res.json({
      message: 'Module deleted successfully',
      code: 'MODULE_DELETED'
    });

  } catch (error) {
    logger.error('Delete module error', { 
      error: error.message,
      moduleId: req.params.id,
      deletedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Add chapter to module (admin/teacher only)
router.post('/:id/chapters', authenticateToken, requireRole(['admin', 'teacher']), validateChapter, (req, res) => {
  try {
    const moduleId = parseInt(req.params.id);
    const { title, description, videoUrl, pdfUrl, pdfDescription, duration, order, isPublished = false } = req.body;
    
    const module = modules.find(m => m.id === moduleId);
    
    if (!module) {
      return res.status(404).json({ 
        error: 'Module not found',
        code: 'MODULE_NOT_FOUND'
      });
    }

    // Teachers can only add chapters to modules they created
    if (req.user.role === 'teacher' && module.createdBy !== req.user.id) {
      return res.status(403).json({ 
        error: 'You can only add chapters to modules you created',
        code: 'ACCESS_DENIED'
      });
    }

    const newChapter = {
      id: Math.max(...modules.flatMap(m => m.chapters.map(c => c.id)), 0) + 1,
      title,
      description,
      videoUrl: videoUrl || null,
      pdfUrl: pdfUrl || null,
      pdfDescription: pdfDescription || null,
      duration: duration || null,
      order: order || module.chapters.length + 1,
      isPublished: req.user.role === 'admin' ? isPublished : false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    module.chapters.push(newChapter);
    module.updatedAt = new Date().toISOString();

    logger.info('Chapter added', { 
      moduleId: module.id,
      chapterId: newChapter.id,
      chapterTitle: newChapter.title,
      createdBy: req.user.id,
      ip: req.ip
    });

    res.status(201).json({
      message: 'Chapter added successfully',
      chapter: newChapter
    });

  } catch (error) {
    logger.error('Add chapter error', { 
      error: error.message,
      moduleId: req.params.id,
      createdBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Export modules data for other routes (temporary)
router.getModulesData = () => modules;
router.setModulesData = (newModules) => { modules = newModules; };

module.exports = router;

