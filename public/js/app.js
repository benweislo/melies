import { dataManager } from './data.js';
import { authManager } from './auth.js';

// --- Translations ---
const translations = {
    fr: {
        homeTitle: "École Méliès en Ligne",
        homeSubtitle: "Un monde de créativité vous attend",
        homeDescription: "Découvrez nos cours d'animation et développez votre talent avec des mentors de renommée.",
        cardCoursesTitle: "Cours en ligne",
        cardCoursesDesc: "Accédez à des cours de qualité, guidés par des professionnels de l'industrie.",
        cardCoursesLink: "En savoir plus",
        cardMentoringTitle: "Mentorat Premium",
        cardMentoringDesc: "Progressez avec un mentor qui vous accompagnera tout au long de votre parcours.",
        cardMentoringLink: "En savoir plus",
        loginBtn: "Connexion",
        applyBtn: "Connexion",
        askAI: "Demander à l'IA",
        askAIButton: "✨ Demander à l'IA",
        coursesNav: "Cours",
        mentoringNav: "Mentorat",
        adminNav: "Admin",
        mentoringTitle: "Progression Mentorat",
        addModule: "Ajouter un Module",
        adminTitle: "Gestion des Modules",
        pdfDownload: "Télécharger le PDF",
        askAIPrompt: "Posez votre question...",
        loginTitle: "Connexion",
        loginEmail: "Nom d'utilisateur",
        loginPassword: "Mot de passe",
        loginSubmit: "Se connecter",
        invalidCredentials: "Identifiants invalides",
        studentSessions: (completed, total) => `${completed} séances complétées sur ${total}`,
        sessionCompleted: "terminée",
        sessionPending: "en attente",
        close: "Fermer",
        send: "Envoyer",
        languageFrench: "Français",
        languageEnglish: "English",
        languageSpanish: "Español",
        aiAssistantTitle: "Assistant IA Méliès",
        aiWelcome: "Bienvenue! Posez votre question sur le chapitre et je vous aiderai.",
        userLabel: "Vous:",
        aiLabel: "IA:",
        aiThinking: "L'IA réfléchit...",
        aiError: "Désolé, une erreur est survenue. Veuillez réessayer.",
        aiGenericResponsePrefix: "Merci pour votre question sur",
        aiGenericResponseSuffix: "Nous traiterons bientôt de cette question. Continuez à explorer le chapitre et notez vos observations!",
        modulePrefix: "Module",
        newModuleNamePrompt: "Nom du nouveau module :",
        renameModulePrompt: "Nouveau nom pour ce module :",
        deleteConfirm: "Supprimer cet élément?",
        newChapterNamePrompt: "Nom du nouveau chapitre :",
        uploadVideo: "Uploader vidéo",
        uploadPdf: "Uploader PDF",
        userManagementTitle: "Gestion des utilisateurs",
        addUser: "Ajouter un utilisateur",
        edit: "Éditer",
        delete: "Supprimer",
        changePassword: "Changer le mot de passe",
        userEmailPrompt: "Email de l'utilisateur:",
        userPasswordPrompt: "Mot de passe de l'utilisateur:",
        userRolePrompt: "Rôle de l'utilisateur (student/teacher/admin):",
        newPasswordPrompt: "Nouveau mot de passe:",
        cannotDeleteAdmin: "Vous ne pouvez pas supprimer l'admin principal.",
        confirmDeleteUser: "Supprimer cet utilisateur?",
        userAdded: "Utilisateur ajouté.",
        passwordUpdated: "Mot de passe mis à jour.",
        selectVideoChapterPrompt: "Sélectionnez un chapitre pour uploader la vidéo:\n",
        enterVideoUrlPrompt: "Entrez l’URL de la vidéo:",
        videoUpdated: "Vidéo mise à jour.",
        selectPdfChapterPrompt: "Sélectionnez un chapitre pour uploader le PDF:\n",
        enterPdfUrlPrompt: "Entrez l’URL du PDF:",
        enterPdfDescPrompt: "Entrez la description du PDF:",
        pdfUpdated: "PDF mis à jour.",
        pdfUnavailable: "PDF non disponible",
        noChapterSelected: "Aucun chapitre sélectionné",
        upload: "Téléverser",
        editSessions: "Modifier les séances",
        totalSessionsPrompt: "Nombre total de séances:",
        completedSessionsPrompt: "Nombre de séances complétées:",
        sessionsUpdated: "Séances mises à jour.",
        logout: "Se déconnecter",
        changeAccount: "Changer de compte",
        noStudents: "Aucun étudiant associé.",
        noTeachers: "Aucun enseignant trouvé.",
        enterDatesPrompt: "Entrez les dates des séances complétées (séparées par des virgules):",
        agendaNav: "Agenda",
        agendaTitle: "Agenda",
        noEvents: "Aucun événement prévu.",
        addEvent: "Ajouter un événement",
        editEvent: "Éditer",
        deleteEvent: "Supprimer",
        eventDatePrompt: "Date de l'événement (YYYY‑MM‑DD) :",
        eventTitlePrompt: "Titre de l'événement :",
        eventDescPrompt: "Description de l'événement :",
        eventAdded: "Événement ajouté.",
        eventUpdated: "Événement mis à jour.",
        eventDeleted: "Événement supprimé.",
        createEvent: "Créer",
        today: "Aujourd'hui",
        dayView: "Jour",
        weekView: "Semaine",
        monthView: "Mois",
        listView: "Planning",
        searchPlaceholder: "Rechercher…",
        myCalendars: "Mes agendas",
        defaultCalendar: "Agenda Méliès",
        settings: "Paramètres"
    },
    en: {
        homeTitle: "Méliès Online School",
        homeSubtitle: "A world of creativity awaits you",
        homeDescription: "Explore our animation courses and develop your talent with renowned mentors.",
        cardCoursesTitle: "Online Courses",
        cardCoursesDesc: "Access high‑quality courses guided by industry professionals.",
        cardCoursesLink: "Learn more",
        cardMentoringTitle: "Premium Mentoring",
        cardMentoringDesc: "Advance with a mentor who will accompany you throughout your journey.",
        cardMentoringLink: "Learn more",
        loginBtn: "Login",
        applyBtn: "Login",
        askAI: "Ask AI",
        askAIButton: "✨ Ask AI",
        coursesNav: "Courses",
        mentoringNav: "Mentoring",
        adminNav: "Admin",
        mentoringTitle: "Mentoring Progress",
        addModule: "Add Module",
        adminTitle: "Module Management",
        pdfDownload: "Download PDF",
        askAIPrompt: "Ask your question...",
        loginTitle: "Login",
        loginEmail: "Username",
        loginPassword: "Password",
        loginSubmit: "Log In",
        invalidCredentials: "Invalid credentials",
        studentSessions: (completed, total) => `${completed} sessions completed out of ${total}`,
        sessionCompleted: "completed",
        sessionPending: "pending",
        close: "Close",
        send: "Send",
        languageFrench: "Français",
        languageEnglish: "English",
        languageSpanish: "Español",
        aiAssistantTitle: "Méliès AI Assistant",
        aiWelcome: "Welcome! Ask your question about the chapter and I'll help you.",
        userLabel: "You:",
        aiLabel: "AI:",
        aiThinking: "AI is thinking...",
        aiError: "Sorry, an error occurred. Please try again.",
        aiGenericResponsePrefix: "Thank you for your question about",
        aiGenericResponseSuffix: "We will address this soon. Keep exploring the chapter and note your observations!",
        modulePrefix: "Module",
        newModuleNamePrompt: "Name of the new module:",
        renameModulePrompt: "New name for this module:",
        deleteConfirm: "Delete this item?",
        newChapterNamePrompt: "Name of the new chapter:",
        uploadVideo: "Upload Video",
        uploadPdf: "Upload PDF",
        userManagementTitle: "User Management",
        addUser: "Add User",
        edit: "Edit",
        delete: "Delete",
        changePassword: "Change Password",
        userEmailPrompt: "User's email:",
        userPasswordPrompt: "User's password:",
        userRolePrompt: "User role (student/teacher/admin):",
        newPasswordPrompt: "New password:",
        cannotDeleteAdmin: "You cannot delete the main admin.",
        confirmDeleteUser: "Delete this user?",
        userAdded: "User added.",
        passwordUpdated: "Password updated.",
        selectVideoChapterPrompt: "Select a chapter to upload the video:\n",
        enterVideoUrlPrompt: "Enter video URL:",
        videoUpdated: "Video updated.",
        selectPdfChapterPrompt: "Select a chapter to upload the PDF:\n",
        enterPdfUrlPrompt: "Enter PDF URL:",
        enterPdfDescPrompt: "Enter the PDF description:",
        pdfUpdated: "PDF updated.",
        pdfUnavailable: "PDF not available",
        noChapterSelected: "No chapter selected",
        upload: "Upload",
        editSessions: "Edit Sessions",
        totalSessionsPrompt: "Total sessions count:",
        completedSessionsPrompt: "Completed sessions count:",
        sessionsUpdated: "Sessions updated.",
        logout: "Log Out",
        changeAccount: "Switch Account",
        noStudents: "No students associated.",
        noTeachers: "No teachers found.",
        enterDatesPrompt: "Enter the dates of completed sessions (comma-separated):",
        agendaNav: "Agenda",
        agendaTitle: "Agenda",
        noEvents: "No events scheduled.",
        addEvent: "Add Event",
        editEvent: "Edit",
        deleteEvent: "Delete",
        eventDatePrompt: "Event date (YYYY‑MM‑DD):",
        eventTitlePrompt: "Event title:",
        eventDescPrompt: "Event description:",
        eventAdded: "Event added.",
        eventUpdated: "Event updated.",
        eventDeleted: "Event deleted.",
        createEvent: "Create",
        today: "Today",
        dayView: "Day",
        weekView: "Week",
        monthView: "Month",
        listView: "Schedule",
        searchPlaceholder: "Search…",
        myCalendars: "My calendars",
        defaultCalendar: "Méliès Calendar",
        settings: "Settings"
    },
    es: {
        homeTitle: "Escuela Méliès en Línea",
        homeSubtitle: "Un mundo de creatividad te espera",
        homeDescription: "Descubre nuestros cursos de animación y desarrolla tu talento con mentores de renombre.",
        cardCoursesTitle: "Cursos en línea",
        cardCoursesDesc: "Accede a cursos de alta calidad guiados por profesionales de la industria.",
        cardCoursesLink: "Saber más",
        cardMentoringTitle: "Mentoría Premium",
        cardMentoringDesc: "Avanza con un mentor que te acompañará a lo largo de tu recorrido.",
        cardMentoringLink: "Saber más",
        loginBtn: "Iniciar sesión",
        applyBtn: "Iniciar sesión",
        askAI: "Preguntar a la IA",
        askAIButton: "✨ Preguntar a la IA",
        coursesNav: "Cursos",
        mentoringNav: "Mentoría",
        adminNav: "Admin",
        mentoringTitle: "Progreso de Mentoría",
        addModule: "Agregar Módulo",
        adminTitle: "Gestión de Módulos",
        pdfDownload: "Descargar PDF",
        askAIPrompt: "Haz tu pregunta...",
        loginTitle: "Iniciar sesión",
        loginEmail: "Nombre de usuario",
        loginPassword: "Contraseña",
        loginSubmit: "Entrar",
        invalidCredentials: "Credenciales inválidas",
        studentSessions: (completed, total) => `${completed} sesiones completadas de ${total}`,
        sessionCompleted: "completada",
        sessionPending: "pendiente",
        close: "Cerrar",
        send: "Enviar",
        languageFrench: "Français",
        languageEnglish: "English",
        languageSpanish: "Español",
        aiAssistantTitle: "Asistente IA Méliès",
        aiWelcome: "¡Bienvenido! Haz tu pregunta sobre el capítulo y te ayudaré.",
        userLabel: "Tú:",
        aiLabel: "IA:",
        aiThinking: "La IA está pensando...",
        aiError: "Lo siento, ocurrió un error. Por favor, inténtalo de nuevo.",
        aiGenericResponsePrefix: "Gracias por tu pregunta sobre",
        aiGenericResponseSuffix: "Pronto abordaremos esta cuestión. ¡Continúa explorando el capítulo y toma nota de tus observaciones!",
        modulePrefix: "Módulo",
        newModuleNamePrompt: "Nombre del nuevo módulo:",
        renameModulePrompt: "Nuevo nombre para este módulo:",
        deleteConfirm: "¿Eliminar este elemento?",
        newChapterNamePrompt: "Nombre del nuevo capítulo:",
        uploadVideo: "Subir vídeo",
        uploadPdf: "Subir PDF",
        userManagementTitle: "Gestión de usuarios",
        addUser: "Agregar usuario",
        edit: "Editar",
        delete: "Eliminar",
        changePassword: "Cambiar contraseña",
        userEmailPrompt: "Correo del usuario:",
        userPasswordPrompt: "Contraseña del usuario:",
        userRolePrompt: "Rol del usuario (student/teacher/admin):",
        newPasswordPrompt: "Nueva contraseña:",
        cannotDeleteAdmin: "No puedes eliminar al administrador principal.",
        confirmDeleteUser: "¿Eliminar este usuario?",
        userAdded: "Usuario agregado.",
        passwordUpdated: "Contraseña actualizada.",
        selectVideoChapterPrompt: "Seleccione un capítulo para subir el vídeo:\n",
        enterVideoUrlPrompt: "Ingrese la URL del vídeo:",
        videoUpdated: "Vídeo actualizado.",
        selectPdfChapterPrompt: "Seleccione un capítulo para subir el PDF:\n",
        enterPdfUrlPrompt: "Ingrese la URL del PDF:",
        enterPdfDescPrompt: "Ingrese la descripción del PDF:",
        pdfUpdated: "PDF actualizado.",
        pdfUnavailable: "PDF no disponible",
        noChapterSelected: "Ningún capítulo seleccionado",
        upload: "Subir",
        editSessions: "Editar sesiones",
        totalSessionsPrompt: "Número total de sesiones:",
        completedSessionsPrompt: "Número de sesiones completadas:",
        sessionsUpdated: "Sesiones actualizadas.",
        logout: "Cerrar sesión",
        changeAccount: "Cambiar de cuenta",
        noStudents: "Ningún estudiante asociado.",
        noTeachers: "No se encontraron profesores.",
        enterDatesPrompt: "Introduzca las fechas de las sesiones completadas (separadas por comas):",
        agendaNav: "Agenda",
        agendaTitle: "Agenda",
        noEvents: "No hay eventos programados.",
        addEvent: "Agregar evento",
        editEvent: "Editar",
        deleteEvent: "Eliminar",
        eventDatePrompt: "Fecha del evento (AAAA‑MM‑DD):",
        eventTitlePrompt: "Título del evento:",
        eventDescPrompt: "Descripción del evento:",
        eventAdded: "Evento agregado.",
        eventUpdated: "Evento actualizado.",
        eventDeleted: "Evento eliminado.",
        createEvent: "Crear",
        today: "Hoy",
        dayView: "Día",
        weekView: "Semana",
        monthView: "Mes",
        listView: "Agenda",
        searchPlaceholder: "Buscar…",
        myCalendars: "Mis calendarios",
        defaultCalendar: "Calendario Méliès",
        settings: "Configuración"
    },
};

