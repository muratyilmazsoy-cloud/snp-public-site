import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getPipelineDetailBySlug, getPipelines } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function GrowPage({ params }: Props) {
  const { locale } = await params;
  const [detail, pipelines] = await Promise.all([getPipelineDetailBySlug("grow-overview", locale), getPipelines(locale)]);
  if (!detail) return null;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{detail.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{detail.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{detail.heroSubtitle}</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl">{detail.sectionOneHeading}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {pipelines.map((pipeline) => (
            <article key={pipeline.id} className="border border-gray-2/40 bg-navy-2 p-6">
              <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{pipeline.audience}</p>
              <h3 className="mt-3 text-2xl font-medium">{pipeline.name}</h3>
              <p className="mt-3 text-gray-1">{pipeline.promise}</p>
              <Link href={`/${locale}${pipeline.ctaHref}`} className="mt-5 inline-flex text-cyan hover:text-cyan-2">{pipeline.ctaLabel}</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
