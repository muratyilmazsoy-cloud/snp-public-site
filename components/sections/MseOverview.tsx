import Link from "next/link";

type MseOverviewProps = {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  coverageHeading: string;
  coveragePoints: string[];
  visualizationLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

export function MseOverview({
  locale,
  eyebrow,
  title,
  subtitle,
  coverageHeading,
  coveragePoints,
  visualizationLabel,
  ctaLabel,
  ctaHref,
}: MseOverviewProps) {
  const href = ctaHref.startsWith("/") ? `/${locale}${ctaHref}` : ctaHref;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{title}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{subtitle}</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{coverageHeading}</h2>
        <ul className="space-y-3">
          {coveragePoints.map((point) => (
            <li key={point} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-cyan/30 bg-navy-2 p-8 text-center text-cyan">{visualizationLabel}</section>

      <section>
        <Link href={href} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
          {ctaLabel}
        </Link>
      </section>
    </div>
  );
}
