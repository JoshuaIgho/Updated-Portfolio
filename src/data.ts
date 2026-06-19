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
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Principal Systems Builder',
    company: 'Vector Research Lab',
    timeline: 'Jan 2024 – Present',
    location: 'Chicago, IL',
    achievements: [
      'Architected internal web framework streamlining canvas telemetry visualizer interfaces across 14 global projects.',
      'Refactored legacy Node.js render pipelines to Rust services, reducing server compute costs by 68%.',
      'Standardized ultra-precise responsive visual guidelines which boosted general UI interaction times by 32%.'
    ],
    tags: ['TypeScript', 'Rust', 'WebGL', 'Docker', 'WebSockets']
  },
  {
    id: 'exp2',
    role: 'Senior Interactive Engineer',
    company: 'Apex Design Collective',
    timeline: 'Aug 2022 – Dec 2023',
    location: 'New York, NY',
    achievements: [
      'Built bespoke experimental marketing engines and micro-frontends with React and motion.',
      'Optimized Core Web Vitals to solid 100/100 scores across client sites with over 5M monthly active users.',
      'Pioneered interactive component libraries reducing UI development-to-deployment times from weeks to hours.'
    ],
    tags: ['React', 'motion', 'Tailwind', 'Vite', 'TypeScript']
  },
  {
    id: 'exp3',
    role: 'Full-Stack Software Engineer',
    company: 'Core Systems Corp',
    timeline: 'Mar 2020 – Jul 2022',
    location: 'Austin, TX',
    achievements: [
      'Constructed highly secure server-side Express API structures managing over 420K user logins daily.',
      'Developed declarative database migrations and schema indexes, driving query latency down from 400ms to 8ms.',
      'Created custom responsive administration charts visualizing heavy microservice dependencies.'
    ],
    tags: ['Node.js', 'Express', 'D3.js', 'SQL', 'TypeScript']
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
  { name: 'Rust Core / WASM', category: 'backend', level: 82, description: 'High-performance memory safety interfaces, layout-diffing subroutines.' },
  { name: 'Database Architecture', category: 'backend', level: 85, description: 'Structured schema planning, index tuning, and efficient indexing.' },

  // DevOps & Tools
  { name: 'Docker / Actions', category: 'devops', level: 88, description: 'Containerized deployment patterns, repeatable automated testing pipelines.' },
  { name: 'Nginx / Proxies', category: 'devops', level: 84, description: 'Reverse proxies, caching rules, and secure ingress handling.' },

  // Design
  { name: 'Neo-Brutalist Layouts', category: 'design', level: 98, description: 'Heavy drop-shadow structures, thick margins, raw asymmetric geometries.' },
  { name: 'Information Display', category: 'design', level: 93, description: 'Comfortable typography hierarchies, ample line spacing, clean bento containers.' }
];

export const GUESTBOOK_SEED = [
  { id: '1', name: 'Alina Vance', message: 'The interface is incredibly striking. The responsiveness of the filters and focus transition speed is beautiful.', role: 'Senior UX Specialist', timestamp: '2026-06-18 10:24' },
  { id: '2', name: 'Marcus K.', message: 'The Hyperion diff-runtime runs like grease. Pixel precision is extremely hard to find.', role: 'Founding Engineer', timestamp: '2026-06-18 09:15' },
  { id: '3', name: 'S. Chen', message: 'Clean, industrial and unpretentious. Love the typography tracking.', role: 'Creative Director', timestamp: '2026-06-17 18:40' }
];
