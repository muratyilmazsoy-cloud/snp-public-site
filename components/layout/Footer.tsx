import Link from "next/link";
import { VortexMark } from "@/components/vortex/VortexMark";
import type { Locale } from "@/lib/i18n/config";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-24 border-t border-navy-edge/70 bg-navy px-4 pt-20 pb-12 md:px-8">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <VortexMark className="h-8 w-8 text-cyan" />
            <p className="font-display text-lg">Standards & Partners</p>
          </div>
          <p className="text-sm text-gray-1">trust and run · Standards & Partners · Est. 2017</p>
          <p className="font-serif text-sm text-gray-1">We didn&apos;t invent it. We made it visible.</p>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <Link href={`/${locale}/infrastructure`} className="link-animated inline-flex w-fit">Infrastructure</Link>
          <Link href={`/${locale}/operasyon-4-0`} className="link-animated inline-flex w-fit">Operasyon 4.0</Link>
          <Link href={`/${locale}/services`} className="link-animated inline-flex w-fit">Services</Link>
          <Link href={`/${locale}/grow`} className="link-animated inline-flex w-fit">Grow</Link>
        </div>

        <div className="space-y-2 text-sm text-gray-1">
          <Link href={`/${locale}/sectors`} className="link-animated inline-flex w-fit">Sectors</Link>
          <Link href={`/${locale}/about`} className="link-animated inline-flex w-fit">About</Link>
          <Link href={`/${locale}/contact`} className="link-animated inline-flex w-fit">Contact</Link>
        </div>

        <div className="space-y-3 text-sm text-gray-1">
          <p className="eyebrow text-gray-1">Stay connected</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email" className="input-surface min-h-11 flex-1 px-3 py-2" />
            <button type="button" className="btn-micro rounded-full bg-cyan px-4 py-2 text-navy">Subscribe</button>
          </form>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="link-animated">LinkedIn</Link>
            <Link href="https://www.youtube.com" target="_blank" rel="noreferrer" className="link-animated">YouTube</Link>
            <Link href="https://x.com" target="_blank" rel="noreferrer" className="link-animated">X</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1280px] flex-col justify-between gap-3 border-t border-navy-edge/70 pt-5 text-xs text-gray-1 md:flex-row">
        <p>© 2026 Standards & Partners</p>
        <div className="flex flex-wrap gap-3">
          <span>KVKK</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Imprint</span>
        </div>
      </div>
    </footer>
  );
}
