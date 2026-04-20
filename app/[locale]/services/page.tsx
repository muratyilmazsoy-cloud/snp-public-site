import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getServicesPageBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function ServicesOverviewPage({ params }: Props) {
  const { locale } = await params;
  const page = await getServicesPageBySlug("services-overview", locale);
  if (!page) return null;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.tierHeading}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {page.tierCards.map((card) => (
            <article key={card.name} className="border border-gray-2/40 bg-navy-2 p-6">
              <h3 className="text-2xl font-medium">{card.name}</h3>
              <p className="mt-3 whitespace-pre-line text-gray-1">{card.summary}</p>
              <Link href={`/${locale}${card.href}`} className="mt-5 inline-flex text-cyan hover:text-cyan-2">Explore</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border border-cyan/30 bg-navy-2 p-6">
        <Link href={`/${locale}${page.pricingCalloutHref}`} className="text-cyan hover:text-cyan-2">{page.pricingCalloutLabel}</Link>
      </section>
    </div>
  );
}
