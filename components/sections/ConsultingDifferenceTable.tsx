type Row = {
  consulting: string;
  infrastructure: string;
};

type ConsultingDifferenceTableProps = {
  rows: Row[];
  heading: string;
  leftLabel: string;
  rightLabel: string;
};

export function ConsultingDifferenceTable({
  rows,
  heading,
  leftLabel,
  rightLabel,
}: ConsultingDifferenceTableProps) {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-4xl md:text-5xl">{heading}</h2>
      <div className="overflow-hidden border border-gray-2/40">
        <div className="grid grid-cols-2 bg-navy-2 p-4 text-sm uppercase tracking-[0.12em] text-gray-1">
          <p>{leftLabel}</p>
          <p>{rightLabel}</p>
        </div>
        {rows.map((row, index) => (
          <div key={`${row.consulting}-${index}`} className="grid grid-cols-2 border-t border-gray-2/30 p-4">
            <p className="text-gray-1">{row.consulting}</p>
            <p>{row.infrastructure}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
