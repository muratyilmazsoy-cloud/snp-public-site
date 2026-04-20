import Link from "next/link";
import type { LocalizedPipeline } from "@/lib/sanity/queries";

type PipelineCardsProps = {
  pipelines: LocalizedPipeline[];
  locale: string;
  heading: string;
};

export function PipelineCards({ pipelines, locale, heading }: PipelineCardsProps) {
  return (
    <section className="space-y-8">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {pipelines.map((pipeline) => (
          <article key={pipeline.id} className="card-interactive p-6">
            <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{pipeline.audience}</p>
            <h3 className="mt-3 text-2xl font-medium">{pipeline.name}</h3>
            <p className="mt-3 text-gray-1">{pipeline.promise}</p>
            <Link
              href={pipeline.ctaHref.startsWith("/") ? `/${locale}${pipeline.ctaHref}` : pipeline.ctaHref}
              className="link-animated mt-6 inline-flex text-cyan transition-colors hover:text-cyan-2"
            >
              {pipeline.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
