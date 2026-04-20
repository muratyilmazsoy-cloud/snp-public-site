import { VortexMark } from "@/components/vortex/VortexMark";

export function VortexDivider() {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <div className="h-px flex-1 bg-navy-edge" />
      <VortexMark className="vortex-divider h-12 w-12 text-cyan" />
      <div className="h-px flex-1 bg-navy-edge" />
    </div>
  );
}
