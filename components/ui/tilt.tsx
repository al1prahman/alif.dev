"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { clsx } from "@/lib/clsx";

/* --------------------------------------------------------------------------
   Tilt — 3D pointer-tracking tilt card (motion-primitives pattern).
   rotationFactor: max degrees. isRevese: inverts the tilt direction.
   -------------------------------------------------------------------------- */
export function Tilt({
  rotationFactor = 10,
  isRevese = false,
  springOptions,
  className,
  children,
}: {
  rotationFactor?: number;
  isRevese?: boolean;
  springOptions?: { stiffness?: number; damping?: number; mass?: number };
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    stiffness: 300,
    damping: 30,
    mass: 1,
    ...springOptions,
  };

  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isRevese ? [rotationFactor, -rotationFactor] : [-rotationFactor, rotationFactor]
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isRevese ? [-rotationFactor, rotationFactor] : [rotationFactor, -rotationFactor]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx("perspective-[1000px]", className)}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
