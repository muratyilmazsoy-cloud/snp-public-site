import type { LocalizedCorps } from "@/lib/sanity/queries";

export function CorpsGrid({ corps, heading }: { corps: LocalizedCorps[]; heading: string }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {corps.map((item) => (
          <article key={item.id} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{item.name}</article>
        ))}
      </div>
    </section>
  );
}
