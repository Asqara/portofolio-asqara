import { useExtracted } from "next-intl";
import { ArchitectureDiagram } from "../system/architecture-diagram";
import { SectionLabel } from "../ui/section-label";

export function PlatformEngineering() {
  const t = useExtracted();
  return <section className="platform bordered-section" id="system" aria-labelledby="platform-title"><div className="site-shell platform__grid">
    <div className="platform__copy"><SectionLabel number="04" label={t("PLATFORM ENGINEERING")} /><h2 id="platform-title" className="section-title">{t("BEYOND")}<br />{t("THE")}<br />{t("INTERFACE.")}</h2><p>{t("Products do not stop at the browser. I work across service boundaries, data stores, containers, orchestration, deployment, and the operational decisions that keep software useful.")}</p><div className="signal-metric"><strong>~1,000</strong><span>{t("RPS PEAK LOAD")}<br />{t("PRODUCTION SYSTEM")}</span></div></div>
    <div className="platform__diagram"><div className="diagram-labels"><span>{t("CONTAINERIZED")}</span><span>{t("ORCHESTRATED")}</span><span>{t("SCALABLE")}</span><span>{t("RECOVERABLE")}</span></div><ArchitectureDiagram /></div>
  </div></section>;
}
