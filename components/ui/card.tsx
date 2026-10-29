import * as React from "react";
import { clsx } from "@/lib/clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

/* Surface + hairline + 2px radius. Hover: border lifts, card rises 2px. */
export function Card({
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-sm border border-line bg-surface p-6",
        interactive &&
          "transition-all duration-300 ease-out " +
            "hover:border-line-strong hover:-translate-y-0.5 " +
            "hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
