import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Standards & Partners",
  description: "Business Infrastructure company website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-snp-locale");
  const locale = localeHeader && isSupportedLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning={true}
      className={`${inter.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
