import type { Metadata } from "next";
import Image from "next/image";
import { useExtracted } from "next-intl";
import { getExtracted } from "next-intl/server";
import { notFound } from "next/navigation";
import { useProjectCopy } from "../../../../../data/project-copy";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SectionLabel } from "@/components/ui/section-label";
import { getNextProject, getProject, projects } from "@/lib/projects";
import type { Project } from "@/lib/types";
import { LiquidFill } from "@/components/motion/liquid-fill";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

async function getProjectMetadataCopy(slug: string) {
  const t = await getExtracted("project-data");
  switch (slug) {
    case "mysoc": return { description: t("An integrated operational platform connecting committee workflows, participant management, administration, and institutional stakeholders."), imageAlt: t("Abstract system map representing the MySOC operational platform") };
    case "studentorientation": return { description: t("A centralized student platform for orientation, participant management, information delivery, and digital student services."), imageAlt: t("Abstract data pipeline representing StudentOrientation") };
    case "agrisymphony-store": return { description: t("A digital merchandise platform supporting product, order, transaction, and production operations."), imageAlt: t("Abstract commerce interface representing Agrisymphony Store") };
    case "agrisymphony": return { description: t("A public-facing event website and digital services supporting event information and ticketing."), imageAlt: t("Abstract event ticketing artwork representing Agrisymphony") };
    default: return { description: "", imageAlt: "" };
  }
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const copy = await getProjectMetadataCopy(slug);
  const path = `/work/${project.slug}`;
  const canonical = locale === routing.defaultLocale ? path : `/${locale}${path}`;
  return { title: project.title, description: copy.description, alternates: { canonical, languages: { en: path, id: `/id${path}`, "x-default": path } }, openGraph: { title: project.title, description: copy.description, images: [{ url: project.image, width: 1600, height: 1000, alt: copy.imageAlt }] } };
}

function CaseStudyContent({ project, index, nextProject }: { project: Project; index: number; nextProject: Project }) {
  const t = useExtracted();
  const copy = useProjectCopy(project.slug);
  const nextCopy = useProjectCopy(nextProject.slug);
  const stackFor = (items: string[], fallback: string) => project.stack.filter((item) => items.includes(item)).join(" · ") || fallback;
  return (
    <article className="case-study">
      <header className="case-hero site-shell">
        <SectionLabel number={(index + 1).toString().padStart(2,"0")} label={`${copy.category} / ${project.year}`} />
        <h1>{project.title}</h1><p className="case-hero__subtitle">{copy.subtitle}</p>
        <div className="case-hero__meta"><div><span>{t("ROLE")}</span><strong>{copy.role}</strong></div><div><span>{t("STATUS")}</span><strong>{copy.status}</strong></div><div><span>{t("YEAR")}</span><strong>{project.year}</strong></div></div>
        <div className="case-hero__links">{project.projectUrl && <a className="liquid-control liquid-surface" href={project.projectUrl} target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("VIEW PROJECT")} ↗</span></a>}{project.websiteUrl && project.websiteUrl !== project.projectUrl && <a className="liquid-control liquid-surface" href={project.websiteUrl} target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("VISIT WEBSITE")} ↗</span></a>}{project.githubUrl && <a className="liquid-control liquid-surface" href={project.githubUrl} target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>GITHUB ↗</span></a>}</div>
      </header>
      <div className="case-media site-shell"><Image src={project.image} alt={copy.imageAlt} width={1600} height={1000} priority /></div>
      <section className="case-summary site-shell"><p>{copy.description}</p><dl><div><dt>{t("ROLE")}</dt><dd>{copy.role}</dd></div><div><dt>{t("YEAR")}</dt><dd>{project.year}</dd></div><div><dt>{t("STATUS")}</dt><dd>{copy.status}</dd></div><div><dt>{t("PLATFORM")}</dt><dd>{copy.platform}</dd></div><div><dt>{t("STACK")}</dt><dd>{project.stack.join(" · ")}</dd></div></dl></section>
      <section className="case-narrative site-shell"><article><SectionLabel number="01" label={t("CHALLENGE")} /><h2>{t("THE OPERATIONAL")}<br />{t("CONSTRAINT.")}</h2><p>{copy.challenge}</p></article><article><SectionLabel number="02" label={t("SOLUTION")} /><h2>{t("SYSTEM OVER")}<br />{t("PATCHWORK.")}</h2><p>{copy.solution}</p></article></section>
      <section className="technical-system bordered-section"><div className="site-shell"><SectionLabel number="03" label={t("TECHNICAL SYSTEM")} /><div className="technical-system__grid">
        <div><span>01</span><strong>FRONTEND</strong><p>{stackFor(["Next.js","TypeScript","React Query","Tailwind CSS","next-intl"], t("Web interface"))}</p></div>
        <div><span>02</span><strong>BACKEND</strong><p>{stackFor(["Bun","Drizzle ORM","Redis"], t("Application services"))}</p></div>
        <div><span>03</span><strong>DATABASE</strong><p>{stackFor(["PostgreSQL","Redis"], t("Structured data"))}</p></div>
        <div><span>04</span><strong>{t("INFRASTRUCTURE")}</strong><p>{stackFor(["Docker","Kubernetes","k3s"], t("Production deployment"))}</p></div>
        <div><span>05</span><strong>{t("CAPABILITIES")}</strong><p>{copy.capabilities.join(" · ")}</p></div>
      </div></div></section>
      {project.metrics.length > 0 && <section className="case-impact site-shell"><SectionLabel number="04" label={t("IMPACT")} /><div><h2>{project.metrics[0].value}</h2><strong>{copy.metricLabel}</strong><p>{copy.impact}</p></div></section>}
      {project.gallery.length > 0 && <section className="case-gallery site-shell"><SectionLabel number="05" label={t("SYSTEM VIEWS")} /><div>{project.gallery.map((image, imageIndex) => <Image key={image} src={image} alt={t("{title} system view {number}", { title: project.title, number: String(imageIndex + 1) })} width={1600} height={1000} />)}</div></section>}
      <Link href={`/work/${nextProject.slug}`} className="next-project liquid-control liquid-surface"><LiquidFill color="lime" intensity="medium" duration={1.25} /><span>{t("NEXT PROJECT")} / {nextCopy.category}</span><strong>{nextProject.title}</strong><i>↗</i></Link>
    </article>
  );
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudyContent project={project} index={projects.findIndex((item) => item.slug === project.slug)} nextProject={getNextProject(project.slug)} />;
}
