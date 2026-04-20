import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getSitePageBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function AboutOverviewPage({ params }: Props) {
  const { locale } = await params;
  const page = await getSitePageBySlug("about-overview", locale);
  if (!page) return null;

  const links = [
    ["bull-spirit", "Bull spirit"],
    ["secrecy-doctrine", "Secrecy doctrine"],
    ["business-army", "Business army"],
    ["pricing-equation", "Pricing equation"],
    ["clients", "Clients"],
    ["team", "Team"],
  ];

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{page.heroEyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {links.map(([slug, label]) => (
          <Link key={slug} href={`/${locale}/about/${slug}`} className="border border-gray-2/40 bg-navy-2 p-4 text-gray-1 hover:text-cyan">
            {label}
          </Link>
        ))}
      </section>
    </div>
  );
}
