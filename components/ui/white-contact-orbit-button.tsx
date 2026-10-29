"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
   WhiteContactOrbitButton — pill with an orbit icon that fills on hover.
   microkit pattern, re-skinned: ink/canvas tokens so it inverts with the
   palette morph automatically. Renders <a> when href is given.
   -------------------------------------------------------------------------- */
interface OrbitButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function WhiteContactOrbitButton({
  children,
  href,
  className,
  onClick,
  target,
  rel,
  ...rest
}: OrbitButtonProps) {
  const inner = (
    <>
      <span className="white-contact-orbit-button-label">{children}</span>
      <span className="white-contact-orbit-button-icon" aria-hidden="true">
        <span className="white-contact-orbit-button-icon-surface" />
        <ArrowRight size={20} strokeWidth={2.6} />
      </span>
    </>
  );

  const cls = cn("white-contact-orbit-button", className);

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}
