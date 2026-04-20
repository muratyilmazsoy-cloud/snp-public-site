import { notFound } from "next/navigation";
import { CheckoutPanel } from "@/components/pay/CheckoutPanel";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/lib/i18n/config";
import { getProductBySlug } from "@/lib/payments/products";

type Props = { params: Promise<{ locale: Locale; product: string }> };

export default async function PayProductPage({ params }: Props) {
  const { locale, product: slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const stripeEnabled = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && process.env.STRIPE_SECRET_KEY);
  const iyzicoEnabled = Boolean(process.env.IYZICO_API_KEY && process.env.IYZICO_SECRET_KEY);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Organization", name: "Standards & Partners" },
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: product.priceUSD,
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        priceCurrency: "TRY",
        price: product.priceTRY,
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <div className="space-y-10 py-10 md:py-14">
      <JsonLd data={jsonLd} id="product-jsonld" />

      <section className="border border-gray-2/40 bg-navy-2 p-8">
        <p className="text-sm uppercase tracking-[0.12em] text-gray-1">Checkout</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">{product.title}</h1>
        <p className="mt-4 text-gray-1">{product.description}</p>
        <p className="mt-4 text-gray-1">USD {product.priceUSD} / TRY {product.priceTRY}</p>
      </section>

      <CheckoutPanel locale={locale} product={product.slug} stripeEnabled={stripeEnabled} iyzicoEnabled={iyzicoEnabled} />
    </div>
  );
}