// --- Global State ---
const state = {
    currentLang: 'fr',
    activeView: 'home',
    activeModuleId: null,
    activeChapterId: null,
};

let calendarInstance = null;

// --- DOM Elements ---
const elements = {
    header: document.getElementById('header'),
    logo: document.querySelector('#header .logo'),
    homeView: document.getElementById('home-view'),
    coursesView: document.getElementById('courses-view'),
    mentoringView: document.getElementById('mentoring-view'),
    adminView: document.getElementById('admin-view'),
    agendaView: document.getElementById('agenda-view'),
    sidebar: document.getElementById('sidebar'),
    navCoursesBtn: document.getElementById('nav-courses'),
    navMentoringBtn: document.getElementById('nav-mentoring'),
    navAdminBtn: document.getElementById('nav-admin'),
    navAgendaBtn: document.getElementById('nav-agenda'),
    adminNavLi: document.getElementById('admin-nav-li'),
    applyBtn: document.getElementById('apply-btn'),
    homeLoginBtn: document.getElementById('home-login-btn'),
    authModal: document.getElementById('auth-modal'),
    authClose: document.getElementById('auth-close'),
    loginForm: document.getElementById('login-form'),

    chapterTitleEl: document.getElementById('chapter-title'),
    moduleNameEl: document.getElementById('module-name'),
    pdfSection: document.getElementById('pdf-section'),
    pdfDescEl: document.getElementById('pdf-desc'),
    downloadPdfBtn: document.getElementById('download-pdf-btn'),
    curriculumEl: document.getElementById('curriculum'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressText: document.getElementById('progress-text'),
    sessionsList: document.getElementById('sessions-list'),
    teacherMentorContainer: document.getElementById('teacher-mentor-container'),
    adminMentorContainer: document.getElementById('admin-mentor-container'),
    addModuleBtn: document.getElementById('add-module-btn'),
    moduleListEl: document.getElementById('module-list'),
    langFab: document.getElementById('lang-fab'),
    langSelector: document.getElementById('lang-selector'),
    langButtons: document.querySelectorAll('#lang-selector button'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    mobileMenuClose: document.getElementById('mobile-menu-close'),
    mobileNavCourses: document.getElementById('mobile-nav-courses'),
    mobileNavMentoring: document.getElementById('mobile-nav-mentoring'),
    mobileNavAdmin: document.getElementById('mobile-nav-admin'),
    mobileNavAgenda: document.getElementById('mobile-nav-agenda'),
    mobileAdminLi: document.getElementById('mobile-admin-li'),
    userManagementTitleEl: document.getElementById('user-management-title'),
    addUserBtn: document.getElementById('add-user-btn'),
    userListEl: document.getElementById('user-list'),
    adminUploadSectionEl: document.getElementById('admin-upload-section'),
    adminUploadVideoBtnEl: document.getElementById('admin-upload-video-btn'),
    adminUploadPdfBtnEl: document.getElementById('admin-upload-pdf-btn'),
    chapterDescEl: document.getElementById('chapter-description'),
    userInfoEl: document.getElementById('user-info'),
    userLabelEl: document.getElementById('user-label'),
    logoutBtn: document.getElementById('logout-btn'),
    changeAccountBtn: document.getElementById('change-account-btn'),
    createEventBtn: document.getElementById('create-event-btn'),
    calendarCurrentTitleEl: document.getElementById('calendar-current-title'),
    eventListEl: document.getElementById('event-list'),
    calendarEl: document.getElementById('calendar'),
};

// --- Helper Functions ---
function safeUpdate(id, property, value) {
    const element = document.getElementById(id);
    if (element) {
        if (property === 'textContent') {
            element.textContent = value;
        } else if (property === 'placeholder') {
            element.placeholder = value;
        } else if (property === 'innerHTML') {
            element.innerHTML = value;
        }
    }
}

function translate() {
    const t = translations[state.currentLang];

    const translationMap = {
        'home-title': { prop: 'textContent', key: 'homeTitle' },
        'home-subtitle': { prop: 'textContent', key: 'homeSubtitle' },
        'home-description': { prop: 'textContent', key: 'homeDescription' },
        'home-login-btn': { prop: 'textContent', key: 'loginBtn' },
        'card-courses-title': { prop: 'textContent', key: 'cardCoursesTitle' },
        'card-courses-desc': { prop: 'textContent', key: 'cardCoursesDesc' },
        'card-courses-link': { prop: 'textContent', key: 'cardCoursesLink' },
        'card-mentoring-title': { prop: 'textContent', key: 'cardMentoringTitle' },
        'card-mentoring-desc': { prop: 'textContent', key: 'cardMentoringDesc' },
        'card-mentoring-link': { prop: 'textContent', key: 'cardMentoringLink' },
        'apply-btn': { prop: 'textContent', key: 'applyBtn' },
        'nav-courses': { prop: 'textContent', key: 'coursesNav' },
        'nav-mentoring': { prop: 'textContent', key: 'mentoringNav' },
        'nav-admin': { prop: 'textContent', key: 'adminNav' },
        'nav-agenda': { prop: 'textContent', key: 'agendaNav' },
        'logout-btn': { prop: 'textContent', key: 'logout' },
        'change-account-btn': { prop: 'textContent', key: 'changeAccount' },
        'mobile-nav-courses': { prop: 'textContent', key: 'coursesNav' },
        'mobile-nav-mentoring': { prop: 'textContent', key: 'mentoringNav' },
        'mobile-nav-admin': { prop: 'textContent', key: 'adminNav' },
        'mobile-nav-agenda': { prop: 'textContent', key: 'agendaNav' },
        'auth-title': { prop: 'textContent', key: 'loginTitle' },

        'download-pdf-btn': { prop: 'textContent', key: 'pdfDownload' },

        'admin-upload-video-btn': { prop: 'textContent', key: 'uploadVideo' },
        'admin-upload-pdf-btn': { prop: 'textContent', key: 'uploadPdf' },
        'mentoring-title': { prop: 'textContent', key: 'mentoringTitle' },
        'agenda-title': { prop: 'textContent', key: 'agendaTitle' },
        'create-event-btn': { prop: 'textContent', key: 'createEvent' },
        'agenda-today-btn': { prop: 'textContent', key: 'today' },
        'agenda-day-btn': { prop: 'textContent', key: 'dayView' },
        'agenda-week-btn': { prop: 'textContent', key: 'weekView' },
        'agenda-month-btn': { prop: 'textContent', key: 'monthView' },
        'agenda-list-btn': { prop: 'textContent', key: 'listView' },
        'agenda-search': { prop: 'placeholder', key: 'searchPlaceholder' },
        'my-calendars-title': { prop: 'textContent', key: 'myCalendars' },
        'default-calendar-name': { prop: 'textContent', key: 'defaultCalendar' },
        'admin-title': { prop: 'textContent', key: 'adminTitle' },
        'add-module-btn': { prop: 'textContent', key: 'addModule' },
        'user-management-title': { prop: 'textContent', key: 'userManagementTitle' },
        'add-user-btn': { prop: 'textContent', key: 'addUser' },
    };

    for (const id in translationMap) {
        const { prop, key } = translationMap[id];
        if (t[key]) {
            safeUpdate(id, prop, t[key]);
        }
    }

    const emailLabel = elements.loginForm.querySelector('label[for="email"]');
    if (emailLabel) emailLabel.textContent = t.loginEmail;
    const pwdLabel = elements.loginForm.querySelector('label[for="password"]');
    if (pwdLabel) pwdLabel.textContent = t.loginPassword;
    const submitBtn = elements.loginForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.loginSubmit;



    elements.langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === 'fr') btn.textContent = t.languageFrench;
        if (lang === 'en') btn.textContent = t.languageEnglish;
        if (lang === 'es') btn.textContent = t.languageSpanish;
    });

    updateMentoring();
    buildCurriculum();
    buildAdminList();
    buildUserList();
    // Agenda is updated separately
}

