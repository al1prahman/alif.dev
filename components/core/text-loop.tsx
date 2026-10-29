"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   TextLoop — cycles through children with spring 3D flips.
   motion-primitives pattern. Variants may be a function of the travel
   direction so words alternate entering from above/below.
   -------------------------------------------------------------------------- */
interface TextLoopProps {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants | ((direction: number) => Variants);
  onIndexChange?: (index: number) => void;
}

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { type: "spring", stiffness: 150, damping: 19, mass: 1.2 },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(-1);
  const items = React.Children.toArray(children);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => {
        const next = (i + 1) % items.length;
        setDirection(next === 0 ? -1 : 1);
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const resolved: Variants =
    typeof variants === "function"
      ? variants(direction)
      : (variants ?? {
          initial: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
          animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
          exit: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
        });

  return (
    <span
      className={cn("relative inline-block overflow-hidden", className)}
      style={{ perspective: "600px" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          variants={resolved}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="inline-block whitespace-nowrap"
          style={{ transformOrigin: "center center" }}
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
