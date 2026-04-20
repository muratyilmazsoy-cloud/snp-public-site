# SnP Website — Build Brief v1

**For:** Kimi (and any AI coding agent or human developer working in Cursor / Claude Code)
**Client:** Standards & Partners Danışmanlık A.Ş.
**Domain:** standardsandpartners.com (primary), businessmetaverse.io (current live fallback)
**Repo & deployment:** GitHub + Vercel (already set up)
**Deadline anchor:** May 1, 2026 (soft launch)
**Version:** 1.0
**Owner of this document:** Murat Yılmazsoy (CEO)

---

## 0. How to use this document

This is the single source of truth for building the new SnP website. Read it front to back before writing any code. When something is ambiguous, ask — do not invent. When you think a decision is "nice to have," flag it and wait for confirmation.

Build order is linear and defined in Section 10. Do not jump ahead. Do not optimize things that are not yet built.

Comments in code should be in English. UI copy is bilingual (EN primary, TR secondary). File names, routes, component names, and variables are English.

---

## 1. What SnP is (the positioning non-negotiable)

SnP is **not a consulting firm**. SnP is a **Business Infrastructure company** — the world's first and currently only one. This is the positioning non-negotiable. Every page, every headline, every CTA must reinforce it.

The reference brands are **Apple, Samsung, Coca-Cola** — not McKinsey, not Deloitte, not Accenture. The site sells a worldview, not services. It is an ecosystem site, not a brochure.

**Manifesto anchors (memorize these, use them verbatim):**

- Category: **Business Infrastructure**
- Master line: **We didn't invent it. We made it visible.**
- Universal law: **Every action has a karma.**
- Signature: **trust and run · Standards & Partners · Est. 2017**

**Five Business Infrastructure layers (each gets its own page):**

1. **Operasyon 4.0** — the Business Operating System, the nervous system of the company
2. **Compliance 4.0** — real-time regulatory compliance
3. **Auditing 4.0** — continuous internal and external audit
4. **Investment 4.0** — embedded finance and growth engine
5. **Potential 4.0** — activates hidden, idle, unused value inside the business

Do not call these "services." Do not call them "modules." Call them **layers**.

**Do not translate "Operasyon 4.0"** — it is a proper product name and stays as-is in every language. Everything else (Compliance 4.0, Auditing 4.0, etc.) is already English.

---

## 2. Audience

The site speaks to five audiences. Navigation and CTAs must make it easy for each to find their door:

1. **Business owner / CEO** — something is broken, wants diagnosis → Grow → Fix Your Company
2. **Entrepreneur / franchise candidate** — wants to build an SnP branch portfolio → Grow → Become a Partner
3. **Professional / career seeker** — wants to join SnP's Business Army → Grow → Build Your Career
4. **Accounting / consulting firm owner** — wants to migrate their practice under the SnP brand → Grow → Transform Your Office
5. **Foreign investor** — wants to enter a local market with a trusted partner → Sectors → Foreign Investors

The homepage must not force a choice. It must tell the Business Infrastructure story and offer four doors (the Grow section).

---

## 3. Language & global strategy

**Primary language: English.** Turkish is secondary.

This is a reversal from the old site. SnP is a global company. The site must be built for Dubai, London, and Singapore first, Istanbul second.

**Rules:**
- `en` is the default locale. `/` serves English.
- `/tr/*` serves Turkish.
- No geographic redirect. Whatever country the user visits from, the default is English. A prominent but not-annoying language switcher is always visible.
- Build the i18n layer so that `it`, `es`, `ar` can be added later without refactor. Use Next.js App Router `app/[locale]/...` pattern with a locale middleware.
- All copy lives in Sanity CMS as localized fields — never hardcoded in components.
- Dates, numbers, and currency format per locale.
- Do not use `evrim` / `evolution` anywhere in Turkish copy — cultural sensitivity. Use `dönüşüm`.

---

## 4. Tech stack (fixed)

```
Framework     Next.js 15 (App Router, Server Components default)
Language      TypeScript (strict mode)
Styling       Tailwind CSS 4 + CSS variables for design tokens
Animation     Framer Motion (for Vortex, Future Feature, scroll storytelling)
CMS           Sanity v3 (hosted, structured content, localized)
Forms         React Hook Form + Zod validation
Hosting       Vercel (Edge runtime where possible)
Images        next/image + Sanity image pipeline
Icons         Lucide React
Maps          Mapbox GL JS (franchise map)
Scheduling    Cal.com embed (open source, self-hostable) or Calendly embed
Payments      Stripe (global) + iyzico (Turkey) — dual checkout
Bot widget    Supsis embed script (already in production)
Automation    n8n (self-hosted, already in use) — handles all form → NocoDB, email, Slack
Database      NocoDB (Plus plan, already set up) — all business data
Analytics     Plausible (privacy-friendly) or Vercel Analytics
```

