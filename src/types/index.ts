export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  kpis?: string[]; // Key Performance Indicators
  achievements: string[];
  technologies?: string[];
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'technical' | 'soft' | 'domain';
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  role: string;
  impact: string;
  technologies: string[];
  image?: string;
  video?: string;
  link?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
  image?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  profileImage?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    medium?: string;
  };
  philosophy?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface VolunteerExperience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export interface TechnicalSkills {
  productManagement: string[];
  tools: string[];
  programming: string[];
  cloudPlatforms: string[];
  data: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  skills?: Skill[];
  projects?: Project[];
  testimonials?: Testimonial[];
  certifications?: Certification[];
  vision?: string; // Future-focused statement
  education?: Education[];
  awards?: Award[];
  competencies?: string[];
  technicalSkills?: TechnicalSkills;
  volunteerExperience?: VolunteerExperience[];
} 