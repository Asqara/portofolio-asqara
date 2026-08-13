import { useExtracted } from "next-intl";
import { SectionLabel } from "../ui/section-label";

export function DataInfrastructure() {
  const t = useExtracted();
  const steps = [t("RAW SOURCES"), t("CLEANING"), t("VALIDATION"), t("NORMALIZATION"), t("CENTRALIZED STUDENT DATA")];
  const outputs = [t("ATTENDANCE"), t("GROUPING"), t("AUTHENTICATION"), "HELPDESK", t("STUDENT SERVICES"), t("INTERNAL OPERATIONS")];
  return <section className="data-section bordered-section" aria-labelledby="data-title"><div className="site-shell"><SectionLabel number="05" label={t("DATA INFRASTRUCTURE")} /><div className="data-section__intro"><h2 id="data-title" className="section-title">{t("ONE SOURCE.")}<br />{t("MANY SYSTEMS.")}</h2><p>{t("The work was not simply storing student records. It was creating structured, reusable, consistent data that multiple teams and services could depend on.")}</p></div><div className="data-pipeline"><div className="data-pipeline__steps">{steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < steps.length - 1 && <i>→</i>}</div>)}</div><div className="data-pipeline__outputs">{outputs.map((output) => <span key={output}>+ {output}</span>)}</div><div className="data-pipeline__metric"><strong>~8,000</strong><span>{t("STUDENT")}<br />{t("RECORDS")}</span></div></div></div></section>;
}
