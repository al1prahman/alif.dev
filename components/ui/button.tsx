import * as React from "react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-mono " +
  "text-label uppercase tracking-label whitespace-nowrap " +
  "transition-all duration-300 ease-out select-none";

const variants: Record<Variant, string> = {
  /* cream fill, near-black ink — the only loud thing on the page */
  primary:
    "bg-accent text-accent-ink hover:bg-accent-hover hover:shadow-md " +
    "active:translate-y-px",
  /* transparent, hairline border — quiet but clickable */
  secondary:
    "border border-line-strong text-ink hover:border-ink " +
    "hover:bg-surface-2 active:translate-y-px",
  /* ink only, underline on hover */
  ghost:
    "text-ink-muted hover:text-ink underline-offset-4 " +
    "hover:underline px-0",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3.5 text-label-sm",
  md: "h-10 px-5",
  lg: "h-12 px-7 text-[0.8125rem]",
};

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  href: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}

export interface ButtonVariantProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function ButtonAction({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonVariantProps) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
