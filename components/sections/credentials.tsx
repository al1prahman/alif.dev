import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { education, certifications } from "@/lib/data";

export function CredentialsSection() {
  return (
    <Section
      id="credentials"
      index="04"
      eyebrow="Credentials"
      title="Schooled and certified."
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {/* education */}
        <Reveal as="div">
          <div className="h-full bg-canvas p-7 md:p-9">
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
        </Reveal>

        {/* certifications */}
        <Reveal delay={80} as="div">
          <div className="h-full bg-canvas p-7 md:p-9">
            <p className="ds-label mb-6 text-subtle">Certifications</p>
            {certifications.map((c) => (
              <div key={c.name}>
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
        </Reveal>
      </div>
    </Section>
  );
}
