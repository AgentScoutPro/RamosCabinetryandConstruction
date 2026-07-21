# Ramos Cabinetry & Construction

Premium local-contractor website for C Ramos Cabinetry & Construction LLC — custom cabinetry, kitchen & bathroom remodeling, and finish carpentry for the East Valley, AZ (Tempe, Gilbert, Mesa, Chandler, Scottsdale, Phoenix).

Built with Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## Stack
- Next.js 16 / React / TypeScript
- Tailwind CSS v4
- Static generation for all service + city pages
- JSON-LD structured data (LocalBusiness, Service, Review)

## Structure
- `src/lib/site-data.ts` — single source of truth for business info, services, cities, reviews
- `src/components/` — Header, Footer, shared section components, city page template
- `src/app/` — all routes (home, about, contact, gallery, reviews, service-areas, services/[slug], and 6 static city landing pages)

## Local development
```
npm install
npm run dev
```
