import type { LocalizedMoatsPage } from "@/lib/sanity/queries";

export function MoatsStack({ items }: { items: LocalizedMoatsPage["items"] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <article key={`${item.name}-${index}`} className="border border-gray-2/40 bg-navy-2 p-6">
          <h3 className="text-2xl font-medium">{item.name}</h3>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-gray-1">Old belief</p>
          <p className="text-gray-1">{item.oldBelief}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-gray-1">New reality</p>
          <p className="text-gray-1">{item.newReality}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-gray-1">Risk</p>
          <p className="text-gray-1">{item.risk}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.12em] text-gray-1">Solution</p>
          <p className="text-gray-1">{item.solution}</p>
        </article>
      ))}
    </div>
  );
}
