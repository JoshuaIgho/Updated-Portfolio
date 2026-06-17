import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Kael Mercer',
  title: 'Creative Technologist & Full-Stack Architect',
  location: 'Chicago, IL',
  status: 'Available for core contracts & bespoke UI architecture',
  bio: 'Engineering high-contrast interactive platforms with raw mechanical speed and structural precision. Specializing in low-latency systems, canvas-level human interface designs, and robust TypeScript-first architectures. Adherent of Monochrome Neo-Brutalism and pixel-perfect clarity.',
  email: 'kael@mercer.engineering',
  github: 'https://github.com/kael-mercer',
  twitter: 'https://twitter.com/kaelmercer',
  readiness: 'Open to selective opportunities'
};

export const PROJECTS: Project[] = [
  {
    id: 'hyperion',
    title: 'Hyperion Core Runtime',
    category: 'Virtual Layout Engine',
    description: 'A performance-first custom reactive layout synchronizer and WebAssembly-backed diff compiler optimized for frame-perfect UI streaming.',
    role: 'Lead Architect & Systems Engineer',
    timeline: 'Q1 – Q3 2025',
    tags: ['TypeScript', 'Rust', 'WebAssembly', 'WebSockets', 'Tailwind'],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/kael-mercer/hyperion-core',
    keyFeatures: [
      'Rust-compiled WASM layout differential parser running in < 1.2ms',
      'Unified WebSocket channel with dynamic frame interpolation',
      'Zero-dependency reactive lifecycle manager with 100% test coverage'
    ],
    stats: [
      { label: 'Ingestion Speed', value: '48k patches/s' },
      { label: 'Bundle Size', value: '11.8 kB gzip' },
      { label: 'Frame Latency', value: '< 2.4ms' }
    ]
  },
  {
    id: 'nova-os',
    title: 'Nova Web Desktop (HCI)',
    category: 'Interactive Environment',
    description: 'An expansive human-computer interface simulation utilizing strict canvas coordinate bounds, responsive sandboxed windowing, and an interactive audio synthesizer patchbay.',
    role: 'Interactive Developer',
    timeline: 'Mid 2024 – Present',
    tags: ['React', 'motion', 'Canvas API', 'TypeScript', 'Web Audio API'],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/kael-mercer/nova-desktop',
    keyFeatures: [
      'Virtual Window Manager with dynamic drag, multi-scale resize, and snap docking',
      'Web-Audio Synthesizer node-editor with interactive waveform oscillators',
      'Hardware-accelerated rendering layers falling back gracefully to SVG contexts'
    ],
    stats: [
      { label: 'Canvas Windows', value: 'Unlimited scale' },
      { label: 'Audio Latency', value: 'Ultra-low ASIO' },
      { label: 'Memory Leakage', value: '0.00% over 12h' }
    ]
  },
  {
    id: 'stark-index',
    title: 'Stark Network Protocol',
    category: 'Data Pipeline & Analytics',
    description: 'A high-throughput server telemetry collector and structural indexer generating responsive, interactive D3.js timeline visualization boards.',
    role: 'Core Systems Architect',
    timeline: 'Full Year 2023',
    tags: ['TypeScript', 'Node.js', 'Express', 'D3.js', 'Docker', 'Vite'],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/kael-mercer/stark-protocol',
    keyFeatures: [
      'Engineered time-series indexing core scaling up to 1.8M indexed logs / second',
      'Real-time interactive SVGs built with advanced D3 force-directed configurations',
      'Dynamic telemetry scrubbers with zero-latency visual range interpolation'
    ],
    stats: [
      { label: 'Log Parsing', value: '1.8M entries/s' },
      { label: 'Chart Load-Time', value: 'Instant (< 12ms)' },
      { label: 'Database Footprint', value: 'Reduced by 52%' }
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