**Rules:**
- No `useState` for data that belongs in Sanity. Content is not state.
- No external CSS frameworks beyond Tailwind. No Bootstrap, no Material UI, no shadcn themes — we are building our own system.
- No jQuery. No legacy libraries.
- No `localStorage` for critical data. Use cookies for locale preference (SSR-readable).
- All forms post to n8n webhooks. n8n handles NocoDB write, email send, Slack notify, and (where paid) Stripe/iyzico charge.

---

## 5. Design system

### Colors

SnP's brand is built on deep navy and cyan, inspired by the Whirlpool Galaxy M51.

```css
:root {
  /* Brand */
  --navy:     #030b18;   /* primary background, dominant */
  --cyan:     #4ab8ff;   /* primary accent, CTA, highlights */
  --white:    #f0f4ff;   /* primary text on navy */

  /* Extended */
  --navy-2:   #0a1628;   /* elevated surfaces on navy */
  --navy-3:   #162235;   /* card backgrounds on navy */
  --cyan-2:   #7dd0ff;   /* hover state */
  --cyan-3:   #b8e4ff;   /* muted accent */
  --gray-1:   #8a95a8;   /* secondary text on navy */
  --gray-2:   #4a5668;   /* tertiary, borders */

  /* Functional */
  --success:  #3ecf8e;
  --warning:  #f5a524;
  --danger:   #f31260;
}
```

**Usage rule:** 80% navy background, 15% navy-elevated surfaces, 4% white text, 1% cyan accent. Cyan is precious — do not spread it across buttons, links, icons, hover states, and highlights all at once. Pick one or two uses per screen.

No gradients except one single-direction vortex gradient used exclusively for the Vortex logo animation. No drop shadows. No glassmorphism. Flat, confident, architectural.

### Typography

```
Display font:   Söhne or Inter Tight — weight 500 only (headlines, hero)
Body font:      Inter — weight 400 regular, 500 medium
Mono:           JetBrains Mono — for numbers, code, technical specs
```

**Scale (desktop):**
```
h1   72px   line-height 1.05   letter-spacing -0.03em   weight 500
h2   56px   line-height 1.1    letter-spacing -0.025em  weight 500
h3   40px   line-height 1.2    letter-spacing -0.02em   weight 500
h4   28px   line-height 1.3    letter-spacing -0.01em   weight 500
body 18px   line-height 1.6    weight 400
small 14px  line-height 1.5    weight 400
eyebrow 13px letter-spacing 0.12em uppercase weight 500
```

**Scale (mobile):** reduce h1 to 48px, h2 to 40px, h3 to 32px, body stays 18px.

**Two weights only: 400 and 500.** No 600, no 700, no italics except for editorial quotes using the serif font.

**Sentence case everywhere.** Never Title Case. Never ALL CAPS — except the eyebrow label, which is uppercase by design.

### Spacing

Based on a 4px grid.
```
xs   4px     sm   8px     md   16px   lg   24px
xl   32px    2xl  48px    3xl  80px   4xl  120px   5xl  200px
```

Vertical rhythm between page sections: always `4xl` (120px) desktop, `3xl` (80px) mobile.

### Layout

Max content width: `1280px`.
Gutter: 32px desktop, 24px tablet, 16px mobile.
Grid: 12-column on desktop.

### Signature elements

**VORTEX** — the brand mark, a cyan spiral on navy, inspired by M51. Used as:
- Logo (with wordmark): header, footer
- Standalone: loading states, section anchors
- Animated: hero background ambient animation (subtle, 60s full rotation, respects `prefers-reduced-motion`)

**Future Feature** — the mascot. A vortex-headed hovering character. Used as:
- Hero co-star on the homepage
- Illustration in the Diagnose CTA card
- Animated avatar for the chatbot launcher

Both assets are existing — coordinate with Murat for the latest SVG and Lottie files before building.

### Motion

Steve Jobs filter: if an animation is decorative and doesn't reveal something, remove it.

- Fade up on scroll for content blocks: 400ms, ease-out, stagger 80ms
- Hero headline: letter-by-letter reveal on initial load, 20ms per character, once only
- Vortex ambient rotation: 60s linear infinite
- CTAs: no bounce, no scale. Color shift only on hover, 150ms.
- Page transitions: 300ms fade, no slide

Always wrap in `@media (prefers-reduced-motion: no-preference)`.

---

