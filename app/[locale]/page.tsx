import Link from "next/link";
import { FutureFeature } from "@/components/future-feature/FutureFeature";
import { OperasyonDashboardMockup } from "@/components/mockups/OperasyonDashboardMockup";
import { Hero } from "@/components/sections/Hero";
import { CustomerResultsGrid } from "@/components/sections/CustomerResultsGrid";
import { KarmaCenterpiece } from "@/components/sections/KarmaCenterpiece";
import { LayersShowcase } from "@/components/sections/LayersShowcase";
import { OldVsNew } from "@/components/sections/OldVsNew";
import { PipelineCards } from "@/components/sections/PipelineCards";
import { SocialProofBands } from "@/components/sections/SocialProofBands";
import { StatsBand } from "@/components/sections/StatsBand";
import { VortexAmbient } from "@/components/sections/VortexAmbient";
import { VortexDivider } from "@/components/sections/VortexDivider";
import { ProductVideo } from "@/components/video/ProductVideo";
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
        ambientBackground={<VortexAmbient mode="home" />}
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
        secondaryVisual={<OperasyonDashboardMockup compact={true} />}
      />

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
      <OldVsNew />
      <StatsBand />

      <section className="space-y-4">
        <h2>See Operasyon 4.0 in action · 22 sec</h2>
        <ProductVideo title="Operasyon 4.0 product walkthrough" videoUrl={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} />
        <Link href={`/${locale}/operasyon-4-0#book`} className="link-animated inline-flex text-cyan">Book a 15-min walkthrough</Link>
      </section>

      <CustomerResultsGrid />

      <KarmaCenterpiece
        quote={page.homeKarmaQuote}
        line="The universal law was always at work. We built the infrastructure to reveal it."
      />

      <PipelineCards pipelines={pipelines} locale={locale} heading={page.homeGrowHeading} />
      <SocialProofBands />

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
