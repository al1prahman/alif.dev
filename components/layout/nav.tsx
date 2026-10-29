"use client";

import * as React from "react";
import Link from "next/link";
import { clsx } from "@/lib/clsx";
import { profile } from "@/lib/data";
import { WhiteContactOrbitButton } from "@/components/ui/white-contact-orbit-button";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#activity", label: "Activity" },
  { href: "/design-system", label: "Design System" },
];

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll-spy: the nav link for the section in view lights up */
  React.useEffect(() => {
    const ids = ["projects", "experience", "activity"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/#") && href.slice(2) === active;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[200] transition-all duration-300",
        scrolled
          ? "border-b border-line/60 bg-canvas/60 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-[75rem] items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-mono text-label uppercase tracking-label text-ink"
        >
          {profile.name}
          <span className="text-accent">®</span>
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "true" : undefined}
              className={clsx(
                "font-mono text-label uppercase tracking-label transition-colors duration-200",
                isActive(l.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <WhiteContactOrbitButton href="/#contact">
            Get in touch
          </WhiteContactOrbitButton>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={clsx(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "translate-y-[3px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "-translate-y-[3px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-line bg-canvas/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col px-4 py-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 font-mono text-label uppercase tracking-label text-muted last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-10 items-center justify-center rounded-pill bg-accent font-mono text-label uppercase tracking-label text-accent-ink"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
