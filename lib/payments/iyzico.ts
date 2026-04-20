import { getProductBySlug } from "@/lib/payments/products";

export async function createIyzicoCheckoutUrl(productSlug: string, locale: string, origin: string) {
  const apiKey = process.env.IYZICO_API_KEY;
  const secretKey = process.env.IYZICO_SECRET_KEY;
  const product = getProductBySlug(productSlug);

  if (!product || !apiKey || !secretKey) {
    return null;
  }

  // Placeholder integration shape for test mode rollout.
  // When credentials are configured, call iyzico checkoutFormInitialize API.
  return `${origin}/${locale}/pay/${product.slug}?provider=iyzico&status=ready`;
}
