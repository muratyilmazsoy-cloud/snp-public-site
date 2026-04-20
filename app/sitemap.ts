import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { locales } from "@/lib/i18n/config";
import { sanityClient } from "@/lib/sanity/client";
import { SITE_URL } from "@/lib/seo/site";

type SlugDoc = { slug?: { current?: string } };

const docsWithSlugQuery = groq`
  *[_type in [
    "page", "pipelineDetail", "servicesPage", "sectorPage", "sitePage", "businessArmyPage", "moatsPage"
  ] && defined(slug.current)]{ slug }
`;

const staticRoutes = [
  "",
  "infrastructure",
  "infrastructure/manifesto",
  "infrastructure/karma",
  "infrastructure/moats",
  "infrastructure/cot",
  "operasyon-4-0",
  "operasyon-4-0/business-os",
  "operasyon-4-0/compliance",
  "operasyon-4-0/auditing",
  "operasyon-4-0/investment",
  "operasyon-4-0/potential",
  "operasyon-4-0/mse",
  "grow",
  "grow/fix-your-company",
  "grow/become-a-partner",
  "grow/build-your-career",
  "grow/transform-your-office",
  "services",
  "services/essentials",
  "services/advanced",
  "services/digital",
  "services/pricing",
  "sectors",
  "sectors/family-businesses",
  "sectors/smes",
  "sectors/holdings",
  "sectors/ecommerce",
  "sectors/foreign-investors",
  "sectors/accounting-offices",
  "about",
  "about/bull-spirit",
  "about/secrecy-doctrine",
  "about/business-army",
  "about/pricing-equation",
  "about/clients",
  "about/team",
  "contact",
  "diagnose",
  "pay/diagnose",
  "pay/walkthrough",
  "pay/infrastructure-audit",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const docs = await sanityClient.fetch<SlugDoc[]>(docsWithSlugQuery).catch(() => []);
  const routes = new Set([...staticRoutes, ...docs.map((doc) => doc.slug?.current).filter(Boolean) as string[]]);

  return Array.from(routes).flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route ? `/${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
  );
}
