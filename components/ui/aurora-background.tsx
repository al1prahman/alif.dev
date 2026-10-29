"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

/* --------------------------------------------------------------------------
   AuroraBackground — slow-drifting light streaks behind content.
   magicui pattern, re-skinned: the streaks are color-mixed from the
   registered ink token, so they morph along with the scroll palette
   (cream light on darkness → dark light on paper). No video, no JS
   animation loop — pure CSS, 60s linear infinite.
   -------------------------------------------------------------------------- */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[100vh] flex-col items-center justify-center bg-canvas text-ink transition-bg",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-70 blur-[50px] will-change-transform",
            "[background-image:var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%]",
            "after:absolute after:inset-0 after:[background-image:var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:content-['']",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_60%_0%,black_25%,var(--transparent)_85%)]"
          )}
          style={{ "--transparent": "transparent" } as React.CSSProperties}
        />
      </div>
      {children}
    </div>
  );
};
