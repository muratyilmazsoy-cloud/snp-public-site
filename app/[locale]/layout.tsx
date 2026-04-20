import Script from "next/script";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { ScrollEffects } from "@/components/motion/ScrollEffects";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/components/seo/JsonLd";
import { DiagnoseCTA } from "@/components/layout/DiagnoseCTA";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isSupportedLocale, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Standards & Partners",
    url: "https://www.standardsandpartners.com",
    logo: "https://www.standardsandpartners.com/og?title=Standards%20%26%20Partners",
    sameAs: [],
  };

  return (
    <div data-locale={locale} className="flex min-h-screen flex-col bg-navy text-white">
      <JsonLd id="organization-jsonld" data={organizationJsonLd} />
      <BreadcrumbJsonLd />
      <ScrollEffects />
      {plausibleDomain ? (
        <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
      ) : null}
      <Header locale={locale as Locale} />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-8 md:px-8">{children}</main>
      <Footer />
      <DiagnoseCTA locale={locale as Locale} />
    </div>
  );
}
