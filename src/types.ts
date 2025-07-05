export interface Skill {
  link: string;
  path: string;
  alt: string;
}

export interface Company {
  link: string;
  path: string;
  alt: string;
}

export interface Project {
  name: string;
  link: string | null;
  linkText?: string;
  path: string;
  alt: string;
  description: string;
}
