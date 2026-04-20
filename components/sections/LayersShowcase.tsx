import Link from "next/link";
import type { LocalizedLayer } from "@/lib/sanity/queries";

type LayersShowcaseProps = {
  layers: LocalizedLayer[];
  locale: string;
  heading: string;
};

function layerVisual(index: number) {
  if (index === 0) {
    return <div className="layer-visual layer-visual-network" />;
  }
  if (index === 1) {
    return <div className="layer-visual layer-visual-clock" />;
  }
  if (index === 2) {
    return <div className="layer-visual layer-visual-stream" />;
  }
  if (index === 3) {
    return <div className="layer-visual layer-visual-capital" />;
  }
  return <div className="layer-visual layer-visual-potential" />;
}

export function LayersShowcase({ layers, locale, heading }: LayersShowcaseProps) {
  return (
    <section className="space-y-8">
      <h2>{heading}</h2>
      <div className="space-y-6">
        {layers.map((layer, index) => (
          <article key={layer.id} className="layer-showcase card-surface">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_360px] md:items-center">
              <div className="space-y-5">
                <p className="eyebrow text-cyan">Layer {String(index + 1).padStart(2, "0")}</p>
                <h1 className="text-balance">{layer.name}</h1>
                <p className="max-w-2xl text-gray-1">{layer.description}</p>
                <Link href={`/${locale}/operasyon-4-0/${layer.slug}`} className="link-animated inline-flex text-cyan">
                  Go deeper
                </Link>
              </div>
              <div className="layer-visual-wrap">{layerVisual(index)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
