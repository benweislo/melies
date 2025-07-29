// Méliès Online Application

// Translation strings for FR, EN, ES
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
    applyBtn: "Candidater",
    askAI: "Demander à l'IA",
    askAIButton: "Demander à l'IA",
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
    aiGenericResponsePrefix: "Merci pour votre question sur",
    aiGenericResponseSuffix: "Nous traiterons bientôt de cette question. Continuez à explorer le chapitre et notez vos observations!",
    modulePrefix: "Module",
    newModuleNamePrompt: "Nom du nouveau module :",
    renameModulePrompt: "Nouveau nom pour ce module :",
    deleteConfirm: "Supprimer cet élément?",
    newChapterNamePrompt: "Nom du nouveau chapitre :",

    // Admin actions
    uploadVideo: "Uploader vidéo",
    uploadPdf: "Uploader PDF",

    // User management
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
    passwordUpdated: "Mot de passe mis à jour."
    ,selectVideoChapterPrompt: "Sélectionnez un chapitre pour uploader la vidéo:\n",
    enterVideoUrlPrompt: "Entrez l’URL de la vidéo:",
    videoUpdated: "Vidéo mise à jour.",
    selectPdfChapterPrompt: "Sélectionnez un chapitre pour uploader le PDF:\n",
    enterPdfUrlPrompt: "Entrez l’URL du PDF:",
    enterPdfDescPrompt: "Entrez la description du PDF:",
    pdfUpdated: "PDF mis à jour."
    ,pdfUnavailable: "PDF non disponible"
    ,noChapterSelected: "Aucun chapitre sélectionné"
    ,upload: "Téléverser"
    ,editSessions: "Modifier les séances"
    ,totalSessionsPrompt: "Nombre total de séances:",
    completedSessionsPrompt: "Nombre de séances complétées:"
    ,sessionsUpdated: "Séances mises à jour."
    ,logout: "Se déconnecter"
    ,changeAccount: "Changer de compte"
    ,noStudents: "Aucun étudiant associé."
    ,noTeachers: "Aucun enseignant trouvé."
    ,enterDatesPrompt: "Entrez les dates des séances complétées (séparées par des virgules):"
    ,agendaNav: "Agenda"
    ,agendaTitle: "Agenda"
    ,noEvents: "Aucun événement prévu."
    ,addEvent: "Ajouter un événement"
    ,editEvent: "Éditer"
    ,deleteEvent: "Supprimer"
    ,eventDatePrompt: "Date de l'événement (YYYY‑MM‑DD) :"
    ,eventTitlePrompt: "Titre de l'événement :"
    ,eventDescPrompt: "Description de l'événement :"
    ,eventAdded: "Événement ajouté."
    ,eventUpdated: "Événement mis à jour."
    ,eventDeleted: "Événement supprimé."
    ,createEvent: "Créer"
    ,today: "Aujourd'hui"
    ,dayView: "Jour"
    ,weekView: "Semaine"
    ,monthView: "Mois"
    ,listView: "Planning"
    ,searchPlaceholder: "Rechercher…"
    ,myCalendars: "Mes agendas"
    ,defaultCalendar: "Agenda Méliès"
    ,settings: "Paramètres"
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
    applyBtn: "Apply",
    askAI: "Ask AI",
    askAIButton: "Ask AI",
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
    aiGenericResponsePrefix: "Thank you for your question about",
    aiGenericResponseSuffix: "We will address this soon. Keep exploring the chapter and note your observations!",
    modulePrefix: "Module",
    newModuleNamePrompt: "Name of the new module:",
    renameModulePrompt: "New name for this module:",
    deleteConfirm: "Delete this item?",
    newChapterNamePrompt: "Name of the new chapter:",

    // Admin actions
    uploadVideo: "Upload Video",
    uploadPdf: "Upload PDF",

    // User management
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
    passwordUpdated: "Password updated."
    ,selectVideoChapterPrompt: "Select a chapter to upload the video:\n",
    enterVideoUrlPrompt: "Enter video URL:",
    videoUpdated: "Video updated.",
    selectPdfChapterPrompt: "Select a chapter to upload the PDF:\n",
    enterPdfUrlPrompt: "Enter PDF URL:",
    enterPdfDescPrompt: "Enter the PDF description:",
    pdfUpdated: "PDF updated."
    ,pdfUnavailable: "PDF not available"
    ,noChapterSelected: "No chapter selected"
    ,upload: "Upload"
    ,editSessions: "Edit Sessions"
    ,totalSessionsPrompt: "Total sessions count:",
    completedSessionsPrompt: "Completed sessions count:"
    ,sessionsUpdated: "Sessions updated."
    ,logout: "Log Out"
    ,changeAccount: "Switch Account"
    ,noStudents: "No students associated."
    ,noTeachers: "No teachers found."
    ,enterDatesPrompt: "Enter the dates of completed sessions (comma-separated):"
    ,agendaNav: "Agenda"
    ,agendaTitle: "Agenda"
    ,noEvents: "No events scheduled."
    ,addEvent: "Add Event"
    ,editEvent: "Edit"
    ,deleteEvent: "Delete"
    ,eventDatePrompt: "Event date (YYYY‑MM‑DD):"
    ,eventTitlePrompt: "Event title:"
    ,eventDescPrompt: "Event description:"
    ,eventAdded: "Event added."
    ,eventUpdated: "Event updated."
    ,eventDeleted: "Event deleted."
    ,createEvent: "Create"
    ,today: "Today"
    ,dayView: "Day"
    ,weekView: "Week"
    ,monthView: "Month"
    ,listView: "Schedule"
    ,searchPlaceholder: "Search…"
    ,myCalendars: "My calendars"
    ,defaultCalendar: "Méliès Calendar"
    ,settings: "Settings"
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
    applyBtn: "Solicitar",
    askAI: "Preguntar a la IA",
    askAIButton: "Preguntar a la IA",
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
    aiGenericResponsePrefix: "Gracias por tu pregunta sobre",
    aiGenericResponseSuffix: "Pronto abordaremos esta cuestión. ¡Continúa explorando el capítulo y toma nota de tus observaciones!",
    modulePrefix: "Módulo",
    newModuleNamePrompt: "Nombre del nuevo módulo:",
    renameModulePrompt: "Nuevo nombre para este módulo:",
    deleteConfirm: "¿Eliminar este elemento?",
    newChapterNamePrompt: "Nombre del nuevo capítulo:",

    // Admin actions
    uploadVideo: "Subir vídeo",
    uploadPdf: "Subir PDF",

    // User management
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
    passwordUpdated: "Contraseña actualizada."
    ,selectVideoChapterPrompt: "Seleccione un capítulo para subir el vídeo:\n",
    enterVideoUrlPrompt: "Ingrese la URL del vídeo:",
    videoUpdated: "Vídeo actualizado.",
    selectPdfChapterPrompt: "Seleccione un capítulo para subir el PDF:\n",
    enterPdfUrlPrompt: "Ingrese la URL del PDF:",
    enterPdfDescPrompt: "Ingrese la descripción del PDF:",
    pdfUpdated: "PDF actualizado."
    ,pdfUnavailable: "PDF no disponible"
    ,noChapterSelected: "Ningún capítulo seleccionado"
    ,upload: "Subir"
    ,editSessions: "Editar sesiones"
    ,totalSessionsPrompt: "Número total de sesiones:",
    completedSessionsPrompt: "Número de sesiones completadas:"
    ,sessionsUpdated: "Sesiones actualizadas."
    ,logout: "Cerrar sesión"
    ,changeAccount: "Cambiar de cuenta"
    ,noStudents: "Ningún estudiante asociado."
    ,noTeachers: "No se encontraron profesores."
    ,enterDatesPrompt: "Introduzca las fechas de las sesiones completadas (separadas por comas):"
    ,agendaNav: "Agenda"
    ,agendaTitle: "Agenda"
    ,noEvents: "No hay eventos programados."
    ,addEvent: "Agregar evento"
    ,editEvent: "Editar"
    ,deleteEvent: "Eliminar"
    ,eventDatePrompt: "Fecha del evento (AAAA‑MM‑DD):"
    ,eventTitlePrompt: "Título del evento:"
    ,eventDescPrompt: "Descripción del evento:"
    ,eventAdded: "Evento agregado."
    ,eventUpdated: "Evento actualizado."
    ,eventDeleted: "Evento eliminado."
    ,createEvent: "Crear"
    ,today: "Hoy"
    ,dayView: "Día"
    ,weekView: "Semana"
    ,monthView: "Mes"
    ,listView: "Agenda"
    ,searchPlaceholder: "Buscar…"
    ,myCalendars: "Mis calendarios"
    ,defaultCalendar: "Calendario Méliès"
    ,settings: "Configuración"
  },
};

