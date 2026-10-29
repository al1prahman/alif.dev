"use client";

import * as React from "react";
import gsap from "gsap";
import { TextLoop } from "@/components/core/text-loop";

/* "hello" around the world — cycles like an OS boot splash.
   Hello (English) first, then the world. */
const HELLOS = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Halo",
  "Olá",
  "Hej",
  "Ahoj",
  "Cześć",
  "Привет",
  "안녕하세요",
  "नमस्ते",
  "مرحبا",
];

export function BootScreen() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // once per browser session
    if (sessionStorage.getItem("porto-booted")) return;
    sessionStorage.setItem("porto-booted", "1");

    setVisible(true);

    const exit = window.setTimeout(() => {
      /* smooth hand-off: the hello lifts and blurs out, then the whole
         overlay dissolves — the landing page is already revealed beneath */
      gsap
        .timeline({ onComplete: () => setVisible(false) })
        .to("#boot-hello", {
          y: -28,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.45,
          ease: "power2.in",
        })
        .to("#boot-bar", { opacity: 0, duration: 0.25, ease: "power2.in" }, "<0.05")
        .to(
          "#boot-screen",
          { opacity: 0, duration: 0.7, ease: "power3.inOut" },
          "-=0.1"
        );
    }, HELLOS.length * 550 + 400);

    return () => window.clearTimeout(exit);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="boot-screen"
      className="fixed inset-0 z-[400] flex flex-col items-center justify-center bg-canvas px-6"
    >
      {/* the cycling hello — spring 3D flip per word */}
      <div id="boot-hello" className="ds-display text-display-lg">
        <TextLoop
          interval={0.55}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 19,
            mass: 1.2,
          }}
          variants={{
            initial: { y: -24, rotateX: -90, opacity: 0, filter: "blur(4px)" },
            animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
            exit: { y: 24, rotateX: 90, opacity: 0, filter: "blur(4px)" },
          }}
        >
          {HELLOS.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </TextLoop>
      </div>

      {/* progress hairline */}
      <div id="boot-bar" className="mt-10 h-px w-40 overflow-hidden bg-line">
        <div className="h-full w-1/3 animate-[boot-slide_1.2s_ease-in-out_infinite] bg-ink" />
      </div>
    </div>
  );
}
