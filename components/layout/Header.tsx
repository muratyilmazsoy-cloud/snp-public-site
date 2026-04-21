"use client";

import Link from "next/link";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { VortexMark } from "@/components/vortex/VortexMark";
import type { Locale } from "@/lib/i18n/config";

type HeaderProps = {
  locale: Locale;
};

const primaryNav = [
  {
    label: "Infrastructure",
    href: "/infrastructure",
    links: [
      { label: "Overview", href: "/infrastructure" },
      { label: "Manifesto", href: "/infrastructure/manifesto" },
      { label: "Karma", href: "/infrastructure/karma" },
      { label: "Moats", href: "/infrastructure/moats" },
      { label: "COT", href: "/infrastructure/cot" },
    ],
  },
  {
    label: "Operasyon 4.0",
    href: "/operasyon-4-0",
    links: [
      { label: "Overview", href: "/operasyon-4-0" },
      { label: "Business OS", href: "/operasyon-4-0/business-os" },
      { label: "Compliance", href: "/operasyon-4-0/compliance" },
      { label: "Auditing", href: "/operasyon-4-0/auditing" },
      { label: "Investment", href: "/operasyon-4-0/investment" },
      { label: "Potential", href: "/operasyon-4-0/potential" },
      { label: "MSE", href: "/operasyon-4-0/mse" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    links: [
      { label: "Overview", href: "/services" },
      { label: "Essentials", href: "/services/essentials" },
      { label: "Advanced", href: "/services/advanced" },
      { label: "Digital", href: "/services/digital" },
      { label: "Pricing", href: "/services/pricing" },
    ],
  },
  {
    label: "Grow",
    href: "/grow",
    links: [
      { label: "Overview", href: "/grow" },
      { label: "Fix Your Company", href: "/grow/fix-your-company" },
      { label: "Become a Partner", href: "/grow/become-a-partner" },
      { label: "Build Your Career", href: "/grow/build-your-career" },
      { label: "Transform Your Office", href: "/grow/transform-your-office" },
    ],
  },
];

const secondaryNav = [
  { label: "Sectors", href: "/sectors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header({ locale }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-edge/60 bg-[rgba(3,11,24,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-4 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Standards & Partners home">
          <VortexMark className="h-8 w-8 text-cyan" />
          <span className="font-display text-[15px] tracking-[0.02em]">Standards & Partners</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`link-animated text-sm ${openMenu === item.label ? "text-cyan" : "text-gray-1 hover:text-white"}`}
              onMouseEnter={() => setOpenMenu(item.label)}
              onFocus={() => setOpenMenu(item.label)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-3 text-sm text-gray-1">
            {secondaryNav.map((item) => (
              <Link key={item.label} href={`/${locale}${item.href}`} className="link-animated hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <LocaleSwitcher locale={locale} />
          <Link href={`/${locale}/diagnose`} className="btn-micro rounded-full bg-cyan px-5 py-2.5 text-sm font-medium text-navy shadow-[0_0_14px_rgba(74,184,255,0.3)]">
            Diagnose
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-edge text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{mobileOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {openMenu ? (
        <div
          className="hidden border-t border-navy-edge/70 bg-[rgba(3,11,24,0.96)] backdrop-blur-xl md:block"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-4 gap-10 px-8 py-8">
            {primaryNav.map((group) => (
              <div key={group.label} className={group.label === openMenu ? "opacity-100" : "opacity-40"}>
                <p className="eyebrow text-cyan">{group.label}</p>
                <div className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <Link key={link.href} href={`/${locale}${link.href}`} className="link-animated block w-fit text-gray-1 hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(2,6,15,0.98)] px-6 py-8 md:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl">Navigation</p>
            <button type="button" className="h-11 w-11" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              ×
            </button>
          </div>

          <div className="mt-8 space-y-8">
            {primaryNav.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="eyebrow text-cyan">{group.label}</p>
                {group.links.map((link) => (
                  <Link key={link.href} href={`/${locale}${link.href}`} className="block text-lg text-gray-1" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="space-y-2 border-t border-navy-edge pt-6">
              {secondaryNav.map((item) => (
                <Link key={item.label} href={`/${locale}${item.href}`} className="block text-lg text-gray-1" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <LocaleSwitcher locale={locale} />
            <Link href={`/${locale}/diagnose`} onClick={() => setMobileOpen(false)} className="btn-micro inline-flex rounded-full bg-cyan px-5 py-3 text-sm font-medium text-navy">
              Diagnose
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
