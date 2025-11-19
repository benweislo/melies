
// Default Data
const defaultUsers = [
  {
    id: 1,
    email: 'nathan.w',
    username: 'nathan.w',
    password: 'Secret123',
    role: 'student',
    modulesPurchased: [4],
    sessionsTotal: 12,
    sessionsCompleted: 3,
    teacher: 'teacher1',
    sessions: [] // Will be generated on init
  },
  {
    id: 2,
    email: 'ben.w',
    username: 'ben.w',
    password: 'Secret123',
    role: 'admin',
  },
  {
    id: 3,
    email: 'patrick.w',
    username: 'patrick.w',
    password: 'Secret123',
    role: 'teacher',
    students: ['nathan.w'],
  },
  {
    id: 4,
    email: 'teacher1',
    username: 'teacher1',
    password: 'Secret123',
    role: 'teacher',
    students: ['student1'],
  },
  {
    id: 5,
    email: 'student1',
    username: 'student1',
    password: 'Secret123',
    role: 'student',
    modulesPurchased: [4],
    sessionsTotal: 12,
    sessionsCompleted: 3,
    teacher: 'teacher1',
    sessions: [] // Will be generated on init
  },
];

const defaultModules = [
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
            <li>Masterclass : how to be imperfect</li>
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
        description: `
          <p>Maîtriser la logique d’inertie et sa répercussion dans le reste du corps. Mouvements subtils, mouvement du root, mouvement des bras.</p>
          <p><strong>Objectif du chapitre :</strong> renforcer la compréhension de la logique d’inertie des poids.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Erreurs à éviter</li>
            <li>Comment les axes de rotation diffèrent en vitesse à cause du poids</li>
            <li>Exemple comparatif : tourner la tête en tiltant et de droite à gauche</li>
            <li>Répercussion de mouvements brusques sur le reste du corps</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) : comment bien gérer les axes de rotation dans le graph editor.</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : animer un personnage qui secoue le bras. <em>Objectif :</em> comprendre l’inertie de poids avec un mouvement nerveux d’une partie lourde du corps.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
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
          <p><strong>Objectif :</strong> s’améliorer au jour le jour (pas d’exercice, seulement information).</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Repérer des gestes, mouvements ou mimiques naturels dans une vidéo ou simplement dehors et les noter</li>
            <li>Exemples de repérage</li>
            <li>Récupération d’une bibliothèque personnelle</li>
          </ul>
          <p><strong>Objectif final :</strong> développement de l’œil.</p>
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
          <p><strong>Objectif du chapitre :</strong> apprendre à gérer le timing et les transitions émotionnelles pour rendre une performance crédible et engageante.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 10 min)</li>
            <li>Importance du timing dans l’acting</li>
            <li>Comment un mauvais timing peut briser l’immersion</li>
            <li>Exemple comparatif : transition émotionnelle réussie vs ratée</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
          <ul>
            <li>Définir le beat émotionnel</li>
            <li>Comprendre la latence émotionnelle</li>
            <li>Relation entre anticipation, overlap et follow‑through</li>
          </ul>
          <p><strong>Démonstration pratique</strong> (Vidéo – 10–15 min) : cas d’étude : personnage passant de la surprise à la colère (analyse, animation, comparaison).</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : animer un personnage passant de l’ennui à l’excitation. <em>Objectif :</em> timing et micro‑détails.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations. Erreurs fréquentes. Évaluation et validation.</p>
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
          <p><strong>Objectif du chapitre :</strong> repérer cette zone et différencier les émotions éteintes des vivantes.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Importance de l’uncanny valley</li>
            <li>Comment éviter la zone « morte »</li>
            <li>Exemple comparatif : émotion type robotic/jeu vidéo et émotion humaine</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
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
          <p><strong>Objectif du chapitre :</strong> savoir bien créer ou utiliser une référence vidéo.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Erreurs à éviter</li>
            <li>Mettre deux axes de caméra pour faciliter le travail</li>
            <li>Savoir utiliser une partie de vidéo pour récupérer le timing voulu</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) :</p>
          <ul>
            <li>Placement des caméras et utilisation de RV et syncsketch</li>
            <li>Exportation au bon format (suite d’images + son calé)</li>
          </ul>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : créer une référence exploitable prête dans Maya.</p>
          <p><em>Objectif :</em> être le plus efficace possible pour avoir une référence prête.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
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
          <p>Comprendre comment insérer des « erreurs » pour amener le « plus » dans l’animation.</p>
          <p>Compréhension de la communication non verbale. Animation générique, insertion de mistakes, gestes inconscients, body language original. Différence entre l'intelligence artificielle générative et le vrai animateur.</p>
          <p><strong>Objectif du chapitre :</strong> comprendre comment insérer des « erreurs » pour amener le « plus » dans l’animation.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Compréhension de la communication non verbale</li>
            <li>Introduction à la synergologie</li>
            <li>Comment aller plus loin que l’animation générique</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) : exemples de gestes inconscients, mimics et body language.</p>
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
          <p><strong>Objectif du chapitre :</strong> maîtriser le timing des gags et comprendre les différences culturelles.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Compréhension d’un gag qui marche ou pas</li>
            <li>Ensemble d’exemples</li>
          </ul>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : faire une animation d’un gag très court. <em>Objectif :</em> maîtriser l’humour dans un plan.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
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
          <p><strong>Objectif du chapitre :</strong> faire le bon choix d’animation en fonction du contexte.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li>Introduction (Vidéo – 5 min)</li>
            <li>Comment choisir l’acting selon le contexte, le caractère et l’état présent du personnage</li>
            <li>Connaître le personnage, comprendre son contexte et ses pensées</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 1 page) : schéma de réflexion.</p>
          <p><strong>Exercice guidé</strong> (Vidéo – 5 min) : création d'une animation selon un contexte donné (cf. vidéo “i don’t know test” de la masterclass “how to be imperfect”). <em>Objectif :</em> maîtriser la réflexion derrière le choix d’un acting.</p>
          <p><strong>Analyse et feedback :</strong> décryptage des animations.</p>
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
          <p><strong>Objectif du chapitre :</strong> affirmer la place de l'artiste et développer une vision critique et adaptative face à l'IA.</p>
          <p><strong>Contenu du chapitre :</strong></p>
          <ul>
            <li><strong>Introduction</strong> (Vidéo – 10 min) : Qu'est‑ce qui nous rend humains ? Exploration de la conscience, de l'intention, du vécu et de l'empathie comme piliers de la création artistique.</li>
            <li><strong>L'IA : outil ou concurrent ?</strong> Présentation des IA génératives d'images et d'animations. Analyse de leurs forces (rapidité, génération d'idées) et de leurs faiblesses (manque d'intention, de contexte, de subtext).</li>
            <li><strong>Exemple comparatif</strong> (Vidéo) : Une animation générée par IA face à une animation créée par un artiste sur le même brief, pour souligner la différence d'âme et de narration.</li>
          </ul>
          <p><strong>Théorie</strong> (PDF ou slides – 5 pages max) :</p>
          <ul>
            <li>Les défis futurs pour les animateurs – adaptation des compétences, maîtrise du storytelling et de la direction artistique</li>
            <li>La plus‑value de l'artiste – l'intention, l'émotion sincère, l'originalité, l'imperfection (cf. Chapitre 7 « Adding mistakes ») et la capacité à diriger le regard et le ressenti du spectateur</li>
            <li>Comment intégrer l'IA dans son workflow de manière intelligente – brainstorming, pré‑production, inspiration, automatisation de tâches techniques, etc.</li>
          </ul>
          <p><strong>Table ronde / Débat</strong> (Vidéo – 15 min) : visionnage d'une discussion entre professionnels de l'animation sur l'impact de l'IA sur leur métier. <em>Objectif :</em> s'inspirer des différentes perspectives et stratégies pour l'avenir.</p>
          <p><strong>Exercice de réflexion</strong> (pas d'animation) : rédiger une courte réflexion sur « Comment puis‑je, en tant qu'artiste, utiliser ma sensibilité unique pour raconter des histoires qu'une IA ne pourra jamais concevoir ? ». <em>Objectif :</em> solidifier sa vision personnelle et sa valeur ajoutée en tant que créateur.</p>
        `,
        video: '',
        pdfDesc: '',
        pdfUrl: '',
        poster: 'thumbnail.png',
      },
    ],
  },
];

