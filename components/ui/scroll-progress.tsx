"use client";

import * as React from "react";

/* --------------------------------------------------------------------------
   ScrollProgress — a hairline at the very top that fills as the page is
   read. One job: answer "how much is left" without a long scrollbar.
   -------------------------------------------------------------------------- */
export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[300] h-px bg-transparent"
    >
      <div
        className="h-full origin-left bg-ink"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
