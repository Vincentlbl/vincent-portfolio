export const profile = {
  name: 'Vincent Lebel',
  role: 'Développeur full-stack',
  location: 'Paris · Choisy-le-Roi',
  email: 'vincent.lebel@efrei.net',
  github: 'https://github.com/Vincentlbl',
  linkedin: 'https://www.linkedin.com/in/TON-PROFIL', // TODO : ton vrai lien LinkedIn
  badge: 'Alternant full-stack chez StreamMind',
  typewriter: [
    'flux de paiement SEPA.',
    'applications full-stack.',
    'outils de certification.',
    'interfaces Vue.js.',
  ],
  intro:
    "Développeur full-stack en alternance dans une fintech parisienne, je construis des outils bancaires autour des normes ISO 20022 : prélèvements et virements SEPA, du XML au tableau de bord. Vue.js côté interface, Node.js et TIME Designer côté serveur, MySQL pour les données.",
};

export type Tech = { name: string; icon?: string; lucide?: 'workflow' | 'file' | 'bug' };

// Logos : https://simpleicons.org (le slug après cdn.simpleicons.org/)
export const techStack: Tech[] = [
  { name: 'Vue.js', icon: 'vuedotjs' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'TIME Designer', lucide: 'workflow' },
  { name: 'ISO 20022', lucide: 'file' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'PHP', icon: 'php' },
  { name: 'Symfony', icon: 'symfony' },
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'openjdk' },
  { name: 'GitLab', icon: 'gitlab' },
  { name: 'Mantis', lucide: 'bug' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Lua', icon: 'lua' },
];

export const stats = [
  { value: '9', label: 'formats ISO 20022 modélisés' },
  { value: '13', label: 'codes de rejet EPC couverts' },
  { value: '2', label: 'outils de certification SEPA' },
  { value: '4', label: 'étapes du cycle CSM simulé' },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  place: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: 'StreamMind',
    role: 'Développeur full-stack · Alternance',
    period: 'Sept. 2025 — aujourd’hui',
    place: 'Paris 8e · Fintech',
    current: true,
    points: [
      'Conception d’outils de certification SEPA qui simulent une chambre de compensation (CSM) pour tester les échanges des banques.',
      'Modélisation de 9 formats ISO 20022 (pain.008, pacs.003, camt.054…) sur TIME Designer, la plateforme low-code de l’entreprise.',
      'Développement de bout en bout : écrans Vue.js, endpoints REST, traitements XML et schéma MySQL.',
      'Tableaux de bord de suivi des mandats avec graphiques, et démos devant des clients bancaires.',
    ],
    tags: ['Vue.js', 'Node.js', 'TIME Designer', 'MySQL', 'ISO 20022'],
  },
  {
    company: 'Flamme de Vignes & Monsieur Flower',
    role: 'Intégrateur web',
    period: 'Mai — juin 2025',
    place: 'Toulouse · Mission',
    points: [
      'Pages WordPress / Elementor sur mesure (blog, fiches produits, filtres dynamiques) fidèles aux maquettes Figma.',
      'Chatbot Messenger avec Manychat et logique conversationnelle par IA, de la conception à la mise en production.',
    ],
    tags: ['WordPress', 'Figma', 'SEO', 'Manychat'],
  },
  {
    company: 'Bonapart',
    role: 'Rédacteur web SEO',
    period: 'Mai — juin 2024',
    place: 'Toulouse · Mission',
    points: ['Analyse de performance et optimisation du référencement naturel du site et des vidéos.'],
    tags: ['SEO', 'Analytics'],
  },
];

export type Project = {
  name: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  repoUrl?: string;
};

