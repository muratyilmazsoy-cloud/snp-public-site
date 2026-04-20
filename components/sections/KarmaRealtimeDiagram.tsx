type KarmaRealtimeDiagramProps = {
  actionLabel: string;
  observationLabel: string;
  outcomeLabel: string;
};

export function KarmaRealtimeDiagram({
  actionLabel,
  observationLabel,
  outcomeLabel,
}: KarmaRealtimeDiagramProps) {
  return (
    <div className="rounded border border-cyan/30 bg-navy-2 p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="border border-gray-2/40 p-4 text-center">{actionLabel}</div>
        <div className="border border-gray-2/40 p-4 text-center">{observationLabel}</div>
        <div className="border border-cyan/40 p-4 text-center text-cyan">{outcomeLabel}</div>
      </div>
    </div>
  );
}
