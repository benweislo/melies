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
    applyBtn: "Connexion", // CORRECTION: Changé de "Candidater" à "Connexion"
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
    applyBtn: "Login", // CORRECTION: Changed from "Apply" to "Login"
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
    applyBtn: "Iniciar sesión", // CORRECTION: Changed from "Solicitar" to "Iniciar sesión"
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

// CORRECTION: Fonction pour générer des dates de session espacées d'une semaine
function generateWeeklySessions(startDate, total, completed) {
    const sessions = [];
    let currentDate = new Date(startDate);
    for (let i = 0; i < total; i++) {
        sessions.push({
            title: `Session ${i + 1}`,
            date: currentDate.toISOString().split('T')[0], // Format YYYY-MM-DD
            completed: i < completed
        });
        currentDate.setDate(currentDate.getDate() + 7); // Ajoute 7 jours
    }
    return sessions;
}

// User accounts with mentoring associations.
const users = [
  {
    email: 'nathan.w',
    password: 'Secret123',
    role: 'student',
    modulesPurchased: [4],
    sessionsTotal: 12,
    sessionsCompleted: 3,
    sessions: generateWeeklySessions('2025-01-12', 12, 3),
    teacher: 'teacher1',
  },
  {
    email: 'ben.w',
    password: 'Secret123',
    role: 'admin',
  },
  {
    email: 'patrick.w',
    password: 'Secret123',
    role: 'teacher',
    students: ['nathan.w'],
  },
  {
    email: 'teacher1',
    password: 'Secret123',
    role: 'teacher',
    students: ['student1'],
  },
  {
    email: 'student1',
    password: 'Secret123',
    role: 'student',
    modulesPurchased: [4],
    sessionsTotal: 12,
    sessionsCompleted: 3,
    sessions: generateWeeklySessions('2025-01-12', 12, 3),
    teacher: 'teacher1',
  },
];

// Modules and chapters data
// CORRECTION: Restauration de la liste complète des chapitres
let modules = [
  {
    id: 4,
    name: 'Animation d’Excellence',
    chapters: [
      {
        id: 1,
        title: 'Informations',
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
        poster: 'thumbnail.jpg',
      },
      {
        id: 2,
        title: 'Logique des poids',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
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
        poster: 'thumbnail.jpg',
      },
    ],
  },
];


// Agenda events data
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

// Global reference to FullCalendar instance
let calendarInstance = null;
let miniCalendarInstance = null;

// Global state
const state = {
  currentLang: 'fr',
  currentUser: null,
  activeView: 'home',
  activeModuleId: null,
  activeChapterId: null,
};

// Element references
const logoEl = document.querySelector('#header .logo'); // CORRECTION: Ajout de la référence au logo
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

if (addModuleBtn) {
  addModuleBtn.addEventListener('click', () => {
    const t = translations[state.currentLang];
    const moduleName = prompt(t.newModuleNamePrompt);
    if (moduleName) {
      const newModule = {
        id: modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1,
        name: moduleName,
        chapters: [] // New modules start with no chapters
      };
      modules.push(newModule);
      buildAdminList();
      buildCurriculum();
    }
  });
}
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

if (addUserBtn) {
  addUserBtn.addEventListener('click', async () => {
    const t = translations[state.currentLang];
    const email = prompt(t.userEmailPrompt);
    const password = prompt(t.userPasswordPrompt);
    const role = prompt(t.userRolePrompt);

    if (email && password && role) {
      if (!['student', 'teacher', 'admin'].includes(role)) {
        alert('Invalid role specified.');
        return;
      }

      const token = localStorage.getItem('token');
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ email, username: email, password, role }) // Using email as username for simplicity
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to add user');
        }

        alert(t.userAdded);
        buildUserList(); // Refresh the list
      } catch (error) {
        alert(error.message);
      }
    }
  });
}

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
const createEventBtn = document.getElementById('create-event-btn');
const agendaTodayBtn = document.getElementById('agenda-today-btn');
const agendaPrevBtn = document.getElementById('agenda-prev-btn');
const agendaNextBtn = document.getElementById('agenda-next-btn');
const calendarCurrentTitleEl = document.getElementById('calendar-current-title');
const agendaDayBtn = document.getElementById('agenda-day-btn');
const agendaWeekBtn = document.getElementById('agenda-week-btn');
const agendaMonthBtn = document.getElementById('agenda-month-btn');
const agendaListBtn = document.getElementById('agenda-list-btn');
const agendaSearchInput = document.getElementById('agenda-search');
const eventListEl = document.getElementById('event-list');
const mobileNavAgenda = document.getElementById('mobile-nav-agenda');

