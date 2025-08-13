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

const getUsersData = () => users;
const setUsersData = (newUsers) => { users = newUsers; };

module.exports = {
  getUsersData,
  setUsersData
};
