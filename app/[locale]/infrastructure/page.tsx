import Link from "next/link";
import { ConsultingDifferenceTable } from "@/components/sections/ConsultingDifferenceTable";
import { Hero } from "@/components/sections/Hero";
import { InfrastructureStack } from "@/components/sections/InfrastructureStack";
import type { Locale } from "@/lib/i18n/config";
import { getLayers, getPageBySlug } from "@/lib/sanity/queries";

type InfrastructurePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function InfrastructurePage({ params }: InfrastructurePageProps) {
  const { locale } = await params;
  const [page, layers] = await Promise.all([getPageBySlug("infrastructure", locale), getLayers(locale)]);

  if (!page) {
    return null;
  }

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <Hero eyebrow={page.hero.eyebrow} title={page.hero.title} subtitle={page.hero.subtitle} />

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.infrastructureEndHeading}</h2>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.endOfInequality}</p>
      </section>

      <section className="space-y-6">
        <p className="whitespace-pre-line text-gray-1">{page.infrastructureCreatedStatement}</p>
        <InfrastructureStack layers={layers} heading={page.infrastructureCreatedHeading} />
      </section>

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.infrastructureKarmaHeading}</h2>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.infrastructureKarmaNinthLayer}</p>
      </section>

      <ConsultingDifferenceTable
        rows={page.consultingDiffRows}
        heading={page.infrastructureDifferenceHeading}
        leftLabel={page.infrastructureDifferenceLeftLabel}
        rightLabel={page.infrastructureDifferenceRightLabel}
      />

      <section>
        <Link
          href={page.consultingDiffCtaHref.startsWith("/") ? `/${locale}${page.consultingDiffCtaHref}` : page.consultingDiffCtaHref}
          className="rounded-full bg-cyan px-5 py-3 font-medium text-navy transition-colors hover:bg-cyan-2"
        >
          {page.consultingDiffCtaLabel}
        </Link>
      </section>
    </div>
  );
}
