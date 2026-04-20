import Link from "next/link";
import { PortableText } from "next-sanity";
import type { Locale } from "@/lib/i18n/config";
import { getPageBySlug } from "@/lib/sanity/queries";

type ManifestoPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function ManifestoPage({ params }: ManifestoPageProps) {
  const { locale } = await params;
  const page = await getPageBySlug("infrastructure-manifesto", locale);

  if (!page?.manifesto) {
    return null;
  }

  return (
    <article className="mx-auto w-full max-w-[680px] space-y-10 py-10 md:py-14">
      <header className="space-y-4">
        <h1 className="font-display text-5xl leading-tight md:text-6xl">{page.manifesto.title}</h1>
        <p className="whitespace-pre-line text-gray-1">{page.manifesto.intro}</p>
      </header>

      <div className="space-y-4 text-lg leading-relaxed text-gray-1">
        <PortableText value={page.manifesto.body} />
      </div>

      <footer>
        <Link
          href={page.manifesto.endCtaHref.startsWith("/") ? `/${locale}${page.manifesto.endCtaHref}` : page.manifesto.endCtaHref}
          className="rounded-full bg-cyan px-5 py-3 font-medium text-navy transition-colors hover:bg-cyan-2"
        >
          {page.manifesto.endCtaLabel}
        </Link>
      </footer>
    </article>
  );
}
