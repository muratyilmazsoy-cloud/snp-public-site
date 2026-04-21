import Link from "next/link";
import { OperasyonDashboardMockup } from "@/components/mockups/OperasyonDashboardMockup";
import { WalkthroughForm } from "@/components/forms/WalkthroughForm";
import { CustomerResultsGrid } from "@/components/sections/CustomerResultsGrid";
import { OperasyonHero } from "@/components/sections/OperasyonHero";
import { ProductVideo } from "@/components/video/ProductVideo";
import type { Locale } from "@/lib/i18n/config";
import { getLayers, getOperasyonBySlug } from "@/lib/sanity/queries";

type OperasyonPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function OperasyonPage({ params }: OperasyonPageProps) {
  const { locale } = await params;
  const [page, layers] = await Promise.all([getOperasyonBySlug("operasyon-4-0", locale), getLayers(locale)]);

  if (!page) {
    return null;
  }

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <OperasyonHero
        locale={locale}
        eyebrow={page.heroEyebrow}
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        ctaLabel={page.heroCtaLabel}
        ctaHref={page.heroCtaHref}
      />
      <section className="space-y-4">
        <OperasyonDashboardMockup />
        <ProductVideo title="Operasyon 4.0 flagship walkthrough" videoUrl={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} />
        <Link href={`/${locale}/operasyon-4-0#book`} className="link-animated inline-flex text-cyan">Book a 15-min walkthrough</Link>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.whatItReplacesHeading}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-gray-2/40 bg-navy-2 p-6">
            <h3 className="text-2xl font-medium">{page.legacyStackLabel}</h3>
            <ul className="mt-4 space-y-2 text-gray-1">
              {page.legacyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-cyan/30 bg-navy-2 p-6">
            <h3 className="text-2xl font-medium">{page.operasyonStackLabel}</h3>
            <ul className="mt-4 space-y-2 text-gray-1">
              {page.operasyonItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.layersHeading}</h2>
        <div className="space-y-4">
          {layers.map((layer) => (
            <article key={layer.id} className="border border-gray-2/40 bg-navy-2 p-6">
              <h3 className="text-2xl font-medium">{layer.name}</h3>
              <p className="mt-3 text-gray-1">{layer.description}</p>
              <Link href={`/${locale}/operasyon-4-0/${layer.slug}`} className="mt-4 inline-flex text-cyan hover:text-cyan-2">
                Go deeper
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.mseHeading}</h2>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.mseDescription}</p>
        <Link href={`/${locale}/operasyon-4-0/mse`} className="mt-5 inline-flex text-cyan hover:text-cyan-2">
          MSE
        </Link>
      </section>

      <section className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.embeddedFinanceHeading}</h2>
        <p className="whitespace-pre-line text-gray-1">{page.embeddedFinanceDescription}</p>
      </section>

      <section className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.marketplaceHeading}</h2>
        <p className="whitespace-pre-line text-gray-1">{page.marketplaceDescription}</p>
      </section>

      <section className="space-y-3">
        {page.testimonials.map((quote) => (
          <blockquote key={quote} className="border-l-2 border-cyan/40 pl-4 text-gray-1">
            {quote}
          </blockquote>
        ))}
      </section>
      <CustomerResultsGrid />

      <section id="book" className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.formHeading}</h2>
        <WalkthroughForm submitLabel={page.formSubmitLabel} labels={page.formLabels} />
      </section>

      <section>
        <Link
          href={page.finalCtaHref.startsWith("/") ? `/${locale}${page.finalCtaHref}` : page.finalCtaHref}
          className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2"
        >
          {page.finalCtaLabel}
        </Link>
      </section>
    </div>
  );
}
