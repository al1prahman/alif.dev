import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Alip Rahman across web applications, mobile apps, and machine learning systems.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* page head */}
      <section className="pb-16 pt-36 md:pt-48">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <h1 className="ds-display max-w-4xl text-display-xl">
            The complete archive.
          </h1>
          <p className="mt-8 max-w-xl text-body-lg font-light text-muted">
            Everything I&apos;ve built that I can show, from administration
            systems and internship platforms to computer vision and network
            operations tools.
          </p>
        </div>
      </section>

      <Section>
        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} as="li">
              <Link
                href={`/projects/${p.slug}`}
                className="group grid gap-5 border-b border-line py-9 transition-colors duration-300 hover:bg-surface md:grid-cols-[5rem_1fr_12rem_4rem] md:items-baseline md:gap-8 md:px-6"
              >
                <span className="font-mono text-label uppercase tracking-label text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h2 className="ds-display text-display-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                    {p.title}
                  </h2>
                  <p className="mt-2 max-w-lg text-body-sm text-muted">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>

                <span className="font-mono text-label uppercase tracking-label text-muted">
                  {p.category}, {p.year}
                </span>

                <span
                  aria-hidden
                  className="hidden font-mono text-label text-ink transition-transform duration-300 group-hover:translate-x-1 md:block md:text-right"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
