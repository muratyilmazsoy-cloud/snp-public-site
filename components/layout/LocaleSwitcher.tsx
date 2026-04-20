import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-1">
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            className={isActive ? "text-white" : "hover:text-cyan-2"}
            aria-current={isActive ? "page" : undefined}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
