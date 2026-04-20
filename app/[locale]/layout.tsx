import type { ReactNode } from "react";
import { notFound } from "next/navigation";
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

  return (
    <div data-locale={locale} className="flex min-h-screen flex-col bg-navy text-white">
      <Header locale={locale as Locale} />
      <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-8 md:px-8">{children}</main>
      <Footer />
      <DiagnoseCTA locale={locale as Locale} />
    </div>
  );
}
