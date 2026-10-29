import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where the work happened."
      description="Three years of shipping across a preschool platform, a cooperative system, and a city government internship that also handed me a documentary crew."
    >
      <ul className="border-t border-line">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company + exp.role} delay={i * 60} as="li">
            <div className="group grid gap-6 border-b border-line py-9 transition-colors duration-300 hover:bg-surface md:grid-cols-[13rem_1fr_9rem] md:gap-10 md:px-6">
              {/* period */}
              <p className="font-mono text-label uppercase tracking-label text-subtle md:pt-1">
                {exp.period}
              </p>

              {/* role + company + points */}
              <div>
                <h3 className="ds-display text-display-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  {exp.role}
                </h3>
                <p className="mt-2 font-mono text-body-sm text-muted">
                  {exp.company} — {exp.location}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {exp.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-5 text-body-sm text-muted before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-3 before:bg-line-strong"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* type */}
              <p className="font-mono text-label uppercase tracking-label text-subtle md:pt-1 md:text-right">
                {exp.type}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
