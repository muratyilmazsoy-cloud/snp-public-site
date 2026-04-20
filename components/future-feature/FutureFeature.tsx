import { VortexMark } from "@/components/vortex/VortexMark";

type FutureFeatureProps = {
  label: string;
};

export function FutureFeature({ label }: FutureFeatureProps) {
  return (
    <div className="future-feature" aria-label={label}>
      <svg viewBox="0 0 280 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[200px] w-[150px] md:h-[400px] md:w-[280px]">
        <path d="M48 192L140 110L232 192L196 350H84L48 192Z" fill="rgba(240,244,255,0.95)" />
        <path d="M96 235C121 248 160 248 184 235" stroke="#0a1628" strokeOpacity="0.28" strokeWidth="4" strokeLinecap="round" />
        <path d="M82 194L24 230" stroke="rgba(240,244,255,0.85)" strokeWidth="16" strokeLinecap="round" />
        <path d="M198 194L256 230" stroke="rgba(240,244,255,0.85)" strokeWidth="16" strokeLinecap="round" />
        <circle cx="140" cy="220" r="22" className="future-chest" fill="#4ab8ff" />
        <circle cx="140" cy="220" r="11" fill="#f0f4ff" fillOpacity="0.85" />
        <circle cx="140" cy="78" r="54" fill="rgba(240,244,255,0.04)" />
      </svg>
      <div className="future-head">
        <VortexMark className="h-24 w-24 text-cyan md:h-28 md:w-28" />
      </div>
      <p className="mt-3 text-center text-sm text-gray-1">{label}</p>
    </div>
  );
}
