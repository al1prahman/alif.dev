"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { PricingSlideLink } from "@/components/ui/pricing-slide-link";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  /* pointer-tracked spotlight: the card answers the cursor */
  const onCardMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <Section
      id="projects"
      title="Projects I've built and shipped."
      description="5 latest projects across web, mobile, and machine learning: administration systems, internship platforms, computer vision, and network operations tools."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60} as="div">
            <Link
              href={`/projects/${p.slug}`}
              onPointerMove={onCardMove}
              className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-canvas transition-all duration-300 hover:border-line-strong hover:shadow-md"
            >
              {/* spotlight under the content */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--ds-color-ink) 7%, transparent), transparent 65%)",
                }}
              />
              {/* image */}
              {p.image && (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-7 md:p-8">
                {/* index + year */}
                <div className="mb-6 flex items-center justify-between font-mono text-label uppercase tracking-label">
                  <span className="text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-subtle">{p.year}</span>
                </div>

                {/* title */}
                <h3 className="ds-display text-display-md transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  {p.title}
                </h3>

                <p className="mt-4 max-w-md text-body text-muted">
                  {p.summary}
                </p>

                {/* meta */}
                <div className="mt-auto pt-8">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between font-mono text-label uppercase tracking-label">
                    <span className="text-muted">{p.category}</span>
                    <PricingSlideLink href={`/projects/${p.slug}`}>
                      view
                    </PricingSlideLink>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}

        {/* CTA tile */}
        <Reveal delay={projects.length * 60} as="div">
          <div className="flex h-full min-h-[16rem] flex-col justify-center rounded-sm border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong hover:bg-surface-2 md:p-9">
            <p className="ds-label mb-4 text-subtle">Archive</p>
            <p className="ds-display text-display-md">
              All projects,
              <br />
              one page.
            </p>
            <div className="mt-6">
              <PricingSlideLink href="/projects">browse</PricingSlideLink>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
