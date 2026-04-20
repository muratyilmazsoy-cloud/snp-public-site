import type { LocalizedLayer } from "@/lib/sanity/queries";

type InfrastructureStackProps = {
  layers: LocalizedLayer[];
  heading: string;
};

export function InfrastructureStack({ layers, heading }: InfrastructureStackProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="space-y-3">
        {layers.map((layer) => (
          <div key={layer.id} className="border border-gray-2/40 bg-navy-2 p-5">
            <p className="text-xl font-medium">{layer.name}</p>
            <p className="mt-2 text-gray-1">{layer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