function showModal(modal) {
    modal.classList.remove('hidden');
}

function hideModal(modal) {
    modal.classList.add('hidden');
}

function showView(name) {
    state.activeView = name;
    elements.homeView.classList.add('hidden');
    elements.coursesView.classList.add('hidden');
    elements.mentoringView.classList.add('hidden');
    elements.adminView.classList.add('hidden');
    if (elements.agendaView) elements.agendaView.classList.add('hidden');

    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));

    switch (name) {
        case 'home':
            elements.homeView.classList.remove('hidden');
            break;
        case 'courses':
            elements.coursesView.classList.remove('hidden');
            elements.navCoursesBtn.classList.add('active');
            break;
        case 'mentoring':
            elements.mentoringView.classList.remove('hidden');
            elements.navMentoringBtn.classList.add('active');
            break;
        case 'admin':
            elements.adminView.classList.remove('hidden');
            elements.navAdminBtn.classList.add('active');
            break;
        case 'agenda':
            elements.agendaView.classList.remove('hidden');
            elements.navAgendaBtn.classList.add('active');
            break;
    }
}

function updateAfterLogin() {
    const currentUser = authManager.getCurrentUser();
    if (currentUser) {
        if (elements.userInfoEl && elements.userLabelEl) {
            elements.userLabelEl.textContent = `${currentUser.email} - ${currentUser.role}`;
            elements.userInfoEl.classList.remove('hidden');
        }
        elements.applyBtn.style.display = 'none';
        elements.homeLoginBtn.style.display = 'none';
        elements.sidebar.classList.remove('hidden');

        if (currentUser.role === 'admin') {
            elements.adminNavLi.classList.remove('hidden');
            if (elements.mobileAdminLi) elements.mobileAdminLi.classList.remove('hidden');
        } else {
            elements.adminNavLi.classList.add('hidden');
            if (elements.mobileAdminLi) elements.mobileAdminLi.classList.add('hidden');
        }

        if (currentUser.role === 'admin') {
            showView('admin');
        } else {
            showView('courses');
        }

        if (currentUser.role === 'admin') {
            elements.addModuleBtn.style.display = '';
        } else {
            elements.addModuleBtn.style.display = 'none';
        }

        if (elements.createEventBtn) {
            if (currentUser.role === 'teacher' || currentUser.role === 'admin') {
                elements.createEventBtn.classList.remove('hidden');
            } else {
                elements.createEventBtn.classList.add('hidden');
            }
        }

        buildAgenda();
        buildUserList();
    } else {
        if (elements.userInfoEl) elements.userInfoEl.classList.add('hidden');
        elements.applyBtn.style.display = '';
        elements.homeLoginBtn.style.display = '';
        elements.sidebar.classList.add('hidden');
        showView('home');
        buildUserList();
    }
}

