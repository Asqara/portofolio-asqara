import { useExtracted } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useExtracted();
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" className="wordmark"><span aria-hidden="true"></span> ASQARA<span className="accent">.TECH</span></Link>
          <p>© 2026 ASQARA.TECH<br />{t("SYSTEMS BUILT FOR REAL USE.")}</p>
        </div>
        <div><p className="footer-label">{t("NAVIGATION")}</p><Link href="/#work">{t("Work")}</Link><Link href="/#system">{t("System")}</Link><Link href="/#experience">{t("Experience")}</Link><Link href="/#about">{t("About")}</Link></div>
        <div><p className="footer-label">{t("EXTERNAL")}</p><a href="https://github.com/Asqara" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/asqaraa" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:Alfath.asqartsani@gmail.com">Email ↗</a></div>
        <div className="footer-node"><p className="footer-label">{t("GLOBAL NODE")}</p><strong>BOGOR</strong><span>06.5971° S</span><span>106.8060° E</span><span>UTC+7</span></div>
      </div>
      
    </footer>
  );
}