// User accounts with mentoring associations.
// Each student stores the number of sessions completed/total as well as an array of session objects
// containing a date and completion flag. The `teacher` property links a student to a teacher.
// Teachers contain a `students` array listing their learners by username.
const users = [
  {
    email: 'nathan.w',
    password: '1234',
    role: 'student',
    modulesPurchased: [4],
    sessionsTotal: 12,
    sessionsCompleted: 3,
    // initial session dates for the three completed sessions
    sessions: [
      { title: 'Session 1', date: '2025-01-12', completed: true },
      { title: 'Session 2', date: '2025-01-15', completed: true },
      { title: 'Session 3', date: '2025-01-18', completed: true },
    ],
    teacher: 'patrick.w',
  },
  {
    email: 'ben.w',
    password: '1234',
    role: 'admin',
  },
  {
    email: 'patrick.w',
    password: '1234',
    role: 'teacher',
    // list of students assigned to this teacher
    students: ['nathan.w'],
  },
];

// Modules and chapters data
let modules = [
  {
    id: 4,
    name: 'Animation d’Excellence',
    chapters: [
      {
        id: 1,
        title: 'Informations',
        // Formatted description with bullets for better readability
        description: `
          <p><strong>Informations (contenu vidéo)</strong></p>
          <ul>
            <li>Introduction</li>
            <li>Masterclass : how to be imperfect</li>
          </ul>
        `,
        video: '',
        pdfDesc: '',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 2,
        title: 'Logique des poids',
        // Structured description with bullets and paragraphs
        description: `
          <p>Maîtriser la logique d’inertie et sa répercussion dans le reste du corps. Mouvements subtils, mouvement du root, mouvement des bras.</p>
          <p><strong>Objectif du chapitre :</strong> renforcer la compréhension de la logique d’inertie des poids.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Erreurs à éviter</li>
            <li>Comment les axes de rotation diffèrent en vitesse à cause du poids</li>
            <li>Exemple comparatif : tourner la tête en tiltant et de droite à gauche</li>
            <li>Répercussion de mouvements brusques sur le reste du corps</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) : comment bien gérer les axes de rotation dans le graph editor.</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : animer un personnage qui secoue le bras. <em>Objectif :</em> comprendre l’inertie de poids avec un mouvement nerveux d’une partie lourde du corps.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
        `,
        video: '',
        pdfDesc: 'Axes dans le graph editor',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 3,
        title: 'Observation',
        description: `
          <p>Entraînement à l'observation consciente et développement de l’œil d’animateur.</p>
          <p><strong>Objectif :</strong> s’améliorer au jour le jour (pas d’exercice, seulement information).</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Repérer des gestes, mouvements ou mimiques naturels dans une vidéo ou simplement dehors et les noter</li>
            <li>Exemples de repérage</li>
            <li>Récupération d’une bibliothèque personnelle</li>
          </ul>
          <p><strong>Objectif final :</strong> développement de l’œil.</p>
        `,
        video: '',
        pdfDesc: '',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 4,
        title: 'Repérage et timing d\'émotions',
        description: `
          <p>Fonctionnement de l'empathie et trouver une vérité dans l'émotion.</p>
          <p><strong>Objectif du chapitre :</strong> apprendre à gérer le timing et les transitions émotionnelles pour rendre une performance crédible et engageante.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 10 min)</li>
            <li>Importance du timing dans l’acting</li>
            <li>Comment un mauvais timing peut briser l’immersion</li>
            <li>Exemple comparatif : transition émotionnelle réussie vs ratée</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
          <ul>
            <li>Définir le beat émotionnel</li>
            <li>Comprendre la latence émotionnelle</li>
            <li>Relation entre anticipation, overlap et follow‑through</li>
          </ul>
          <p><strong>Démonstration pratique</strong> (Vidéo – 10–15 min) : cas d’étude : personnage passant de la surprise à la colère (analyse, animation, comparaison).</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : animer un personnage passant de l’ennui à l’excitation. <em>Objectif :</em> timing et micro‑détails.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations. Erreurs fréquentes. Évaluation et validation.</p>
        `,
        video: '',
        pdfDesc: 'Beat émotionnel, latence',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 5,
        title: 'Éviter l’uncanny valley',
        description: `
          <p>Bien repérer cette zone et différencier les émotions éteintes des vivantes.</p>
          <p><strong>Objectif du chapitre :</strong> repérer cette zone et différencier les émotions éteintes des vivantes.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Importance de l’uncanny valley</li>
            <li>Comment éviter la zone « morte »</li>
            <li>Exemple comparatif : émotion type robotic/jeu vidéo et émotion humaine</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
          <ul>
            <li>Zones du visage importantes</li>
            <li>Muscles impliqués</li>
          </ul>
          <p><strong>Quiz d’évaluation</strong></p>
        `,
        video: '',
        pdfDesc: 'Muscles, zones du visage',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 6,
        title: 'Références vidéo',
        description: `
          <p>Créer et utiliser des références pour le timing et le processus de pensée. Bonne et mauvaise utilisation de références vidéo. Création de références pour plusieurs exercices.</p>
          <p><strong>Objectif du chapitre :</strong> savoir bien créer ou utiliser une référence vidéo.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Erreurs à éviter</li>
            <li>Mettre deux axes de caméra pour faciliter le travail</li>
            <li>Savoir utiliser une partie de vidéo pour récupérer le timing voulu</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) :</p>
          <ul>
            <li>Placement des caméras et utilisation de RV et syncsketch</li>
            <li>Exportation au bon format (suite d’images + son calé)</li>
          </ul>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : créer une référence exploitable prête dans Maya.</p>
          <p><em>Objectif :</em> être le plus efficace possible pour avoir une référence prête.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
        `,
        video: '',
        pdfDesc: 'RV, syncsketch, formats export',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 7,
        title: 'Adding mistakes',
        description: `
          <p>Comprendre comment insérer des « erreurs » pour amener le « plus » dans l’animation.</p>
          <p>Compréhension de la communication non verbale. Animation générique, insertion de mistakes, gestes inconscients, body language original. Différence entre l'intelligence artificielle générative et le vrai animateur.</p>
          <p><strong>Objectif du chapitre :</strong> comprendre comment insérer des « erreurs » pour amener le « plus » dans l’animation.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Compréhension de la communication non verbale</li>
            <li>Introduction à la synergologie</li>
            <li>Comment aller plus loin que l’animation générique</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) : exemples de gestes inconscients, mimics et body language.</p>
          <p><strong>Quiz d’évaluation</strong></p>
        `,
        video: '',
        pdfDesc: 'Gestes inconscients',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 8,
        title: 'Humour',
        description: `
          <p>Maîtriser le timing des gags et comprendre les différences culturelles. Analyse de différents plans pour bien intégrer le timing nécessaire pour un plan humoristique.</p>
          <p><strong>Objectif du chapitre :</strong> maîtriser le timing des gags et comprendre les différences culturelles.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Compréhension d’un gag qui marche ou pas</li>
            <li>Ensemble d’exemples</li>
          </ul>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : faire une animation d’un gag très court. <em>Objectif :</em> maîtriser l’humour dans un plan.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
        `,
        video: '',
        pdfDesc: '',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 9,
        title: 'Storytelling',
        description: `
          <p>Connaître le personnage, comprendre son contexte et ses pensées. Maîtriser la différence d’animation selon le contexte, le caractère et l’état présent du personnage.</p>
          <p><strong>Objectif du chapitre :</strong> faire le bon choix d’animation en fonction du contexte.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Comment choisir l’acting selon le contexte, le caractère et l’état présent du personnage</li>
            <li>Connaître le personnage, comprendre son contexte et ses pensées</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) : schéma de réflexion.</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : création d'une animation selon un contexte donné (cf. vidéo “i don’t know test” de la masterclass “how to be imperfect”). <em>Objectif :</em> maîtriser la réflexion derrière le choix d’un acting.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
        `,
        video: '',
        pdfDesc: 'Schéma de réflexion',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
      {
        id: 10,
        title: "Être humain et artisan de l’image",
        description: `
          <p>Réfléchir à ce qui définit l'être humain et sa créativité face aux nouveaux outils. Comprendre notre rapport à l'intelligence artificielle et les défis que les artistes vont devoir confronter pour continuer leur métier.</p>
          <p><strong>Objectif du chapitre :</strong> affirmer la place de l'artiste et développer une vision critique et adaptative face à l'IA.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li><strong>Introduction</strong> (Vidéo – 10 min) : Qu'est‑ce qui nous rend humains ? Exploration de la conscience, de l'intention, du vécu et de l'empathie comme piliers de la création artistique.</li>
            <li><strong>L'IA : outil ou concurrent ?</strong> Présentation des IA génératives d'images et d'animations. Analyse de leurs forces (rapidité, génération d'idées) et de leurs faiblesses (manque d'intention, de contexte, de subtext).</li>
            <li><strong>Exemple comparatif</strong> (Vidéo) : Une animation générée par IA face à une animation créée par un artiste sur le même brief, pour souligner la différence d'âme et de narration.</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
          <ul>
            <li>Les défis futurs pour les animateurs – adaptation des compétences, maîtrise du storytelling et de la direction artistique</li>
            <li>La plus‑value de l'artiste – l'intention, l'émotion sincère, l'originalité, l'imperfection (cf. Chapitre 7 « Adding mistakes ») et la capacité à diriger le regard et le ressenti du spectateur</li>
            <li>Comment intégrer l'IA dans son workflow de manière intelligente – brainstorming, pré‑production, inspiration, automatisation de tâches techniques, etc.</li>
          </ul>
          <p><strong>Table ronde / Débat</strong> (Vidéo – 15 min) : visionnage d'une discussion entre professionnels de l'animation sur l'impact de l'IA sur leur métier. <em>Objectif :</em> s'inspirer des différentes perspectives et stratégies pour l'avenir.</p>
          <p><strong>Exercice de réflexion</strong> (pas d'animation) : rédiger une courte réflexion sur « Comment puis‑je, en tant qu'artiste, utiliser ma sensibilité unique pour raconter des histoires qu'une IA ne pourra jamais concevoir ? ». <em>Objectif :</em> solidifier sa vision personnelle et sa valeur ajoutée en tant que créateur.</p>
        `,
        video: '',
        pdfDesc: '',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
    ],
  },
];

// Agenda events data: each event has a date (YYYY-MM-DD), title and description
let agendaEvents = [
  {
    date: '2025-09-15',
    title: 'Masterclass: imperfection in animation',
    description: 'Une séance spéciale avec un professeur invité pour explorer l’animation imparfaite et l’expression artistique.'
  },
  {
    date: '2025-10-01',
    title: 'Atelier de dessin avec Patrick W.',
    description: 'Atelier pratique pour améliorer vos compétences en dessin et observation.'
  }
];

// Global reference to FullCalendar instance. Will be initialised when agenda view is opened.
let calendarInstance = null;
// Instance of the mini calendar (month overview in the agenda sidebar)
let miniCalendarInstance = null;

// Mentoring data example
const mentoringData = {
  totalSessions: 12,
  sessions: Array.from({ length: 12 }, (_, i) => {
    return {
      title: `Session ${i + 1}`,
      date: `2025-0${Math.floor(i / 3) + 1}-0${(i % 3) + 1}`,
    };
  }),
};

// Global state
const state = {
  currentLang: 'fr',
  currentUser: null,
  activeView: 'home',
  activeModuleId: null,
  activeChapterId: null,
};

// Element references
const header = document.getElementById('header');
const homeView = document.getElementById('home-view');
const coursesView = document.getElementById('courses-view');
const mentoringView = document.getElementById('mentoring-view');
const adminView = document.getElementById('admin-view');
const sidebar = document.getElementById('sidebar');
const navCoursesBtn = document.getElementById('nav-courses');
const navMentoringBtn = document.getElementById('nav-mentoring');
const navAdminBtn = document.getElementById('nav-admin');
const adminNavLi = document.getElementById('admin-nav-li');
const applyBtn = document.getElementById('apply-btn');
const homeLoginBtn = document.getElementById('home-login-btn');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const loginForm = document.getElementById('login-form');
const aiModal = document.getElementById('ai-modal');
const aiClose = document.getElementById('ai-close');
const aiForm = document.getElementById('ai-form');
const aiChat = document.getElementById('ai-chat');
const aiInput = document.getElementById('ai-input');
const askAiBtn = document.getElementById('ask-ai-btn');
const chapterTitleEl = document.getElementById('chapter-title');
const moduleNameEl = document.getElementById('module-name');
const pdfSection = document.getElementById('pdf-section');
const pdfDescEl = document.getElementById('pdf-desc');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const curriculumEl = document.getElementById('curriculum');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');
const sessionsList = document.getElementById('sessions-list');
const teacherMentorContainer = document.getElementById('teacher-mentor-container');
const adminMentorContainer = document.getElementById('admin-mentor-container');
const adminTitle = document.getElementById('admin-title');
const addModuleBtn = document.getElementById('add-module-btn');
const moduleListEl = document.getElementById('module-list');
// const roleSwitcher = document.getElementById('role-switcher'); // removed in final version
const langFab = document.getElementById('lang-fab');
const langSelector = document.getElementById('lang-selector');
const langButtons = langSelector.querySelectorAll('button');

// Mobile navigation elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavCourses = document.getElementById('mobile-nav-courses');
const mobileNavMentoring = document.getElementById('mobile-nav-mentoring');
const mobileNavAdmin = document.getElementById('mobile-nav-admin');
const mobileAdminLi = document.getElementById('mobile-admin-li');

// User management elements (admin)
const userManagementTitleEl = document.getElementById('user-management-title');
const addUserBtn = document.getElementById('add-user-btn');
const userListEl = document.getElementById('user-list');

// Admin upload section and buttons in course view
const adminUploadSectionEl = document.getElementById('admin-upload-section');
const adminUploadVideoBtnEl = document.getElementById('admin-upload-video-btn');
const adminUploadPdfBtnEl = document.getElementById('admin-upload-pdf-btn');

// Chapter description element
const chapterDescEl = document.getElementById('chapter-description');

// User info and logout controls in header
const userInfoEl = document.getElementById('user-info');
const userLabelEl = document.getElementById('user-label');
const logoutBtn = document.getElementById('logout-btn');
const changeAccountBtn = document.getElementById('change-account-btn');

// Agenda elements
const navAgendaBtn = document.getElementById('nav-agenda');
const agendaView = document.getElementById('agenda-view');
// Legacy add event button (kept for backward compatibility but hidden). We'll use create-event-btn instead.
const addEventBtn = document.getElementById('add-event-btn');
// New agenda controls
const createEventBtn = document.getElementById('create-event-btn');
const agendaLeft = document.getElementById('agenda-left');
// miniCalendarEl was used for the mini calendar in the agenda sidebar.
// The mini calendar has been removed to avoid duplication of the calendar view, so leave this undefined.
const miniCalendarEl = null;
const agendaTodayBtn = document.getElementById('agenda-today-btn');
const agendaPrevBtn = document.getElementById('agenda-prev-btn');
const agendaNextBtn = document.getElementById('agenda-next-btn');
const calendarCurrentTitleEl = document.getElementById('calendar-current-title');
const agendaDayBtn = document.getElementById('agenda-day-btn');
const agendaWeekBtn = document.getElementById('agenda-week-btn');
const agendaMonthBtn = document.getElementById('agenda-month-btn');
const agendaListBtn = document.getElementById('agenda-list-btn');
const agendaSearchInput = document.getElementById('agenda-search');
const agendaSettingsBtn = document.getElementById('agenda-settings-btn');
const eventListEl = document.getElementById('event-list');
const mobileNavAgenda = document.getElementById('mobile-nav-agenda');

function translate() {
  const t = translations[state.currentLang];
  // home view
  document.getElementById('home-title').textContent = t.homeTitle;
  document.getElementById('home-subtitle').textContent = t.homeSubtitle;
  document.getElementById('home-description').textContent = t.homeDescription;
  document.getElementById('home-login-btn').textContent = t.loginBtn;
  // info cards
  document.getElementById('card-courses-title').textContent = t.cardCoursesTitle;
  document.getElementById('card-courses-desc').textContent = t.cardCoursesDesc;
  document.getElementById('card-courses-link').textContent = t.cardCoursesLink;
  document.getElementById('card-mentoring-title').textContent = t.cardMentoringTitle;
  document.getElementById('card-mentoring-desc').textContent = t.cardMentoringDesc;
  document.getElementById('card-mentoring-link').textContent = t.cardMentoringLink;
  // header buttons
  applyBtn.textContent = t.applyBtn;
  // nav
  navCoursesBtn.textContent = t.coursesNav;
  navMentoringBtn.textContent = t.mentoringNav;
  navAdminBtn.textContent = t.adminNav;
  if (navAgendaBtn) navAgendaBtn.textContent = t.agendaNav;
  // mentoring view
  document.getElementById('mentoring-title').textContent = t.mentoringTitle;
  // agenda view
  const agendaTitleEl = document.getElementById('agenda-title');
  if (agendaTitleEl) agendaTitleEl.textContent = t.agendaTitle;
  // Legacy add-event button (hidden) and new create-event button
  if (addEventBtn) addEventBtn.textContent = t.addEvent;
  if (createEventBtn) createEventBtn.textContent = t.createEvent;
  // Top bar labels for agenda
  if (agendaTodayBtn) agendaTodayBtn.textContent = t.today;
  if (agendaDayBtn) agendaDayBtn.textContent = t.dayView;
  if (agendaWeekBtn) agendaWeekBtn.textContent = t.weekView;
  if (agendaMonthBtn) agendaMonthBtn.textContent = t.monthView;
  if (agendaListBtn) agendaListBtn.textContent = t.listView;
  if (agendaSearchInput) agendaSearchInput.placeholder = t.searchPlaceholder;
  // My calendars section
  const myCalsTitleEl = document.getElementById('my-calendars-title');
  if (myCalsTitleEl) myCalsTitleEl.textContent = t.myCalendars;
  const defaultCalNameEl = document.getElementById('default-calendar-name');
  if (defaultCalNameEl) defaultCalNameEl.textContent = t.defaultCalendar;
  // admin view
  addModuleBtn.textContent = t.addModule;
  adminTitle.textContent = t.adminTitle;
  // pdf button and ask AI
  downloadPdfBtn.textContent = t.pdfDownload;
  askAiBtn.textContent = t.askAIButton;
  aiInput.placeholder = t.askAIPrompt;
  document.getElementById('ai-title').textContent = t.aiAssistantTitle;
  // update send button in AI modal
  const aiSendBtn = aiForm.querySelector('button[type="submit"]');
  if (aiSendBtn) aiSendBtn.textContent = t.send;
  // auth modal translations
  document.getElementById('auth-title').textContent = t.loginTitle;
  const emailLabel = loginForm.querySelector('label[for="email"]');
  const pwdLabel = loginForm.querySelector('label[for="password"]');
  if (emailLabel) emailLabel.textContent = t.loginEmail;
  if (pwdLabel) pwdLabel.textContent = t.loginPassword;
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.textContent = t.loginSubmit;
  // language names in selector
  langButtons.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === 'fr') btn.textContent = t.languageFrench;
    if (lang === 'en') btn.textContent = t.languageEnglish;
    if (lang === 'es') btn.textContent = t.languageSpanish;
  });
  // update sessions text
  updateMentoring();
  // update module list names (prefix may change)
  buildCurriculum();
  buildAdminList();

  // user management translations
  if (userManagementTitleEl) userManagementTitleEl.textContent = t.userManagementTitle;
  if (addUserBtn) addUserBtn.textContent = t.addUser;
  buildUserList();

  // admin upload buttons labels (video and PDF)
  if (adminUploadVideoBtnEl) {
    adminUploadVideoBtnEl.textContent = t.uploadVideo;
  }
  if (adminUploadPdfBtnEl) {
    adminUploadPdfBtnEl.textContent = t.uploadPdf;
  }

  // logout button label
  if (logoutBtn) {
    logoutBtn.textContent = t.logout || t.loginBtn; // fallback if not defined
  }
  // change account button label
  if (changeAccountBtn) {
    changeAccountBtn.textContent = t.changeAccount || '';
  }

  // Update mobile nav labels
  if (mobileNavCourses) mobileNavCourses.textContent = t.coursesNav;
  if (mobileNavMentoring) mobileNavMentoring.textContent = t.mentoringNav;
  if (mobileNavAdmin) mobileNavAdmin.textContent = t.adminNav;
  if (mobileNavAgenda) mobileNavAgenda.textContent = t.agendaNav;
}

