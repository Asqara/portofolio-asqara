import { useExtracted } from "next-intl";
import { useSkills } from "../../../data/skills";
import { SectionLabel } from "../ui/section-label";

export function Technology() {
  const t = useExtracted();
  const skills = useSkills();
  return (
    <section className="technology bordered-section" aria-labelledby="technology-title">
      <div className="site-shell">
        <SectionLabel number="06" label={t("TECHNOLOGY MATRIX")} />
        <div className="technology__head"><h2 id="technology-title" className="section-title">{t("TOOLS WITH")}<br />{t("A PURPOSE.")}</h2><p>{t("Technology choices follow the system: interface requirements, data shape, operational constraints, and the people maintaining it.")}</p></div>
        <div className="technology__matrix">{skills.map((group, index) => <article key={group.category}><span>0{index + 1}</span><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </div>
    </section>
  );
}
