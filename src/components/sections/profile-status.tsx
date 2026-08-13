import { useExtracted } from "next-intl";
import { useEducation } from "../../../data/education";
import { useSiteData } from "../../../data/site";
import { SectionLabel } from "../ui/section-label";
import { StatusActivity } from "../system/status-activity";
import { LiquidFill } from "../motion/liquid-fill";

export function ProfileStatus() {
  const t = useExtracted();
  const education = useEducation();
  const site = useSiteData();
  const status = [[t("CURRENT FOCUS"), site.focus], [t("LOCATION"), site.location], [t("TIMEZONE"), site.timezone], [t("AVAILABILITY"), site.availability], ["GITHUB", "@ASQARA"]];
  return (
    <section className="profile bordered-section" id="about" aria-labelledby="profile-title"><div className="site-shell profile__grid">
      <article><SectionLabel number="10" label={t("EDUCATION")} /><h2 id="profile-title">{education.institution}</h2><p>{education.degree}</p><dl><div><dt>{t("GPA")}</dt><dd>{education.gpa}</dd></div><div><dt>{t("GRADUATION")}</dt><dd>{education.graduation}</dd></div><div><dt>{t("RECOGNITION")}</dt><dd>{education.recognition}</dd></div></dl></article>
      <article className="certification-panel liquid-surface"><LiquidFill color="violet" intensity="subtle" /><SectionLabel number="11" label={t("CERTIFICATION")} /><span className="profile__cert">{education.certification.issuer}</span><h2>{education.certification.title}</h2><p>{education.certification.organization}</p><a className="liquid-button liquid-control liquid-surface" href="https://bnsp.go.id" target="_blank" rel="noreferrer"><LiquidFill color="violet" intensity="strong" duration={1.35} /><span>{t("VIEW BNSP")} ↗</span></a></article>
      <article className="status-panel"><SectionLabel number="12" label={t("SYSTEM STATUS")} />{status.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}<StatusActivity /><p><i /> {t("PROFILE OPERATIONAL")}</p></article>
    </div></section>
  );
}
