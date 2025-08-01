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

// In-memory events storage (replace with database in production)
let events = [
  {
    id: 1,
    title: "Cours d'Animation 2D",
    description: "Introduction aux techniques d'animation 2D traditionnelle",
    start: "2024-02-15T09:00:00.000Z",
    end: "2024-02-15T11:00:00.000Z",
    allDay: false,
    color: "#4F2A91",
    createdBy: 2, // teacher1
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    attendees: [3], // student1
    location: "Salle A101",
    type: "course",
    isRecurring: false
  },
  {
    id: 2,
    title: "Séance de Mentorat",
    description: "Session individuelle de mentorat pour le projet final",
    start: "2024-02-16T14:00:00.000Z",
    end: "2024-02-16T15:00:00.000Z",
    allDay: false,
    color: "#E4E0EC",
    createdBy: 2, // teacher1
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    attendees: [3], // student1
    location: "Bureau B205",
    type: "mentoring",
    isRecurring: false
  }
];

// Validation middleware for events
const validateEvent = [
  body('title')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Event title must be between 3 and 100 characters'),
  
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
  
  body('start')
    .isISO8601()
    .withMessage('Start date must be a valid ISO 8601 date'),
  
  body('end')
    .optional()
    .isISO8601()
    .withMessage('End date must be a valid ISO 8601 date'),
  
  body('allDay')
    .optional()
    .isBoolean()
    .withMessage('allDay must be a boolean'),
  
  body('color')
    .optional()
    .matches(/^#[0-9A-F]{6}$/i)
    .withMessage('Color must be a valid hex color code'),
  
  body('location')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Location must not exceed 100 characters'),
  
  body('type')
    .optional()
    .isIn(['course', 'mentoring', 'exam', 'meeting', 'other'])
    .withMessage('Type must be one of: course, mentoring, exam, meeting, other'),
  
  body('attendees')
    .optional()
    .isArray()
    .withMessage('Attendees must be an array of user IDs'),
  
  body('attendees.*')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Each attendee must be a valid user ID'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }

    // Validate end date is after start date
    if (req.body.end && req.body.start) {
      const startDate = new Date(req.body.start);
      const endDate = new Date(req.body.end);
      
      if (endDate <= startDate) {
        return res.status(400).json({
          error: 'End date must be after start date'
        });
      }
    }

    next();
  }
];

