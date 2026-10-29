import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  /* every skill, flattened — feeds the marquee */
  const all = skillGroups.flatMap((g) => g.items);
  const marquee = [...all, ...all];

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Capabilities"
      title="The stack I build with."
      description="What I reach for: mobile, frontend, backend, machine learning, and the tools in between."
    >
      {/* marquee strip */}
      <div className="relative mb-16 overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-10">
          {marquee.map((s, i) => (
            <span
              key={s + i}
              className="flex items-center gap-10 font-mono text-label uppercase tracking-label text-muted"
            >
              {s}
              <span className="h-1 w-1 rounded-full bg-subtle" />
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent" />
      </div>

      {/* grouped columns */}
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 60} as="div" className="h-full">
            <div className="flex h-full flex-col bg-canvas p-6">
              <p className="ds-label mb-6 text-subtle">{g.label}</p>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-body-sm text-ink transition-colors duration-200 hover:text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
