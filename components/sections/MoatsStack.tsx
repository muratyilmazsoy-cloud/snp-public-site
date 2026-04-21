"use client";

import Link from "next/link";
import type { LocalizedMoatsPage } from "@/lib/sanity/queries";

const layerLinks = [
  "/operasyon-4-0/business-os",
  "/operasyon-4-0/compliance",
  "/operasyon-4-0/auditing",
  "/operasyon-4-0/investment",
  "/operasyon-4-0/potential",
];

export function MoatsStack({ items }: { items: LocalizedMoatsPage["items"] }) {
  return (
    <div className="moats-stack space-y-10">
      <div className="moats-castle" aria-hidden="true" />

      {items.map((item, index) => (
        <article key={`${item.name}-${index}`} className="moat-sticky-card card-surface">
          <div className="grid min-h-[78vh] gap-8 p-8 md:grid-cols-2 md:items-end">
            <div className="space-y-3">
              <p className="eyebrow text-text-tertiary">Old belief</p>
              <h3 className="text-text-tertiary">{item.oldBelief}</h3>
            </div>

            <div className="space-y-4">
              <p className="eyebrow text-cyan">New reality</p>
              <h3>{item.newReality}</h3>
              <p className="text-sm text-gray-1">Risk: {item.risk}</p>
              <Link href={layerLinks[index % layerLinks.length]} className="link-animated inline-flex text-cyan">
                Solution →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
