import type { Locale } from "@/lib/i18n/config";
import { PipelineApplicationForm } from "@/components/forms/PipelineApplicationForm";
import { getPipelineDetailBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function FixYourCompanyPage({ params }: Props) {
  const { locale } = await params;
  const detail = await getPipelineDetailBySlug("fix-your-company", locale);
  if (!detail) return null;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{detail.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{detail.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{detail.heroSubtitle}</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionOneHeading}</h2>
        {detail.listOne.map((item) => (
          <article key={item} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{item}</article>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionTwoHeading}</h2>
        {detail.listTwo.map((item) => (
          <article key={item} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{item}</article>
        ))}
      </section>

      <section className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionThreeHeading}</h2>
        <p className="whitespace-pre-line text-gray-1">{detail.contentOne}</p>
      </section>

      <PipelineApplicationForm
        endpoint="/api/webhook/diagnose-start"
        submitLabel={detail.formSubmitLabel}
        labels={detail.formLabels}
        fields={["name", "email", "company", "message"]}
      />
    </div>
  );
}
