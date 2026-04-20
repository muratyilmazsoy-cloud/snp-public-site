"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";

export function BreadcrumbJsonLd() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.standardsandpartners.com";

  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${origin}/${segments[0] ?? "en"}` }];

  segments.slice(1).forEach((segment, index) => {
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: segment.replace(/-/g, " "),
      item: `${origin}/${segments.slice(0, index + 2).join("/")}`,
    });
  });

  return (
    <JsonLd
      id="breadcrumb-jsonld"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items,
      }}
    />
  );
}
