export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  timeline: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  frontendGithubUrl?: string;
  backendGithubUrl?: string;
  pendingText?: string;
  keyFeatures: string[];
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  timeline: string;
  location: string;
  achievements: string[];
  tags: string[];
  sectionLabel?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'design';
  level: number; // 0 to 100 for visual progress, if we use it
  description: string;
}
