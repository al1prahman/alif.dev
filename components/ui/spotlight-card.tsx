"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   SpotlightCard — a card that answers the pointer. A soft radial light
   tracks the cursor across the surface (CSS vars, no re-render), so the
   card feels touched rather than static. Content sits above the light.
   -------------------------------------------------------------------------- */
export function SpotlightCard({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn(
        "group/spot relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* the light, under the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--ds-color-ink) 7%, transparent), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}
