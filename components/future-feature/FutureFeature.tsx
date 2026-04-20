type FutureFeatureProps = {
  label: string;
};

export function FutureFeature({ label }: FutureFeatureProps) {
  return (
    <div className="future-feature flex w-full max-w-xs flex-col items-center gap-4" aria-label={label}>
      <div className="relative h-40 w-40 rounded-full border border-cyan/30 bg-navy-2">
        <div className="absolute inset-6 rounded-full border border-cyan/40" />
        <div className="absolute inset-10 rounded-full bg-cyan/20" />
      </div>
      <p className="text-center text-sm text-gray-1">{label}</p>
    </div>
  );
}
