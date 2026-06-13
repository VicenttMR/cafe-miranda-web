# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (run before deploying)
npm run lint     # ESLint check
```

No test suite exists. Verify changes with `npm run build` — TypeScript errors and broken imports surface there.

## Architecture

**Multi-page Next.js 14 App Router site.** Each route is a thin page file that composes a `PageHeader` + a section component + `HomeReservaCTA`.

### Routing

| Route | Page file |
|---|---|
| `/` | `app/page.tsx` — Hero + HomeNav (4 visual cards) + HomeReservaCTA |
| `/menu` | `app/menu/page.tsx` |
| `/nosotros` | `app/nosotros/page.tsx` |
| `/merch` | `app/merch/page.tsx` |
| `/donde-estamos` | `app/donde-estamos/page.tsx` |
| `/reservas` | `app/reservas/page.tsx` |

### Single config file

**All client-editable content lives in `config/cafe-miranda.ts`** — phone, address, hours, menu items, testimonials, merch, colors, SEO strings. Components import from here; never hardcode content in components.

### Component conventions

- Section components (MenuShowcase, AboutSection, etc.) accept `hideHeader?: boolean`. When `true`, they skip their own teal/red header block because the page uses `PageHeader` instead. This avoids duplicate headings between the home single-page version and the dedicated page version.
- All animated components are `"use client"` and use `useInView` from Framer Motion for scroll-triggered animations.
- `PageHeader` is a shared animated header used by every subpage — takes `label`, `title`, `titleOutline?`, and `bg` (`"teal" | "red" | "dark"`).

### Fonts

Three CSS variables defined in `app/layout.tsx`:
- `--font-anton` → `font-anton` (display headings, matches logo weight)
- `--font-grotesk` → `font-grotesk` (body, labels, buttons)
- `--font-inter` → `font-inter` (small UI text)

### Brand colors (Tailwind)

```
miranda-red:  #C41E3A   (CTAs, accents, merch section bg)
miranda-teal: #1DB5AD   (hero bg, section headers, mobile menu bg)
miranda-dark: #1A1A1A   (dark sections, footer)
```

### Images

All photos are in `public/images/`. Named by purpose:
- `logo.jpg` — circular logo, used in Navbar and Hero
- `hero.png`, `about.png`, `about-chef.png`, `about-interior.png`, `neon.png`, `interior.png`, `lifestyle.png`
- `menu-1.png` through `menu-6.png` — mapped 1:1 to `cafeConfig.menuItems`

`next.config.js` only allows local images (no remote patterns). Don't add Unsplash URLs without updating the config.

### SEO

- `app/layout.tsx` — global metadata with `metadataBase`, OG tags, Twitter card, keywords array
- `components/LocalBusinessSchema.tsx` — JSON-LD Restaurant schema injected in `<head>`, reads from `cafeConfig`
- `app/sitemap.ts` and `app/robots.ts` — auto-generated, update sitemap when adding routes

### Reservations flow

The reservation form in `ReservasSection` builds a WhatsApp message from form fields and opens `wa.me/` in a new tab. No backend, no email — intentional. The phone number format in `cafeConfig` must be `whatsapp: "34603319813"` (no `+`, no spaces).
