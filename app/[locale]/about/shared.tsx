import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getSitePageBySlug } from "@/lib/sanity/queries";

export function renderSimpleSitePage(slug: string) {
  return async function SimplePage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const page = await getSitePageBySlug(slug, locale);
    if (!page) return null;

    return (
      <div className="space-y-12 py-10 md:py-14">
        <section className="border border-gray-2/40 bg-navy-2 p-8">
          <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
          <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
        </section>
        {page.sections.map((section) => (
          <article key={section.heading} className="border border-gray-2/40 bg-navy-2 p-6">
            <h2 className="text-2xl font-medium">{section.heading}</h2>
            <p className="mt-3 whitespace-pre-line text-gray-1">{section.content}</p>
          </article>
        ))}
        {page.ctaLabel ? (
          <Link href={`/${locale}${page.ctaHref}`} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
            {page.ctaLabel}
          </Link>
        ) : null}
      </div>
    );
  };
}
