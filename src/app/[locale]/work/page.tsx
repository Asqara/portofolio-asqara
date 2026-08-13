import type { Metadata } from "next";
import { getExtracted } from "next-intl/server";
import { useExtracted } from "next-intl";
import { ProjectCard } from "@/components/project/project-card";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/lib/projects";
import { routing } from "@/i18n/routing";
import { RepositoryArchive } from "@/components/sections/repository-archive";

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getExtracted();
  const canonical = locale === routing.defaultLocale ? "/work" : `/${locale}/work`;
  return { title: t("Work"), description: t("Selected production systems, data infrastructure, and full-stack engineering work by Alfath Asqar Tsani."), alternates: { canonical, languages: { en: "/work", id: "/id/work", "x-default": "/work" } } };
}

export default function WorkPage() {
  const t = useExtracted();
  return (
    <><div className="work-index site-shell">
      <SectionLabel number="00" label={t("PROJECT INDEX / ALL SYSTEMS")} />
      <div className="work-index__head"><h1>{t("SELECTED")}<br />{t("WORK.")}</h1><p>{t("Production platforms, student services, commerce systems, and public digital experiences.")}</p></div>
      <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    </div><RepositoryArchive /></>
  );
}
