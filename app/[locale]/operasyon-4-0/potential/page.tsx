import type { Locale } from "@/lib/i18n/config";
import { LayerDetailTemplate } from "@/components/sections/LayerDetailTemplate";
import { getLayerDetailBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function PotentialLayerPage({ params }: Props) {
  const { locale } = await params;
  const detail = await getLayerDetailBySlug("potential", locale);
  if (!detail) return null;

  return (
    <LayerDetailTemplate
      locale={locale}
      name={detail.name}
      definition={detail.definition}
      problemHeading={detail.problemHeading}
      problemParagraphs={detail.problemParagraphs}
      outcomesHeading={detail.outcomesHeading}
      outcomes={detail.outcomes}
      connectionsHeading={detail.connectionsHeading}
      connectionsText={detail.connectionsText}
      ctaLabel={detail.ctaLabel}
      ctaHref={detail.ctaHref}
    />
  );
}
