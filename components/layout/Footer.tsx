import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-2/40 bg-navy">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-display text-lg">Standards & Partners</p>
          <p className="mt-3 text-sm text-gray-1">trust and run · Est. 2017</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <p>Infrastructure</p>
          <p>Operasyon 4.0</p>
          <p>Services</p>
          <p>Grow</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <p>Sectors</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <p>Newsletter</p>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
