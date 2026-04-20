import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getSectorPages } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function SectorsOverviewPage({ params }: Props) {
  const { locale } = await params;
  const sectors = await getSectorPages(locale);

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">Sectors</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{locale === "tr" ? "Sektor odaklari" : "Sector focus"}</h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sectors.map((sector) => (
          <article key={sector.id} className="border border-gray-2/40 bg-navy-2 p-6">
            <h2 className="text-2xl font-medium">{sector.title}</h2>
            <p className="mt-3 text-gray-1">{sector.heroSubtitle}</p>
            <Link href={`/${locale}/sectors/${sector.slug}`} className="mt-5 inline-flex text-cyan hover:text-cyan-2">
              {locale === "tr" ? "Sektoru incele" : "Explore sector"}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
