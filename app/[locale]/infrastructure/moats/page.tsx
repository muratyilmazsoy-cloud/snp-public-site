import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { MoatsStack } from "@/components/sections/MoatsStack";
import { getMoatsPageBySlug } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function MoatsPage({ params }: Props) {
  const { locale } = await params;
  const page = await getMoatsPageBySlug("infrastructure-moats", locale);
  if (!page) return null;

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <h1 className="font-display text-5xl md:text-6xl">{page.heroTitle}</h1>
        <p className="mt-4 whitespace-pre-line text-gray-1">{page.heroSubtitle}</p>
      </section>

      <MoatsStack items={page.items} />

      <section className="border border-gray-2/40 bg-navy-2 p-6">
        <p className="whitespace-pre-line text-gray-1">{page.closingThesis}</p>
      </section>

      <Link href={`/${locale}${page.ctaHref}`} className="inline-flex rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2">
        {page.ctaLabel}
      </Link>
    </div>
  );
}
