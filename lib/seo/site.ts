import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.standardsandpartners.com";

export function buildAlternates(pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = normalized.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  const withoutLocale = locales.includes(maybeLocale as Locale) ? `/${segments.slice(1).join("/")}` : normalized;
  const clean = withoutLocale === "/" ? "" : withoutLocale;

  return {
    canonical: `${SITE_URL}/${defaultLocale}${clean}`,
    languages: Object.fromEntries(locales.map((locale) => [locale, `${SITE_URL}/${locale}${clean}`])),
  };
}

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: buildAlternates(pathname),
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}${pathname}`,
      images: [`${SITE_URL}/og?title=${encodeURIComponent(title)}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og?title=${encodeURIComponent(title)}`],
    },
  };
}
