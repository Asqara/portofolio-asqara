"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { LiquidFill } from "../motion/liquid-fill";

const emptySubscribe = () => () => undefined;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <button
      type="button"
      className="theme-toggle liquid-control liquid-surface"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={mounted && resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <LiquidFill color="violet" intensity="strong" duration={.9} />
      <span className="theme-toggle__glyph" aria-hidden="true">{mounted && resolvedTheme === "dark" ? "◐" : "◑"}</span>
      <span className="theme-toggle__label">{mounted ? resolvedTheme : "theme"}</span>
    </button>
  );
}