// Get all events (filtered by user role)
router.get('/', authenticateToken, (req, res) => {
  try {
    const { start, end, type } = req.query;
    const userId = req.user.id;
    const userRole = req.user.role;
    
    let filteredEvents = events;

    // Filter events based on user role
    if (userRole === 'student') {
      // Students can only see events they're attending or public events
      filteredEvents = events.filter(event => 
        event.attendees.includes(userId) || 
        !event.attendees.length // Public events
      );
    } else if (userRole === 'teacher') {
      // Teachers can see events they created or are attending
      filteredEvents = events.filter(event => 
        event.createdBy === userId || 
        event.attendees.includes(userId)
      );
    }
    // Admins can see all events

    // Apply date range filter
    if (start || end) {
      filteredEvents = filteredEvents.filter(event => {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end || event.start);
        
        if (start && end) {
          const rangeStart = new Date(start);
          const rangeEnd = new Date(end);
          return eventStart <= rangeEnd && eventEnd >= rangeStart;
        } else if (start) {
          const rangeStart = new Date(start);
          return eventEnd >= rangeStart;
        } else if (end) {
          const rangeEnd = new Date(end);
          return eventStart <= rangeEnd;
        }
        
        return true;
      });
    }

    // Apply type filter
    if (type) {
      filteredEvents = filteredEvents.filter(event => event.type === type);
    }

    res.json({
      events: filteredEvents,
      total: filteredEvents.length
    });

  } catch (error) {
    logger.error('Get events error', { 
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

// Get event by ID
router.get('/:id', authenticateToken, (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const userId = req.user.id;
    const userRole = req.user.role;
    
    const event = events.find(e => e.id === eventId);
    
    if (!event) {
      return res.status(404).json({ 
        error: 'Event not found',
        code: 'EVENT_NOT_FOUND'
      });
    }

    // Check access permissions
    const canAccess = userRole === 'admin' || 
                     event.createdBy === userId || 
                     event.attendees.includes(userId) ||
                     !event.attendees.length; // Public event

    if (!canAccess) {
      return res.status(403).json({ 
        error: 'Access denied to this event',
        code: 'ACCESS_DENIED'
      });
    }

    res.json({ event });

  } catch (error) {
    logger.error('Get event error', { 
      error: error.message,
      eventId: req.params.id,
      userId: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Create new event (teacher/admin only)
router.post('/', authenticateToken, requireRole(['admin', 'teacher']), validateEvent, (req, res) => {
  try {
    const {
      title,
      description,
      start,
      end,
      allDay = false,
      color = '#4F2A91',
      location,
      type = 'other',
      attendees = [],
      isRecurring = false
    } = req.body;

    const newEvent = {
      id: Math.max(...events.map(e => e.id), 0) + 1,
      title,
      description: description || '',
      start,
      end: end || start,
      allDay,
      color,
      location: location || '',
      type,
      attendees,
      isRecurring,
      createdBy: req.user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    events.push(newEvent);

    logger.info('Event created', { 
      eventId: newEvent.id,
      eventTitle: newEvent.title,
      createdBy: req.user.id,
      attendees: newEvent.attendees,
      ip: req.ip
    });

    res.status(201).json({
      message: 'Event created successfully',
      event: newEvent
    });

  } catch (error) {
    logger.error('Create event error', { 
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

// Update event (creator/admin only)
router.put('/:id', authenticateToken, validateEvent, (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const userId = req.user.id;
    const userRole = req.user.role;
    
    const eventIndex = events.findIndex(e => e.id === eventId);
    
    if (eventIndex === -1) {
      return res.status(404).json({ 
        error: 'Event not found',
        code: 'EVENT_NOT_FOUND'
      });
    }

    const existingEvent = events[eventIndex];
    
    // Only creator or admin can update
    if (userRole !== 'admin' && existingEvent.createdBy !== userId) {
      return res.status(403).json({ 
        error: 'You can only update events you created',
        code: 'ACCESS_DENIED'
      });
    }

    const {
      title,
      description,
      start,
      end,
      allDay,
      color,
      location,
      type,
      attendees,
      isRecurring
    } = req.body;

    // Update event
    const updatedEvent = {
      ...existingEvent,
      title,
      description: description !== undefined ? description : existingEvent.description,
      start,
      end: end !== undefined ? end : start,
      allDay: allDay !== undefined ? allDay : existingEvent.allDay,
      color: color || existingEvent.color,
      location: location !== undefined ? location : existingEvent.location,
      type: type || existingEvent.type,
      attendees: attendees !== undefined ? attendees : existingEvent.attendees,
      isRecurring: isRecurring !== undefined ? isRecurring : existingEvent.isRecurring,
      updatedAt: new Date().toISOString()
    };

    events[eventIndex] = updatedEvent;

    logger.info('Event updated', { 
      eventId: updatedEvent.id,
      eventTitle: updatedEvent.title,
      updatedBy: req.user.id,
      ip: req.ip
    });

    res.json({
      message: 'Event updated successfully',
      event: updatedEvent
    });

  } catch (error) {
    logger.error('Update event error', { 
      error: error.message,
      eventId: req.params.id,
      updatedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Delete event (creator/admin only)
router.delete('/:id', authenticateToken, (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const userId = req.user.id;
    const userRole = req.user.role;
    
    const eventIndex = events.findIndex(e => e.id === eventId);
    
    if (eventIndex === -1) {
      return res.status(404).json({ 
        error: 'Event not found',
        code: 'EVENT_NOT_FOUND'
      });
    }

    const existingEvent = events[eventIndex];
    
    // Only creator or admin can delete
    if (userRole !== 'admin' && existingEvent.createdBy !== userId) {
      return res.status(403).json({ 
        error: 'You can only delete events you created',
        code: 'ACCESS_DENIED'
      });
    }

    const deletedEvent = events[eventIndex];
    events.splice(eventIndex, 1);

    logger.info('Event deleted', { 
      eventId: deletedEvent.id,
      eventTitle: deletedEvent.title,
      deletedBy: req.user.id,
      ip: req.ip
    });

    res.json({
      message: 'Event deleted successfully',
      code: 'EVENT_DELETED'
    });

  } catch (error) {
    logger.error('Delete event error', { 
      error: error.message,
      eventId: req.params.id,
      deletedBy: req.user?.id,
      ip: req.ip
    });
    res.status(500).json({ 
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
});

// Get events statistics (admin only)
router.get('/stats/overview', authenticateToken, requireRole(['admin']), (req, res) => {
  try {
    const now = new Date();
    const weekFromNow = new Date();
    weekFromNow.setDate(now.getDate() + 7);
    
    const stats = {
      total: events.length,
      byType: {
        course: events.filter(e => e.type === 'course').length,
        mentoring: events.filter(e => e.type === 'mentoring').length,
        exam: events.filter(e => e.type === 'exam').length,
        meeting: events.filter(e => e.type === 'meeting').length,
        other: events.filter(e => e.type === 'other').length
      },
      upcoming: events.filter(e => new Date(e.start) > now).length,
      thisWeek: events.filter(e => {
        const eventDate = new Date(e.start);
        return eventDate >= now && eventDate <= weekFromNow;
      }).length,
      recurring: events.filter(e => e.isRecurring).length
    };

    res.json({ stats });

  } catch (error) {
    logger.error('Get event stats error', { 
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

// Export events data for other routes (temporary)
router.getEventsData = () => events;
router.setEventsData = (newEvents) => { events = newEvents; };

module.exports = router;

