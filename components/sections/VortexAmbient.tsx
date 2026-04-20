export function VortexAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="vortex-ambient absolute top-1/2 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20" />
      <div className="vortex-ambient absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15 [animation-duration:75s]" />
    </div>
  );
}
