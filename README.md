# Datani Insurance Agency — Next.js

Marketing + lead-generation site for Datani Insurance Agency, Nyeri, Kenya.
Migrated from a Vite SPA to **Next.js 14 (App Router)** for SEO (server-rendered
HTML + per-page metadata), automatic image optimization, and a real email API.

## Stack
- Next.js 14 (App Router, React 18)
- Tailwind CSS 3
- `next/image` (sharp) for image optimization
- `next/font` (self-hosted Montserrat)
- Nodemailer for the contact/quote email API

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in SMTP creds to enable email delivery
npm run dev                  # http://localhost:3000
```

## Build & run
```bash
npm run build
npm start
```

## Environment variables
See `.env.example`. Without SMTP configured, the contact API logs submissions to
the server console and still returns success (so the form never breaks in dev).
Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical URLs, the sitemap,
and Open Graph tags point at the right host.

## Routes
- `/` — home (hero, about, partners, blog, resources)
- `/products`, `/claims`, `/contact`, `/quote`
- `/blogs` and `/blog/[id]` (statically generated per post)
- `/insurancetips`, `/faqs`, `/testimonial`
- `/claimpage` (file a claim), `/requirementclaim` (claims process)
- `/api/send-email` — POST contact/quote submissions
- `/sitemap.xml`, `/robots.txt` — generated automatically

## Notes from the migration
- Blog list and blog detail now share one data source (`src/data/blogPosts.js`);
  previously they used two different datasets so links led to unrelated content.
- All images were downsized (hero 7 MB → ~128 KB, testimonial photos 8.9 MB → ~40 KB)
  and the unused three.js 3D assets (~15 MB) were dropped.
- Contact form now posts to a same-origin API route instead of `http://localhost:3000`.

## Possible follow-ups
- Add JSON-LD structured data (InsuranceAgency + FAQPage) for richer search results.
- Wire the Quote form to the email API (currently shows canned offers client-side).
- Add a real Open Graph share image (`opengraph-image`).
