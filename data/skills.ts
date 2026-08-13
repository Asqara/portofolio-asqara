import { useExtracted } from "next-intl";

export function useSkills() {
  const t = useExtracted("skills");
  return [
    { category: t("Application"), items: ["Next.js", "React", "Laravel", "Inertia.js", "Bun", "Tailwind CSS", "Framer Motion"] },
    { category: t("Languages"), items: ["TypeScript", "JavaScript", "Python", "PHP", "C++", "Java"] },
    { category: t("Data"), items: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "Drizzle ORM", "SQL"] },
    { category: t("Infrastructure"), items: ["Kubernetes", "k3s", "Docker", "Linux", "Git", "GitHub"] },
    { category: t("Tooling"), items: ["React Query", "next-intl", "pnpm", "Playwright", "n8n", "Baileys", "Figma"] }
  ];
}
