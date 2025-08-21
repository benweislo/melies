// In-memory session storage, consistent with users.js
// This will be replaced by a database in a real application.

let sessions = [
  // Sessions for patrick.w (mentorId: 3)
  {
    id: 1,
    mentorId: 3,
    studentId: 2, // nathan.w
    title: "Animation Principles Review",
    description: "Reviewing the 12 principles of animation.",
    date: "2025-09-18",
    startTime: "10:00",
    endTime: "11:00",
    status: "planned",
    notes: "Student should prepare questions about squash and stretch.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    mentorId: 3,
    studentId: 2, // nathan.w
    title: "Project Feedback",
    description: "Feedback session on the walk cycle project.",
    date: "2025-09-25",
    startTime: "10:00",
    endTime: "10:30",
    status: "planned",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    mentorId: 3,
    studentId: 5, // student1
    title: "Character Design Intro",
    description: "Initial discussion about character design concepts.",
    date: "2025-09-20",
    startTime: "14:00",
    endTime: "15:00",
    status: "done",
    notes: "Student has some great ideas for their character.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Sessions for teacher1 (mentorId: 4)
  {
    id: 4,
    mentorId: 4,
    studentId: 5, // student1
    title: "Software Tools Q&A",
    description: "Answering questions about Maya and Blender.",
    date: "2025-09-22",
    startTime: "11:00",
    endTime: "11:45",
    status: "planned",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    mentorId: 4,
    studentId: 5, // student1
    title: "Storyboarding Review",
    description: "Reviewing the first draft of the storyboard.",
    date: "2025-09-29",
    startTime: "11:00",
    endTime: "12:00",
    status: "canceled",
    notes: "Student was sick.",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
    {
    id: 6,
    mentorId: 3,
    studentId: 2, // nathan.w
    title: "Follow-up on Walk Cycle",
    description: "Checking progress on the walk cycle project.",
    date: "2025-10-02",
    startTime: "10:00",
    endTime: "10:30",
    status: "planned",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const getSessionsData = () => sessions;
const setSessionsData = (newSessions) => { sessions = newSessions; };

module.exports = {
  getSessionsData,
  setSessionsData
};
