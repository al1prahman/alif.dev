import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "The Griffin-derived design system foundations powering this site: color, typography, spacing, components, motion.",
};

/* --------------------------------------------------------------------------
   The palette, as data. Swatches render straight from the tokens.
   -------------------------------------------------------------------------- */
const palette = [
  { name: "canvas", token: "--ds-color-canvas", hex: "#0C0C0B", note: "page" },
  { name: "surface", token: "--ds-color-surface", hex: "#141312", note: "cards" },
  { name: "surface-2", token: "--ds-color-surface-2", hex: "#1A1918", note: "inputs" },
  { name: "surface-3", token: "--ds-color-surface-3", hex: "#262523", note: "chips" },
  { name: "ink", token: "--ds-color-ink", hex: "#F9F5EF", note: "text" },
  { name: "ink-muted", token: "--ds-color-ink-muted", hex: "#959089", note: "secondary" },
  { name: "ink-subtle", token: "--ds-color-ink-subtle", hex: "#514E4B", note: "meta" },
  { name: "accent", token: "--ds-color-accent", hex: "#E6E1D9", note: "buttons" },
];

const typeScale = [
  { name: "display-xl", cls: "text-display-xl", spec: "clamp(3rem → 6.5rem)" },
  { name: "display-lg", cls: "text-display-lg", spec: "clamp(2.5rem → 4.5rem)" },
  { name: "display-md", cls: "text-display-md", spec: "clamp(2rem → 3rem)" },
  { name: "display-sm", cls: "text-display-sm", spec: "1.75rem" },
  { name: "body-lg", cls: "text-body-lg", spec: "1.25rem / 1.75rem" },
  { name: "body", cls: "text-body", spec: "1rem / 1.5rem" },
  { name: "body-sm", cls: "text-body-sm", spec: "0.875rem / 1.25rem" },
];

const spacing = [
  { token: "--ds-space-1", px: "4" },
  { token: "--ds-space-2", px: "8" },
  { token: "--ds-space-3", px: "12" },
  { token: "--ds-space-4", px: "16" },
  { token: "--ds-space-5", px: "24" },
  { token: "--ds-space-6", px: "32" },
  { token: "--ds-space-7", px: "48" },
  { token: "--ds-space-8", px: "64" },
  { token: "--ds-space-9", px: "96" },
  { token: "--ds-space-10", px: "128" },
  { token: "--ds-space-11", px: "192" },
];