// CORRECTION: Fonction d'aide pour mettre à jour le contenu en toute sécurité
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

// CORRECTION: La fonction de traduction est maintenant plus robuste
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
    'ai-title': { prop: 'textContent', key: 'aiAssistantTitle' },
    'ai-input': { prop: 'placeholder', key: 'askAIPrompt' },
    'download-pdf-btn': { prop: 'textContent', key: 'pdfDownload' },
    'ask-ai-btn': { prop: 'textContent', key: 'askAIButton' },
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

  const emailLabel = loginForm.querySelector('label[for="email"]');
  if (emailLabel) emailLabel.textContent = t.loginEmail;
  const pwdLabel = loginForm.querySelector('label[for="password"]');
  if (pwdLabel) pwdLabel.textContent = t.loginPassword;
  const submitBtn = loginForm.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.textContent = t.loginSubmit;
  
  const aiSendBtn = aiForm.querySelector('button[type="submit"]');
  if (aiSendBtn) aiSendBtn.textContent = t.send;

  langButtons.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === 'fr') btn.textContent = t.languageFrench;
    if (lang === 'en') btn.textContent = t.languageEnglish;
    if (lang === 'es') btn.textContent = t.languageSpanish;
  });

  updateMentoring();
  buildCurriculum();
  buildAdminList();
  buildUserList();
  buildAgenda();
}


function showModal(modal) {
  modal.classList.remove('hidden');
}

function hideModal(modal) {
  modal.classList.add('hidden');
}

function showView(name) {
  state.activeView = name;

  // Hide all views first
  homeView.classList.add('hidden');
  coursesView.classList.add('hidden');
  mentoringView.classList.add('hidden');
  adminView.classList.add('hidden');
  if (agendaView) agendaView.classList.add('hidden');

  // Deactivate all sidebar buttons
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));

  // Show the correct view and build its content
  switch (name) {
    case 'home':
      homeView.classList.remove('hidden');
      break;
    case 'courses':
      coursesView.classList.remove('hidden');
      if(navCoursesBtn) navCoursesBtn.classList.add('active');
      // buildCurriculum() is called on login, which is sufficient for now.
      break;
    case 'mentoring':
      mentoringView.classList.remove('hidden');
      if(navMentoringBtn) navMentoringBtn.classList.add('active');
      updateMentoring(); // Call the build function
      break;
    case 'admin':
      adminView.classList.remove('hidden');
      if(navAdminBtn) navAdminBtn.classList.add('active');
      buildUserList();    // Call the build function for users
      buildAdminList();   // Call the build function for modules
      break;
    case 'agenda':
      if (agendaView) {
        agendaView.classList.remove('hidden');
        if(navAgendaBtn) navAgendaBtn.classList.add('active');
        updateAgenda(); // Call the function that initializes the calendar
      }
      break;
  }
}

// The login function is now handled by the API call in the form submit event listener.
// The mock 'login' function is no longer needed.

function updateAfterLogin() {
  if (state.currentUser) {
    if (userInfoEl && userLabelEl) {
      userLabelEl.textContent = `${state.currentUser.email} - ${state.currentUser.role}`;
      userInfoEl.classList.remove('hidden');
    }
    applyBtn.style.display = 'none';
    homeLoginBtn.style.display = 'none';
    sidebar.classList.remove('hidden');
    if (state.currentUser.role === 'admin') {
      adminNavLi.classList.remove('hidden');
      if (mobileAdminLi) mobileAdminLi.classList.remove('hidden');
    } else {
      adminNavLi.classList.add('hidden');
      if (mobileAdminLi) mobileAdminLi.classList.add('hidden');
    }

    // Set the initial view, which will trigger the build functions via the new showView
    if (state.currentUser.role === 'admin') {
      showView('admin');
    } else {
      showView('courses');
    }

    if (state.currentUser.role === 'admin') {
      addModuleBtn.style.display = '';
    } else {
      addModuleBtn.style.display = 'none';
    }
    if (createEventBtn) {
      if (state.currentUser.role === 'teacher' || state.currentUser.role === 'admin') {
        createEventBtn.classList.remove('hidden');
      } else {
        createEventBtn.classList.add('hidden');
      }
    }
    // The build functions are now called by showView, so no need to call them here.
    // We only need to build the curriculum once on login.
    buildCurriculum();
  } else {
    if (userInfoEl) userInfoEl.classList.add('hidden');
    applyBtn.style.display = '';
    homeLoginBtn.style.display = '';
    sidebar.classList.add('hidden');
    showView('home');
  }
}