function buildCurriculum() {
    if (!elements.curriculumEl) return;
    elements.curriculumEl.innerHTML = '';
    const t = translations[state.currentLang];
    const modules = dataManager.getModules();
    const currentUser = authManager.getCurrentUser();

    modules.forEach(module => {
        if (currentUser && currentUser.role === 'student') {
            if (!currentUser.modulesPurchased.includes(module.id)) return;
        }
        const moduleEl = document.createElement('div');
        moduleEl.className = 'module';
        const titleEl = document.createElement('div');
        titleEl.className = 'module-title';
        titleEl.textContent = `${t.modulePrefix} ${module.id}: ${module.name}`;
        const toggleIcon = document.createElement('span');
        toggleIcon.textContent = '+';
        titleEl.appendChild(toggleIcon);
        const chapterList = document.createElement('div');
        chapterList.className = 'chapter-list';
        module.chapters.forEach(chapter => {
            const chapterItem = document.createElement('div');
            chapterItem.className = 'chapter-item';
            chapterItem.textContent = chapter.title;
            chapterItem.addEventListener('click', () => {
                state.activeModuleId = module.id;
                state.activeChapterId = chapter.id;
                document.querySelectorAll('.chapter-item').forEach(item => item.classList.remove('active'));
                chapterItem.classList.add('active');
                loadChapter(module, chapter);
            });
            chapterList.appendChild(chapterItem);
        });
        titleEl.addEventListener('click', () => {
            const isOpen = chapterList.classList.contains('active');
            if (isOpen) {
                chapterList.classList.remove('active');
                toggleIcon.textContent = '+';
            } else {
                chapterList.classList.add('active');
                toggleIcon.textContent = '-';
            }
        });
        moduleEl.appendChild(titleEl);
        moduleEl.appendChild(chapterList);
        elements.curriculumEl.appendChild(moduleEl);
    });
}

