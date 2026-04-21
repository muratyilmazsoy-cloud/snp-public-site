import Link from "next/link";
import { FutureFeature } from "@/components/future-feature/FutureFeature";
import { Hero } from "@/components/sections/Hero";
import { KarmaCenterpiece } from "@/components/sections/KarmaCenterpiece";
import { LayersShowcase } from "@/components/sections/LayersShowcase";
import { PipelineCards } from "@/components/sections/PipelineCards";
import { VortexAmbient } from "@/components/sections/VortexAmbient";
import { VortexDivider } from "@/components/sections/VortexDivider";
import type { Locale } from "@/lib/i18n/config";
import { getLayers, getPageBySlug, getPipelines } from "@/lib/sanity/queries";

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const [page, layers, pipelines] = await Promise.all([
    getPageBySlug("home", locale),
    getLayers(locale),
    getPipelines(locale),
  ]);

  if (!page) {
    return null;
  }

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <Hero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        titleLines={["We didn't invent it.", "We made it visible."]}
        subtitle={page.hero.subtitle}
        animatedTitle={true}
        showScrollIndicator={true}
        actions={
          <>
            <Link
              href={`/${locale}/diagnose`}
              className="rounded-full bg-cyan px-5 py-3 font-medium text-navy transition-colors hover:bg-cyan-2"
            >
              {page.homePrimaryCtaLabel}
            </Link>
            <Link
              href={
                page.homeSecondaryCtaHref.startsWith("/")
                  ? `/${locale}${page.homeSecondaryCtaHref}`
                  : page.homeSecondaryCtaHref
              }
              className="text-cyan hover:text-cyan-2"
            >
              {page.homeSecondaryCtaLabel}
            </Link>
          </>
        }
        visual={<FutureFeature label={page.homeFutureFeatureLabel} />}
      />

      <VortexAmbient />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="border border-gray-2/40 bg-navy-2 p-6">
          <h2 className="font-display text-4xl md:text-5xl">{page.homeShiftHeading}</h2>
          <p className="mt-4 whitespace-pre-line text-gray-1">{page.homeShiftLeft}</p>
        </article>
        <article className="border border-gray-2/40 bg-navy-2 p-6">
          <h2 className="font-display text-4xl md:text-5xl">{page.homeRealityHeading}</h2>
          <p className="mt-4 whitespace-pre-line text-gray-1">{page.homeShiftRight}</p>
        </article>
      </section>

      <LayersShowcase layers={layers} locale={locale} heading={page.homeLayersHeading} />

      <VortexDivider />

      <KarmaCenterpiece
        quote={page.homeKarmaQuote}
        line="The universal law was always at work. We built the infrastructure to reveal it."
      />

      <PipelineCards pipelines={pipelines} locale={locale} heading={page.homeGrowHeading} />

      <VortexDivider />

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.homeEcosystemHeading}</h2>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {page.homeEcosystemStats.map((stat) => (
            <p key={stat} className="border border-gray-2/40 bg-navy-2 p-4 text-lg">
              {stat}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-6 border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.homeMoatsHeading}</h2>
        <p className="whitespace-pre-line text-gray-1">{page.homeMoatsTeaser}</p>
        <Link
          href={page.homeMoatsLinkHref.startsWith("/") ? `/${locale}${page.homeMoatsLinkHref}` : page.homeMoatsLinkHref}
          className="text-cyan hover:text-cyan-2"
        >
          {page.homeMoatsLinkLabel}
        </Link>
      </section>

      <section className="border-t border-gray-2/40 pt-10">
        <p className="text-center text-xl text-gray-1">{page.homeClosingSignature}</p>
      </section>
    </div>
  );
}
