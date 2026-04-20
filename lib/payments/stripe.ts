import { getProductBySlug } from "@/lib/payments/products";

export async function createStripeCheckoutUrl(productSlug: string, locale: string, origin: string) {
  const key = process.env.STRIPE_SECRET_KEY;
  const product = getProductBySlug(productSlug);

  if (!product || !key) {
    return null;
  }

  // Placeholder integration shape for test mode rollout.
  // When STRIPE_SECRET_KEY is configured, replace with Stripe SDK call.
  return `${origin}/${locale}/pay/${product.slug}?provider=stripe&status=ready`;
}
