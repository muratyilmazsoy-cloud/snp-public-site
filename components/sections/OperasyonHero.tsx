import Link from "next/link";
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
      <VortexAmbient />
      <div className="relative z-10 max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.03em] md:text-7xl">{title}</h1>
        <p className="whitespace-pre-line text-lg leading-relaxed text-gray-1">{subtitle}</p>
        <Link href={href} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
