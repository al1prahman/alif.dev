import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Tilt } from "@/components/ui/tilt";
import { WhatsNewGlowButton } from "@/components/ui/whats-new-glow-button";
import { TextScramble } from "@/components/core/text-scramble";
import { BorderTrail } from "@/components/core/border-trail";
import { TextLoop } from "@/components/core/text-loop";
import { profile, stats } from "@/lib/data";

const LOOP_WORDS = [
  "fast",
  "secure",
  "clean",
  "minimalist",
  "dynamic",
  "progressive",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_22rem]">
          {/* left — name, role, bio, ctas */}
          <div>
            <Reveal delay={80}>
              <h1 className="ds-display text-display-xl">{profile.name}</h1>
            </Reveal>

            <Reveal delay={140}>
              <TextScramble
                as="p"
                speed={0.02}
                className="mt-5 font-mono text-[0.95rem] uppercase tracking-[0.14em] text-ink md:text-[1.05rem]"
              >
                {profile.role}
              </TextScramble>
              <p className="mt-2 font-mono text-label uppercase tracking-label text-muted">
                {profile.location}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 max-w-2xl text-body-lg font-light text-muted">
                <p className="inline-flex flex-wrap items-baseline whitespace-pre-wrap">
                  <span className="text-ink">I build </span>
                  <TextLoop
                    className="ds-display overflow-y-clip text-display-sm text-ink"
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 80,
                      mass: 10,
                    }}
                    variants={{
                      initial: {
                        y: 20,
                        rotateX: 90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                      animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -20,
                        rotateX: -90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                    }}
                  >
                    {LOOP_WORDS.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </TextLoop>
                  <span className="text-ink"> web or apps</span>
                </p>
                <p className="mt-4">
                  from scalable backend architecture to the final pixel.
                </p>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <WhatsNewGlowButton href="/projects">
                  View projects
                </WhatsNewGlowButton>
                <WhatsNewGlowButton href={profile.resume}>
                  Resume
                </WhatsNewGlowButton>
              </div>
            </Reveal>
          </div>

          {/* right — tilt profile card with orbiting border trail */}
          <Reveal delay={200} className="justify-self-center lg:justify-self-end">
            <Tilt rotationFactor={10} isRevese>
              <div className="relative w-[16rem] overflow-hidden rounded-lg border border-line bg-surface shadow-lg md:w-[20rem]">
                <BorderTrail className="rounded-lg" size={10} />
                <div className="relative aspect-[4/5]">
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name} — profile photo`}
                    fill
                    sizes="(max-width: 768px) 16rem, 20rem"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <p className="font-mono text-label uppercase tracking-label text-ink">
                    {profile.name}
                  </p>
                  <p className="font-mono text-label-sm uppercase tracking-label-sm text-subtle">
                    GMT+7
                  </p>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>

        {/* stats strip */}
        <Reveal delay={380}>
          <dl className="mt-20 grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas p-5">
                <dt className="ds-label mb-2 text-subtle">{s.label}</dt>
                <dd className="ds-display text-display-sm">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
