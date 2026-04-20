type VortexMarkProps = {
  className?: string;
};

export function VortexMark({ className }: VortexMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
      <path
        d="M44.8 22.1C40.9 15.9 32.8 13.2 25.6 15.9C18.1 18.7 13.6 26.4 14.5 34.4C15.5 42.4 21.8 48.8 29.8 50C37.7 51.1 45.6 47 49 39.7C51.8 33.8 50.6 26.9 46.1 22.1C43.8 19.7 39.9 18.6 36.7 19.5C33 20.5 29.9 23.5 29 27.1C28.2 30.5 29.3 34.3 31.8 36.7C34.3 39.2 38.4 40.1 41.7 38.9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="41.7" cy="38.9" r="3.2" fill="currentColor" />
    </svg>
  );
}
