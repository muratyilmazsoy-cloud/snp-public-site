import { PipelineApplicationForm } from "@/components/forms/PipelineApplicationForm";
import { BusinessJediHierarchy } from "@/components/sections/BusinessJediHierarchy";
import { CorpsGrid } from "@/components/sections/CorpsGrid";
import type { Locale } from "@/lib/i18n/config";
import { getCorps, getPipelineDetailBySlug, getRanks } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function BuildYourCareerPage({ params }: Props) {
  const { locale } = await params;
  const [detail, ranks, corps] = await Promise.all([getPipelineDetailBySlug("build-your-career", locale), getRanks(locale), getCorps(locale)]);
  if (!detail) return null;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{detail.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{detail.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{detail.heroSubtitle}</p>
      </section>

      <BusinessJediHierarchy ranks={ranks} heading={detail.sectionOneHeading} />
      <CorpsGrid corps={corps} heading={detail.sectionTwoHeading} />

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionThreeHeading}</h2>
        {detail.listOne.map((track) => (
          <article key={track} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{track}</article>
        ))}
      </section>

      <PipelineApplicationForm
        endpoint="/api/webhook/career-application"
        submitLabel={detail.formSubmitLabel}
        labels={detail.formLabels}
        fields={["name", "email", "extraOne", "extraTwo"]}
      />
    </div>
  );
}
