import * as React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   BorderTrail — a soft light dot travels the card's border forever.
   CSS offset-path around the rounded rectangle; the dot's glow is a
   box-shadow in the current ink color, so it reads on both palettes.
   -------------------------------------------------------------------------- */
export function BorderTrail({
  className,
  size = 100,
  style,
}: {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div
        className="border-trail-dot"
        style={
          {
            width: size,
            height: size,
            ...style,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
