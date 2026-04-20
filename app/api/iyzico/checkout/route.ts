import { NextRequest, NextResponse } from "next/server";
import { createIyzicoCheckoutUrl } from "@/lib/payments/iyzico";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { product?: string; locale?: string };
  const product = body.product ?? "";
  const locale = body.locale ?? "tr";
  const origin = request.nextUrl.origin;

  const checkoutUrl = await createIyzicoCheckoutUrl(product, locale, origin);

  if (!checkoutUrl) {
    return NextResponse.json(
      {
        ok: false,
        error: "iyzico is not configured yet.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, checkoutUrl });
}
