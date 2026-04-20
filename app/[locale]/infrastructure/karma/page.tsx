import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { KarmaCenterpiece } from "@/components/sections/KarmaCenterpiece";
import { KarmaFramingsGrid } from "@/components/sections/KarmaFramingsGrid";
import { KarmaRealtimeDiagram } from "@/components/sections/KarmaRealtimeDiagram";
import type { Locale } from "@/lib/i18n/config";
import { getKarmaFramings, getPageBySlug } from "@/lib/sanity/queries";

type KarmaPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function KarmaPage({ params }: KarmaPageProps) {
  const { locale } = await params;
  const [page, framings] = await Promise.all([getPageBySlug("infrastructure-karma", locale), getKarmaFramings(locale)]);

  if (!page) {
    return null;
  }

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <Hero eyebrow={page.hero.eyebrow} title={page.hero.title} subtitle={page.hero.subtitle} />

      <KarmaCenterpiece
        quote={locale === "tr" ? "Her aksiyonun bir karmasi vardir." : "Every action has a karma."}
        translation={locale === "tr" ? "Her aksiyonun bir karmasi vardir." : "Every action has a karma."}
        line="The universal law was always at work. We built the infrastructure to reveal it."
      />

      <KarmaFramingsGrid framings={framings} heading={page.karmaFramingsHeading} />

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.karmaDelayHeading}</h2>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.karmaDelayProblem}</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{page.karmaRealtimeHeading}</h2>
        <p className="whitespace-pre-line text-gray-1">{page.karmaRealtimeExplanation}</p>
        <KarmaRealtimeDiagram
          actionLabel={page.karmaDiagramActionLabel}
          observationLabel={page.karmaDiagramObservationLabel}
          outcomeLabel={page.karmaRealtimeDiagramLabel}
        />
      </section>

      <section>
        <Link
          href={page.karmaCtaHref.startsWith("/") ? `/${locale}${page.karmaCtaHref}` : page.karmaCtaHref}
          className="rounded-full bg-cyan px-5 py-3 font-medium text-navy transition-colors hover:bg-cyan-2"
        >
          {page.karmaCtaLabel}
        </Link>
      </section>
    </div>
  );
}
