import Link from "next/link";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { VortexMark } from "@/components/vortex/VortexMark";
import type { Locale } from "@/lib/i18n/config";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-2/40 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-4 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Standards & Partners home">
          <VortexMark className="h-8 w-8" />
          <span className="font-display text-lg">Standards & Partners</span>
        </Link>

        <div className="flex items-center gap-4">
          <LocaleSwitcher locale={locale} />
          <Link
            href={`/${locale}/diagnose`}
            className="rounded-full bg-cyan px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-cyan-2"
          >
            Diagnose
          </Link>
        </div>
      </div>
    </header>
  );
}