function loadChapter(module, chapter) {
    const t = translations[state.currentLang];
    const currentUser = authManager.getCurrentUser();

    elements.chapterTitleEl.textContent = chapter.title;
    elements.moduleNameEl.textContent = `${t.modulePrefix} ${module.id}: ${module.name}`;
    const videoEl = document.getElementById('course-video');
    if (chapter.video) {
        videoEl.src = chapter.video;
    } else {
        videoEl.removeAttribute('src');
    }
    videoEl.poster = chapter.poster || 'thumbnail.png';
    videoEl.load();
    if (chapter.pdfDesc) {
        elements.pdfSection.classList.remove('hidden');
        elements.pdfDescEl.textContent = chapter.pdfDesc;
        elements.downloadPdfBtn.onclick = () => {
            if (chapter.pdfUrl) {
                window.open(chapter.pdfUrl, '_blank');
            } else {
                alert(translations[state.currentLang].pdfUnavailable);
            }
        };
    } else {
        elements.pdfSection.classList.add('hidden');
    }

    if (elements.chapterDescEl) {
        if (chapter.description) {
            elements.chapterDescEl.innerHTML = chapter.description;
            elements.chapterDescEl.classList.remove('hidden');
        } else {
            elements.chapterDescEl.innerHTML = '';
            elements.chapterDescEl.classList.add('hidden');
        }
    }

    if (elements.adminUploadSectionEl) {
        if (currentUser && currentUser.role === 'admin') {
            elements.adminUploadSectionEl.classList.remove('hidden');
            if (elements.adminUploadVideoBtnEl) {
                elements.adminUploadVideoBtnEl.onclick = () => {
                    const tLang = translations[state.currentLang];
                    const url = prompt(tLang.enterVideoUrlPrompt);
                    if (url) {
                        chapter.video = url;
                        videoEl.src = url;
                        // Update module in dataManager
                        const modules = dataManager.getModules();
                        const modIndex = modules.findIndex(m => m.id === module.id);
                        const chapIndex = modules[modIndex].chapters.findIndex(c => c.id === chapter.id);
                        modules[modIndex].chapters[chapIndex] = chapter;
                        dataManager.saveModules(modules);
                        alert(tLang.videoUpdated);
                    }
                };
            }
            if (elements.adminUploadPdfBtnEl) {
                elements.adminUploadPdfBtnEl.onclick = () => {
                    const tLang = translations[state.currentLang];
                    const url = prompt(tLang.enterPdfUrlPrompt);
                    if (!url) return;
                    const desc = prompt(tLang.enterPdfDescPrompt, chapter.pdfDesc || '');
                    chapter.pdfUrl = url;
                    chapter.pdfDesc = desc || '';
                    elements.pdfSection.classList.remove('hidden');
                    elements.pdfDescEl.textContent = chapter.pdfDesc;

                    // Update module in dataManager
                    const modules = dataManager.getModules();
                    const modIndex = modules.findIndex(m => m.id === module.id);
                    const chapIndex = modules[modIndex].chapters.findIndex(c => c.id === chapter.id);
                    modules[modIndex].chapters[chapIndex] = chapter;
                    dataManager.saveModules(modules);

                    elements.downloadPdfBtn.onclick = () => {
                        if (chapter.pdfUrl) {
                            window.open(chapter.pdfUrl, '_blank');
                        } else {
                            alert(tLang.pdfUnavailable);
                        }
                    };
                    alert(tLang.pdfUpdated);
                };
            }
        } else {
            elements.adminUploadSectionEl.classList.add('hidden');
        }
    }
}

