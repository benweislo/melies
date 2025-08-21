// In-memory user storage (replace with database in production)
// Passwords are hashed with bcrypt
let users = [
  {
    id: 1,
    username: 'ben.w',
    email: 'ben.w',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'admin',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
  },
  {
    id: 2,
    username: 'nathan.w',
    email: 'nathan.w',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'student',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true,
    sessionsTotal: 12,
    sessionsCompleted: 3,
    sessions: [
      { title: 'Session 1', date: '2025-01-12', completed: true },
      { title: 'Session 2', date: '2025-01-19', completed: true },
      { title: 'Session 3', date: '2025-01-26', completed: true },
      { title: 'Session 4', date: '2025-02-02', completed: false },
      { title: 'Session 5', date: '2025-02-09', completed: false },
      { title: 'Session 6', date: '2025-02-16', completed: false },
      { title: 'Session 7', date: '2025-02-23', completed: false },
      { title: 'Session 8', date: '2025-03-02', completed: false },
      { title: 'Session 9', date: '2025-03-09', completed: false },
      { title: 'Session 10', date: '2025-03-16', completed: false },
      { title: 'Session 11', date: '2025-03-23', completed: false },
      { title: 'Session 12', date: '2025-03-30', completed: false }
    ]
  },
  {
    id: 3,
    username: 'patrick.w',
    email: 'patrick.w',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'teacher',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true,
    students: ['nathan.w', 'student1']
  },
  {
    id: 4,
    username: 'teacher1',
    email: 'teacher1',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'teacher',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
  },
  {
    id: 5,
    username: 'student1',
    email: 'student1',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'student',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true,
    sessionsTotal: 12,
    sessionsCompleted: 5,
    sessions: [
      { title: 'Session 1', date: '2025-01-15', completed: true },
      { title: 'Session 2', date: '2025-01-22', completed: true },
      { title: 'Session 3', date: '2025-01-29', completed: true },
      { title: 'Session 4', date: '2025-02-05', completed: true },
      { title: 'Session 5', date: '2025-02-12', completed: true },
      { title: 'Session 6', date: '2025-02-19', completed: false },
      { title: 'Session 7', date: '2025-02-26', completed: false },
      { title: 'Session 8', date: '2025-03-05', completed: false },
      { title: 'Session 9', date: '2025-03-12', completed: false },
      { title: 'Session 10', date: '2025-03-19', completed: false },
      { title: 'Session 11', date: '2025-03-26', completed: false },
      { title: 'Session 12', date: '2025-04-02', completed: false }
    ]
  }
];

const getUsersData = () => users;
const setUsersData = (newUsers) => { users = newUsers; };

module.exports = {
  getUsersData,
  setUsersData
};
