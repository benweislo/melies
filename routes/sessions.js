const express = require('express');
const { body, validationResult } = require('express-validator');
const { authenticateToken } = require('../middleware/auth');
const { getSessionsData, setSessionsData } = require('../data/sessions');
const { getUsersData } = require('../data/users');

const router = express.Router();

// --- Validation Middleware ---
const validateSession = [
  body('mentorId').isInt().toInt(),
  body('studentId').isInt().toInt(),
  body('title').trim().notEmpty().withMessage('Title is required.'),
  body('date').isISO8601().withMessage('Date must be in YYYY-MM-DD format.'),
  body('startTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Start time must be in HH:mm format.'),
  body('endTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('End time must be in HH:mm format.'),
  body('status').isIn(['planned', 'done', 'canceled']).withMessage('Invalid status.'),
  body('notes').optional().trim().isLength({ max: 2000 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Custom validation for endTime > startTime
    if (req.body.endTime <= req.body.startTime) {
      return res.status(400).json({ errors: [{ msg: 'End time must be after start time.' }] });
    }
    next();
  }
];

// --- Helper Functions ---
function canMutateSession(user, session) {
    if (user.role === 'admin') {
        return true;
    }
    if (user.role === 'teacher' && session.mentorId === user.id) {
        return true;
    }
    return false;
}

// --- API Endpoints ---

// GET /api/sessions
router.get('/', authenticateToken, (req, res) => {
    let sessions = getSessionsData();
    const { start, end, mentorId, studentId, q } = req.query;
    const user = req.user;

    // Role-based scoping
    if (user.role === 'student') {
        sessions = sessions.filter(s => s.studentId === user.id);
    } else if (user.role === 'teacher') {
        sessions = sessions.filter(s => s.mentorId === user.id);
    } else if (user.role === 'admin') {
        if (mentorId) {
            sessions = sessions.filter(s => s.mentorId === parseInt(mentorId, 10));
        }
        if (studentId) {
            sessions = sessions.filter(s => s.studentId === parseInt(studentId, 10));
        }
    }

    // Other filters
    if (start) {
        sessions = sessions.filter(s => s.date >= start);
    }
    if (end) {
        sessions = sessions.filter(s => s.date <= end);
    }
    if (q) {
        const query = q.toLowerCase();
        sessions = sessions.filter(s =>
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query)
        );
    }

    res.json({ sessions });
});

// POST /api/sessions
router.post('/', authenticateToken, validateSession, (req, res) => {
    const user = req.user;
    const { mentorId, studentId, title, description, date, startTime, endTime, status, notes } = req.body;

    // Authorization: Admin can create any session, Teacher can only create for themselves.
    if (user.role === 'teacher' && mentorId !== user.id) {
        return res.status(403).json({ error: "Teachers can only create sessions for themselves." });
    }
     if (user.role === 'student') {
        return res.status(403).json({ error: "Students cannot create sessions." });
    }

    const allSessions = getSessionsData();
    const newSession = {
        id: Math.max(0, ...allSessions.map(s => s.id)) + 1,
        mentorId,
        studentId,
        title,
        description: description || "",
        date,
        startTime,
        endTime,
        status,
        notes: notes || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    allSessions.push(newSession);
    setSessionsData(allSessions);

    res.status(201).json({ session: newSession });
});

// PATCH /api/sessions/:id
router.patch('/:id', authenticateToken, validateSession, (req, res) => {
    const sessionId = parseInt(req.params.id, 10);
    const user = req.user;
    const allSessions = getSessionsData();
    const sessionIndex = allSessions.findIndex(s => s.id === sessionId);

    if (sessionIndex === -1) {
        return res.status(404).json({ error: "Session not found." });
    }

    // Authorization
    if (!canMutateSession(user, allSessions[sessionIndex])) {
        return res.status(403).json({ error: "You do not have permission to edit this session." });
    }

    const updatedSession = { ...allSessions[sessionIndex], ...req.body, updatedAt: new Date().toISOString() };
    allSessions[sessionIndex] = updatedSession;
    setSessionsData(allSessions);

    res.json({ session: updatedSession });
});

// DELETE /api/sessions/:id
router.delete('/:id', authenticateToken, (req, res) => {
    const sessionId = parseInt(req.params.id, 10);
    const user = req.user;
    let allSessions = getSessionsData();
    const session = allSessions.find(s => s.id === sessionId);

    if (!session) {
        return res.status(404).json({ error: "Session not found." });
    }

    // Authorization
    if (!canMutateSession(user, session)) {
        return res.status(403).json({ error: "You do not have permission to delete this session." });
    }

    const newSessions = allSessions.filter(s => s.id !== sessionId);
    setSessionsData(newSessions);

    res.json({ success: true, message: "Session deleted successfully." });
});

module.exports = router;
