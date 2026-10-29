import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PricingSlideLink } from "@/components/ui/pricing-slide-link";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const p = projects.find((x) => x.slug === slug);
    return {
      title: p ? p.title : "Project",
      description: p?.summary,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const index = projects.findIndex((x) => x.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pb-24 pt-36 md:pt-48">
      <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
        {/* breadcrumb */}
        <p className="ds-label mb-10 flex items-center gap-3">
          <Link
            href="/projects"
            className="text-subtle transition-colors hover:text-ink"
          >
            Projects
          </Link>
          <span className="text-subtle">/</span>
          <span>{p.title}</span>
        </p>

        {/* head */}
        {/* hero image */}
        {p.image && (
          <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-sm border border-line bg-surface">
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 1200px) 100vw, 75rem"
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="ds-label mb-6 flex items-center gap-3">
              <span className="text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-line-strong" />
              <span>
                {p.category}, {p.year}
              </span>
            </p>
            <h1 className="ds-display max-w-3xl text-display-lg">
              {p.title}
            </h1>
            <p className="mt-7 max-w-2xl text-body-lg font-light text-muted">
              {p.summary}
            </p>
          </div>

          {/* meta rail */}
          <dl className="grid h-fit grid-cols-2 gap-px self-start border border-line bg-line lg:grid-cols-1">
            {[
              { k: "Role", v: p.role },
              { k: "Status", v: p.status },
              { k: "Year", v: p.year },
              { k: "Category", v: p.category },
            ].map((row) => (
              <div key={row.k} className="bg-canvas p-5">
                <dt className="ds-label mb-1.5 text-subtle">{row.k}</dt>
                <dd className="font-mono text-body-sm text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* body */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_20rem]">
          <div>
            <h2 className="ds-label mb-5 text-subtle">Overview</h2>
            <p className="max-w-2xl text-body-lg font-light leading-relaxed text-ink">
              {p.description}
            </p>

            <h2 className="ds-label mb-5 mt-16 text-subtle">
              What it does
            </h2>
            <ul className="max-w-2xl space-y-3">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="relative border-b border-line pb-3 pl-6 text-body text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-3.5 before:bg-line-strong"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* stack rail */}
          <aside className="h-fit border border-line bg-surface p-6">
            <h2 className="ds-label mb-5 text-subtle">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <Button href="/projects" variant="secondary" size="sm">
                ← all projects
              </Button>
            </div>
          </aside>
        </div>

        {/* next project */}
        <Reveal>
          <div className="group mt-24 flex flex-col gap-4 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="ds-label mb-3 text-subtle">Next project</p>
              <Link
                href={`/projects/${next.slug}`}
                className="ds-display inline-block text-display-md transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
              >
                {next.title}
              </Link>
            </div>
            <PricingSlideLink href={`/projects/${next.slug}`}>
              view
            </PricingSlideLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
