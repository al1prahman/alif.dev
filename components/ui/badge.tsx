import * as React from "react";
import { clsx } from "@/lib/clsx";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-pill border border-line " +
          "bg-surface-3 px-2.5 py-1 font-mono text-label-sm " +
          "uppercase tracking-label-sm text-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