function showModal(modal) {
  modal.classList.remove('hidden');
}

function hideModal(modal) {
  modal.classList.add('hidden');
}

function showView(name) {
  state.activeView = name;
  // hide all views
  homeView.classList.add('hidden');
  coursesView.classList.add('hidden');
  mentoringView.classList.add('hidden');
  adminView.classList.add('hidden');
  if (agendaView) agendaView.classList.add('hidden');
  // remove active classes from nav buttons
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  switch (name) {
    case 'home':
      homeView.classList.remove('hidden');
      break;
    case 'courses':
      coursesView.classList.remove('hidden');
      navCoursesBtn.classList.add('active');
      break;
    case 'mentoring':
      mentoringView.classList.remove('hidden');
      navMentoringBtn.classList.add('active');
      break;
    case 'admin':
      adminView.classList.remove('hidden');
      navAdminBtn.classList.add('active');
      break;
    case 'agenda':
      agendaView.classList.remove('hidden');
      navAgendaBtn.classList.add('active');
      break;
  }
}

function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}

function updateAfterLogin() {
  if (state.currentUser) {
    // show user info with email and role
    if (userInfoEl && userLabelEl) {
      userLabelEl.textContent = `${state.currentUser.email} - ${state.currentUser.role}`;
      userInfoEl.classList.remove('hidden');
    }
    // hide apply button and home login if logged in
    applyBtn.style.display = 'none';
    homeLoginBtn.style.display = 'none';
    sidebar.classList.remove('hidden');
    // update nav for roles
    if (state.currentUser.role === 'admin') {
      // only admins see the admin navigation item
      adminNavLi.classList.remove('hidden');
      if (mobileAdminLi) mobileAdminLi.classList.remove('hidden');
    } else {
      adminNavLi.classList.add('hidden');
      if (mobileAdminLi) mobileAdminLi.classList.add('hidden');
    }
    // by default show the appropriate view:
    // admin lands on admin management view, teacher lands on courses, student lands on courses
    if (state.currentUser.role === 'admin') {
      showView('admin');
    } else {
      showView('courses');
    }
    // hide or show add module button based on role
    if (state.currentUser.role === 'admin') {
      addModuleBtn.style.display = '';
    } else {
      addModuleBtn.style.display = 'none';
    }

    // Show or hide create-event button based on role (students cannot modify agenda)
    if (createEventBtn) {
      if (state.currentUser.role === 'teacher' || state.currentUser.role === 'admin') {
        createEventBtn.classList.remove('hidden');
      } else {
        createEventBtn.classList.add('hidden');
      }
    }

    // Build agenda when user logs in (so they see updated events)
    buildAgenda();

    // user management list update
    buildUserList();
  } else {
    // not logged in
    // hide user info section
    if (userInfoEl) userInfoEl.classList.add('hidden');
    applyBtn.style.display = '';
    homeLoginBtn.style.display = '';
    sidebar.classList.add('hidden');
    showView('home');
    buildUserList();
  }
}

