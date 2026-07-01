# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build — run this to catch TypeScript errors before pushing
npm run lint     # ESLint check
```

No test suite. `npm run build` is the verification step.

## Architecture

**Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion.** Static export with no backend — reservations go through WhatsApp (`wa.me/` links), no forms hit a server.

### Routes

| Route | Composition |
|---|---|
| `/` | HeroSection → HomeFavoritos → HomeReels → TestimonialsSection → HomeReservaCTA |
| `/menu` | MenuHero → MenuCategoriesGrid → MenuGridMasonry → MenuCTA |
| `/nosotros` | PageHeader → AboutSection → HomeReservaCTA |
| `/merch` | PageHeader → MerchSection → HomeReservaCTA |
| `/donde-estamos` | PageHeader → LocationSection → HomeReservaCTA |
| `/reservas` | PageHeader → ReservasSection |

Home sections below the fold load via `next/dynamic` in `app/page.tsx`.

### Two config files — all content lives here

**`config/cafe-miranda.ts`** — everything site-wide: phone, address, hours, coordinates, Google Maps URLs, `favoritos` (home page featured dishes with `accentColor`/`labelTextColor`), `testimonials` (real Google Maps reviews — keep real, don't invent), `merch`. Components import from `cafeConfig`; never hardcode content in components.

**`config/menu-items.ts`** — the `/menu` page: `menuConfig` with `hero`, `categories` (4), `masonry` (6 photos), `cta`. The `destacado`/`secundario` keys are orphaned (their component was removed).

### Layout-level components

`app/layout.tsx` renders fixed elements around `<main>`:
- `<RotatingStamp />` — circular rotating text stamp with logo, fixed bottom-right, `z-40`, all screen sizes
- `<AnnouncementBar />` — teal ticker fixed at `top-0 z-[60]`, shows hours/location/WhatsApp info
- `<Navbar />` — fixed at `top-8` (directly below the bar), `z-50`, h-16 with a 140×140px logo that overflows intentionally

Total fixed header height: ~96px. Page sections use `pt-24` to clear it.

### Animation conventions

- **Infinite tickers must use CSS `@keyframes`** (defined in `app/globals.css`: `ticker-hero`, `ticker-announcement`, etc.), never Framer Motion `repeat: Infinity` — Framer pauses on tab blur and the ticker freezes.
- Scroll-triggered animations: `"use client"` + `useInView` from Framer Motion with `once: true`.
- Outline text uses `WebkitTextStroke: "var(--stroke-w) <color>"` — the `--stroke-w` CSS variable is 1.5px on mobile, 3px on desktop (set in globals.css). Never hardcode stroke width.
- Dynamic per-item colors (dish accents, gradients) go in inline `style` with hex+alpha suffixes (`${color}99`) — Tailwind can't generate dynamic classes.
- Autoplay videos use `preload="none"` + a `poster` image so they never render black while loading.
- `HomeFavoritos` photos use `scale: 2, transformOrigin: "bottom center"` to crop the white top of the 1080×1350 source images — don't "fix" this.

### Mobile-first patterns

Mobile is the priority. Sections with card grids on desktop become horizontal snap carousels on mobile (`overflow-x-auto snap-x snap-mandatory scrollbar-none`), e.g. HomeFavoritos, TestimonialsSection, HomeReels. Text must be always-visible on mobile — never gate content behind hover.

### Fonts (Tailwind classes)

- `font-anton` — display headings (uppercase, huge, editorial)
- `font-grotesk` — body, labels, buttons (Space Grotesk)
- `font-inter` — small UI text

Only these three exist in `tailwind.config.js`. Classes like `font-poppins` silently fall back to sans-serif.

### Brand colors

```
miranda-red:   #C41E3A
miranda-teal:  #1DB5AD
miranda-dark:  #1A1A1A
miranda-cream: #FAFAF7   (light bg for card sections)
```

### Media assets

`public/images/` — all images served via Next.js `<Image>`, named by content (e.g. `pancakes-berries.jpg`). Logos: `logo-principal.png` (transparent 1080×1080) and `logo-secundario.png` (stacked red text).

`public/videos/` — three Instagram Reels. `reel-1.mp4` is the hero background; all three show in `HomeReels`.

`archivosmiranda/` — raw client files at project root. **Gitignored, not served.** Copy from here into `public/` when adding assets.

`next.config.js` only allows local images — no remote URLs without updating it.

### SEO

- `app/layout.tsx` — global metadata, OG tags, Twitter card. Google Search Console verification code is still pending (empty `verification` block).
- `components/LocalBusinessSchema.tsx` — JSON-LD Restaurant schema, reads real coordinates/URLs from `cafeConfig`
- `app/sitemap.ts` / `app/robots.ts` — update sitemap when adding routes

### WhatsApp reservations

Phone in `cafeConfig` must be `whatsapp: "34603319813"` (no `+`, no spaces). `ReservasSection` builds a message string and opens `wa.me/` — no backend.

### Deployment

Vercel, auto-deploy on push to `main` (repo `VicenttMR/cafe-miranda-web`). No environment variables needed.
