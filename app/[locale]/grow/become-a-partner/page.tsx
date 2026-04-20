import { CalEmbed } from "@/components/sections/CalEmbed";
import { FranchiseMapLazy } from "@/components/sections/FranchiseMapLazy";
import { PipelineApplicationForm } from "@/components/forms/PipelineApplicationForm";
import type { Locale } from "@/lib/i18n/config";
import { getBranches, getCountries, getFranchiseRegions, getPipelineDetailBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function BecomePartnerPage({ params }: Props) {
  const { locale } = await params;
  const [detail, regions, branches, countries] = await Promise.all([
    getPipelineDetailBySlug("become-a-partner", locale),
    getFranchiseRegions(locale),
    getBranches(locale),
    getCountries(locale),
  ]);
  if (!detail) return null;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{detail.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{detail.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{detail.heroSubtitle}</p>
      </section>

      <section className="border border-cyan/30 bg-navy-2 p-6">
        <p className="text-sm uppercase tracking-[0.12em] text-cyan">{detail.distinctionLabel}</p>
        <p className="mt-3 whitespace-pre-line text-gray-1">{detail.distinctionText}</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionOneHeading}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {detail.listOne.map((item) => (
            <article key={item} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{item}</article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionTwoHeading}</h2>
        <p className="text-gray-1">{detail.contentOne}</p>
      </section>

      <FranchiseMapLazy branches={branches} regions={regions} countries={countries} title={detail.sectionThreeHeading} locale={locale} />

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionFourHeading}</h2>
        {regions.map((region) => (
          <article key={region.id} className="border border-gray-2/40 bg-navy-2 p-4">
            <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{region.status}</p>
            <h3 className="mt-2 text-xl font-medium">{region.name}</h3>
            <p className="mt-2 text-gray-1">{region.description}</p>
          </article>
        ))}
      </section>

      <CalEmbed title={locale === "tr" ? "Franchise gorusmesi" : "Franchise interview"} fallbackText={locale === "tr" ? "CAL_COM_URL tanimlanmadi." : "CAL_COM_URL is not configured."} />

      <PipelineApplicationForm
        endpoint="/api/webhook/franchise-application"
        submitLabel={detail.formSubmitLabel}
        labels={detail.formLabels}
        fields={["name", "company", "country", "phone", "extraOne", "extraTwo"]}
      />
    </div>
  );
}
