import Link from "next/link";
import { FutureFeature } from "@/components/future-feature/FutureFeature";
import { VortexAmbient } from "@/components/sections/VortexAmbient";

type OperasyonHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  locale: string;
};

export function OperasyonHero({ eyebrow, title, subtitle, ctaLabel, ctaHref, locale }: OperasyonHeroProps) {
  const href = ctaHref.startsWith("/") ? `/${locale}${ctaHref}` : ctaHref;

  return (
    <section className="relative overflow-hidden border border-gray-2/40 bg-navy-2 px-6 py-14 md:px-10 md:py-20">
      <VortexAmbient mode="operasyon" />
      <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow text-gray-1">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="whitespace-pre-line text-gray-1">{subtitle}</p>
          <Link href={href} className="btn-micro inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
            {ctaLabel}
          </Link>
        </div>
        <FutureFeature label="Future Feature" />
      </div>
    </section>
  );
}