export default function DesignSystemPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- head */}
      <section className="pb-14 pt-36 md:pt-48">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-8 flex items-center gap-3">
            <Link href="/" className="text-subtle transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-subtle">/</span>
            <span>Design System</span>
          </p>
          <h1 className="ds-display max-w-4xl text-display-xl">
            The system behind the site.
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg font-light text-muted">
            Foundations derived from the design language of griffin.com, a
            warm near-black canvas, cream ink, a high-contrast serif, and
            uppercase mono labels. Every token below is live: it renders
            straight from the same CSS custom properties the site uses.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- color */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-5 flex items-center gap-3">
            <span className="text-subtle">01</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>Color</span>
          </p>
          <h2 className="ds-display mb-14 text-display-lg">
            Darkness with temperature.
          </h2>
          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {palette.map((c) => (
              <div key={c.name} className="bg-canvas">
                <div
                  className="h-24 border-b border-line"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-4">
                  <p className="font-mono text-body-sm text-ink">{c.name}</p>
                  <p className="mt-1 font-mono text-label-sm tracking-label-sm text-subtle">
                    {c.hex}
                  </p>
                  <p className="mt-2 font-mono text-label-sm uppercase tracking-label-sm text-muted">
                    {c.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- typography */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-5 flex items-center gap-3">
            <span className="text-subtle">02</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>Typography</span>
          </p>
          <h2 className="ds-display mb-14 text-display-lg">
            Three voices, fixed jobs.
          </h2>

          <div className="space-y-px border border-line bg-line">
            {typeScale.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-2 bg-canvas py-6 transition-colors duration-300 hover:bg-surface md:flex-row md:items-baseline md:gap-10 md:px-6"
              >
                <div className="w-40 shrink-0">
                  <p className="font-mono text-body-sm text-ink">{t.name}</p>
                  <p className="mt-1 font-mono text-label-sm tracking-label-sm text-subtle">
                    {t.spec}
                  </p>
                </div>
                <p className={`ds-display ${t.cls}`}>The quick brown fox</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            <div className="bg-canvas p-6">
              <p className="ds-label mb-3 text-subtle">Display</p>
              <p className="font-mono text-body-sm text-muted">
                Instrument Serif, stands in for Cambon
              </p>
            </div>
            <div className="bg-canvas p-6">
              <p className="ds-label mb-3 text-subtle">Body</p>
              <p className="font-mono text-body-sm text-muted">
                Inter, stands in for Söhne
              </p>
            </div>
            <div className="bg-canvas p-6">
              <p className="ds-label mb-3 text-subtle">Mono</p>
              <p className="font-mono text-body-sm text-muted">
                JetBrains Mono, stands in for Söhne Mono
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- components */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-5 flex items-center gap-3">
            <span className="text-subtle">03</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>Components</span>
          </p>
          <h2 className="ds-display mb-14 text-display-lg">
            The vocabulary.
          </h2>

          {/* buttons */}
          <p className="ds-label mb-5 text-subtle">Buttons, the only pills</p>
          <div className="mb-14 flex flex-wrap items-center gap-3">
            <Button href="#top" variant="primary" size="lg">
              Primary
            </Button>
            <Button href="#top" variant="secondary" size="lg">
              Secondary
            </Button>
            <Button href="#top" variant="ghost" size="lg">
              Ghost →
            </Button>
          </div>

          {/* badges */}
          <p className="ds-label mb-5 text-subtle">Badges</p>
          <div className="mb-14 flex flex-wrap gap-2">
            {["Flutter", "React", "Laravel", "TypeScript", "Python"].map(
              (b) => (
                <Badge key={b}>{b}</Badge>
              )
            )}
          </div>

          {/* cards */}
          <p className="ds-label mb-5 text-subtle">Cards, hairline + 2px radius</p>
          <div className="grid gap-5 md:grid-cols-3">
            <Card interactive>
              <p className="ds-label mb-4 text-subtle">Interactive</p>
              <p className="ds-display text-display-sm">Hover me.</p>
              <p className="mt-3 text-body-sm text-muted">
                Border lifts to 18% cream, card rises 2px, shadow deepens.
              </p>
            </Card>
            <Card>
              <p className="ds-label mb-4 text-subtle">Static</p>
              <p className="ds-display text-display-sm">Surface.</p>
              <p className="mt-3 text-body-sm text-muted">
                Surface fill, hairline border, architectural corners.
              </p>
            </Card>
            <Card>
              <p className="ds-label mb-4 text-subtle">Rule</p>
              <p className="ds-display text-display-sm">One ink.</p>
              <p className="mt-3 text-body-sm text-muted">
                Hierarchy comes from warm-gray ramps, never from hue.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ spacing */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-5 flex items-center gap-3">
            <span className="text-subtle">04</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>Spacing & layout</span>
          </p>
          <h2 className="ds-display mb-14 text-display-lg">
            4px base, editorial generosity.
          </h2>

          <div className="space-y-3">
            {spacing.map((s) => (
              <div key={s.token} className="flex items-center gap-5">
                <p className="w-40 shrink-0 font-mono text-body-sm text-muted">
                  {s.token}
                </p>
                <div
                  className="h-6 bg-surface-3"
                  style={{ width: `${Math.min(parseInt(s.px) * 2, 384)}px` }}
                />
                <p className="font-mono text-label-sm tracking-label-sm text-subtle">
                  {s.px}px
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              { k: "container", v: "75rem, 1200px" },
              { k: "container-narrow", v: "48rem, prose" },
              { k: "section rhythm", v: "96px vertical" },
            ].map((r) => (
              <div key={r.k} className="bg-canvas p-6">
                <p className="ds-label mb-2 text-subtle">{r.k}</p>
                <p className="font-mono text-body-sm text-ink">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- motion */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="mx-auto w-full max-w-[75rem] px-4 md:px-6">
          <p className="ds-label mb-5 flex items-center gap-3">
            <span className="text-subtle">05</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>Motion</span>
          </p>
          <h2 className="ds-display mb-14 text-display-lg">
            Slow, weighted, never bouncy.
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { k: "fast", v: "150ms", note: "micro, hovers and color" },
              { k: "base", v: "300ms", note: "transitions, lifts" },
              { k: "slow", v: "600ms", note: "reveals, fade-ups" },
            ].map((m) => (
              <Card key={m.k}>
                <p className="ds-label mb-3 text-subtle">{m.k}</p>
                <p className="ds-display text-display-sm">{m.v}</p>
                <p className="mt-2 text-body-sm text-muted">{m.note}</p>
              </Card>
            ))}
          </div>

          <Reveal className="mt-10">
            <Card interactive className="text-center">
              <p className="ds-label mb-3 text-subtle">Live example</p>
              <p className="ds-display text-display-md">
                This card just revealed itself.
              </p>
              <p className="mt-3 text-body-sm text-muted">
                Fade-up 24px, 600ms, cubic-bezier(0.22, 1, 0.36, 1).
                Reload to watch it again.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