function buildCurriculum() {
  // builds module and chapter list in the curriculum
  curriculumEl.innerHTML = '';
  const t = translations[state.currentLang];
  modules.forEach(module => {
    // Only show modules that student has purchased if student
    if (state.currentUser && state.currentUser.role === 'student') {
      if (!state.currentUser.modulesPurchased.includes(module.id)) return;
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
    curriculumEl.appendChild(moduleEl);
  });
}

function loadChapter(module, chapter) {
  const t = translations[state.currentLang];
  chapterTitleEl.textContent = chapter.title;
  moduleNameEl.textContent = `${t.modulePrefix} ${module.id}: ${module.name}`;
  // video
  const videoEl = document.getElementById('course-video');
  if (chapter.video) {
    videoEl.src = chapter.video;
  } else {
    videoEl.removeAttribute('src');
  }
  // set poster image for video preview
  if (chapter.poster) {
    videoEl.poster = chapter.poster;
  } else {
    videoEl.poster = 'thumbnail.png';
  }
  videoEl.load();
  // pdf
  if (chapter.pdfDesc) {
    pdfSection.classList.remove('hidden');
    pdfDescEl.textContent = chapter.pdfDesc;
    downloadPdfBtn.onclick = () => {
      if (chapter.pdfUrl) {
        window.open(chapter.pdfUrl, '_blank');
      } else {
        alert(translations[state.currentLang].pdfUnavailable);
      }
    };
  } else {
    pdfSection.classList.add('hidden');
  }

  // description
  if (chapterDescEl) {
    if (chapter.description) {
      // Descriptions are stored as HTML fragments for better formatting
      chapterDescEl.innerHTML = chapter.description;
      chapterDescEl.classList.remove('hidden');
    } else {
      chapterDescEl.innerHTML = '';
      chapterDescEl.classList.add('hidden');
    }
  }

  // Show or hide admin upload section depending on role
  if (adminUploadSectionEl) {
    if (state.currentUser && state.currentUser.role === 'admin') {
      adminUploadSectionEl.classList.remove('hidden');
      // set up handlers for video and PDF upload
      if (adminUploadVideoBtnEl) {
        adminUploadVideoBtnEl.onclick = () => {
          const tLang = translations[state.currentLang];
          const url = prompt(tLang.enterVideoUrlPrompt);
          if (url) {
            chapter.video = url;
            videoEl.src = url;
            alert(tLang.videoUpdated);
          }
        };
      }
      if (adminUploadPdfBtnEl) {
        adminUploadPdfBtnEl.onclick = () => {
          const tLang = translations[state.currentLang];
          const url = prompt(tLang.enterPdfUrlPrompt);
          if (!url) return;
          const desc = prompt(tLang.enterPdfDescPrompt, chapter.pdfDesc || '');
          chapter.pdfUrl = url;
          chapter.pdfDesc = desc || '';
          // update pdf section UI
          pdfSection.classList.remove('hidden');
          pdfDescEl.textContent = chapter.pdfDesc;
          downloadPdfBtn.onclick = () => {
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
      adminUploadSectionEl.classList.add('hidden');
    }
  }
}

function updateMentoring() {
  if (!state.currentUser) return;
  switch (state.currentUser.role) {
    case 'student':
      updateStudentMentoring();
      break;
    case 'teacher':
      updateTeacherMentoring();
      break;
    case 'admin':
      updateAdminMentoring();
      break;
    default:
      break;
  }
}

// Display mentoring progress for students
function updateStudentMentoring() {
  const completed = state.currentUser.sessionsCompleted || 0;
  const total = state.currentUser.sessionsTotal || mentoringData.totalSessions;
  const t = translations[state.currentLang];
  // Ensure progress bar and progress text are visible
  document.querySelector('.progress-bar-wrapper').style.display = '';
  sessionsList.style.display = '';
  // Hide teacher/admin mentor containers
  if (teacherMentorContainer) teacherMentorContainer.classList.add('hidden');
  if (adminMentorContainer) adminMentorContainer.classList.add('hidden');
  // Update progress bar
  const percent = total > 0 ? (completed / total) * 100 : 0;
  progressBarFill.style.width = `${percent}%`;
  progressText.textContent = t.studentSessions(completed, total);
  // Build sessions list from the student's own sessions array; fall back to mentoringData template if absent
  sessionsList.innerHTML = '';
  const userSessions = state.currentUser.sessions || [];
  for (let idx = 0; idx < total; idx++) {
    // Determine if this session is completed and its date
    const session = userSessions[idx];
    const completedFlag = session ? session.completed : idx < completed;
    const date = session ? session.date : (mentoringData.sessions[idx] ? mentoringData.sessions[idx].date : '');
    const title = `Session ${idx + 1}`;
    const li = document.createElement('li');
    if (completedFlag) li.classList.add('completed');
    const icon = document.createElement('span');
    icon.className = 'session-icon';
    icon.textContent = completedFlag ? '✔️' : '○';
    const text = document.createElement('span');
    text.textContent = date ? `${title} - ${date}` : title;
    li.appendChild(icon);
    li.appendChild(text);
    sessionsList.appendChild(li);
  }
}

// Display mentoring overview for teachers. Shows their students and allows editing of sessions.
function updateTeacherMentoring() {
  const t = translations[state.currentLang];
  // Hide student progress bar and sessions list
  document.querySelector('.progress-bar-wrapper').style.display = 'none';
  sessionsList.style.display = 'none';
  // Hide admin container and show teacher container
  if (adminMentorContainer) adminMentorContainer.classList.add('hidden');
  if (teacherMentorContainer) {
    teacherMentorContainer.classList.remove('hidden');
    teacherMentorContainer.innerHTML = '';
    teacherMentorContainer.classList.add('mentor-container');
  }
  const teacher = users.find(u => u.email === state.currentUser.email);
  if (!teacher || !teacher.students || teacher.students.length === 0) {
    const div = document.createElement('div');
    div.className = 'mentor-item';
    div.textContent = t.noStudents;
    if (teacherMentorContainer) teacherMentorContainer.appendChild(div);
    return;
  }
  teacher.students.forEach(studentEmail => {
    const student = users.find(u => u.email === studentEmail);
    if (!student) return;
    const total = student.sessionsTotal || mentoringData.totalSessions;
    const completed = student.sessionsCompleted || 0;
    // ensure sessions array exists and length matches total
    if (!student.sessions) student.sessions = [];
    for (let i = 0; i < total; i++) {
      if (!student.sessions[i]) {
        student.sessions[i] = { title: `Session ${i + 1}`, date: '', completed: i < completed };
      } else {
        // update completed flag for indices beyond completed sessions
        student.sessions[i].completed = i < completed;
      }
    }
    // container for student item
    const item = document.createElement('div');
    item.className = 'mentor-item';
    // header with student's email and progress
    const header = document.createElement('div');
    header.className = 'mentor-header';
    header.textContent = `${student.email} - ${t.studentSessions(completed, total)}`;
    item.appendChild(header);
    // list of sessions with dates and completion icons
    const ul = document.createElement('ul');
    student.sessions.forEach(sess => {
      const li = document.createElement('li');
      const icon = document.createElement('span');
      icon.className = 'session-icon';
      icon.textContent = sess.completed ? '✔️' : '○';
      const text = document.createElement('span');
      text.textContent = sess.date ? `${sess.title} - ${sess.date}` : sess.title;
      li.appendChild(icon);
      li.appendChild(text);
      ul.appendChild(li);
    });
    item.appendChild(ul);
    // Edit sessions button
    const editBtn = document.createElement('button');
    editBtn.className = 'secondary-btn';
    editBtn.textContent = t.editSessions;
    editBtn.addEventListener('click', () => {
      const totalStr = prompt(t.totalSessionsPrompt, student.sessionsTotal || mentoringData.totalSessions);
      if (totalStr === null) return;
      const newTotal = parseInt(totalStr);
      if (isNaN(newTotal) || newTotal <= 0) return;
      const compStr = prompt(t.completedSessionsPrompt, student.sessionsCompleted || 0);
      if (compStr === null) return;
      const newCompleted = parseInt(compStr);
      if (isNaN(newCompleted) || newCompleted < 0 || newCompleted > newTotal) return;
      // Prompt for dates of completed sessions
      const existingDates = student.sessions.filter(s => s.completed).map(s => s.date).join(', ');
      const datesInput = prompt(translations[state.currentLang].enterDatesPrompt, existingDates);
      const dates = datesInput ? datesInput.split(',').map(s => s.trim()).filter(Boolean) : [];
      student.sessionsTotal = newTotal;
      student.sessionsCompleted = newCompleted;
      student.sessions = [];
      for (let i = 0; i < newTotal; i++) {
        const completedFlag = i < newCompleted;
        student.sessions.push({ title: `Session ${i + 1}`, date: completedFlag ? (dates[i] || '') : '', completed: completedFlag });
      }
      alert(t.sessionsUpdated);
      updateMentoring();
    });
    item.appendChild(editBtn);
    teacherMentorContainer.appendChild(item);
  });
}

// Display mentoring overview for admins. Shows all teachers and their students with the ability to edit.
function updateAdminMentoring() {
  const t = translations[state.currentLang];
  // Hide student progress bar and sessions list
  document.querySelector('.progress-bar-wrapper').style.display = 'none';
  sessionsList.style.display = 'none';
  // Hide teacher container and show admin container
  if (teacherMentorContainer) teacherMentorContainer.classList.add('hidden');
  if (adminMentorContainer) {
    adminMentorContainer.classList.remove('hidden');
    adminMentorContainer.innerHTML = '';
    adminMentorContainer.classList.add('mentor-container');
  }
  const teachers = users.filter(u => u.role === 'teacher');
  if (teachers.length === 0) {
    const div = document.createElement('div');
    div.className = 'mentor-item';
    div.textContent = t.noTeachers;
    if (adminMentorContainer) adminMentorContainer.appendChild(div);
    return;
  }
  teachers.forEach(teacher => {
    // Create mentor item for each teacher
    const teacherItem = document.createElement('div');
    teacherItem.className = 'mentor-item';
    // Header acts as toggle to show students
    const header = document.createElement('div');
    header.className = 'mentor-header';
    header.style.cursor = 'pointer';
    header.textContent = teacher.email;
    teacherItem.appendChild(header);
    // List of students hidden by default
    const studentsList = document.createElement('ul');
    studentsList.style.display = 'none';
    studentsList.style.listStyle = 'none';
    // Build each student item
    const teacherStudents = teacher.students || [];
    teacherStudents.forEach(studentEmail => {
      const student = users.find(u => u.email === studentEmail);
      if (!student) return;
      const total = student.sessionsTotal || mentoringData.totalSessions;
      const completed = student.sessionsCompleted || 0;
      const li = document.createElement('li');
      // Info text
      const info = document.createElement('span');
      info.textContent = `${student.email} - ${t.studentSessions(completed, total)}`;
      li.appendChild(info);
      // Edit button
      const editBtn = document.createElement('button');
      editBtn.className = 'secondary-btn';
      editBtn.textContent = t.editSessions;
      editBtn.addEventListener('click', () => {
        const totalStr = prompt(t.totalSessionsPrompt, student.sessionsTotal || mentoringData.totalSessions);
        if (totalStr === null) return;
        const newTotal = parseInt(totalStr);
        if (isNaN(newTotal) || newTotal <= 0) return;
        const compStr = prompt(t.completedSessionsPrompt, student.sessionsCompleted || 0);
        if (compStr === null) return;
        const newCompleted = parseInt(compStr);
        if (isNaN(newCompleted) || newCompleted < 0 || newCompleted > newTotal) return;
        const existingDates = student.sessions && student.sessions.filter(s => s.completed).map(s => s.date).join(', ') || '';
        const datesInput = prompt(translations[state.currentLang].enterDatesPrompt, existingDates);
        const dates = datesInput ? datesInput.split(',').map(s => s.trim()).filter(Boolean) : [];
        student.sessionsTotal = newTotal;
        student.sessionsCompleted = newCompleted;
        student.sessions = [];
        for (let i = 0; i < newTotal; i++) {
          const completedFlag = i < newCompleted;
          student.sessions.push({ title: `Session ${i + 1}`, date: completedFlag ? (dates[i] || '') : '', completed: completedFlag });
        }
        alert(t.sessionsUpdated);
        updateMentoring();
      });
      li.appendChild(editBtn);
      studentsList.appendChild(li);
    });
    // Toggle show/hide on header click
    header.addEventListener('click', () => {
      studentsList.style.display = studentsList.style.display === 'none' ? 'block' : 'none';
    });
    teacherItem.appendChild(studentsList);
    if (adminMentorContainer) adminMentorContainer.appendChild(teacherItem);
  });
}

function buildAdminList() {
  if (!state.currentUser || (state.currentUser.role !== 'admin' && state.currentUser.role !== 'teacher')) return;
  moduleListEl.innerHTML = '';
  const t = translations[state.currentLang];
  modules.forEach(module => {
    const item = document.createElement('div');
    item.className = 'module-item';
    const title = document.createElement('span');
    title.textContent = `${module.name}`;
    item.appendChild(title);
    // Buttons vary by role
    if (state.currentUser.role === 'admin') {
      const editBtn = document.createElement('button');
      editBtn.className = 'secondary-btn';
      editBtn.textContent = t.edit;
      editBtn.addEventListener('click', () => {
        const newName = prompt(translations[state.currentLang].renameModulePrompt, module.name);
        if (newName) module.name = newName;
        translate();
      });
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'secondary-btn';
      deleteBtn.textContent = t.delete;
      deleteBtn.addEventListener('click', () => {
        if (confirm(translations[state.currentLang].deleteConfirm)) {
          modules = modules.filter(m => m !== module);
          translate();
        }
      });
      const addChapterBtn = document.createElement('button');
      addChapterBtn.className = 'secondary-btn';
      addChapterBtn.textContent = '+';
      addChapterBtn.title = translations[state.currentLang].newChapterNamePrompt;
      addChapterBtn.addEventListener('click', () => {
        const name = prompt(translations[state.currentLang].newChapterNamePrompt);
        if (name) {
          const id = module.chapters.length ? module.chapters[module.chapters.length - 1].id + 1 : 1;
          module.chapters.push({ id, title: name, video: '', pdfDesc: '', pdfUrl: '' });
          translate();
        }
      });
      item.appendChild(editBtn);
      item.appendChild(deleteBtn);
      item.appendChild(addChapterBtn);
    }
    // upload video & pdf allowed for both admin and teacher
    const uploadVideoBtn = document.createElement('button');
    uploadVideoBtn.className = 'secondary-btn';
    uploadVideoBtn.textContent = t.uploadVideo;
    uploadVideoBtn.addEventListener('click', () => {
      const list = module.chapters.map((ch, i) => `${i + 1}. ${ch.title}`).join('\n');
      const idxStr = prompt(translations[state.currentLang].selectVideoChapterPrompt + list);
      const idx = parseInt(idxStr) - 1;
      if (!isNaN(idx) && module.chapters[idx]) {
        const url = prompt(translations[state.currentLang].enterVideoUrlPrompt);
        if (url) {
          module.chapters[idx].video = url;
          alert(translations[state.currentLang].videoUpdated);
        }
      }
    });
    const uploadPdfBtn = document.createElement('button');
    uploadPdfBtn.className = 'secondary-btn';
    uploadPdfBtn.textContent = t.uploadPdf;
    uploadPdfBtn.addEventListener('click', () => {
      const list = module.chapters.map((ch, i) => `${i + 1}. ${ch.title}`).join('\n');
      const idxStr = prompt(translations[state.currentLang].selectPdfChapterPrompt + list);
      const idx = parseInt(idxStr) - 1;
      if (!isNaN(idx) && module.chapters[idx]) {
        const url = prompt(translations[state.currentLang].enterPdfUrlPrompt);
        const desc = prompt(translations[state.currentLang].enterPdfDescPrompt);
        if (url) {
          module.chapters[idx].pdfUrl = url;
          module.chapters[idx].pdfDesc = desc || module.chapters[idx].pdfDesc;
          alert(translations[state.currentLang].pdfUpdated);
        }
      }
    });
    item.appendChild(uploadVideoBtn);
    item.appendChild(uploadPdfBtn);
    moduleListEl.appendChild(item);
  });
}

// Build user management list (admin)
function buildUserList() {
  if (!userListEl) return;
  // hide by default
  if (!state.currentUser || state.currentUser.role !== 'admin') {
    if (userManagementTitleEl) userManagementTitleEl.style.display = 'none';
    if (addUserBtn) addUserBtn.style.display = 'none';
    userListEl.style.display = 'none';
    return;
  }
  const t = translations[state.currentLang];
  if (userManagementTitleEl) userManagementTitleEl.style.display = '';
  if (addUserBtn) addUserBtn.style.display = '';
  userListEl.style.display = '';
  userListEl.innerHTML = '';
  users.forEach((u) => {
    const item = document.createElement('div');
    item.className = 'user-item';
    const info = document.createElement('span');
    info.textContent = `${u.email} (${u.role})`;
    item.appendChild(info);
    const actions = document.createElement('div');
    actions.className = 'user-actions';
    // change password button
    const pwdBtn = document.createElement('button');
    pwdBtn.className = 'secondary-btn';
    pwdBtn.textContent = t.changePassword;
    pwdBtn.addEventListener('click', () => {
      const newPwd = prompt(t.newPasswordPrompt);
      if (newPwd) {
        u.password = newPwd;
        alert(t.passwordUpdated);
      }
    });
    // delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'secondary-btn';
    delBtn.textContent = t.delete;
    delBtn.addEventListener('click', () => {
      if (u.email === 'ben.w') {
        alert(t.cannotDeleteAdmin);
        return;
      }
      if (confirm(t.confirmDeleteUser)) {
        const index = users.indexOf(u);
        if (index >= 0) users.splice(index, 1);
        buildUserList();
      }
    });
    actions.appendChild(pwdBtn);
    actions.appendChild(delBtn);

    // Edit mentoring sessions for students (admin only)
    if (state.currentUser && state.currentUser.role === 'admin' && u.role === 'student') {
      const sessionsBtn = document.createElement('button');
      sessionsBtn.className = 'secondary-btn';
      sessionsBtn.textContent = t.editSessions;
      sessionsBtn.addEventListener('click', () => {
        const totalStr = prompt(t.totalSessionsPrompt, u.sessionsTotal || mentoringData.totalSessions);
        if (totalStr === null) return;
        const total = parseInt(totalStr);
        if (isNaN(total) || total <= 0) return;
        const completedStr = prompt(t.completedSessionsPrompt, u.sessionsCompleted || 0);
        if (completedStr === null) return;
        let completed = parseInt(completedStr);
        if (isNaN(completed) || completed < 0) completed = 0;
        if (completed > total) completed = total;
        u.sessionsTotal = total;
        u.sessionsCompleted = completed;
        alert(t.sessionsUpdated);
        buildUserList();
      });
      actions.appendChild(sessionsBtn);
    }
    item.appendChild(actions);
    userListEl.appendChild(item);
  });
}

// Build the agenda list based on current events
function buildAgenda() {
  // Clear event list
  if (!eventListEl) return;
  eventListEl.innerHTML = '';
  const t = translations[state.currentLang];
  if (!agendaEvents || agendaEvents.length === 0) {
    const li = document.createElement('li');
    li.textContent = t.noEvents;
    li.className = 'event-item empty';
    eventListEl.appendChild(li);
    return;
  }
  // Sort events by date ascending
  const sorted = [...agendaEvents].sort((a,b) => a.date.localeCompare(b.date));
  sorted.forEach((evt, index) => {
    const li = document.createElement('li');
    li.className = 'event-item';
    const header = document.createElement('div');
    header.className = 'event-header';
    // Date and title
    const dateSpan = document.createElement('span');
    dateSpan.className = 'event-date';
    dateSpan.textContent = evt.date;
    const titleSpan = document.createElement('span');
    titleSpan.className = 'event-title';
    titleSpan.textContent = evt.title;
    header.appendChild(dateSpan);
    header.appendChild(titleSpan);
    li.appendChild(header);
    // Description
    const descP = document.createElement('p');
    descP.className = 'event-desc';
    descP.textContent = evt.description;
    li.appendChild(descP);
    // Actions for teacher/admin
    if (state.currentUser && (state.currentUser.role === 'teacher' || state.currentUser.role === 'admin')) {
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'event-actions';
      const editBtn = document.createElement('button');
      editBtn.textContent = t.editEvent;
      editBtn.className = 'secondary-btn';
      editBtn.addEventListener('click', () => {
        // prompt for new values
        const newDate = prompt(t.eventDatePrompt, evt.date);
        if (!newDate) return;
        const newTitle = prompt(t.eventTitlePrompt, evt.title);
        if (!newTitle) return;
        const newDesc = prompt(t.eventDescPrompt, evt.description);
        if (newDesc === null) return;
        agendaEvents[index] = { date: newDate, title: newTitle, description: newDesc };
        alert(t.eventUpdated);
        buildAgenda();
      });
      const delBtn = document.createElement('button');
      delBtn.textContent = t.deleteEvent;
      delBtn.className = 'secondary-btn';
      delBtn.addEventListener('click', () => {
        if (confirm(t.deleteConfirm)) {
          agendaEvents.splice(index, 1);
          alert(t.eventDeleted);
          buildAgenda();
        }
      });
      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(delBtn);
      li.appendChild(actionsDiv);
    }
    eventListEl.appendChild(li);
  });
}

// Show agenda view
function updateAgenda() {
  // call buildAgenda to refresh the legacy event list (fallback). Not used in calendar view but kept for non-JS support
  buildAgenda();
  // initialize or refresh the main calendar and mini calendar asynchronously to ensure DOM is ready
  setTimeout(() => {
    initCalendar();
    // The mini calendar has been removed; only initialise the main calendar
    setupAgendaControls();
    // hide the legacy list when the calendar is available
    if (eventListEl) {
      eventListEl.style.display = 'none';
    }
    // update the title after initialization
    updateCalendarTitle();
  }, 0);
  // show agenda view
  showView('agenda');
}

// Initialise the FullCalendar instance. It replicates Google Calendar views and
// allows editing only for teachers and admins. It is re-rendered whenever
// agendaEvents or language settings change.
function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;
  // Destroy existing instance to avoid duplication
  if (calendarInstance) {
    calendarInstance.destroy();
    calendarInstance = null;
  }
  const editable = state.currentUser && (state.currentUser.role === 'admin' || state.currentUser.role === 'teacher');
  // Map agendaEvents to FullCalendar event objects. Use index as id so we can
  // track modifications.
  const events = agendaEvents.map((evt, idx) => ({ id: String(idx), title: evt.title, start: evt.date, description: evt.description }));
  calendarInstance = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    // We hide the internal header since we provide our own navigation bar
    headerToolbar: false,
    locale: state.currentLang === 'en' ? 'en' : state.currentLang === 'es' ? 'es' : 'fr',
    // enable selecting and editing based on role
    selectable: editable,
    editable: editable,
    events: events,
    eventClick: function(info) {
      // index is stored in id
      const idx = parseInt(info.event.id);
      if (isNaN(idx)) return;
      const t = translations[state.currentLang];
      if (editable) {
        const newDate = prompt(t.eventDatePrompt, agendaEvents[idx].date);
        if (!newDate) return;
        const newTitle = prompt(t.eventTitlePrompt, agendaEvents[idx].title);
        if (!newTitle) return;
        const newDesc = prompt(t.eventDescPrompt, agendaEvents[idx].description);
        if (newDesc === null) return;
        agendaEvents[idx] = { date: newDate, title: newTitle, description: newDesc };
        alert(t.eventUpdated);
        updateAgenda();
      } else {
        // For students, simply show description
        if (agendaEvents[idx].description) {
          alert(agendaEvents[idx].description);
        }
      }
    },
    select: function(info) {
      if (!editable) return;
      const t = translations[state.currentLang];
      const startDate = info.startStr.substring(0, 10);
      const title = prompt(t.eventTitlePrompt);
      if (!title) {
        calendarInstance.unselect();
        return;
      }
      const desc = prompt(t.eventDescPrompt);
      if (desc === null) {
        calendarInstance.unselect();
        return;
      }
      agendaEvents.push({ date: startDate, title: title, description: desc });
      alert(t.eventAdded);
      updateAgenda();
    },
    eventDidMount: function(info) {
      if (info.event.extendedProps && info.event.extendedProps.description) {
        info.el.title = info.event.extendedProps.description;
      }
    }
  });
  calendarInstance.render();
  // Ensure the default view is month
  calendarInstance.changeView('dayGridMonth');
  // update the custom title after render
  updateCalendarTitle();
}

// Initialise or refresh the mini calendar (month overview) in the agenda sidebar.
function initMiniCalendar() {
  if (!miniCalendarEl) return;
  // destroy existing mini calendar instance to avoid duplication
  if (miniCalendarInstance) {
    miniCalendarInstance.destroy();
    miniCalendarInstance = null;
  }
  // build events to highlight days with events
  const miniEvents = agendaEvents.map(evt => ({ title: evt.title, start: evt.date }));
  miniCalendarInstance = new FullCalendar.Calendar(miniCalendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    height: 'auto',
    // disable editing/selecting on mini calendar
    selectable: false,
    editable: false,
    events: miniEvents,
    // clicking on a date navigates the main calendar to that date
    dateClick: function(info) {
      if (calendarInstance) {
        calendarInstance.gotoDate(info.dateStr);
        updateCalendarTitle();
      }
    },
    eventContent: function(arg) {
      // render small dot to represent events in mini calendar
      return { html: '<span class="mini-event-dot" style="display:inline-block;width:6px;height:6px;background-color:#4F2A91;border-radius:50%; margin-top:4px;"></span>' };
    }
  });
  miniCalendarInstance.render();
}

