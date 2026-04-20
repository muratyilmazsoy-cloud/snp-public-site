import type { Locale } from "@/lib/i18n/config";
import { MseOverview } from "@/components/sections/MseOverview";
import { getMseBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function MsePage({ params }: Props) {
  const { locale } = await params;
  const page = await getMseBySlug("mse", locale);
  if (!page) return null;

  return (
    <MseOverview
      locale={locale}
      eyebrow={page.heroEyebrow}
      title={page.heroTitle}
      subtitle={page.heroSubtitle}
      coverageHeading={page.coverageHeading}
      coveragePoints={page.coveragePoints}
      visualizationLabel={page.visualizationLabel}
      ctaLabel={page.ctaLabel}
      ctaHref={page.ctaHref}
    />
  );
}