## 6. Site architecture

### Routes (Next.js App Router)

```
app/
  [locale]/
    page.tsx                              — Home
    infrastructure/
      page.tsx                            — Infrastructure overview
      manifesto/page.tsx                  — Manifesto
      layers/page.tsx                     — The 5 layers overview
      karma/page.tsx                      — Karma principle
      moats/page.tsx                      — Business Moats campaign
      cot/page.tsx                        — COT framework
    operasyon-4-0/
      page.tsx                            — Flagship product page
      business-os/page.tsx
      compliance/page.tsx
      auditing/page.tsx
      investment/page.tsx
      potential/page.tsx
      mse/page.tsx                        — Macroeconomic Sync Engine
    services/
      page.tsx                            — Services overview
      essentials/page.tsx
      advanced/page.tsx
      digital/page.tsx
      pricing/page.tsx                    — Pricing Equation
    grow/
      page.tsx                            — Grow overview (4 doors)
      fix-your-company/page.tsx           — B2B pipeline
      become-a-partner/page.tsx           — Franchise pipeline
      build-your-career/page.tsx          — Business Jedi Academy
      transform-your-office/page.tsx      — Transformation pipeline
    sectors/
      page.tsx                            — Sectors overview
      family-businesses/page.tsx
      smes/page.tsx
      holdings/page.tsx
      ecommerce/page.tsx
      foreign-investors/page.tsx
      accounting-offices/page.tsx
    about/
      page.tsx                            — About overview
      bull-spirit/page.tsx
      secrecy-doctrine/page.tsx
      business-army/page.tsx              — NEW — Business Army Constitution
      pricing-equation/page.tsx
      clients/page.tsx
      team/page.tsx
    contact/
      page.tsx
      franchise-map/page.tsx              — Interactive map
      offices/page.tsx
      careers/page.tsx
      partner-program/page.tsx
    diagnose/
      page.tsx                            — Diagnose bot landing
  api/
    webhook/[...route].ts                 — forwards to n8n
    stripe/checkout/route.ts
    iyzico/checkout/route.ts
    sitemap.xml/route.ts
    robots.txt/route.ts
  not-found.tsx
  error.tsx
components/
  layout/Header.tsx
  layout/Footer.tsx
  layout/LocaleSwitcher.tsx
  layout/DiagnoseCTA.tsx
  ui/Button.tsx
  ui/Input.tsx
  ui/Card.tsx
  vortex/VortexMark.tsx
  vortex/VortexAmbient.tsx
  future-feature/FutureFeature.tsx
  sections/Hero.tsx
  sections/LayersGrid.tsx
  sections/PipelineCards.tsx
  sections/MoatsCarousel.tsx
  sections/Manifesto.tsx
  forms/ContactForm.tsx
  forms/FranchiseApplicationForm.tsx
  forms/CareerApplicationForm.tsx
  forms/TransformationInquiryForm.tsx
lib/
  sanity/client.ts
  sanity/queries.ts
  i18n/config.ts
  i18n/middleware.ts
  webhook/send.ts
sanity/
  schemas/
    documents/
      page.ts
      pipeline.ts
      layer.ts
      sector.ts
      aboutSection.ts
      moat.ts
      teamMember.ts
      client.ts
    objects/
      hero.ts
      callout.ts
      cta.ts
      richText.ts
      localizedString.ts
```

### Navigation structure

**Primary nav (top, 4 items):**
- Infrastructure
- Operasyon 4.0
- Services
- Grow

**Secondary nav (top, 3 items):**
- Sectors
- About
- Contact

**Utility (top right):**
- Search icon (opens command palette — can be Phase 2)
- Language switcher: `EN / TR`
- CTA button: `Diagnose` (cyan, high-priority)

**Primary nav open behavior:** hover or tap opens a full-width mega-menu drawer below the nav bar, with sub-pages listed in typographic columns (no icons, no cards — just clean text links, Apple style).

**Mobile nav:** single hamburger, full-screen overlay, accordion sub-sections.

### Old → New page mapping

Every page from the legacy standardsandpartners.com must be preserved or redirected. Delete nothing silently.

