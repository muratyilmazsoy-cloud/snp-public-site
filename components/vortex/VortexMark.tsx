type VortexMarkProps = {
  className?: string;
};

export function VortexMark({ className }: VortexMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`vortex-mark ${className ?? ""}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vortexSpiral" x1="10" y1="10" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f0f4ff" />
          <stop offset="0.5" stopColor="#4ab8ff" />
          <stop offset="1" stopColor="#030b18" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" stroke="rgba(240,244,255,0.14)" strokeWidth="1.5" />
      <path
        d="M32 32m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0M32 32m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M32 32m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M32 32m-14 0a14 14 0 1 0 28 0a14 14 0 1 0 -28 0M32 32m-18 0a18 18 0 1 0 36 0a18 18 0 1 0 -36 0M32 32m-22 0a22 22 0 1 0 44 0a22 22 0 1 0 -44 0"
        stroke="url(#vortexSpiral)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}
