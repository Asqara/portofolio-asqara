import type { Project } from "../src/lib/types";

const localizedFields = {
  subtitle: "", category: "", role: "", shortDescription: "", description: "", challenge: "", solution: "", impact: "", imageAlt: "", status: "", platform: ""
};

export const projectRecords = [
  {
    ...localizedFields, id: "mysoc", slug: "mysoc", title: "MySOC", year: "2026", highlight: true, featured: true,
    hasWebsite: true, websiteUrl: "https://mysoc.id", githubUrl: null, projectUrl: "https://mysoc.id",
    image: "https://cdn.asqara.tech/projects/mysoc.png", imagePosition: "center", gallery: ["/images/projects/mysoc-system.svg", "/images/projects/mysoc-data.svg"],
    stack: ["Next.js", "TypeScript", "Bun", "PostgreSQL", "Drizzle ORM", "Redis", "Docker", "Kubernetes", "k3s"], capabilities: [], metrics: [{ value: "~1,000", label: "" }]
  },
  {
    ...localizedFields, id: "mysoc-helpdesk", slug: "mysoc-helpdesk", title: "MySOC Helpdesk", year: "2026", highlight: true, featured: true,
    hasWebsite: true, websiteUrl: "https://help.mysoc.id/", githubUrl: null, projectUrl: "https://help.mysoc.id/",
    image: "https://cdn.asqara.tech/projects/help-mysoc.png", imagePosition: "center", gallery: [],
    stack: ["Web Support", "Knowledge Base", "Support UX", "Responsive UI"], capabilities: [], metrics: [{ value: "02", label: "" }]
  },
  {
    ...localizedFields, id: "ormawa-eksekutif", slug: "ormawa-eksekutif", title: "Ormawa Eksekutif PKU", year: "2024—2025", highlight: true, featured: true,
    hasWebsite: false, websiteUrl: null, githubUrl: "https://github.com/Asqara/website-ormawa-ekse", projectUrl: null,
    image: "https://cdn.asqara.tech/projects/ekse.png", imagePosition: "center", gallery: [],
    stack: ["Laravel", "Inertia.js", "Tailwind CSS", "Vite"], capabilities: [], metrics: [{ value: "24/25", label: "" }]
  },
  {
    ...localizedFields, id: "studentorientation", slug: "studentorientation", title: "StudentOrientation", year: "2025", highlight: true, featured: true,
    hasWebsite: true, websiteUrl: "https://studentorientation.ipb.ac.id", githubUrl: null, projectUrl: null,
    image: "https://cdn.asqara.tech/projects/studentorientation.png", imagePosition: "center", gallery: [],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "React Query", "next-intl", "Tailwind CSS"], capabilities: [], metrics: [{ value: "~8,000", label: "" }]
  },
  {
    ...localizedFields, id: "agrisymphony-store", slug: "agrisymphony-store", title: "Agrisymphony Store", year: "2025", highlight: true, featured: true,
    hasWebsite: true, websiteUrl: "https://store.agrisymphony.com", githubUrl: null, projectUrl: null,
    image: "https://cdn.asqara.tech/projects/store-agsn.png", imagePosition: "center", gallery: [],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"], capabilities: [], metrics: [{ value: "Rp600M+", label: "" }]
  },
  {
    ...localizedFields, id: "agrisymphony", slug: "agrisymphony", title: "Agrisymphony", year: "2025", highlight: true, featured: true,
    hasWebsite: true, websiteUrl: "https://agrisymphony.com", githubUrl: null, projectUrl: null,
    image: "https://cdn.asqara.tech/projects/agsn.png", imagePosition: "center", gallery: [],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"], capabilities: [], metrics: [{ value: "1,000+", label: "" }]
  }
] satisfies Project[];
