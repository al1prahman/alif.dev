import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { activities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Activity",
  description:
    "Outside the IDE: gaming, hangouts, movies, football, photography, and video editing.",
};

export default function ActivityPage() {
  return (
    <>
      <section className="pb-16 pt-36 md:pt-48">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-8 flex items-center gap-3">
            <Link href="/" className="text-subtle transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-subtle">/</span>
            <span>Activity</span>
          </p>
          <h1 className="ds-display max-w-4xl text-display-xl">
            After the laptop closes.
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg font-light text-muted">
            After spending the whole day sitting in front of a laptop just
            typing code, it feels natural to get tired and want to do
            something else, like playing games, watching movies, hanging
            out, playing football, even photography and video editing.
          </p>
        </div>
      </section>

      <Section index="01" eyebrow="Off the clock">
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.label} delay={i * 50} as="div">
              <div className="group h-full bg-canvas p-7 transition-colors duration-300 hover:bg-surface md:p-9">
                <p className="ds-label mb-6 text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="ds-display text-display-md transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  {a.label}
                </h2>
                <p className="mt-3 text-body text-muted">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
