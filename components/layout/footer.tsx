import Link from "next/link";
import { PricingSlideLink } from "@/components/ui/pricing-slide-link";
import { profile } from "@/lib/data";

/* --------------------------------------------------------------------------
   GitHub contribution graph — fetched live, recolored to the site palette
   (ghchart.rshah.org returns a green-on-light SVG; we invert it to
   cream-on-near-black so it sits natively in the dark theme).
   -------------------------------------------------------------------------- */
async function ContributionGraph() {
  let svg: string | null = null;
  try {
    const res = await fetch("https://ghchart.rshah.org/al1prahman", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      svg = (await res.text())
        .replace(/#eeeeee/gi, "rgba(249,245,239,0.08)") // bg + empty cells
        .replace(/#c6e48b/gi, "#2E2B28") // level 1
        .replace(/#7bc96f/gi, "#57534D") // level 2
        .replace(/#239a3b/gi, "#8F8A82") // level 3
        .replace(/#196127/gi, "#F9F5EF") // level 4
        .replace(/#767676/gi, "#959089"); // labels
    }
  } catch {
    /* offline — graph is decorative, fail silently */
  }

  if (!svg)
    return (
      <p className="font-mono text-body-sm text-subtle">
        Contribution graph unavailable right now.
      </p>
    );

  return (
    <div
      className="gh-graph [&>svg]:h-auto [&>svg]:w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[75rem] px-4 py-14 md:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* wordmark + quote */}
          <div>
            <p className="ds-display text-display-sm">
              {profile.name}
              <span className="text-accent">®</span>
            </p>
            <p className="mt-3 max-w-xs font-mono text-label-sm uppercase tracking-label-sm text-subtle">
              {/* "So surely, with hardship comes ease" */}
              &ldquo;So surely, with hardship comes ease&rdquo;
            </p>
          </div>

          {/* sitemap */}
          <div>
            <p className="ds-label mb-4 text-subtle">Sitemap</p>
            <ul className="space-y-2.5">
              {[
                { href: "/#projects", label: "Projects" },
                { href: "/#experience", label: "Experience" },
                { href: "/#activity", label: "Activity" },
                { href: "/design-system", label: "Design System" },
              ].map((l) => (
                <li key={l.href}>
                  <PricingSlideLink href={l.href} className="text-body-sm normal-case tracking-normal text-muted">
                    {l.label}
                  </PricingSlideLink>
                </li>
              ))}
            </ul>
          </div>

          {/* elsewhere */}
          <div>
            <p className="ds-label mb-4 text-subtle">Elsewhere</p>
            <ul className="space-y-2.5">
              {[
                { href: profile.links.github, label: "github" },
                { href: profile.links.linkedin, label: "linkedin" },
                { href: profile.links.email, label: "email" },
              ].map((l) => (
                <li key={l.href}>
                  <PricingSlideLink
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-body-sm normal-case tracking-normal text-muted"
                  >
                    {l.label}
                  </PricingSlideLink>
                </li>
              ))}
            </ul>
          </div>

          {/* github contributions — level with the link columns */}
          <div className="w-full lg:max-w-[26rem]">
            <p className="ds-label mb-4 text-subtle">@al1prahman on github</p>
            <ContributionGraph />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-label-sm uppercase tracking-label-sm text-subtle">
            {profile.fullName}, still sharpening, based in {profile.location}
          </p>
          <PricingSlideLink
            href="#top"
            className="text-label-sm normal-case tracking-label-sm text-subtle"
          >
            back to top
          </PricingSlideLink>
        </div>
      </div>
    </footer>
  );
}