| Old page | New location |
|---|---|
| Gelecek Geldi | Home hero + Infrastructure → Manifesto |
| Boğa Ruhu | About → Bull Spirit |
| Gizlilik & Sır Öğretisi | About → Secrecy Doctrine |
| Hizmet Fiyatlandırma Denklemi | About → Pricing Equation + linked from Services |
| Yeniden Keşfetmek | Merged into About → Team |
| Müşterilerimiz | About → Clients |
| Teknoloji Şirketi | Operasyon 4.0 → Business OS |
| Ar-Ge | Operasyon 4.0 → Business OS |
| Hedef | Home (part of hero) |
| Kurumsallık | Merged into About → Bull Spirit |
| Özgünlük | Merged into About → Bull Spirit |
| Rekabet | **DELETE** — obsolete positioning, no redirect needed since we own a new category |
| SnP Akademi | Grow → Build Your Career |
| Mesleki / Teknoloji / Robotics Eğitimleri | Grow → Build Your Career (as sub-tracks) |
| Virtual Muhasebe, Virtual İK | Services → Digital |
| RPA / Robotics / Chazey | Services → Digital |
| SnP Flow Ekol | Services → Digital |
| BI Raporlama | Services → Digital |
| Teknoloji Harcama Denklemi | About → Pricing Equation (callout) |
| Shared Services, Dış Ticaret, Holding | Services → Advanced |
| Temel / Konforlu / Dinamik Şirket Hizmetleri | Split across Services → Essentials / Advanced / Digital |
| Outsource Muhasebe, Vergi, KDV İade, İş Hukuku, Finans, IT, Danışmanlık | Services → Essentials |

**Implement redirects in `next.config.js`** for any old URLs that have external backlinks. Ask Murat for an inventory of high-traffic old URLs before launch.

---

## 7. Page-by-page content briefs

For each page below: **purpose** (one line), **hero** (headline + subhead + primary CTA), **sections** (ordered), **CTAs**, **forms** if any.

### 7.1 Home (`/`)

**Purpose:** Tell the Business Infrastructure story. Send visitors to the right door.

**Hero:**
- Eyebrow: `A Business Infrastructure company`
- Headline: `We didn't invent it. We made it visible.`
- Subhead: `The universal law was always at work. We built the infrastructure to reveal it.`
- Primary CTA: `Diagnose your company` (opens bot)
- Secondary CTA: `Read the manifesto` (scrolls to manifesto section)
- Background: Vortex ambient animation, Future Feature hovering right side

**Sections (in order):**
1. Hero (above)
2. The shift: 2-column split. Left: "You had consultants." Right: "You needed infrastructure." Short, poetic, Apple-style.
3. The 5 layers: Full-width grid of 5 cards with icons (abstract, not literal). Hover reveals one-line description. Click goes to layer page.
4. Karma principle: Single full-width editorial block. Black background, white text, the "Every action has a karma" line in 72px. Pulls from Manifesto.
5. Grow (4 doors): 2x2 grid of pipeline cards. Each card shows audience, promise, and CTA.
6. Ecosystem at a glance: horizontal stats strip. 23 SaaS products · 2.38M business reach · 60 countries · 1000 branch goal.
7. Moats teaser: "Your old castles are falling." Single quote + link to full moats page.
8. Closing: Manifesto signature. `trust and run · Standards & Partners · Est. 2017`

**No feature lists. No pricing. No testimonials on home — testimonials live on /about/clients.**

### 7.2 Infrastructure (`/infrastructure`)

**Purpose:** Explain what Business Infrastructure is and why it's a new category.

**Hero:**
- Eyebrow: `The category`
- Headline: `Infrastructure, not consulting.`
- Subhead: `A city can't live without electricity, water, or internet. Why does a business live without Business Infrastructure?`

**Sections:**
1. Hero
2. The end of inequality (from manifesto — short rewrite for this page)
3. What we created — the 5 layers visualized as a stacked architecture diagram (SVG)
4. Karma: the 9th layer principle
5. How it differs from consulting (one table: "They wrote reports. We stay inside.")
6. CTA: "Read the full manifesto" → /infrastructure/manifesto

### 7.3 Infrastructure → Manifesto (`/infrastructure/manifesto`)

**Purpose:** Full manifesto text, editorial treatment.

**Format:** Long-form editorial. Single column, max 680px, generous vertical rhythm. Content is the full Manifesto v2 text (provided separately as `SnP_Manifesto_v2.md`). Print-quality typography.

**No hero image. No sidebar. Just the words.**

**End CTA:** "Every action has a karma. Start with one." → Diagnose.

### 7.4 Infrastructure → Karma (`/infrastructure/karma`)

**Purpose:** Explain the Karma principle as the 9th COT layer.