function updateMentoring() {
    const currentUser = authManager.getCurrentUser();
    if (!currentUser) return;
    switch (currentUser.role) {
        case 'student':
            updateStudentMentoring();
            break;
        case 'teacher':
            // updateTeacherMentoring();
            break;
        case 'admin':
            // updateAdminMentoring();
            break;
    }
}

function updateStudentMentoring() {
    const t = translations[state.currentLang];
    const currentUser = authManager.getCurrentUser();
    const completed = currentUser.sessionsCompleted || 0;
    const total = currentUser.sessionsTotal || 12;
    document.querySelector('.progress-bar-wrapper').style.display = '';
    elements.sessionsList.style.display = '';
    if (elements.teacherMentorContainer) elements.teacherMentorContainer.classList.add('hidden');
    if (elements.adminMentorContainer) elements.adminMentorContainer.classList.add('hidden');
    const percent = total > 0 ? (completed / total) * 100 : 0;
    elements.progressBarFill.style.width = `${percent}%`;
    elements.progressText.textContent = t.studentSessions(completed, total);
    elements.sessionsList.innerHTML = '';
    const userSessions = currentUser.sessions || [];
    for (let idx = 0; idx < total; idx++) {
        const session = userSessions[idx];
        const li = document.createElement('li');
        if (session && session.completed) li.classList.add('completed');
        const icon = document.createElement('span');
        icon.className = 'session-icon';
        icon.textContent = (session && session.completed) ? '✔️' : '○';
        const text = document.createElement('span');
        text.textContent = session ? `${session.title} - ${session.date}` : `Session ${idx + 1}`;
        li.appendChild(icon);
        li.appendChild(text);
        elements.sessionsList.appendChild(li);
    }
}

