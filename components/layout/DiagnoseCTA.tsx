import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type DiagnoseCTAProps = {
  locale: Locale;
};

export function DiagnoseCTA({ locale }: DiagnoseCTAProps) {
  return (
    <Link
      href={`/${locale}/diagnose`}
      className="fixed right-6 bottom-6 rounded-full bg-cyan px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-cyan-2"
    >
      Diagnose
    </Link>
  );
}