// Update the custom title showing the current date range of the main calendar
function updateCalendarTitle() {
  if (calendarCurrentTitleEl && calendarInstance) {
    calendarCurrentTitleEl.textContent = calendarInstance.view.title;
  }
}

// Attach event handlers to the agenda controls (top bar buttons and create button)
function setupAgendaControls() {
  // update title initially
  updateCalendarTitle();
  // Today button navigates to today and updates title
  if (agendaTodayBtn) {
    agendaTodayBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.today();
        updateCalendarTitle();
      }
    };
  }
  // Prev button
  if (agendaPrevBtn) {
    agendaPrevBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.prev();
        updateCalendarTitle();
      }
    };
  }
  // Next button
  if (agendaNextBtn) {
    agendaNextBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.next();
        updateCalendarTitle();
      }
    };
  }
  // View buttons
  if (agendaDayBtn) {
    agendaDayBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.changeView('timeGridDay');
        updateCalendarTitle();
      }
    };
  }
  if (agendaWeekBtn) {
    agendaWeekBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.changeView('timeGridWeek');
        updateCalendarTitle();
      }
    };
  }
  if (agendaMonthBtn) {
    agendaMonthBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.changeView('dayGridMonth');
        updateCalendarTitle();
      }
    };
  }
  if (agendaListBtn) {
    agendaListBtn.onclick = () => {
      if (calendarInstance) {
        calendarInstance.changeView('listWeek');
        updateCalendarTitle();
      }
    };
  }
  // Create event button prompts for new event details (only visible for teacher/admin)
  if (createEventBtn) {
    createEventBtn.onclick = () => {
      if (!(state.currentUser && (state.currentUser.role === 'admin' || state.currentUser.role === 'teacher'))) {
        return;
      }
      const t = translations[state.currentLang];
      const date = prompt(t.eventDatePrompt);
      if (!date) return;
      const title = prompt(t.eventTitlePrompt);
      if (!title) return;
      const desc = prompt(t.eventDescPrompt);
      if (desc === null) return;
      agendaEvents.push({ date: date, title: title, description: desc });
      alert(t.eventAdded);
      updateAgenda();
    };
  }
}

