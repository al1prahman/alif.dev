import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experiences, education, certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Three years of shipping across preschool administration, cooperative systems, city government, and documentary production.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="pb-16 pt-36 md:pt-48">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-8 flex items-center gap-3">
            <Link href="/" className="text-subtle transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-subtle">/</span>
            <span>Experience</span>
          </p>
          <h1 className="ds-display max-w-4xl text-display-xl">
            Where the work happened.
          </h1>
        </div>
      </section>

      <Section index="01" eyebrow="Roles">
        <ul className="border-t border-line">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company + exp.role} delay={i * 60} as="li">
              <div className="grid gap-6 border-b border-line py-10 transition-colors duration-300 hover:bg-surface md:grid-cols-[14rem_1fr] md:gap-12 md:px-6">
                <div>
                  <p className="font-mono text-label uppercase tracking-label text-ink">
                    {exp.period}
                  </p>
                  <p className="mt-2 font-mono text-label-sm uppercase tracking-label-sm text-subtle">
                    {exp.type}
                  </p>
                </div>
                <div>
                  <h2 className="ds-display text-display-md">
                    {exp.role}
                  </h2>
                  <p className="mt-2 font-mono text-body-sm text-muted">
                    {exp.company} in {exp.location}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {exp.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative max-w-2xl pl-6 text-body text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-4 before:bg-line-strong"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section index="02" eyebrow="Education & certifications">
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-canvas p-7 md:p-9">
            <p className="ds-label mb-6 text-subtle">Education</p>
            <p className="font-mono text-label uppercase tracking-label text-muted">
              {education.period}
            </p>
            <h3 className="ds-display mt-4 text-display-sm">
              {education.degree}
            </h3>
            <p className="mt-3 text-body text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-body-sm text-subtle">
              {education.location}
            </p>
          </div>
          {certifications.map((c) => (
            <div key={c.name} className="bg-canvas p-7 md:p-9">
              <p className="ds-label mb-6 text-subtle">Certifications</p>
              <p className="font-mono text-label uppercase tracking-label text-muted">
                {c.period}
              </p>
              <h3 className="ds-display mt-4 text-display-sm">{c.name}</h3>
              <p className="mt-3 text-body text-muted">{c.issuer}</p>
              <p className="mt-1 font-mono text-body-sm text-subtle">
                Credential ID {c.credentialId}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
