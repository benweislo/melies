const express = require('express');
const { Vimeo } = require('vimeo');
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

// Initialize Vimeo client
const vimeoClient = new Vimeo(
  process.env.VIMEO_CLIENT_ID,
  process.env.VIMEO_CLIENT_SECRET,
  process.env.VIMEO_ACCESS_TOKEN
);

// Validation middleware for Vimeo upload
const validateVimeoUpload = [
  body('videoSize')
    .isInt({ min: 1, max: 5368709120 }) // Max 5GB
    .withMessage('Video size must be between 1 byte and 5GB'),
  
  body('videoName')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Video name must be between 1 and 100 characters'),
  
  body('videoDescription')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Video description must not exceed 500 characters'),
  
  body('chapterId')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Chapter ID must be a positive integer'),
  
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

// Create Vimeo upload ticket (admin/teacher only)
router.post('/vimeo/create-upload', authenticateToken, requireRole(['admin', 'teacher']), validateVimeoUpload, async (req, res) => {
  try {
    const { 
      videoSize, 
      videoName = 'New Course Video', 
      videoDescription = '',
      chapterId 
    } = req.body;

    // Validate Vimeo credentials
    if (!process.env.VIMEO_CLIENT_ID || !process.env.VIMEO_CLIENT_SECRET || !process.env.VIMEO_ACCESS_TOKEN) {
      logger.error('Vimeo credentials not configured', { 
        userId: req.user.id,
        ip: req.ip
      });
      return res.status(500).json({ 
        error: 'Video upload service not configured',
        code: 'SERVICE_NOT_CONFIGURED'
      });
    }

    // Create upload request
    const uploadRequest = {
      method: 'POST',
      path: '/me/videos',
      query: {
        upload: {
          approach: 'tus',
          size: videoSize,
        },
        name: videoName,
        description: videoDescription,
        privacy: { 
          view: 'disable', // Disable viewing until explicitly enabled
          embed: 'private',
          download: false
        },
        embed: {
          buttons: {
            like: false,
            watchlater: false,
            share: false,
            embed: false,
            hd: true,
            fullscreen: true,
            scaling: true
          },
          logos: {
            vimeo: false
          },
          title: {
            name: 'show',
            owner: 'hide',
            portrait: 'hide'
          }
        }
      },
    };

    // Make request to Vimeo API
    vimeoClient.request(uploadRequest, (error, body, statusCode, headers) => {
      if (error) {
        logger.error('Vimeo upload ticket error', { 
          error: error.message,
          statusCode,
          userId: req.user.id,
          videoSize,
          ip: req.ip
        });
        
        return res.status(500).json({ 
          error: 'Failed to create upload ticket',
          code: 'VIMEO_ERROR',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
      }

      const uploadLink = body.upload && body.upload.upload_link;
      const videoUri = body.uri;
      
      if (!uploadLink || !videoUri) {
        logger.error('Invalid Vimeo response', { 
          body,
          userId: req.user.id,
          ip: req.ip
        });
        
        return res.status(500).json({ 
          error: 'Invalid response from video service',
          code: 'INVALID_RESPONSE'
        });
      }

      logger.info('Vimeo upload ticket created', { 
        videoUri,
        videoSize,
        userId: req.user.id,
        chapterId,
        ip: req.ip
      });

      res.json({
        message: 'Upload ticket created successfully',
        upload_link: uploadLink,
        video_uri: videoUri,
        video_id: videoUri.split('/').pop(),
        expires_in: '24h' // TUS upload links expire in 24 hours
      });
    });

  } catch (error) {
    logger.error('Create upload ticket error', { 
      error: error.message,
      stack: error.stack,
      userId: req.user?.id,
      ip: req.ip
    });
    
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Update video privacy settings (admin/teacher only)
router.patch('/vimeo/:videoId/privacy', authenticateToken, requireRole(['admin', 'teacher']), [
  body('view')
    .isIn(['anybody', 'nobody', 'contacts', 'password', 'users', 'disable'])
    .withMessage('Invalid view privacy setting'),
  
  body('embed')
    .optional()
    .isIn(['public', 'private'])
    .withMessage('Invalid embed privacy setting'),
  
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
], (req, res) => {
  try {
    const { videoId } = req.params;
    const { view, embed = 'private' } = req.body;

    const updateRequest = {
      method: 'PATCH',
      path: `/videos/${videoId}`,
      query: {
        privacy: {
          view,
          embed
        }
      }
    };

    vimeoClient.request(updateRequest, (error, body, statusCode) => {
      if (error) {
        logger.error('Vimeo privacy update error', { 
          error: error.message,
          videoId,
          statusCode,
          userId: req.user.id,
          ip: req.ip
        });
        
        if (statusCode === 404) {
          return res.status(404).json({ 
            error: 'Video not found',
            code: 'VIDEO_NOT_FOUND'
          });
        }
        
        return res.status(500).json({ 
          error: 'Failed to update video privacy',
          code: 'VIMEO_ERROR'
        });
      }

      logger.info('Video privacy updated', { 
        videoId,
        view,
        embed,
        userId: req.user.id,
        ip: req.ip
      });

      res.json({
        message: 'Video privacy updated successfully',
        video_id: videoId,
        privacy: { view, embed }
      });
    });

  } catch (error) {
    logger.error('Update video privacy error', { 
      error: error.message,
      videoId: req.params.videoId,
      userId: req.user?.id,
      ip: req.ip
    });
    
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Get video information (admin/teacher only)
router.get('/vimeo/:videoId', authenticateToken, requireRole(['admin', 'teacher']), (req, res) => {
  try {
    const { videoId } = req.params;

    const getRequest = {
      method: 'GET',
      path: `/videos/${videoId}`,
      query: {
        fields: 'uri,name,description,duration,width,height,created_time,modified_time,status,privacy,embed,files'
      }
    };

    vimeoClient.request(getRequest, (error, body, statusCode) => {
      if (error) {
        logger.error('Vimeo get video error', { 
          error: error.message,
          videoId,
          statusCode,
          userId: req.user.id,
          ip: req.ip
        });
        
        if (statusCode === 404) {
          return res.status(404).json({ 
            error: 'Video not found',
            code: 'VIDEO_NOT_FOUND'
          });
        }
        
        return res.status(500).json({ 
          error: 'Failed to get video information',
          code: 'VIMEO_ERROR'
        });
      }

      res.json({
        video: {
          id: videoId,
          uri: body.uri,
          name: body.name,
          description: body.description,
          duration: body.duration,
          dimensions: {
            width: body.width,
            height: body.height
          },
          created_time: body.created_time,
          modified_time: body.modified_time,
          status: body.status,
          privacy: body.privacy,
          embed_url: `https://player.vimeo.com/video/${videoId}`,
          is_ready: body.status === 'available'
        }
      });
    });

  } catch (error) {
    logger.error('Get video info error', { 
      error: error.message,
      videoId: req.params.videoId,
      userId: req.user?.id,
      ip: req.ip
    });
    
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Delete video (admin only)
router.delete('/vimeo/:videoId', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    const { videoId } = req.params;

    const deleteRequest = {
      method: 'DELETE',
      path: `/videos/${videoId}`
    };

    vimeoClient.request(deleteRequest, (error, body, statusCode) => {
      if (error) {
        logger.error('Vimeo delete video error', { 
          error: error.message,
          videoId,
          statusCode,
          userId: req.user.id,
          ip: req.ip
        });
        
        if (statusCode === 404) {
          return res.status(404).json({ 
            error: 'Video not found',
            code: 'VIDEO_NOT_FOUND'
          });
        }
        
        return res.status(500).json({ 
          error: 'Failed to delete video',
          code: 'VIMEO_ERROR'
        });
      }

      logger.info('Video deleted', { 
        videoId,
        deletedBy: req.user.id,
        ip: req.ip
      });

      res.json({
        message: 'Video deleted successfully',
        video_id: videoId
      });
    });

  } catch (error) {
    logger.error('Delete video error', { 
      error: error.message,
      videoId: req.params.videoId,
      userId: req.user?.id,
      ip: req.ip
    });
    
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Get upload statistics (admin only)
router.get('/stats/overview', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    // This would typically query a database for upload statistics
    // For now, return mock data
    const stats = {
      total_uploads: 0,
      total_size_gb: 0,
      uploads_this_month: 0,
      average_upload_size_mb: 0,
      most_active_uploaders: []
    };

    res.json({ stats });

  } catch (error) {
    logger.error('Get upload stats error', { 
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

