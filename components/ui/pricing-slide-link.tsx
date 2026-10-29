"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   PricingSlideLink — the arrow slides in from the left on hover while the
   label shifts right. microkit pattern, token-skinned. Renders <a> when
   href is given.
   -------------------------------------------------------------------------- */
interface SlideLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function PricingSlideLink({
  children,
  href,
  className,
  onClick,
  target,
  rel,
}: SlideLinkProps) {
  const inner = (
    <>
      <span className="pricing-slide-icon" aria-hidden="true">
        <ArrowRight size={20} strokeWidth={2.25} />
      </span>
      <span className="pricing-slide-label">{children}</span>
    </>
  );

  const cls = cn("pricing-slide", className);

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
