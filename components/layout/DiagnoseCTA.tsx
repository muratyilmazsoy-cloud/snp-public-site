"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type DiagnoseCTAProps = {
  locale: Locale;
};

export function DiagnoseCTA({ locale }: DiagnoseCTAProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-6 bottom-6 z-40">
      {open ? (
        <div className="mb-3 w-64 rounded-2xl border border-navy-edge bg-navy-2 p-4 text-sm text-gray-1">
          <p className="font-medium text-white">What you&apos;ll get</p>
          <ul className="mt-2 space-y-1">
            <li>✓ 22 question diagnostic</li>
            <li>✓ Risk visibility snapshot</li>
            <li>✓ Next-step execution map</li>
          </ul>
        </div>
      ) : null}
      <Link
        href={`/${locale}/diagnose`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="btn-micro rounded-full bg-cyan px-5 py-3 text-sm font-medium text-navy shadow-[0_0_14px_rgba(74,184,255,0.35)] hover:bg-cyan-2"
      >
        Diagnose
      </Link>
    </div>
  );
}
