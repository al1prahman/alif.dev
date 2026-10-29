"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   WhatsNewGlowButton — pointer-tracked warm glow rising from the bottom.
   microkit pattern, re-skinned: the orange/blue glows become the site's
   own warm ramp (bone → ash → charcoal). Renders <a> when href is given.
   -------------------------------------------------------------------------- */
interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function WhatsNewGlowButton({
  children,
  href,
  className,
  onClick,
}: GlowButtonProps) {
  const updateGlow = (e: ReactPointerEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const position = Math.max(
      0,
      Math.min(100, ((e.clientX - bounds.left) / bounds.width) * 100)
    );
    e.currentTarget.style.setProperty("--glow-x", `${position}%`);
  };
  const resetGlow = (e: ReactPointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--glow-x", "50%");
  };

  const inner = (
    <>
      <span className="whats-new-content">
        <ArrowRight size={16} strokeWidth={2.5} />
        {children}
      </span>
      <span className="whats-new-glow whats-new-glow-warm" aria-hidden="true" />
      <span className="whats-new-glow whats-new-glow-ash" aria-hidden="true" />
    </>
  );

  const cls = cn("whats-new-button", className);

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onPointerMove={updateGlow}
        onPointerLeave={resetGlow}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={cls}
      onClick={onClick}
      onPointerMove={updateGlow}
      onPointerLeave={resetGlow}
    >
      {inner}
    </button>
  );
}
