import type { AnchorHTMLAttributes } from "react";
import { LiquidFill } from "../motion/liquid-fill";

export function ExternalLink({ children, className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`external-link liquid-control liquid-surface ${className}`} target="_blank" rel="noreferrer" {...props}>
      <LiquidFill color="violet" intensity="strong" duration={1.05} />
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
