# SnP Public Site

Slice 1 foundation for the new Standards & Partners website.

## Stack

- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS v4 (via design tokens in `app/globals.css`)
- Sanity v3+ with embedded Studio at `/studio`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill values.

## Slice 1 notes

- Locale routes are under `app/[locale]`
- Middleware redirects non-localized routes to `/en` by default
- Studio is embedded at `/studio/[[...tool]]`
