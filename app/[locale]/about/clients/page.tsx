import type { Locale } from "@/lib/i18n/config";
import { getClientQuotes } from "@/lib/sanity/queries";

type Props = { params: Promise<{ locale: Locale }> };

export default async function ClientsPage({ params }: Props) {
  const { locale } = await params;
  const quotes = await getClientQuotes(locale);

  return (
    <div className="space-y-16 py-10 md:py-14">
      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">Clients</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{locale === "tr" ? "Musteriler" : "Clients"}</h1>
      </section>
      <section className="grid gap-3 md:grid-cols-3">
        {quotes.map((quote) => (
          <article key={quote.id} className="border border-gray-2/40 bg-navy-2 p-4 text-center text-gray-1">{quote.logoLabel}</article>
        ))}
      </section>
      <section className="space-y-4">
        {quotes.map((quote) => (
          <blockquote key={quote.id} className="border-l-2 border-cyan/40 pl-4 text-gray-1">
            &ldquo;{quote.quote}&rdquo; — {quote.clientName}
          </blockquote>
        ))}
      </section>
    </div>
  );
}
