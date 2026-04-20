import { getPageBySlug } from "@/lib/sanity/queries";
import type { Locale } from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const page = await getPageBySlug("home", locale);

  return (
    <section className="space-y-6 py-16">
      <p className="text-sm uppercase tracking-[0.12em] text-gray-1">A Business Infrastructure company</p>
      <h1 className="font-display text-5xl leading-tight md:text-7xl">{page?.title ?? "Standards & Partners"}</h1>
      <p className="max-w-2xl text-lg text-gray-1">
        {page?.hero?.subtitle ??
          "Slice 1 foundation is active. Content is expected to be authored in Sanity for localized pages."}
      </p>
    </section>
  );
}