**Sections:**
1. Hero: "Every action has a karma."
2. Four framings — 2x2 grid: Physics (Newton's 3rd), Philosophy (you reap what you sow), Spirituality (everything is observed), Biology (homeostasis).
3. The delay problem: today, karma works but with delay. Illustrate.
4. What Operasyon 4.0 does: makes karma real-time. Short animated diagram.
5. CTA: Explore Operasyon 4.0.

### 7.5 Infrastructure → Moats (`/infrastructure/moats`)

**Purpose:** The "Your old castles are falling" campaign. Business Moats strategic doc becomes the spine.

**Sections:**
1. Hero: `Your old castles are falling. Here's the only one that stands.`
2. The 20+ moats as an interactive carousel or stacked scroll. Each moat: old belief → new reality → risk → solution.
3. The closing thesis: "Everything can be copied. Except how perfectly your business works."
4. CTA: Explore Operasyon 4.0.

Source text: `Business_Moats_Campaign_Document.md` (Turkish — needs EN translation pass before build).

### 7.6 Infrastructure → COT (`/infrastructure/cot`)

**Purpose:** Introduce the 21-layer Living Organization Theory at a high level. The 9th layer (Karma) is already detailed — this page frames the whole.

**Sections:**
1. Hero: `Companies are alive. We treat them that way.`
2. The 21 layers as a vertical stack visualization.
3. Clinical Reasoning note: how we apply medical diagnostic thinking to companies (brief, no jargon).
4. CTA: Diagnose your company.

### 7.7 Operasyon 4.0 (`/operasyon-4-0`)

**Purpose:** Flagship product page. Apple-for-iPhone level of care.

**Hero:**
- Eyebrow: `The flagship`
- Headline: `The nervous system of your company.`
- Subhead: `One Business Operating System. Five layers. Sixty countries.`
- Primary CTA: `Book a walkthrough`
- Visual: animated diagram of the 5 layers, pulsing in sync

**Sections:**
1. Hero
2. What it replaces: left column of legacy stacks (SAP / Dynamics / spreadsheets / siloed modules) crossed out; right column of Operasyon 4.0. Not a comparison table — a visual statement.
3. The 5 layers detailed: each layer gets a full-viewport section with its own headline, a 2-line description, and a "Go deeper" link to its sub-page.
4. MSE: Macroeconomic Synchronization Engine. Map visualization of 60 countries.
5. Embedded finance callout.
6. Integration with the SaaS marketplace (23 products).
7. Testimonials: two partner quotes (once live). Short. No stock photos.
8. CTA: Book a walkthrough.

**Positioning rule:** Do not compare to SAP, Dynamics, Axapta by name. The line is: "You don't need to fight with enterprise software anymore."

### 7.8 Operasyon 4.0 → each layer sub-page

Five near-identical layouts, localized content. Template:

1. Hero: layer name, one-line definition, visual mark.
2. The problem this layer solves (3 short paragraphs).
3. What it does (3-5 capabilities, no feature lists — outcome-framed).
4. How it connects to the other 4 layers (horizontal strip).
5. CTA: Book a walkthrough.

### 7.9 Services (`/services`)

**Purpose:** Preserve the entire legacy service catalog but recontextualize. Services are the delivery arm of the infrastructure.

**Hero:**
- Eyebrow: `Delivered by people who also run the infrastructure`
- Headline: `Services with the system behind them.`

**Sections:**
1. Hero
2. Three tiers: Essentials / Advanced / Digital. Card grid. Each card lists its service lines and links to a detail sub-page.
3. Pricing Equation callout → /about/pricing-equation.

### 7.10 Services → Essentials / Advanced / Digital

Each tier is one page with grouped service lines. Each service line gets a short description (3-5 sentences, outcome-framed) and a contact CTA. No dedicated page per service line — they all live within the tier page, anchored by `#service-name` in the URL.

**Essentials content (under this tier page):**
- Accounting (SMMM)
- Payroll
- Reporting
- Tax & fiscal law
- YMM / Sworn CPA services
- Audit
- Labor & SSI law
- VAT refund

**Advanced content:**
- Government incentives, grants
- Business consulting
- Operations support
- Foreign trade & customs
- Domestic & international structuring
- Virtual CFO
- Financial services
- 3rd Eye, Devil's Advocate, Family Constitution, M&A

**Digital content:**
- Operasyon 4.0 (linked out)
- Virtual Accounting
- Virtual HR
- RPA & Robotics (Standards & Chazey)
- SnP Flow
- BI Reporting
- Process Excellence

### 7.11 Grow (`/grow`)

**Purpose:** Landing for the 4 pipelines. Each pipeline sells itself — this page just shows the four doors.

**Hero:**
- Eyebrow: `Four ways to grow`
- Headline: `Everyone starts with the same dots.`

**Sections:**
1. Hero
2. 2x2 grid of pipeline cards:
   - **Fix your company** — for business owners → pipeline: B2B
   - **Become a partner** — for entrepreneurs → pipeline: Franchise
   - **Build your career** — for professionals → pipeline: Business Jedi
   - **Transform your office** — for accounting firm owners → pipeline: Transformation

Each card: audience, promise (one line), CTA.

### 7.12 Grow → Fix Your Company (`/grow/fix-your-company`)

**B2B pipeline.** Tagline: `You do your business. We do everything around it.`

**Sections:**
1. Hero with diagnosis CTA
2. The five symptoms ("Is this you?") — 5 short statements
3. How we fix it: 3-step process (Diagnose → Install infrastructure → Operate)
4. Inclusions: everything the B2B package covers
5. Trust signals: ecosystem stats
6. Primary CTA: Start diagnosis (opens Dr. SnP bot)

### 7.13 Grow → Become a Partner (`/grow/become-a-partner`)

**Franchise pipeline.** Tagline: `Are you a carrier?`

**Critical distinction:** franchise candidates are **Sellers**, not Makers. They build and sell regional portfolios; they do not deliver services themselves. Copy must reflect this.

**Sections:**
1. Hero
2. Three tiers: Point / Center / Lounge (with short definitions, no prices)
3. Evaluation fee: 6,000 TL (serious-candidate filter)
4. The franchise map (embedded interactive map → /contact/franchise-map)
5. Application flow: tap a region → see availability → book a call → apply
6. Primary CTA: See the map

**Form fields for application:** name, company (if any), city/country of interest, budget range, phone. Posts to `/api/webhook/franchise-application` → n8n.

### 7.14 Grow → Build Your Career (`/grow/build-your-career`)

**Business Jedi Academy.** Tagline: `Everyone starts with the same dots.`

**Sections:**
1. Hero
2. The 10-rank hierarchy (from Business Army Constitution): Business Trainer → Business Operator → Senior Operator → Business Captain → Business Commander → Business Colonel → Business General → Business Master → Business Sage → Business Jedi. Visual progression.
3. The 8 corps: Accounting, Finance, HR, Procurement, IT Systems, Tax & Compliance, Audit, Transformation.
4. Training tracks: Professional / Technology / Robotics
5. Primary CTA: Apply

**Form:** name, email, current profession, corps interest, rank aspiration. Posts to n8n.

### 7.15 Grow → Transform Your Office (`/grow/transform-your-office`)

**Transformation pipeline.** Tagline: `You are no longer alone.`

**Critical distinction:** these are **Makers** — SMMM / YMM / finance office owners who deliver services. Never confused with franchise Sellers.

**Sections:**
1. Hero
2. The seven professional categories: Tax & Fiscal, Law & Compliance, Finance & Banking, Government Incentives, HR & Organization, Foreign Trade & Customs, Quality & Systems.
3. What you keep: your identity, your clients, your region (beylik metaphor — regional sovereignty, must translate to English carefully: "your regional domain").
4. What you gain: Operasyon 4.0, shared infrastructure, 90% of repetitive work automated, same portfolio with fewer staff at lower cost.
5. Not SAP, not Deloitte: "Global-firm power, regional identity."
6. Primary CTA: Start the conversation (links to Transformation inquiry form)

**Form:** name, firm name, category, years in practice, staff count, current tooling. Posts to n8n.

### 7.16 Sectors (`/sectors`)

**Purpose:** Show which kinds of companies SnP serves. Each sector gets a short sub-page.

**Sectors:**
- Family Businesses
- SMEs
- Holdings
- E-commerce
- Foreign Investors
- Accounting Offices

**Sub-page template:** Hero with sector-specific headline, typical challenges (3 bullets), relevant services (3 links), CTA.

### 7.17 About (`/about`)

**Sub-pages:**

**Bull Spirit (`/about/bull-spirit`)** — the cultural foundation. Short editorial. Reference the AUROCH category (aurochs domesticated in Anatolia).

**Secrecy Doctrine (`/about/secrecy-doctrine`)** — existing content from old site, preserved.

**Business Army (`/about/business-army`)** — NEW. The Constitution made public (summary, not full charter). 10 ranks, 8 corps, 5-tier territorial command. This is a major page — needs a dedicated hero and a diagram.

**Pricing Equation (`/about/pricing-equation`)** — existing content, preserved.

**Clients (`/about/clients`)** — logo grid + 3-5 pull quotes. No case studies at launch.

**Team (`/about/team`)** — Murat (CEO), Kiraz (COO, War Room), Aydın Şenel, Berkant Topçu, Erkan Akar (Partners), Erdal Saylık (Chief Auditor). Photos, short bios, LinkedIn.

### 7.18 Contact (`/contact`)

**Sections:**
1. Main form: name, email, company, country, interest (dropdown: Infrastructure / Operasyon 4.0 / Grow path / General), message.
2. Offices (once global): map with pins.
3. Links to: Franchise Map / Careers / Partner Program.
4. Diagnose bot launcher.

### 7.19 Diagnose (`/diagnose`)

**Purpose:** Dedicated landing for the diagnostic flow. Explains what Dr. SnP does, then embeds or launches the bot.

**Sections:**
1. Hero: `Your company has symptoms. Let's find them.`
2. How it works: 3 steps (Describe → Diagnose → Roadmap)
3. Supsis bot embed, full-height
4. Privacy note: KVKK + GDPR-compliant

---

## 8. Global components

### 8.1 Header
- Height: 72px desktop, 60px mobile
- Background: transparent over hero, solid `--navy` (0.92 alpha + backdrop-blur-md) when scrolled
- Left: Vortex mark + wordmark
- Center: primary nav (desktop only)
- Right: secondary nav, utility, Diagnose CTA
- Mobile: hamburger only

### 8.2 Footer
- Background: `--navy`
- 4 columns on desktop, stacked on mobile
- Col 1: Vortex mark + manifesto signature ("trust and run · Est. 2017") + "We didn't invent it. We made it visible."
- Col 2: Sitemap — Infrastructure, Operasyon 4.0, Services, Grow
- Col 3: Sitemap — Sectors, About, Contact
- Col 4: Newsletter signup (single email input) + social links (LinkedIn, YouTube, X — no Instagram yet)
- Bottom bar: copyright + KVKK + Privacy + Cookies

### 8.3 Diagnose CTA
Persistent floating button, bottom-right, cyan, launches Supsis bot. Hides on /diagnose (where the bot is embedded) and contact forms. Respects `prefers-reduced-motion`.

### 8.4 Language switcher
Simple text toggle: `EN · TR`. Desktop: inline in header utility. Mobile: inside the hamburger menu. Stores choice in a cookie (`snp-locale`).

### 8.5 Future Feature component
Reusable hovering mascot. Props: `position` (left/right), `variant` (idle/greeting/thinking), `size`. Lottie animation with fallback SVG.

---

## 9. Integrations

### 9.1 Sanity CMS

- Set up a separate Sanity project (get ID from Murat).
- Schemas listed in Section 6.
- Localization: use the `@sanity/document-internationalization` plugin.
- Preview mode: Next.js draft mode + Sanity live preview.
- Image pipeline: `@sanity/image-url`.
- Webhooks: on publish → trigger Vercel deploy.

### 9.2 Supsis (bot)

- Embed script on every page except `/diagnose` (where the bot is the page).
- Script ID and target bot: get from Murat (4 bots exist: Dr. SnP, Zeynep, Talent, Office Transformation).
- Route users to the right bot based on page context (can be Phase 2 — start with Dr. SnP everywhere).

### 9.3 Forms → n8n

All forms post JSON to `/api/webhook/[formName]` on our domain. That route forwards to the corresponding n8n webhook URL (stored in env vars). n8n handles: NocoDB insert, email, Slack.

Form handler pattern:
```ts
// app/api/webhook/[...route]/route.ts
// POST /api/webhook/contact → forwards to env.N8N_WEBHOOK_CONTACT
```

### 9.4 Stripe & iyzico

- Stripe for international payments.
- iyzico for Turkish cards (CVV flow, BKM, etc.).
- Checkout pages under `/pay/[product]` — minimal, branded.
- Success redirects to `/pay/success?session_id=...` which writes to NocoDB via n8n.
- No card data ever touches our server — always hosted checkout.

### 9.5 Cal.com / Calendly

Embed for booking. Two calendars: sales (for Operasyon 4.0 walkthroughs) and franchise (for franchise interviews). Both slotted in relevant CTAs.

### 9.6 Mapbox (franchise map)

- Interactive map of Turkey (later: world).
- Data source: NocoDB `branches` table.
- Pins colored: green (active branch), red (reserved), blue (available).
- Click a blue pin → modal with region info → CTA to apply.

---

## 10. Build order

Ship in vertical slices. Do not build all pages in parallel. Finish Slice 1 completely (design + content + integration + deploy) before starting Slice 2.

### Slice 1 — Foundation (week 1)
- Repo setup, Next.js 15 App Router, Tailwind, TypeScript strict, ESLint, Prettier
- i18n middleware and locale routing
- Sanity project + core schemas (page, hero, richText, localizedString)
- Global Header, Footer, LocaleSwitcher, Diagnose CTA (button only, no bot yet)
- Design tokens in CSS vars + Tailwind config
- Vortex mark component (static SVG first, animation later)
- Deploy to Vercel preview → custom domain staging

### Slice 2 — Home + Infrastructure (week 2)
- Home page (all sections, placeholder content from this brief)
- Infrastructure overview page
- Infrastructure → Manifesto
- Infrastructure → Karma
- Vortex ambient animation
- Future Feature hero integration

### Slice 3 — Operasyon 4.0 (week 3)
- Operasyon 4.0 flagship page
- 5 layer sub-pages (template)
- MSE sub-page
- Book-a-walkthrough form → n8n

### Slice 4 — Grow (week 4)
- Grow overview
- 4 pipeline sub-pages
- Franchise map (Mapbox, static data first)
- Application forms (4) → n8n
- Cal.com embed

### Slice 5 — Services + Sectors (week 5)
- Services overview + 3 tier pages
- Pricing Equation
- Sectors overview + 6 sub-pages

### Slice 6 — About + Contact + Diagnose (week 6)
- About overview + 6 sub-pages (including Business Army)
- Contact page + form
- Diagnose landing + Supsis embed
- Moats page
- COT page

### Slice 7 — Polish & launch (week 7)
- Stripe + iyzico checkout flows
- SEO: sitemap, robots, structured data, OG images
- Performance audit (Lighthouse > 90 on all pages)
- Accessibility audit (WCAG AA)
- Old URL redirect map (Murat provides inventory)
- Analytics
- 404 and error pages
- Launch checklist walk-through

---

## 11. Out of scope (v1 — do not build)

- Blog / news / press room (Phase 2)
- Full e-commerce / marketplace for the 23 SaaS products (Phase 2 — only landing stubs in v1)
- User accounts / customer portal (Phase 2)
- Live chat beyond Supsis (Supsis is the chat)
- PWA / offline support
- AMP pages
- Server-side A/B testing (client-side with Plausible feature flags is fine if needed)
- Video hosting — embed YouTube/Vimeo, do not self-host
- Any 3D (Three.js) content
- Custom WebGL shaders for the Vortex — the Lottie/SVG version is enough

---

## 12. Non-negotiables — final checklist

Before every deploy, walk this list:

- [ ] No "consulting firm" language anywhere in EN or TR copy
- [ ] "We didn't invent it. We made it visible." appears on the home page
- [ ] "Every action has a karma." appears on the home page
- [ ] 5 layer names are exactly: Operasyon 4.0, Compliance 4.0, Auditing 4.0, Investment 4.0, Potential 4.0
- [ ] "Operasyon 4.0" is not translated
- [ ] Primary CTA on every page is the Diagnose launcher (or a pipeline-specific form)
- [ ] No gradients except the single Vortex gradient
- [ ] No emoji in UI
- [ ] Font weights only 400 and 500
- [ ] Sentence case on every label
- [ ] `prefers-reduced-motion` respected for every animation
- [ ] Keyboard navigation works on every interactive element
- [ ] Color contrast meets WCAG AA
- [ ] No `localStorage` for critical data; use cookies for locale
- [ ] All forms post to n8n via our own `/api/webhook/*` routes (never direct to n8n from the browser)
- [ ] Makers vs Sellers distinction preserved in Transformation vs Franchise pages
- [ ] "Evrim / evolution" absent from Turkish copy

---

## 13. Questions to Murat before starting

1. Sanity project ID / API key — needs to be created
2. Domain DNS: keep standardsandpartners.com as primary? When switching from businessmetaverse.io?
3. Supsis script and routing config — which bot per page?
4. n8n webhook URLs per form
5. Mapbox API key
6. Stripe + iyzico credentials (test mode first)
7. Cal.com workspace
8. High-traffic old URLs that need 301 redirects
9. Client logos for /about/clients — which ones are cleared for public use
10. Team photos and LinkedIn URLs
11. Latest Vortex SVG + Lottie assets
12. Latest Future Feature SVG + Lottie assets
13. Should `businessmetaverse.io` become a campaign/launch microsite after primary site launches, or redirect?

---

## 14. Repository conventions

**Branches:** `main` (production), `develop` (integration), `feature/*` (per slice).
**Commits:** conventional commits (`feat:`, `fix:`, `chore:`, `docs:`).
**PRs:** each slice is one PR. Include a before/after screenshot for visual changes.
**Environment variables:** documented in `.env.example`, never committed actual values.
**Never commit:** Sanity tokens, Stripe keys, n8n webhook secrets, Mapbox tokens.

---

**End of brief. When in doubt: Apple would simplify. Jobs would delete. Infrastructure, not consulting. Every action has a karma.**