// Projets pro : code privé, donc pas de lien. Aucun nom de client.
export const proProjects: Project[] = [
  {
    name: 'Toolbox SDD · Certification CSM',
    summary:
      'Outil qui joue le rôle de la chambre de compensation pour certifier les prélèvements SEPA d’une banque, en générant et contrôlant les messages ISO 20022.',
    highlights: [
      'Cycle en 4 étapes, génération et import alternés',
      'Cas CORE et B2B, nominaux et 13 rejets EPC',
      'Contrôle du format XML dès l’import côté front',
    ],
    tags: ['Vue.js', 'TIME Designer', 'REST', 'pain.008', 'pacs.002'],
  },
  {
    name: 'Toolbox SCT · Virements SEPA',
    summary:
      'Extension de la plateforme de certification aux virements : chaîne pain.001 → pacs.008, tables dédiées et endpoints spécifiques.',
    highlights: [
      'Cas nominal validé de bout en bout',
      'Scénarios de rejet, retours (pacs.004) et annulations',
      'Architecture séparée de SDD, réutilisable pour SCT Inst',
    ],
    tags: ['TIME Designer', 'MySQL', 'pain.001', 'pacs.008'],
  },
  {
    name: 'Plateforme SDD · Paramétrage & reporting',
    summary:
      'Module de gestion des prélèvements : paramètres globaux, notifications après amendement de mandat et tableau de bord de suivi.',
    highlights: [
      'Feature full-stack : API GET/PUT jusqu’à l’écran',
      'Dashboard des mandats avec graphiques',
      '4 écrans Vue.js : calendrier, liste, détail, traitement en masse',
    ],
    tags: ['Vue.js', 'Framework7', 'Node.js', 'pain.010'],
  },
];

export const persoProjects: Project[] = [
  {
    name: 'Application bancaire',
    summary: 'Gestion de comptes bancaires : virements, dépôts, retraits, authentification et rôles utilisateurs.',
    tags: ['PHP', 'Symfony', 'PostgreSQL', 'Bootstrap'],
    repoUrl: 'https://github.com/Vincentlbl/challenge_web',
  },
  {
    name: 'Site e-commerce',
    summary: 'Produits, commandes et utilisateurs, avec panier, paiement sécurisé, architecture MVC et API REST.',
    tags: ['Symfony', 'MySQL', 'Vue.js'],
    repoUrl: '', // TODO : lien du repo s'il est public
  },
  {
    name: 'RPG Saint Seiya',
    summary: 'Jeu de rôle inspiré de l’univers Saint Seiya, développé en programmation orientée objet.',
    tags: ['Java', 'Kotlin', 'POO'],
    repoUrl: 'https://github.com/Vincentlbl/RPG-Saint-Seiya',
  },
  {
    name: 'Password Manager',
    summary: 'Gestionnaire de mots de passe côté navigateur.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/Vincentlbl/password_manager',
  },
];

export const approach = [
  {
    title: 'La norme avant le code',
    text: 'En paiement, un champ mal placé et le message est rejeté. Je pars de la spécification ISO 20022 et des règles EPC, puis je code.',
  },
  {
    title: 'Du clic à la base',
    text: 'Un écran Vue.js, son endpoint, le traitement serveur, les tables MySQL : je livre la fonctionnalité en entier.',
  },
  {
    title: 'Tester l’échec',
    text: 'Chaque cas est vérifié en succès et en échec volontaire. Un outil de certification qui laisse passer une erreur n’a aucune valeur.',
  },
];

export const dailyStack = [
  { label: 'Frontend', value: 'Vue.js, Framework7, JavaScript, TypeScript' },
  { label: 'Backend', value: 'Node.js, TIME Designer, API REST' },
  { label: 'Données', value: 'MySQL, PostgreSQL, XML / XSD' },
  { label: 'Outils', value: 'GitLab, Mantis, Git, Figma' },
];

export const education = [
  { school: 'EFREI Paris', degree: 'Master 1 · Manager de solutions digitales et data', period: '2026 — en cours' },
  { school: 'EFREI Paris', degree: 'Bachelor · Développement web, data & applications', period: '2023 — 2026' },
];

export const languages = ['Français · natif', 'Vietnamien · natif', 'Anglais · C1'];