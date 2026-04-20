import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getSectorPageBySlug } from "@/lib/sanity/queries";

export function renderSectorPage(slug: string) {
  return async function SectorPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const page = await getSectorPageBySlug(slug, locale);
    if (!page) return null;

    return (
      <div className="space-y-16 py-10 md:py-14">
        <section className="border border-gray-2/40 bg-navy-2 p-8">
          <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
          <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-4xl md:text-5xl">{locale === "tr" ? "Tipik zorluklar" : "Typical challenges"}</h2>
          <ul className="space-y-3">
            {page.challenges.map((item) => (
              <li key={item} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-4xl md:text-5xl">{locale === "tr" ? "Ilgili hizmetler" : "Relevant services"}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {page.serviceLinks.map((item) => (
              <Link key={item.label} href={`/${locale}${item.href}`} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1 hover:text-cyan">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <Link href={`/${locale}${page.ctaHref}`} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
            {page.ctaLabel}
          </Link>
        </section>
      </div>
    );
  };
}
