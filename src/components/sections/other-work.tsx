import { useExtracted } from "next-intl";
import { SectionLabel } from "../ui/section-label";
import { LiquidFill } from "../motion/liquid-fill";

export function OtherWork() {
  const t = useExtracted();
  const work = [
    { title: "CODE PANDA", meta: t("WEB DEVELOPER · 2025—PRESENT"), desc: t("LMS development, debugging, maintenance, and performance optimization across Laravel, Inertia.js, and Next.js."), metric: t("~60% / PAGE-LOAD IMPROVEMENT") },
    { title: t("WHATSAPP AUTOMATION"), meta: "BAILEYS · JAVASCRIPT", desc: t("Automated helpdesk, broadcast workflows, batch messaging, session handling, and internal service automation."), metric: t("SERVICE AUTOMATION") },
    { title: t("MOODLE AUTOMATION"), meta: "PLAYWRIGHT", desc: t("Browser automation for participant management and repetitive administrative processes."), metric: t("OPERATIONAL TOOLING") },
    { title: t("RESEARCH & DATA ANALYSIS"), meta: "PYTHON · SQL · SPREADSHEETS", desc: t("Structured analysis workflows for research data, verification, and reporting."), metric: t("700+ / RESPONDENTS") }
  ];
  return <section className="other-work bordered-section" aria-labelledby="other-work-title"><div className="site-shell"><SectionLabel number="07" label={t("OTHER ENGINEERING WORK")} /><h2 id="other-work-title" className="sr-only">{t("Other engineering work")}</h2><div className="other-work__list">{work.map((item, index) => <article className="liquid-surface" key={item.title}><LiquidFill color="violet" intensity="subtle" /><span>0{index + 1}</span><div><h3>{item.title}</h3><small>{item.meta}</small></div><p>{item.desc}</p><strong>{item.metric}</strong></article>)}</div></div></section>;
}
