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

| Route | Notes |
|---|---|
| `/` | Hero → HomeNav → HomeFavoritos → HomeReels → TestimonialsSection → HomeReservaCTA |
| `/menu` | MenuHero → MenuCategoriesGrid → MenuPlatoDestacado → MenuGridMasonry → MenuPlatoDestacado (reverse) → MenuCTA |
| `/nosotros` | PageHeader → AboutSection → HomeReservaCTA |
| `/merch` | PageHeader → MerchSection → HomeReservaCTA |
| `/donde-estamos` | PageHeader → LocationSection → HomeReservaCTA |
| `/reservas` | PageHeader → ReservasSection |

### Two config files — all content lives here

**`config/cafe-miranda.ts`** — everything site-wide: phone, address, hours, `favoritos` (home page featured dishes), `testimonials`, `merch`. Components import from `cafeConfig`; never hardcode content in components.

**`config/menu-items.ts`** — dedicated to the `/menu` page: `menuConfig` with `hero`, `categories` (4), `destacado`, `masonry` (6 photos), `secundario`, `cta`. Edit here to change the menu page.

### Layout-level components

`app/layout.tsx` renders two fixed elements before `<Navbar />`:
- `<AnnouncementBar />` — white animated ticker fixed at `top-0 z-[60]`, always visible on scroll, on every page
- `<Navbar />` — fixed at `top-8` (32px, directly below the bar), `z-50`, h-16 with a 140×140px logo that overflows the navbar intentionally

Total fixed header height: ~96px. All page sections use `pt-24` to clear it.

### Component conventions

- All animated components are `"use client"` and trigger via `useInView` from Framer Motion.
- `PageHeader` is used by every subpage — props: `label`, `title`, `titleOutline?`, `bg: "teal" | "red" | "dark"`.
- `AboutSection` accepts `hideHeader?: boolean` — pass `hideHeader` on `/nosotros` because `PageHeader` already renders the heading.

### Fonts (Tailwind classes)

- `font-anton` — display headings
- `font-grotesk` — body, labels, buttons (Space Grotesk)
- `font-inter` — small UI text

### Brand colors

```
miranda-red:   #C41E3A
miranda-teal:  #1DB5AD
miranda-dark:  #1A1A1A
miranda-cream: (light bg for card sections)
```

### Media assets

`public/images/` — all images served by Next.js `<Image>`. Real photos added from Instagram (named by content, e.g. `pancakes-berries.jpg`, `tapa-bacalao.jpg`, `ambiente-tapas.jpg`). Logos: `logo-principal.png` (transparent, 1080×1080, used everywhere) and `logo-secundario.png` (stacked red text, no bg).

`public/videos/` — three Instagram Reels (`reel-1.mp4` 600KB, `reel-2.mp4` 1.4MB, `reel-3.mp4` 1.5MB). `reel-1.mp4` is the hero background. All three show in `HomeReels`.

`archivosmiranda/` — source assets folder at project root. **Not served.** Raw files from the client (screenshots, Instagram exports). Copy from here to `public/` when adding new assets.

`next.config.js` only allows local images — no remote URLs without updating it.

### SEO

- `app/layout.tsx` — global metadata, OG tags, Twitter card
- `components/LocalBusinessSchema.tsx` — JSON-LD Restaurant schema, reads from `cafeConfig`
- `app/sitemap.ts` / `app/robots.ts` — update sitemap when adding routes

### WhatsApp reservations

Phone in `cafeConfig` must be `whatsapp: "34603319813"` (no `+`, no spaces). The reservation form in `ReservasSection` builds a message string and opens `wa.me/` — no backend.

### Deployment

Vercel, auto-deploy on push to `main`. No environment variables needed.