function buildAdminList() {
    const currentUser = authManager.getCurrentUser();
    if (!elements.moduleListEl || !currentUser || currentUser.role !== 'admin') {
        if (elements.moduleListEl) elements.moduleListEl.innerHTML = '';
        return;
    }

    const t = translations[state.currentLang];
    elements.moduleListEl.innerHTML = '';
    const modules = dataManager.getModules();

    modules.forEach(module => {
        const moduleItem = document.createElement('div');
        moduleItem.className = 'module-item-admin';
        moduleItem.innerHTML = `
      <span>${t.modulePrefix} ${module.id}: ${module.name}</span>
      <div class="module-actions">
        <button class="rename-module-btn" data-id="${module.id}">${t.edit}</button>
        <button class="delete-module-btn" data-id="${module.id}">${t.delete}</button>
      </div>
    `;
        elements.moduleListEl.appendChild(moduleItem);
    });

    elements.moduleListEl.querySelectorAll('.rename-module-btn').forEach(button => {
        button.addEventListener('click', handleRenameModule);
    });
    elements.moduleListEl.querySelectorAll('.delete-module-btn').forEach(button => {
        button.addEventListener('click', handleDeleteModule);
    });
}

function handleRenameModule(event) {
    const moduleId = parseInt(event.target.dataset.id, 10);
    const t = translations[state.currentLang];
    const modules = dataManager.getModules();
    const module = modules.find(m => m.id === moduleId);
    if (module) {
        const newName = prompt(t.renameModulePrompt, module.name);
        if (newName) {
            module.name = newName;
            dataManager.saveModules(modules);
            buildAdminList();
            buildCurriculum();
        }
    }
}

function handleDeleteModule(event) {
    const moduleId = parseInt(event.target.dataset.id, 10);
    const t = translations[state.currentLang];
    if (confirm(t.deleteConfirm)) {
        let modules = dataManager.getModules();
        modules = modules.filter(m => m.id !== moduleId);
        dataManager.saveModules(modules);
        buildAdminList();
        buildCurriculum();
    }
}

