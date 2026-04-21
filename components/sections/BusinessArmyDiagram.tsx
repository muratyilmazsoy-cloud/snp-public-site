export function BusinessArmyDiagram({ ranks, corps, tiers }: { ranks: string[]; corps: string[]; tiers: string[] }) {
  return (
    <section className="space-y-10">
      <h2>Business army structure</h2>

      <div className="space-y-3">
        {[...ranks].map((rank, index) => {
          const reverseIndex = ranks.length - index;
          const insignia = reverseIndex >= 9 ? "◉" : reverseIndex >= 7 ? "✶" : reverseIndex >= 5 ? "◎" : "•";
          return (
            <article
              key={rank}
              className="army-rank-band grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4"
              style={{ background: `color-mix(in srgb, var(--navy-2) ${40 + reverseIndex * 5}%, var(--navy-1))` }}
            >
              <h3 className="text-2xl md:text-3xl">{rank}</h3>
              <span className="text-2xl text-cyan">{insignia}</span>
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {corps.map((item) => (
          <article key={item} className="card-surface army-corps-card flex h-[120px] items-center justify-center p-4 text-center text-sm text-gray-1">
            {item}
          </article>
        ))}
      </div>

      <section className="card-surface p-6">
        <h3 className="text-2xl md:text-3xl">5-tier territorial command</h3>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {tiers.map((tier, index) => (
            <div key={tier} className="flex items-center gap-3">
              <span className="rounded-full border border-navy-edge px-4 py-2 text-sm text-gray-1">{tier}</span>
              {index < tiers.length - 1 ? <span className="text-cyan">→</span> : null}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
