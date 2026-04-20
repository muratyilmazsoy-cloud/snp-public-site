import type { Locale } from "@/lib/i18n/config";

type LocalizedValue = {
  en?: string;
  tr?: string;
  [key: string]: string | undefined;
};

export function pickLocale(value: LocalizedValue | undefined, locale: Locale): string {
  if (!value) {
    return "";
  }

  return value[locale] ?? value.en ?? "";
}

export function pickLocaleList<T>(
  items: T[] | undefined,
  mapper: (item: T) => LocalizedValue | undefined,
  locale: Locale,
): string[] {
  if (!items?.length) {
    return [];
  }

  return items
    .map((item) => pickLocale(mapper(item), locale))
    .filter((item): item is string => Boolean(item));
}
