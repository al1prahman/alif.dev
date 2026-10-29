# portofolio

Portfolio of **Alip Rahman** — Fullstack & Mobile Developer, Semarang,
Indonesia — rebuilt on a design system derived from the design language of
[griffin.com](https://www.griffin.com/).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS v4** — theme generated from CSS custom properties
- **TypeScript**, zero UI dependencies
- Fonts: Instrument Serif (display) · Inter (body) · JetBrains Mono (labels)

## Structure

```
porto-hermes/
├── design-system/          ← the foundations (deliverable #1)
│   ├── tokens.css          ← every visual decision as --ds-* tokens
│   └── README.md           ← full system documentation
├── app/                    ← routes (deliverable #2)
│   ├── page.tsx            ← home: hero, projects, experience, skills…
│   ├── projects/           ← archive + [slug] detail pages
│   ├── experience/         ← full experience timeline
│   ├── activity/           ← outside the IDE
│   ├── design-system/      ← live showcase of every token
│   └── globals.css         ← Tailwind @theme mapping + base styles
├── components/
│   ├── ui/                 ← button, card, badge, section, reveal
│   ├── layout/             ← nav, footer
│   └── sections/           ← hero, projects, experience, skills…
└── lib/data.ts             ← all site content in one file
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Deploy

Push to GitHub, import into Vercel — zero config needed.

## The design system

See [`design-system/README.md`](./design-system/README.md). Short version:
warm near-black canvas (`#0C0C0B`), cream ink (`#F9F5EF`), a
high-contrast serif for statements, grotesque body text, uppercase mono
labels, hairline borders, pill buttons, and slow weighted reveals.