function buildUserList() {
    const currentUser = authManager.getCurrentUser();
    if (!elements.userListEl || !currentUser || currentUser.role !== 'admin') {
        if (elements.userListEl) elements.userListEl.innerHTML = '';
        return;
    }

    const t = translations[state.currentLang];
    const users = dataManager.getUsers();
    elements.userListEl.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
      <span>${user.email} (${user.role})</span>
      <div class="user-actions">
        <button class="edit-user-btn" data-id="${user.id}">${t.edit}</button>
        <button class="delete-user-btn" data-id="${user.id}">${t.delete}</button>
      </div>
    `;
        elements.userListEl.appendChild(userItem);
    });

    elements.userListEl.querySelectorAll('.edit-user-btn').forEach(button => {
        button.addEventListener('click', handleEditUser);
    });
    elements.userListEl.querySelectorAll('.delete-user-btn').forEach(button => {
        button.addEventListener('click', handleDeleteUser);
    });
}

function handleEditUser(event) {
    const userId = parseInt(event.target.dataset.id, 10);
    const t = translations[state.currentLang];
    const newRole = prompt(t.userRolePrompt);

    if (newRole && ['student', 'teacher', 'admin'].includes(newRole)) {
        const users = dataManager.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            user.role = newRole;
            dataManager.saveUsers(users);
            buildUserList();
        }
    } else if (newRole) {
        alert('Invalid role specified.');
    }
}

function handleDeleteUser(event) {
    const userId = parseInt(event.target.dataset.id, 10);
    const t = translations[state.currentLang];
    if (confirm(t.confirmDeleteUser)) {
        dataManager.deleteUser(userId);
        buildUserList();
    }
}

function buildAgenda() {
    // Placeholder for agenda logic if needed before calendar init
}

function updateAgenda() {
    buildAgenda();
    setTimeout(() => {
        initCalendar();
        setupAgendaControls();
        if (elements.eventListEl) {
            elements.eventListEl.style.display = 'none';
        }
        updateCalendarTitle();
    }, 0);
    showView('agenda');
}

function initCalendar() {
    const currentUser = authManager.getCurrentUser();
    if (!elements.calendarEl || !currentUser) {
        if (calendarInstance) {
            calendarInstance.destroy();
            calendarInstance = null;
        }
        return;
    }

    if (calendarInstance) {
        calendarInstance.destroy();
    }

    const editable = currentUser.role === 'admin' || currentUser.role === 'teacher';

    calendarInstance = new FullCalendar.Calendar(elements.calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: false,
        locale: state.currentLang,
        selectable: editable,
        editable: editable,
        events: dataManager.getEvents(),
        height: '100%',
        eventClick: function (info) {
            console.log('Event clicked:', info.event);
        },
        select: function (info) {
            if (editable) {
                const title = prompt(translations[state.currentLang].eventTitlePrompt);
                if (title) {
                    const events = dataManager.getEvents();
                    const newEvent = {
                        id: events.length + 1,
                        title: title,
                        start: info.startStr,
                        end: info.endStr,
                        allDay: info.allDay
                    };
                    events.push(newEvent);
                    dataManager.saveEvents(events);
                    calendarInstance.addEvent(newEvent);
                }
            }
        },
        datesSet: function () {
            updateCalendarTitle();
        }
    });

    calendarInstance.render();
    updateCalendarTitle();
}

function updateCalendarTitle() {
    if (elements.calendarCurrentTitleEl && calendarInstance) {
        elements.calendarCurrentTitleEl.textContent = calendarInstance.view.title;
    }
}

function setupAgendaControls() {
    if (!calendarInstance) return;

    const addListener = (id, event, listener) => {
        const el = document.getElementById(id);
        if (el) {
            const newEl = el.cloneNode(true);
            el.parentNode.replaceChild(newEl, el);
            newEl.addEventListener(event, listener);
        }
    };

    addListener('agenda-today-btn', 'click', () => calendarInstance.today());
    addListener('agenda-prev-btn', 'click', () => calendarInstance.prev());
    addListener('agenda-next-btn', 'click', () => calendarInstance.next());
    addListener('agenda-day-btn', 'click', () => calendarInstance.changeView('timeGridDay'));
    addListener('agenda-week-btn', 'click', () => calendarInstance.changeView('timeGridWeek'));
    addListener('agenda-month-btn', 'click', () => calendarInstance.changeView('dayGridMonth'));
    addListener('agenda-list-btn', 'click', () => calendarInstance.changeView('listWeek'));
}



// --- Event Listeners ---
if (elements.logo) {
    elements.logo.addEventListener('click', () => showView('home'));
}
elements.applyBtn.addEventListener('click', () => showModal(elements.authModal));
elements.homeLoginBtn.addEventListener('click', () => showModal(elements.authModal));
elements.authClose.addEventListener('click', () => hideModal(elements.authModal));

elements.loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const result = authManager.login(email, password);

    if (result.success) {
        hideModal(elements.authModal);
        updateAfterLogin();
        buildCurriculum();
        if (state.activeView === 'agenda') {
            updateAgenda();
        }
    } else {
        alert(translations[state.currentLang].invalidCredentials);
    }
});



if (elements.logoutBtn) {
    elements.logoutBtn.addEventListener('click', () => {
        authManager.logout();
        updateAfterLogin();
        translate();
        showView('home');
    });
}

if (elements.changeAccountBtn) {
    elements.changeAccountBtn.addEventListener('click', () => {
        authManager.logout();
        updateAfterLogin();
        translate();
        showModal(elements.authModal);
    });
}

elements.navCoursesBtn.addEventListener('click', () => showView('courses'));
elements.navMentoringBtn.addEventListener('click', () => {
    showView('mentoring');
    updateMentoring();
});
elements.navAdminBtn.addEventListener('click', () => showView('admin'));

if (elements.navAgendaBtn) {
    elements.navAgendaBtn.addEventListener('click', () => {
        updateAgenda();
    });
}

if (elements.mobileNavAgenda) {
    elements.mobileNavAgenda.addEventListener('click', () => {
        elements.mobileMenu.classList.add('hidden');
        updateAgenda();
    });
}

elements.langFab.addEventListener('click', () => {
    elements.langSelector.classList.toggle('hidden');
});
elements.langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        state.currentLang = btn.getAttribute('data-lang');
        elements.langSelector.classList.add('hidden');
        translate();
    });
});

if (elements.addModuleBtn) {
    elements.addModuleBtn.addEventListener('click', () => {
        const t = translations[state.currentLang];
        const moduleName = prompt(t.newModuleNamePrompt);
        if (moduleName) {
            const modules = dataManager.getModules();
            const newModule = {
                id: modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1,
                name: moduleName,
                chapters: []
            };
            modules.push(newModule);
            dataManager.saveModules(modules);
            buildAdminList();
            buildCurriculum();
        }
    });
}

if (elements.addUserBtn) {
    elements.addUserBtn.addEventListener('click', () => {
        const t = translations[state.currentLang];
        const email = prompt(t.userEmailPrompt);
        const password = prompt(t.userPasswordPrompt);
        const role = prompt(t.userRolePrompt);

        if (email && password && role) {
            if (!['student', 'teacher', 'admin'].includes(role)) {
                alert('Invalid role specified.');
                return;
            }

            const newUser = {
                email: email,
                username: email,
                password: password,
                role: role
            };

            dataManager.addUser(newUser);
            alert(t.userAdded);
            buildUserList();
        }
    });
}

elements.mobileMenuBtn.addEventListener('click', () => {
    elements.mobileMenu.classList.remove('hidden');
});
elements.mobileMenuClose.addEventListener('click', () => {
    elements.mobileMenu.classList.add('hidden');
});

// --- Initialization ---
updateAfterLogin();
translate();