const defaultAgendaEvents = [
  {
    id: 1,
    date: '2025-09-15',
    title: 'Masterclass: imperfection in animation',
    description: 'Une séance spéciale avec un professeur invité pour explorer l’animation imparfaite et l’expression artistique.'
  },
  {
    id: 2,
    date: '2025-10-01',
    title: 'Atelier de dessin avec Patrick W.',
    description: 'Atelier pratique pour améliorer vos compétences en dessin et observation.'
  }
];

function generateWeeklySessions(startDate, total, completed) {
    const sessions = [];
    let currentDate = new Date(startDate);
    for (let i = 0; i < total; i++) {
        sessions.push({
            title: `Session ${i + 1}`,
            date: currentDate.toISOString().split('T')[0], // Format YYYY-MM-DD
            completed: i < completed
        });
        currentDate.setDate(currentDate.getDate() + 7); // Add 7 days
    }
    return sessions;
}

export class DataManager {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem('melies_users')) {
      // Initialize sessions for students
      defaultUsers.forEach(user => {
        if (user.role === 'student') {
          user.sessions = generateWeeklySessions('2025-01-12', user.sessionsTotal, user.sessionsCompleted);
        }
      });
      localStorage.setItem('melies_users', JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem('melies_modules')) {
      localStorage.setItem('melies_modules', JSON.stringify(defaultModules));
    }

    if (!localStorage.getItem('melies_events')) {
      localStorage.setItem('melies_events', JSON.stringify(defaultAgendaEvents));
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('melies_users') || '[]');
  }

  saveUsers(users) {
    localStorage.setItem('melies_users', JSON.stringify(users));
  }

  getModules() {
    return JSON.parse(localStorage.getItem('melies_modules') || '[]');
  }

  saveModules(modules) {
    localStorage.setItem('melies_modules', JSON.stringify(modules));
  }

  getEvents() {
    return JSON.parse(localStorage.getItem('melies_events') || '[]');
  }

  saveEvents(events) {
    localStorage.setItem('melies_events', JSON.stringify(events));
  }

  // Helper to find user by credentials
  findUser(username, password) {
    const users = this.getUsers();
    return users.find(u => (u.username === username || u.email === username) && u.password === password);
  }

  addUser(user) {
    const users = this.getUsers();
    user.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    if (!user.sessions && user.role === 'student') {
        user.sessionsTotal = 12;
        user.sessionsCompleted = 0;
        user.sessions = generateWeeklySessions(new Date().toISOString().split('T')[0], 12, 0);
    }
    users.push(user);
    this.saveUsers(users);
    return user;
  }

  updateUser(updatedUser) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      this.saveUsers(users);
      return true;
    }
    return false;
  }

  deleteUser(userId) {
    let users = this.getUsers();
    users = users.filter(u => u.id != userId);
    this.saveUsers(users);
  }
}

export const dataManager = new DataManager();
