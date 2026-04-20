import type { LocalizedKarmaFraming } from "@/lib/sanity/queries";

type KarmaFramingsGridProps = {
  framings: LocalizedKarmaFraming[];
  heading: string;
};

export function KarmaFramingsGrid({ framings, heading }: KarmaFramingsGridProps) {
  return (
    <section className="space-y-8">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {framings.map((item) => (
          <article key={item.id} className="card-surface p-6">
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="mt-3 whitespace-pre-line text-gray-1">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
