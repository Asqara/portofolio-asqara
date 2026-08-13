import { useExtracted } from "next-intl";
import { useExperience } from "../../../data/experience";
import { SectionLabel } from "../ui/section-label";
import { LiquidFill } from "../motion/liquid-fill";

export function Experience() {
  const t = useExtracted();
  const experience = useExperience();
  return (
    <section className="experience bordered-section" id="experience" aria-labelledby="experience-title">
      <div className="site-shell">
        <SectionLabel number="09" label={t("EXPERIENCE")} />
        <div className="experience__head"><h2 id="experience-title" className="section-title">{t("OPERATING")}<br />{t("IN CONTEXT.")}</h2><p>{t("Roles spanning product delivery, platform coordination, research, and data operations.")}</p></div>
        <div className="experience__table" role="table" aria-label={t("Work experience")}>
          <div className="experience__row experience__row--head" role="row"><span>{t("YEAR")}</span><span>{t("ROLE")}</span><span>{t("ORGANIZATION")}</span></div>
          {experience.map((item, index) => <div className="experience__row liquid-surface" role="row" key={`${item.period}-${item.role}-${item.organization}`}><LiquidFill color={index === 0 ? "lime" : "violet"} intensity="subtle" /><time>{item.period}</time><strong>{item.role}</strong><span>{item.organization}</span></div>)}
        </div>
      </div>
    </section>
  );
}
