export function BusinessArmyDiagram({ ranks, corps, tiers }: { ranks: string[]; corps: string[]; tiers: string[] }) {
  return (
    <section className="space-y-8 border border-gray-2/40 bg-navy-2 p-6">
      <h2 className="font-display text-4xl md:text-5xl">Business Army structure</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-medium">10 ranks</h3>
          <ol className="mt-3 space-y-2 text-gray-1">
            {ranks.map((item, index) => <li key={item}>{index + 1}. {item}</li>)}
          </ol>
        </div>
        <div>
          <h3 className="text-xl font-medium">8 corps</h3>
          <ul className="mt-3 space-y-2 text-gray-1">
            {corps.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">5-tier territorial command</h3>
          <ul className="mt-3 space-y-2 text-gray-1">
            {tiers.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