function buildCurriculum() {
  if(!curriculumEl) return;
  curriculumEl.innerHTML = '';
  const t = translations[state.currentLang];
  modules.forEach(module => {
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
  const videoEl = document.getElementById('course-video');
  if (chapter.video) {
    videoEl.src = chapter.video;
  } else {
    videoEl.removeAttribute('src');
  }
  videoEl.poster = chapter.poster || 'thumbnail.jpg';
  videoEl.load();
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

  if (chapterDescEl) {
    if (chapter.description) {
      chapterDescEl.innerHTML = chapter.description;
      chapterDescEl.classList.remove('hidden');
    } else {
      chapterDescEl.innerHTML = '';
      chapterDescEl.classList.add('hidden');
    }
  }

  if (adminUploadSectionEl) {
    if (state.currentUser && state.currentUser.role === 'admin') {
      adminUploadSectionEl.classList.remove('hidden');
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
  }
}

function updateStudentMentoring() {
  const t = translations[state.currentLang];
  const completed = state.currentUser.sessionsCompleted || 0;
  const total = state.currentUser.sessionsTotal || 12;
  document.querySelector('.progress-bar-wrapper').style.display = '';
  sessionsList.style.display = '';
  if (teacherMentorContainer) teacherMentorContainer.classList.add('hidden');
  if (adminMentorContainer) adminMentorContainer.classList.add('hidden');
  const percent = total > 0 ? (completed / total) * 100 : 0;
  progressBarFill.style.width = `${percent}%`;
  progressText.textContent = t.studentSessions(completed, total);
  sessionsList.innerHTML = '';
  const userSessions = state.currentUser.sessions || [];
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
    sessionsList.appendChild(li);
  }
}

function updateTeacherMentoring() {
    // Implementation for teacher view
}

function updateAdminMentoring() {
    // Implementation for admin view
}

function buildAdminList() {
  if (!moduleListEl || !state.currentUser || state.currentUser.role !== 'admin') {
    if (moduleListEl) moduleListEl.innerHTML = '';
    return;
  }

  const t = translations[state.currentLang];
  moduleListEl.innerHTML = ''; // Clear previous list

  modules.forEach(module => {
    const moduleItem = document.createElement('div');
    moduleItem.className = 'module-item-admin'; // Use a different class to avoid conflicts
    moduleItem.innerHTML = `
      <span>${t.modulePrefix} ${module.id}: ${module.name}</span>
      <div class="module-actions">
        <button class="rename-module-btn" data-id="${module.id}">${t.edit}</button>
        <button class="delete-module-btn" data-id="${module.id}">${t.delete}</button>
      </div>
    `;
    moduleListEl.appendChild(moduleItem);
  });

  // Add event listeners
  moduleListEl.querySelectorAll('.rename-module-btn').forEach(button => {
    button.addEventListener('click', handleRenameModule);
  });
  moduleListEl.querySelectorAll('.delete-module-btn').forEach(button => {
    button.addEventListener('click', handleDeleteModule);
  });
}

function handleRenameModule(event) {
  const moduleId = parseInt(event.target.dataset.id, 10);
  const t = translations[state.currentLang];
  const module = modules.find(m => m.id === moduleId);
  if (module) {
    const newName = prompt(t.renameModulePrompt, module.name);
    if (newName) {
      module.name = newName;
      buildAdminList(); // Refresh admin list
      buildCurriculum(); // Refresh curriculum for all users
    }
  }
}

function handleDeleteModule(event) {
  const moduleId = parseInt(event.target.dataset.id, 10);
  const t = translations[state.currentLang];
  if (confirm(t.deleteConfirm)) {
    modules = modules.filter(m => m.id !== moduleId);
    buildAdminList(); // Refresh admin list
    buildCurriculum(); // Refresh curriculum for all users
  }
}

async function buildUserList() {
  if (!userListEl || !state.currentUser || state.currentUser.role !== 'admin') {
    if (userListEl) userListEl.innerHTML = '';
    return;
  }

  const t = translations[state.currentLang];
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('/api/users', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch users');

    const { users } = await response.json();
    userListEl.innerHTML = ''; // Clear previous list

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
      userListEl.appendChild(userItem);
    });

    // Add event listeners after creating the buttons
    userListEl.querySelectorAll('.edit-user-btn').forEach(button => {
      button.addEventListener('click', handleEditUser);
    });
    userListEl.querySelectorAll('.delete-user-btn').forEach(button => {
      button.addEventListener('click', handleDeleteUser);
    });

  } catch (error) {
    console.error('Error building user list:', error);
    userListEl.innerHTML = `<p>Error loading users.</p>`;
  }
}

