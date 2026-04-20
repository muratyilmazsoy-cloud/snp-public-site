"use client";

import { useState } from "react";

type CheckoutPanelProps = {
  locale: string;
  product: string;
  stripeEnabled: boolean;
  iyzicoEnabled: boolean;
};

export function CheckoutPanel({ locale, product, stripeEnabled, iyzicoEnabled }: CheckoutPanelProps) {
  const [status, setStatus] = useState("");

  async function start(provider: "stripe" | "iyzico") {
    setStatus("Redirecting...");
    const response = await fetch(`/api/${provider}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, locale }),
    });

    const payload = (await response.json()) as { ok: boolean; checkoutUrl?: string; error?: string };

    if (!response.ok || !payload.ok || !payload.checkoutUrl) {
      setStatus(payload.error ?? "Payment provider is not configured yet.");
      return;
    }

    window.location.href = payload.checkoutUrl;
  }

  return (
    <section className="space-y-6 border border-gray-2/40 bg-navy-2 p-6">
      <div className="grid gap-3 md:grid-cols-2">
        <button
          type="button"
          onClick={() => start("stripe")}
          className="rounded-full border border-gray-2/40 px-5 py-3 text-left hover:border-cyan disabled:opacity-50"
          disabled={!stripeEnabled}
        >
          <span className="block text-sm uppercase tracking-[0.12em] text-gray-1">Global checkout</span>
          <span className="mt-1 block text-lg font-medium">Stripe</span>
        </button>

        <button
          type="button"
          onClick={() => start("iyzico")}
          className="rounded-full border border-gray-2/40 px-5 py-3 text-left hover:border-cyan disabled:opacity-50"
          disabled={!iyzicoEnabled}
        >
          <span className="block text-sm uppercase tracking-[0.12em] text-gray-1">Turkey checkout</span>
          <span className="mt-1 block text-lg font-medium">iyzico</span>
        </button>
      </div>

      {!stripeEnabled || !iyzicoEnabled ? (
        <p className="text-sm text-gray-1">
          {locale === "tr"
            ? "Bazi odeme saglayicilari henuz test anahtarlari ile etkinlestirilmedi."
            : "Some providers are not enabled yet because test keys are missing."}
        </p>
      ) : null}

      {status ? <p className="text-sm text-gray-1">{status}</p> : null}
    </section>
  );
}
