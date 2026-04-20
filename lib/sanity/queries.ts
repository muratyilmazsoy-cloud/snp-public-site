import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity/client";
import type { Locale } from "@/lib/i18n/config";

const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    hero{
      title,
      subtitle,
      eyebrow
    },
    body
  }
`;

type LocalizedValue = {
  [key: string]: string | undefined;
};

type Hero = {
  title?: LocalizedValue;
  subtitle?: LocalizedValue;
  eyebrow?: LocalizedValue;
};

type PageResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  hero?: Hero;
};

type LocalizedPage = {
  _id: string;
  slug?: { current: string };
  title?: string;
  hero?: {
    title?: string;
    subtitle?: string;
    eyebrow?: string;
  };
};

function pickLocale(value: LocalizedValue | undefined, locale: Locale): string | undefined {
  if (!value) {
    return undefined;
  }

  return value[locale] ?? value.en;
}

export async function getPageBySlug(slug: string, locale: Locale): Promise<LocalizedPage | null> {
  const page = await sanityClient.fetch<PageResult | null>(pageBySlugQuery, { slug });

  if (!page) {
    return null;
  }

  return {
    _id: page._id,
    slug: page.slug,
    title: pickLocale(page.title, locale),
    hero: {
      title: pickLocale(page.hero?.title, locale),
      subtitle: pickLocale(page.hero?.subtitle, locale),
      eyebrow: pickLocale(page.hero?.eyebrow, locale),
    },
  };
}
