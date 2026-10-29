"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   TextScramble — decodes text through random glyphs before settling.
   motion-primitives pattern. Fires on hover (or when `trigger` flips true).
   -------------------------------------------------------------------------- */
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#________";

interface TextScrambleProps {
  children: string;
  className?: string;
  as?: "span" | "h2" | "p";
  speed?: number;
  trigger?: boolean;
  onHoverStart?: () => void;
  onScrambleComplete?: () => void;
}

export function TextScramble({
  children,
  className,
  as = "span",
  speed = 0.03,
  trigger = true,
  onHoverStart,
  onScrambleComplete,
}: TextScrambleProps) {
  const Tag = as;
  const [display, setDisplay] = React.useState(children);
  const running = React.useRef(false);
  const raf = React.useRef(0);

  const run = React.useCallback(() => {
    if (running.current) return;
    running.current = true;
    onHoverStart?.();

    const original = children;
    const length = original.length;
    /* each character settles at a random point in the timeline */
    const settle = original.split("").map((_, i) => {
      if (original[i] === " ") return 0;
      return Math.random() * (length * speed * 1000) * 0.7;
    });
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      let done = true;
      const out = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (elapsed >= settle[i] + 350) return char;
          done = false;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(out);
      if (!done) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setDisplay(original);
        running.current = false;
        onScrambleComplete?.();
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, [children, speed, onHoverStart, onScrambleComplete]);

  React.useEffect(() => {
    if (trigger) run();
    return () => cancelAnimationFrame(raf.current);
  }, [trigger, run]);

  return (
    <Tag
      className={cn(className)}
      onMouseEnter={run}
      style={{ fontVariantLigatures: "none" }}
    >
      {display}
    </Tag>
  );
}
