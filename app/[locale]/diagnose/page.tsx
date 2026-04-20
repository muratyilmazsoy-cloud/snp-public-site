import type { Locale } from "@/lib/i18n/config";
import { SupsisEmbed } from "@/components/sections/SupsisEmbed";
import { getSitePageBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function DiagnosePage({ params }: Props) {
  const { locale } = await params;
  const page = await getSitePageBySlug("diagnose", locale);
  if (!page) return null;

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
      </section>
      <section className="space-y-4">
        {page.sections.map((section) => (
          <article key={section.heading} className="border border-gray-2/40 bg-navy-2 p-6">
            <h2 className="text-2xl font-medium">{section.heading}</h2>
            <p className="mt-3 whitespace-pre-line text-gray-1">{section.content}</p>
          </article>
        ))}
      </section>
      <SupsisEmbed />
    </div>
  );
}
