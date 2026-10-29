import { clsx } from "@/lib/clsx";

/* --------------------------------------------------------------------------
   ProgressiveBlur — stacked backdrop-blur layers dissolving into the page.
   Smoothness trick: each layer's mask is a FEATHERED bell over its band
   (transparent → black → transparent), so adjacent blur steps overlap and
   blend instead of showing hard seams. Blur ramps 0 → 20px toward the
   anchored edge.
   -------------------------------------------------------------------------- */
const LAYERS = 10;
const MAX_BLUR = 20;

export function ProgressiveBlur({
  height = "50%",
  position = "bottom",
  className,
}: {
  height?: string;
  position?: "top" | "bottom";
  className?: string;
}) {
  const step = 100 / LAYERS;
  const dir = position === "top" ? "to bottom" : "to top";

  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-x-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{ height }}
    >
      {Array.from({ length: LAYERS }).map((_, i) => {
        const bandStart = i * step;
        const bandMid = bandStart + step / 2;
        const bandEnd = (i + 1) * step;
        const blur = (MAX_BLUR * (i + 1)) / LAYERS;
        /* feathered bell: fades in AND out across the band */
        const mask = `linear-gradient(${dir}, transparent ${bandStart}%, black ${bandMid}%, transparent ${bandEnd}%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur.toFixed(1)}px)`,
              WebkitBackdropFilter: `blur(${blur.toFixed(1)}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
