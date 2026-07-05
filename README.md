# Kai Aditya — Premium Frontend Developer Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, and shadcn/ui-style components.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

The build has been verified to compile with **zero TypeScript errors and zero ESLint
errors**.

## Before you deploy

1. **Content** — update `constants/data.ts` with your real name, projects, experience,
   tech stack, testimonials, and services. Update `lib/utils.ts` (`SITE_CONFIG`) with
   your real email, social links, and site URL.
2. **Assets** — drop these into `/public`:
   - `cv.pdf` — your resume, linked from the Hero "Download CV" button
   - `favicon.ico` — browser tab icon
   - `og-image.png` (1200×630) — social sharing preview image
3. **Photos** — replace the Unsplash placeholder photos in `hero.tsx` and `about.tsx`
   with your own images (add your image domain to `next.config.mjs` if not
   self-hosting).
4. **Contact form** — `app/api/contact/route.ts` currently logs submissions to the
   server console. Wire it up to a real email provider (Resend, SendGrid, Postmark) or
   a database before going live.
5. **Metadata** — update `SITE_CONFIG.url` in `lib/utils.ts` so Open Graph tags,
   `sitemap.xml`, and `robots.txt` point at your real domain.

## Project structure

```
app/                  Routes, layout, metadata, sitemap, robots, API routes
components/
  ui/                 Reusable primitives (button, card, badge, input...) + motion helpers
  layout/             Navbar, footer, theme toggle
  sections/           Hero, About, Tech Stack, Projects, Experience, Services,
                       Testimonials, Contact
  effects/            Loading screen, custom cursor, scroll progress bar,
                       command palette, scroll-to-top, animated background
lib/                  cn() helper, site config, form validation schema
hooks/                Scroll-spy, scroll-progress, media query, count-up
constants/             All site content/data lives here
types/                Shared TypeScript types
```

## Features included

- Dark / light mode (next-themes) with system preference detection
- Command palette (⌘K / Ctrl+K) for quick navigation
- Loading screen, scroll progress bar, scroll-to-top button
- Custom cursor on desktop (auto-disabled on touch/mobile)
- Animated, filterable project grid and tech stack grid
- Scroll-spy navbar with animated active pill
- Testimonials slider, vertical experience timeline, animated stat counters
- Validated contact form (react-hook-form + zod) posting to an API route
- SEO metadata, Open Graph tags, dynamic sitemap.xml and robots.txt
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`