// Event handlers
applyBtn.addEventListener('click', () => showModal(authModal));
homeLoginBtn.addEventListener('click', () => showModal(authModal));
authClose.addEventListener('click', () => hideModal(authModal));
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const user = login(email, password);
  if (user) {
    state.currentUser = { ...user }; // copy to avoid mutating original
    hideModal(authModal);
    updateAfterLogin();
    buildCurriculum();
    buildAdminList();
    updateMentoring();
  } else {
    alert(translations[state.currentLang].invalidCredentials);
  }
});

aiClose.addEventListener('click', () => hideModal(aiModal));

askAiBtn.addEventListener('click', () => {
  if (!state.activeModuleId || !state.activeChapterId) {
    alert(translations[state.currentLang].noChapterSelected);
    return;
  }
  showModal(aiModal);
  aiChat.innerHTML = `<p>${translations[state.currentLang].aiWelcome}</p>`;
});

aiForm.addEventListener('submit', e => {
  e.preventDefault();
  const question = aiInput.value.trim();
  if (!question) return;
  // display user message
  const userP = document.createElement('p');
  const t = translations[state.currentLang];
  userP.innerHTML = `<strong>${t.userLabel}</strong> ${question}`;
  aiChat.appendChild(userP);
  // clear input
  aiInput.value = '';
  // simulate thinking
  const thinking = document.createElement('p');
  thinking.textContent = '…';
  aiChat.appendChild(thinking);
  aiChat.scrollTop = aiChat.scrollHeight;
  // simulate AI response after delay
  setTimeout(() => {
    thinking.remove();
    const module = modules.find(m => m.id === state.activeModuleId);
    const chapter = module.chapters.find(ch => ch.id === state.activeChapterId);
    const aiResp = document.createElement('p');
    const t2 = translations[state.currentLang];
    aiResp.innerHTML = `<strong>${t2.aiLabel}</strong> ${t2.aiGenericResponsePrefix} "${chapter.title}". ${t2.aiGenericResponseSuffix}`;
    aiChat.appendChild(aiResp);
    aiChat.scrollTop = aiChat.scrollHeight;
  }, 1000);
});

