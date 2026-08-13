import { useExtracted } from "next-intl";

export type RepositoryProject = {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export function useRepositoryProjects(): RepositoryProject[] {
  const t = useExtracted("repository-data");

  return [
    {
      id: "makmur-farma", title: "Makmur Farma", year: "2026", category: t("Commerce & Operations"),
      description: t("A pharmacy commerce and clinic operations system with product, transaction, inventory, reporting, and document workflows."),
      stack: ["Next.js", "Elysia", "PostgreSQL", "Drizzle", "Redis"], githubUrl: "https://github.com/Asqara/makmur-farma"
    },
    {
      id: "smart-stock-pro", title: "SmartStock Pro", year: "2026", category: t("Inventory ERP"),
      description: t("A warehouse inventory platform for products, stock movement, transfers, reporting, and role-based user access."),
      stack: ["Next.js", "Elysia", "PostgreSQL", "Drizzle", "Redis"], githubUrl: "https://github.com/Asqara/smart-stock-pro"
    },
    {
      id: "ai-student-dashboard", title: "AI Usage Student Dashboard", year: "2026", category: t("Data Visualization"),
      description: t("An interactive dashboard that explores student AI usage data from Kaggle through visual analysis and filtering."),
      stack: ["Vite", "Plotly.js", "Papa Parse", "CSV"], githubUrl: "https://github.com/Asqara/gkv-visualisasi-data"
    },
    {
      id: "rimba-kembali", title: "Rimba Kembali", year: "2025", category: t("Environmental Campaign"),
      description: t("An interactive campaign and education platform for reforestation, public awareness, and environmental action."),
      stack: ["Next.js 16", "React 19", "Supabase", "Framer Motion"], githubUrl: "https://github.com/Asqara/webdesign_backburnersukses_technoversary25"
    },
    {
      id: "rimba-kembali-prototype", title: "Rimba Kembali Prototype", year: "2025", category: t("Web Prototype"),
      description: t("An earlier interface prototype exploring the visual direction of the Rimba Kembali environmental platform."),
      stack: ["Next.js", "React", "Tailwind CSS"], githubUrl: "https://github.com/Asqara/rimba-kembali"
    },
    {
      id: "whatsapp-csv", title: "WhatsApp CSV Broadcast", year: "2025", category: t("Automation"),
      description: t("A session-based WhatsApp broadcast service that processes structured recipient data and sends messages from CSV workflows."),
      stack: ["Baileys", "Express", "Node.js", "CSV"], githubUrl: "https://github.com/Asqara/codingan_wa"
    },
    {
      id: "send-wa", title: "Send WA Utility", year: "2025", category: t("Automation"),
      description: t("A compact web utility for authenticated WhatsApp sessions, file uploads, and controlled message delivery."),
      stack: ["Baileys", "Express", "Multer", "Node.js"], githubUrl: "https://github.com/Asqara/send-wa"
    },
    {
      id: "portfolio-3d", title: "3D Portfolio Experience", year: "2025", category: t("Immersive Web"),
      description: t("An experimental portfolio combining WebGL scenes, physics, timeline motion, and interactive three-dimensional interfaces."),
      stack: ["Next.js", "Three.js", "React Three Fiber", "Rapier", "GSAP"], githubUrl: "https://github.com/Asqara/Portofolio-Website"
    },
    {
      id: "risbang-memories", title: "Risbang Memoriez", year: "2025", category: t("Interactive Memories"),
      description: t("An interactive memory gallery with shared media, animated storytelling, and celebratory interactions."),
      stack: ["Next.js", "Supabase", "TypeScript", "Canvas Confetti"], githubUrl: "https://github.com/Asqara/risbang-memoriez"
    },
    {
      id: "karakidz-memories", title: "Karakidz Memoriez", year: "2025", category: t("Interactive Memories"),
      description: t("A digital memory space for collecting moments through media, typewriter narratives, and responsive interactions."),
      stack: ["Next.js", "Supabase", "TypeScript", "Canvas Confetti"], githubUrl: "https://github.com/Asqara/karakidz-memos"
    },
    {
      id: "risbang-menfess", title: "Risbang Menfess", year: "2025", category: t("Social Experience"),
      description: t("An anonymous message and memory experience with realtime feeds, reporting, sharing, and moderation-oriented flows."),
      stack: ["HTML", "JavaScript", "Supabase", "Netlify"], githubUrl: "https://github.com/Asqara/risbang"
    },
    {
      id: "birthday-azzuhra", title: "Azzuhra Birthday Experience", year: "2026", category: t("Creative Microsite"),
      description: t("A bespoke birthday microsite composed with animated scenes, personal media, and timed interactive moments."),
      stack: ["HTML", "CSS", "JavaScript", "Audio"], githubUrl: "https://github.com/Asqara/selamat-ultah-azzuhra"
    },
    {
      id: "happy-birthday", title: "Birthday Greeting Card", year: "2024", category: t("Creative Microsite"),
      description: t("An interactive digital greeting card with music, imagery, reveal interactions, and a celebratory sequence."),
      stack: ["HTML", "CSS", "JavaScript", "Audio"], githubUrl: "https://github.com/Asqara/happybirthday"
    },
    {
      id: "sub-unit-announcement", title: "Sub-unit Selection Portal", year: "2025", category: t("Recruitment Tool"),
      description: t("A focused participant lookup and selection announcement interface for the Surfivevor sub-unit."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/sub-unit"
    },
    {
      id: "mpkmb-unit-announcement", title: "PJK MPKMB Selection Portal", year: "2025", category: t("Recruitment Tool"),
      description: t("A lightweight candidate verification and unit selection announcement experience for PJK MPKMB."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/pengumuman-unit-mpkmb"
    },
    {
      id: "ormawa-announcement", title: "Ormawa Selection Portal", year: "2024", category: t("Recruitment Tool"),
      description: t("A direct lookup interface for publishing organizational recruitment results clearly and privately."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/pengumuman-ormawaekse"
    },
    {
      id: "risbang-announcement", title: "Risbang Selection Portal", year: "2024", category: t("Recruitment Tool"),
      description: t("A recruitment result portal with candidate lookup, outcome feedback, and audio-supported interactions."),
      stack: ["HTML", "CSS", "JavaScript", "Audio"], githubUrl: "https://github.com/Asqara/pengumuman-risbang"
    },
    {
      id: "academic-survey", title: "Academic Survey Platform", year: "2025", category: t("Research Tool"),
      description: t("A structured academic survey interface for collecting respondent identity and multi-step research answers."),
      stack: ["HTML", "CSS", "JavaScript", "Forms"], githubUrl: "https://github.com/Asqara/survei-akademik"
    },
    {
      id: "lampung-website", title: "Lampung Information Website", year: "2024", category: t("Information Website"),
      description: t("A regional information website exploring content structure, navigation, and visual presentation for Lampung."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/website-lampung"
    },
    {
      id: "physics-practicum", title: "Physics Practicum Toolkit", year: "2024", category: t("Computational Tool"),
      description: t("A browser-based practicum toolkit for calculating velocity, viscosity, and measurement uncertainty."),
      stack: ["HTML", "CSS", "JavaScript", "Numerical Methods"], githubUrl: "https://github.com/Asqara/praktikum-07"
    },
    {
      id: "viscosity-calculator", title: "Viscosity Calculator", year: "2024", category: t("Computational Tool"),
      description: t("A focused scientific calculator for viscosity values and experimental error propagation."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/Viskositas"
    },
    {
      id: "velocity-calculator", title: "Velocity & Delta Calculator", year: "2024", category: t("Computational Tool"),
      description: t("A small physics utility for calculating ball velocity and delta values from experimental inputs."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/Kecepatan"
    },
    {
      id: "personal-website", title: "Personal Website V1", year: "2024", category: t("Personal Web"),
      description: t("An early personal website documenting the first iteration of identity, layout, and frontend experimentation."),
      stack: ["HTML", "CSS", "JavaScript"], githubUrl: "https://github.com/Asqara/Personal-Website"
    }
  ];
}
