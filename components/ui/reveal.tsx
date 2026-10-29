"use client";

import * as React from "react";
import { clsx } from "@/lib/clsx";

/* --------------------------------------------------------------------------
   Reveal — weighted fade-up on enter (IntersectionObserver).
   One observer per element, unobserved after firing. Respects
   prefers-reduced-motion via CSS.
   -------------------------------------------------------------------------- */
export function Reveal({
  delay = 0,
  className,
  children,
  as: Tag = "div",
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "li" | "article" | "section";
}) {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — polymorphic ref across tag names
      ref={ref}
      className={clsx("ds-reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
