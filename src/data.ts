import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Joshua Igho',
  title: 'Full-Stack Developer',
  location: 'Nigeria',
  status: 'Available for Opportunities',
  bio: 'Building scalable web applications and exploring modern software engineering practices. Experienced in designing modern user interfaces with robust server integrations.',
  email: 'joshuaalex822@gmail.com',
  github: 'https://github.com/JoshuaIgho',
  twitter: 'https://twitter.com/JoshuaIgho',
  readiness: 'Available for Opportunities'
};

export const PROJECTS: Project[] = [
  {
    id: 'ijituyi',
    title: 'IJITUYI SIGNATURE',
    category: 'Branding Layout',
    description: 'A modern monogram business website featuring premium branding architectures, custom typography layouts, service showcases, and seamless contact integrations.',
    role: 'Lead Brand Architect',
    timeline: 'Q1 – Q2 2026',
    tags: ['REACT', 'TYPESCRIPT', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/JoshuaIgho/Monogram-Website',
    pendingText: '[ LIVE_PREVIEW_PENDING ]',
    keyFeatures: [
      'Bespoke SVG monogram vector calculations with high-density layout rendering',
      'Asymmetrical typographic systems using customized modern serif pairings',
      'Client touchpoint endpoints with direct message compression pipelines'
    ],
    stats: [
      { label: 'Branding Asset', value: 'SVG Monogram' },
      { label: 'Render Score', value: '100% Core' },
      { label: 'Typo Layout', value: 'Asymmetric' }
    ]
  },
  {
    id: 'charme',
    title: 'CHARMÉ (FULL-STACK)',
    category: 'E-Commerce Ecosystem',
    description: 'A complete e-commerce ecosystem. Frontend deploys high-performance cart, checkout, and tracking flows. Backend operates robust user authentication, Postgres relational asset metrics, and RESTful API operations.',
    role: 'Full-Stack Software Engineer',
    timeline: 'Mid – Late 2025',
    tags: ['NODE.JS', 'POSTGRES', 'EXPRESS', 'REACTJS', 'TAILWIND'],
    frontendGithubUrl: 'https://github.com/JoshuaIgho/Charm-frontend',
    backendGithubUrl: 'https://github.com/JoshuaIgho/charme-backend',
    demoUrl: 'https://charmesiri.vercel.app/',
    keyFeatures: [
      'Relational schema metrics storing transactional records and multi-tenant inventory tables',
      'Secure token authorization (JWT + cookies) protecting state across routes',
      'Client-side cart reducer pipelines sync-puzzled with session storage engines'
    ],
    stats: [
      { label: 'SQL Latency', value: '< 8ms Fast' },
      { label: 'Secure Crypt', value: 'bcrypt + JWT' },
      { label: 'API Pipelines', value: 'RESTful OK' }
    ]
  },
  {
    id: 'africa-caribbean',
    title: 'AFRICA CARIBBEAN CONNECT',
    category: 'Media Engine',
    description: 'A modern media-centric frontend engine engineered to highlight organization missions, structured multi-channel media content feeds, and crisp communication channels.',
    role: 'Lead Frontend Developer',
    timeline: 'Q3 2025',
    tags: ['REACTJS', 'TAILWIND_CSS'],
    githubUrl: 'https://github.com/JoshuaIgho/African-Caribbean-Connect',
    demoUrl: 'https://africa-untold-journeys.vercel.app/',
    keyFeatures: [
      'Media content feeds with lightweight lazy-loading dynamic thumbnail matrices',
      'Responsive multi-channel grid sections styled with crisp, modern Tailwind layers',
      'Fluid transitions and screen bounds optimized for cross-viewport clarity'
    ],
    stats: [
      { label: 'Feed Speed', value: '< 200ms Load' },
      { label: 'Design Score', value: '98% AAA' },
      { label: 'Viewport Ref', value: 'Pure Fluid' }
    ]
  },
  {
    id: 'chapterdock',
    title: 'CHAPTERDOCK',
    category: 'Library Curation Engine',
    description: 'A sleek, secure web application designed as a modern digital harbor for book lovers to log, manage, and review their personal libraries. Features secure user authentication for login/signup flows, enabling readers to write custom book reviews and assign star ratings to track their reading journeys.',
    role: 'Backend Developer / Systems',
    timeline: 'Q4 2025',
    tags: ['NODE.JS', 'SUPABASE', 'EJS', 'JAVASCRIPT'],
    githubUrl: 'https://github.com/JoshuaIgho/Book-review',
    pendingText: '[ DOCKING_LIVE_PENDING ]',
    keyFeatures: [
      'Supabase cloud DB synchronization implementing strict Row-Level Security checks',
      'Interactive reading session tracker storing document indexes locally and globally',
      'Secure user cookie verification with fast Express-router middleware'
    ],
    stats: [
      { label: 'User Session', value: 'Supabase Auth' },
      { label: 'DB Rules', value: 'RLS Active' },
      { label: 'HTML Engine', value: 'EJS Template' }
    ]
  },
  {
    id: 'fortifyauth',
    title: 'FORTIFYAUTH',
    category: 'Authentication Infrastructure',
    description: 'FortifyAuth is a developer-first authentication platform designed to simplify secure user authentication and authorization. It provides RESTful authentication APIs, JWT-based authentication, user account management, API documentation, and an interactive API playground, making it easy for developers to integrate secure authentication into their applications.',
    role: 'Core Systems Engineer',
    timeline: 'Q1 2026',
    tags: ['NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'JWT', 'REST API', 'SWAGGER / OPENAPI', 'DOCKER'],
    githubUrl: 'https://github.com/JoshuaIgho/FortifyAuth',
    demoUrl: 'https://fortifyauth-api-1.onrender.com/api/docs/',
    keyFeatures: [
      'Seamless User Registration and login authentication services using modern encryption algorithms',
      'Secure JSON Web Tokens (JWT) handling access/refresh token rotation and secure session states',
      'Integrated Swagger/OpenAPI specifications generating real-time interactive developer playgrounds',
      'Role-Based Authorization (RBAC) middleware guarding sensitive resource and database entry points',
      'Containerized environment architecture configured with Docker for effortless local or cloud replication'
    ],
    stats: [
      { label: 'Status', value: 'Production Ready' },
      { label: 'Architecture', value: 'REST API' },
      { label: 'Version', value: 'v1.0' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Full-Stack Software Engineer',
    company: 'FortifyAuth',
    timeline: 'May 2026 — Present',
    location: 'Remote',
    sectionLabel: 'AUTHENTICATION PLATFORM & BACKEND SYSTEMS',
    achievements: [
      'Designed and developed a developer-first authentication platform using Node.js, Express.js, TypeScript, and PostgreSQL, enabling secure authentication for modern web applications.',
      'Architected RESTful APIs for user registration, login, JWT authentication, email verification, password recovery, and role-based access control with a modular backend architecture.',
      'Built interactive API documentation and a testing playground, allowing developers to explore, validate, and integrate authentication endpoints efficiently.'
    ],
    tags: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'JWT', 'REST API', 'Docker']
  },
  {
    id: 'exp2',
    role: 'Frontend Developer',
    company: 'Ijituyi Signature',
    timeline: 'Jan 2026 — Feb 2026',
    location: 'Osun, NG',
    sectionLabel: 'BRAND WEBSITE & DIGITAL EXPERIENCE',
    achievements: [
      'Developed a modern business website with responsive layouts, reusable React components, and pixel-perfect implementation.',
      'Built interactive service pages, premium branding sections, and seamless navigation focused on usability and visual consistency.',
      'Optimized frontend performance, component organization, and responsive behavior to deliver a smooth experience across devices.',
      'Integrated contact functionality and implemented clean, maintainable frontend architecture following modern development practices.'
    ],
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'Component Architecture', 'Git']
  },
  {
    id: 'exp3',
    role: 'Frontend Developer',
    company: 'Africa Caribbean Connect',
    timeline: 'Feb 2025 — Mar 2025',
    location: 'Remote',
    sectionLabel: 'ORGANIZATION WEBSITE & MEDIA PLATFORM',
    achievements: [
      'Developed responsive user interfaces using React and Tailwind CSS to showcase the organization\'s mission, programs, and media content.',
      'Built reusable UI components and structured page layouts to deliver a consistent user experience across desktop and mobile devices.',
      'Implemented modern frontend practices, optimized page performance, and integrated interactive sections to improve accessibility and engagement.',
      'Collaborated throughout the development process to transform design concepts into a production-ready website.'
    ],
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design', 'UI Components', 'Git']
  },
  {
    id: 'exp4',
    role: 'Full-Stack Engineer',
    company: 'Charmé',
    timeline: 'Jan 2023 — Dec 2024',
    location: 'Lagos, NG',
    sectionLabel: 'E-COMMERCE PLATFORM & APPLICATION ENGINEERING',
    achievements: [
      'Designed and developed a full-stack e-commerce platform focused on performance, scalability, and seamless user experience.',
      'Built responsive React interfaces with reusable components alongside a scalable Node.js and Express.js backend powered by PostgreSQL.',
      'Implemented secure authentication, product management, shopping cart, order processing, and RESTful APIs to support complete e-commerce workflows.',
      'Optimized database queries, API routes, and application state management to improve application performance, maintainability, and scalability.'
    ],
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Docker']
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React / Next.js', category: 'frontend', level: 98, description: 'Declarative layout architectures, concurrent render cycles, custom hooks.' },
  { name: 'TypeScript', category: 'frontend', level: 96, description: 'Extreme type-safety, mapped types, robust module composition.' },
  { name: 'Tailwind CSS v4', category: 'frontend', level: 95, description: 'Utility-first systems, dynamic @theme, responsive bento structure.' },
  { name: 'WebSockets & RTC', category: 'frontend', level: 90, description: 'Real-time multi-party state sync, client-authoritative state pumps.' },
  { name: 'Canvas & SVG APIs', category: 'frontend', level: 88, description: 'High-performance interactive vector drawing, frame-loop optimizations.' },
  { name: 'motion', category: 'frontend', level: 92, description: 'Advanced gestural controls, spring physics, layout animations.' },

  // Backend
  { name: 'Node.js & Express', category: 'backend', level: 94, description: 'High-efficiency APIs, middleware orchestration, memory profiling.' },
  { name: 'RESTful API', category: 'backend', level: 91, description: 'Robust endpoint design, request validation, middleware routing, and response formatting.' },
  { name: 'Database', category: 'backend', level: 85, description: 'Structured schema planning, index tuning, and efficient indexing.' },

  // DevOps & Tools
  { name: 'Docker / Actions', category: 'devops', level: 88, description: 'Containerized deployment patterns, repeatable automated testing pipelines.' },
  { name: 'Nginx / Proxies', category: 'devops', level: 84, description: 'Reverse proxies, caching rules, and secure ingress handling.' },

  // Design
  { name: 'Neo-Brutalist Layouts', category: 'design', level: 98, description: 'Heavy drop-shadow structures, thick margins, raw asymmetric geometries.' },
  { name: 'Information Display', category: 'design', level: 93, description: 'Comfortable typography hierarchies, ample line spacing, clean bento containers.' }
];
