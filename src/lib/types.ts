export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  role: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  highlight: boolean;
  featured: boolean;
  hasWebsite: boolean;
  websiteUrl: string | null;
  githubUrl: string | null;
  projectUrl: string | null;
  image: string;
  imageAlt: string;
  imagePosition: "center" | "top";
  gallery: string[];
  stack: string[];
  capabilities: string[];
  metrics: ProjectMetric[];
  status: string;
  platform: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
