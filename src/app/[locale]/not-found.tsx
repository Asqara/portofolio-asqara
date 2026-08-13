import { useExtracted } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LiquidFill } from "@/components/motion/liquid-fill";

export default function NotFound() {
  const t = useExtracted();
  return <div className="not-found site-shell"><span>{t("/404 · ROUTE_UNAVAILABLE")}</span><h1>{t("SYSTEM")}<br />{t("NOT FOUND.")}</h1><p>{t("The requested node does not exist in this build.")}</p><Link href="/" className="button button--primary liquid-control liquid-surface"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>{t("RETURN HOME")} ↗</span></Link></div>;
}
