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
          <p className="link-animated inline-flex w-fit">Infrastructure</p>
          <p className="link-animated inline-flex w-fit">Operasyon 4.0</p>
          <p className="link-animated inline-flex w-fit">Services</p>
          <p className="link-animated inline-flex w-fit">Grow</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <p className="link-animated inline-flex w-fit">Sectors</p>
          <p className="link-animated inline-flex w-fit">About</p>
          <p className="link-animated inline-flex w-fit">Contact</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <p>Newsletter</p>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="link-animated inline-flex w-fit">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
