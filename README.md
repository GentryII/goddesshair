# Goddess Hair

Next.js 14 + TypeScript + Tailwind CSS site for a hair products brand, with
WhatsApp-based ordering built in throughout (nav button, hero CTA, each
product card, floating button, and a dedicated CTA section).

## Before you launch

1. Open `lib/site-config.ts` and set `WHATSAPP_NUMBER` to your real WhatsApp
   Business number in international format, digits only (e.g. a Malawi number
   +265 99 123 4567 becomes `"265991234567"`).
2. Edit `lib/products.ts` to reflect your real catalog, prices and lengths.
3. Swap the Instagram link and location text in `lib/site-config.ts`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any
Node host (`npm run build && npm run start`).

## Structure

- `app/page.tsx` — assembles the page from the sections below
- `components/Hero.tsx` — hero with the signature gold "halo" SVG motif
- `components/ProductShelf.tsx` — horizontally scrollable product cards, each
  linking straight to a pre-filled WhatsApp message
- `components/RitualSteps.tsx` — the four-step hair care routine
- `components/Testimonials.tsx` — drifting review marquee
- `components/WhatsAppCTA.tsx` — full-width ordering call to action
- `components/FloatingWhatsApp.tsx` — persistent floating WhatsApp button
- `lib/site-config.ts` — brand name, WhatsApp number, and link builder
- `lib/products.ts` — product catalog data
