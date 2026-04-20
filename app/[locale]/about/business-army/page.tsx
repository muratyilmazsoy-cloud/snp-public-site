import type { Locale } from "@/lib/i18n/config";
import { BusinessArmyDiagram } from "@/components/sections/BusinessArmyDiagram";
import { getBusinessArmyPageBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function BusinessArmyPage({ params }: Props) {
  const { locale } = await params;
  const page = await getBusinessArmyPageBySlug("about-business-army", locale);
  if (!page) return null;

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
      </section>
      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <p className="whitespace-pre-line text-gray-1">{page.preamble}</p>
      </section>
      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="text-2xl font-medium">Doctrine principles</h2>
        <ul className="mt-3 space-y-2 text-gray-1">
          {page.doctrinePrinciples.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <BusinessArmyDiagram ranks={page.ranks} corps={page.corps} tiers={page.territorialCommand} />
      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <p className="whitespace-pre-line text-gray-1">{page.closing}</p>
      </section>
    </div>
  );
}
