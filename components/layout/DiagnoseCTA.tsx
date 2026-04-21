import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type DiagnoseCTAProps = {
  locale: Locale;
};

export function DiagnoseCTA({ locale }: DiagnoseCTAProps) {
  return (
    <Link
      href={`/${locale}/diagnose`}
      className="btn-micro fixed right-6 bottom-6 z-40 rounded-full bg-cyan px-5 py-3 text-sm font-medium text-navy shadow-[0_0_14px_rgba(74,184,255,0.35)] hover:bg-cyan-2"
    >
      Diagnose
    </Link>
  );
}