// Logout / switch account button
// Logout and change account events
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    // reset current user and return to visitor mode
    state.currentUser = null;
    state.activeModuleId = null;
    state.activeChapterId = null;
    updateAfterLogin();
    translate();
  });
}

if (changeAccountBtn) {
  changeAccountBtn.addEventListener('click', () => {
    // reset current user and open login modal directly
    state.currentUser = null;
    state.activeModuleId = null;
    state.activeChapterId = null;
    updateAfterLogin();
    translate();
    // open login modal to choose another account
    showModal(authModal);
  });
}

navCoursesBtn.addEventListener('click', () => showView('courses'));
// When navigating to mentoring, render the appropriate view for the current user
navMentoringBtn.addEventListener('click', () => {
  showView('mentoring');
  updateMentoring();
});
navAdminBtn.addEventListener('click', () => showView('admin'));

// Agenda navigation
if (navAgendaBtn) {
  navAgendaBtn.addEventListener('click', () => {
    updateAgenda();
  });
}

// Mobile agenda navigation
if (mobileNavAgenda) {
  mobileNavAgenda.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    updateAgenda();
  });
}

// Add event button for teacher/admin
if (addEventBtn) {
  addEventBtn.addEventListener('click', () => {
    const t = translations[state.currentLang];
    const date = prompt(t.eventDatePrompt);
    if (!date) return;
    const title = prompt(t.eventTitlePrompt);
    if (!title) return;
    const desc = prompt(t.eventDescPrompt);
    if (desc === null) return;
    agendaEvents.push({ date, title, description: desc });
    alert(t.eventAdded);
    buildAgenda();
  });
}

