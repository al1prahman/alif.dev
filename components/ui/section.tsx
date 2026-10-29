import * as React from "react";
import { clsx } from "@/lib/clsx";

/* --------------------------------------------------------------------------
   Section — numbered mono eyebrow + serif heading + hairline rule.
   The Griffin section grammar: "01 — PROJECTS" then the claim.
   -------------------------------------------------------------------------- */
export function Section({
  index,
  eyebrow,
  title,
  description,
  id,
  className,
  children,
  headingClassName,
}: {
  index?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  headingClassName?: string;
}) {
  return (
    <section
      id={id}
      className={clsx("relative py-20 md:py-28", className)}
    >
      <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
        {title && (
          <header className="mb-14 md:mb-20">
            <h2
              className={clsx(
                "ds-display max-w-3xl text-display-lg",
                headingClassName
              )}
            >
              {title}
            </h2>
            {description && (
              <p className="mt-6 max-w-2xl text-body-lg font-light text-muted">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
