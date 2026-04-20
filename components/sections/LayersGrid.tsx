import Link from "next/link";
import type { LocalizedLayer } from "@/lib/sanity/queries";

type LayersGridProps = {
  layers: LocalizedLayer[];
  locale: string;
  heading: string;
};

export function LayersGrid({ layers, locale, heading }: LayersGridProps) {
  return (
    <section className="space-y-8">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {layers.map((layer) => (
          <Link
            key={layer.id}
            href={`/${locale}/operasyon-4-0/${layer.slug}`}
            className="group border border-gray-2/40 bg-navy-2 p-5 transition-colors hover:border-cyan/50"
          >
            <h3 className="text-xl font-medium">{layer.name}</h3>
            <p className="mt-3 text-sm text-gray-1 group-hover:text-white">{layer.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
