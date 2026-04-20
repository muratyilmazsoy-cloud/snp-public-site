import type { LocalizedRank } from "@/lib/sanity/queries";

export function BusinessJediHierarchy({ ranks, heading }: { ranks: LocalizedRank[]; heading: string }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <ol className="space-y-2">
        {ranks.map((rank) => (
          <li key={rank.id} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">{rank.order}. {rank.name}</li>
        ))}
      </ol>
    </section>
  );
}
