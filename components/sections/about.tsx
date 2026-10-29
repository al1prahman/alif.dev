import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="ds-display max-w-md text-display-lg">
              Developer by craft, builder by instinct.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6 text-body-lg font-light leading-relaxed text-muted">
              <p>
                I&apos;m a fullstack &amp; mobile developer based in{" "}
                {profile.location}. I specialize in high-performance web
                applications and cross-platform mobile experiences with
                React, Laravel, and Flutter, owning the whole path from
                database design and REST APIs to the final pixel.
              </p>
              <p>
                Three years of shipping: a preschool administration system,
                an internship platform with a companion app, computer-vision
                tooling, and network operations software. I care about
                products that are fast, secure, and clean. Software that
                works as good as it looks.
              </p>
            </div>

            {/* quick facts */}
            <dl className="mt-10 grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
              {[
                { k: "Based in", v: profile.location },
                { k: "Focus", v: "Fullstack & Mobile" },
                { k: "Timezone", v: profile.timezone },
              ].map((f) => (
                <div key={f.k} className="bg-canvas p-5">
                  <dt className="ds-label mb-2 text-subtle">{f.k}</dt>
                  <dd className="font-mono text-body-sm text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