addModuleBtn.addEventListener('click', () => {
  const name = prompt(translations[state.currentLang].newModuleNamePrompt);
  if (name) {
    const id = modules.length ? Math.max(...modules.map(m => m.id)) + 1 : 1;
    modules.push({ id, name, chapters: [] });
    translate();
  }
});

// Add user button (admin)
if (addUserBtn) {
  addUserBtn.addEventListener('click', () => {
    const t = translations[state.currentLang];
    const email = prompt(t.userEmailPrompt);
    if (!email) return;
    const password = prompt(t.userPasswordPrompt);
    if (!password) return;
    const role = prompt(t.userRolePrompt);
    if (!role) return;
    users.push({ email: email.trim(), password: password.trim(), role: role.trim() });
    alert(t.userAdded);
    buildUserList();
  });
}

// Role switcher removed – authentication occurs only via login

// Mobile navigation events
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });
}
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
}
if (mobileNavCourses) {
  mobileNavCourses.addEventListener('click', () => {
    showView('courses');
    mobileMenu.classList.add('hidden');
  });
}
if (mobileNavMentoring) {
  mobileNavMentoring.addEventListener('click', () => {
    showView('mentoring');
    mobileMenu.classList.add('hidden');
  });
}
if (mobileNavAdmin) {
  mobileNavAdmin.addEventListener('click', () => {
    showView('admin');
    mobileMenu.classList.add('hidden');
  });
}

// Language FAB actions
langFab.addEventListener('click', () => {
  langSelector.classList.toggle('hidden');
});
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.getAttribute('data-lang');
    state.currentLang = selected;
    langSelector.classList.add('hidden');
    translate();
  });
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  translate();
  updateAfterLogin();
  buildCurriculum();

  // Parallax effect for hero background: on scroll, move the background slower than the page
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.3;
      heroBg.style.transform = `translateX(-50%) translateY(${y}px)`;
    });
  }
});