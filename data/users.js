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
    isActive: true
  },
  {
    id: 3,
    username: 'patrick.w',
    email: 'patrick.w',
    password: '$2a$12$BDmszBInHeXyu9f1WbOSwe01N5dM0vv.y5SpYpGRcifgs/54HKspi', // Secret123
    role: 'teacher',
    createdAt: new Date().toISOString(),
    lastLogin: null,
    isActive: true
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
    isActive: true
  }
];

const getUsersData = () => users;
const setUsersData = (newUsers) => { users = newUsers; };

module.exports = {
  getUsersData,
  setUsersData
};
