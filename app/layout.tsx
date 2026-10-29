import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { BootScreen } from "@/components/boot-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alip Rahman, Fullstack & Mobile Developer",
    template: "%s, by Alip Rahman",
  },
  description:
    "Professional Fullstack & Mobile Developer from Semarang, Indonesia. " +
    "High-performance web applications and cross-platform mobile experiences " +
    "with React, Laravel, and Flutter.",
  keywords: [
    "Alip Rahman",
    "Fullstack Developer",
    "Mobile Developer",
    "React",
    "Laravel",
    "Flutter",
    "Semarang",
    "Portfolio",
  ],
  authors: [{ name: "Alip Rahman" }],
  openGraph: {
    title: "Alip Rahman, Fullstack & Mobile Developer",
    description:
      "Fast, reliable products, from scalable backends to the final pixel.",
    url: "https://aliprahman-dev.vercel.app/",
    siteName: "Alip Rahman",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-canvas text-ink antialiased">
        {/* one aurora for the whole site — every page shares the hero's sky */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="after:animate-aurora absolute -inset-[10px] opacity-70 blur-[50px] will-change-transform [background-image:var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%] after:absolute after:inset-0 after:[background-image:var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:content-[''] [mask-image:radial-gradient(ellipse_at_60%_0%,black_25%,transparent_85%)]"
            style={{ "--transparent": "transparent" } as React.CSSProperties}
          />
        </div>

        <BootScreen />
        <ScrollProgress />
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
