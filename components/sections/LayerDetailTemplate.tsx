import Link from "next/link";

type LayerDetailTemplateProps = {
  locale: string;
  name: string;
  definition: string;
  problemHeading: string;
  problemParagraphs: string[];
  outcomesHeading: string;
  outcomes: string[];
  connectionsHeading: string;
  connectionsText: string;
  ctaLabel: string;
  ctaHref: string;
};

export function LayerDetailTemplate({
  locale,
  name,
  definition,
  problemHeading,
  problemParagraphs,
  outcomesHeading,
  outcomes,
  connectionsHeading,
  connectionsText,
  ctaLabel,
  ctaHref,
}: LayerDetailTemplateProps) {
  const href = ctaHref.startsWith("/") ? `/${locale}${ctaHref}` : ctaHref;

  return (
    <div className="space-y-20 py-10 md:space-y-[120px] md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <h1 className="font-display text-5xl md:text-6xl">{name}</h1>
        <p className="mt-4 whitespace-pre-line text-lg text-gray-1">{definition}</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{problemHeading}</h2>
        {problemParagraphs.map((paragraph) => (
          <p key={paragraph} className="whitespace-pre-line text-gray-1">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-4xl md:text-5xl">{outcomesHeading}</h2>
        <ul className="space-y-3">
          {outcomes.map((item) => (
            <li key={item} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <h2 className="font-display text-4xl md:text-5xl">{connectionsHeading}</h2>
        <p className="mt-4 whitespace-pre-line text-gray-1">{connectionsText}</p>
      </section>

      <section>
        <Link href={href} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
          {ctaLabel}
        </Link>
      </section>
    </div>
  );
}
