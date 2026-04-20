export function VortexAmbient() {
  return (
    <div className="vortex-ambient-shell pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="vortex-grid" data-parallax-speed="0.9" />
      <div className="vortex-radial-glow" data-parallax-speed="0.8" />
      <svg className="vortex-ambient" data-parallax-speed="0.6" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ambientCenter" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 600) rotate(90) scale(520)">
            <stop offset="0" stopColor="#7dd0ff" stopOpacity="0.36" />
            <stop offset="0.45" stopColor="#4ab8ff" stopOpacity="0.2" />
            <stop offset="1" stopColor="#030b18" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ambientSpiral" x1="120" y1="120" x2="1080" y2="1080" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f0f4ff" stopOpacity="0.9" />
            <stop offset="0.52" stopColor="#4ab8ff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#0a1628" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="600" cy="600" r="520" fill="url(#ambientCenter)" />
        <path
          d="M600 600m-42 0a42 42 0 1 0 84 0a42 42 0 1 0 -84 0M600 600m-88 0a88 88 0 1 0 176 0a88 88 0 1 0 -176 0M600 600m-140 0a140 140 0 1 0 280 0a140 140 0 1 0 -280 0M600 600m-196 0a196 196 0 1 0 392 0a196 196 0 1 0 -392 0M600 600m-258 0a258 258 0 1 0 516 0a258 258 0 1 0 -516 0M600 600m-324 0a324 324 0 1 0 648 0a324 324 0 1 0 -648 0"
          stroke="url(#ambientSpiral)"
          strokeWidth="5"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
