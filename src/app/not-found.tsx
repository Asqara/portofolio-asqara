import Link from "next/link";
import { LiquidFill } from "@/components/motion/liquid-fill";

export default function NotFound() { return <div className="not-found site-shell"><span>/404 · ROUTE_UNAVAILABLE</span><h1>SYSTEM<br />NOT FOUND.</h1><p>The requested node does not exist in this build.</p><Link href="/" className="button button--primary liquid-control liquid-surface"><LiquidFill color="violet" intensity="strong" duration={1.05} /><span>RETURN HOME ↗</span></Link></div>; }
