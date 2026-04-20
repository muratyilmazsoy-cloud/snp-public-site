import { NextRequest, NextResponse } from "next/server";
import { createStripeCheckoutUrl } from "@/lib/payments/stripe";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { product?: string; locale?: string };
  const product = body.product ?? "";
  const locale = body.locale ?? "en";
  const origin = request.nextUrl.origin;

  const checkoutUrl = await createStripeCheckoutUrl(product, locale, origin);

  if (!checkoutUrl) {
    return NextResponse.json(
      {
        ok: false,
        error: "Stripe is not configured yet.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, checkoutUrl });
}