async function handleEditUser(event) {
  const userId = event.target.dataset.id;
  const t = translations[state.currentLang];
  const newRole = prompt(t.userRolePrompt);

  if (newRole && ['student', 'teacher', 'admin'].includes(newRole)) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ role: newRole })
      });
      if (!response.ok) throw new Error('Failed to update user role');
      buildUserList(); // Refresh the list
    } catch (error) {
      alert(error.message);
    }
  } else if (newRole) {
    alert('Invalid role specified.');
  }
}

async function handleDeleteUser(event) {
  const userId = event.target.dataset.id;
  const t = translations[state.currentLang];
  if (confirm(t.confirmDeleteUser)) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete user');
      }
      buildUserList(); // Refresh the list
    } catch (error) {
      alert(error.message);
    }
  }
}

function buildAgenda() {
    // Implementation for building agenda
}

function updateAgenda() {
  buildAgenda();
  setTimeout(() => {
    initCalendar();
    setupAgendaControls();
    if (eventListEl) {
      eventListEl.style.display = 'none';
    }
    updateCalendarTitle();
  }, 0);
  showView('agenda');
}

function initCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl || !state.currentUser) {
    if (calendarInstance) {
        calendarInstance.destroy();
        calendarInstance = null;
    }
    return;
  }

  if (calendarInstance) {
    calendarInstance.destroy();
  }

  const editable = state.currentUser.role === 'admin' || state.currentUser.role === 'teacher';

  calendarInstance = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: false,
    locale: state.currentLang,
    selectable: editable,
    editable: editable,
    events: function(fetchInfo, successCallback, failureCallback) {
      const token = localStorage.getItem('token');
      if (!token) {
        successCallback([]);
        return;
      }

      fetch(`/api/events?start=${fetchInfo.startStr}&end=${fetchInfo.endStr}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => response.ok ? response.json() : Promise.reject('Failed to load events'))
      .then(data => successCallback(data.events || []))
      .catch(error => failureCallback(error));
    },
    height: '100%',
    eventClick: function(info) {
      console.log('Event clicked:', info.event);
    },
    select: function(info) {
      console.log('Date range selected:', info.startStr, info.endStr);
    },
    datesSet: function() {
      updateCalendarTitle();
    }
  });

  calendarInstance.render();
  updateCalendarTitle();
}

function updateCalendarTitle() {
  if (calendarCurrentTitleEl && calendarInstance) {
    calendarCurrentTitleEl.textContent = calendarInstance.view.title;
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

// Event handlers
if(logoEl) {
    logoEl.addEventListener('click', () => showView('home'));
}
applyBtn.addEventListener('click', () => showModal(authModal));
homeLoginBtn.addEventListener('click', () => showModal(authModal));
authClose.addEventListener('click', () => hideModal(authModal));
loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(errorData.error || translations[state.currentLang].invalidCredentials);
    }
    const data = await response.json();
    if (data.accessToken && data.user) {
      localStorage.setItem('token', data.accessToken);
      state.currentUser = data.user;
      hideModal(authModal);
      updateAfterLogin();
      buildCurriculum();
      if (state.activeView === 'agenda') {
        updateAgenda();
      }
    } else {
      throw new Error(translations[state.currentLang].invalidCredentials);
    }
  } catch (error) {
    alert(error.message);
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

async function callGeminiAPI(prompt, retries = 3, delay = 1000) {
    try {
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{
                role: "user",
                parts: [{ text: prompt }]
            }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Unexpected API response structure.");
        }

    } catch (error) {
        if (retries > 0) {
            await new Promise(res => setTimeout(res, delay));
            return callGeminiAPI(prompt, retries - 1, delay * 2);
        } else {
            console.error("Error calling Gemini API after multiple retries:", error);
            throw error;
        }
    }
}


aiForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const question = aiInput.value.trim();
    if (!question) return;

    const t = translations[state.currentLang];
    const submitButton = aiForm.querySelector('button[type="submit"]');

    const userP = document.createElement('p');
    userP.innerHTML = `<strong>${t.userLabel}</strong> ${question}`;
    aiChat.appendChild(userP);

    aiInput.value = '';
    aiInput.disabled = true;
    submitButton.disabled = true;

    const thinking = document.createElement('p');
    thinking.id = 'ai-thinking-indicator';
    thinking.innerHTML = `<strong>${t.aiLabel}</strong> ${t.aiThinking || '...'}`;
    aiChat.appendChild(thinking);
    aiChat.scrollTop = aiChat.scrollHeight;

    try {
        const module = modules.find(m => m.id === state.activeModuleId);
        const chapter = module.chapters.find(ch => ch.id === state.activeChapterId);
        
        const cleanDescription = chapter.description.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();

        const prompt = `Tu es un assistant pédagogique expert pour l'école d'animation en ligne "Méliès Online". Un étudiant te pose une question concernant un chapitre spécifique. Ton rôle est de fournir une réponse claire, concise et utile, en te basant sur le contexte du chapitre fourni. Sois encourageant et pédagogique.

Contexte du Chapitre:
- Titre: ${chapter.title}
- Description: ${cleanDescription}

Question de l'étudiant:
"${question}"

Ta réponse:`;

        const responseText = await callGeminiAPI(prompt);
        
        const aiResp = document.createElement('p');
        aiResp.innerHTML = `<strong>${t.aiLabel}</strong> ${responseText.replace(/\n/g, '<br>')}`;
        thinking.replaceWith(aiResp);
        aiChat.scrollTop = aiChat.scrollHeight;

    } catch (error) {
        const errorP = document.createElement('p');
        errorP.innerHTML = `<strong>${t.aiLabel}</strong> ${t.aiError || "Une erreur est survenue."}`;
        thinking.replaceWith(errorP);
        aiChat.scrollTop = aiChat.scrollHeight;
    } finally {
        aiInput.disabled = false;
        submitButton.disabled = false;
        aiInput.focus();
    }
});


if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    state.currentUser = null;
    localStorage.removeItem('token');
    updateAfterLogin();
    translate();
    showView('home');
  });
}

if (changeAccountBtn) {
  changeAccountBtn.addEventListener('click', () => {
    state.currentUser = null;
    localStorage.removeItem('token');
    updateAfterLogin();
    translate();
    showModal(authModal);
  });
}

navCoursesBtn.addEventListener('click', () => showView('courses'));
navMentoringBtn.addEventListener('click', () => showView('mentoring'));
navAdminBtn.addEventListener('click', () => showView('admin'));
if (navAgendaBtn) {
  navAgendaBtn.addEventListener('click', () => showView('agenda'));
}

if (mobileNavAgenda) {
  mobileNavAgenda.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    updateAgenda();
  });
}

langFab.addEventListener('click', () => {
  langSelector.classList.toggle('hidden');
});
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    state.currentLang = btn.getAttribute('data-lang');
    langSelector.classList.add('hidden');
    translate();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  translate();
  updateAfterLogin();
  buildCurriculum();

  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.3;
      heroBg.style.transform = `translateX(-50%) translateY(${y}px)`;
    });
  }
});

window.addEventListener('resize', () => {
    if (state.activeView === 'agenda' && calendarInstance) {
        calendarInstance.updateSize();
    }
});
