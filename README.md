# SnP Public Site

Slice 1 and Slice 2 foundation for the new Standards & Partners website.

## Stack

- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Sanity (embedded Studio at `/studio`)

## Local development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set values.

## Seeding Slice 2 content

Set `SANITY_API_WRITE_TOKEN` in `.env.local`, then run:

```bash
npm run seed:slice2
```

This seed writes EN/TR content for:

- Home (`home`)
- Infrastructure (`infrastructure`)
- Infrastructure Manifesto (`infrastructure-manifesto`)
- Infrastructure Karma (`infrastructure-karma`)
- `layer`, `pipeline`, `manifesto`, and `karmaFraming` documents
