export type ProductConfig = {
  slug: string;
  title: string;
  description: string;
  priceTRY: number;
  priceUSD: number;
};

export const PAY_PRODUCTS: ProductConfig[] = [
  {
    slug: "diagnose",
    title: "Diagnose kickoff",
    description: "Initial infrastructure diagnosis and strategic next-step map.",
    priceTRY: 4900,
    priceUSD: 149,
  },
  {
    slug: "walkthrough",
    title: "Walkthrough session",
    description: "Operational walkthrough with implementation priorities.",
    priceTRY: 9900,
    priceUSD: 299,
  },
  {
    slug: "infrastructure-audit",
    title: "Infrastructure audit",
    description: "Comprehensive readiness audit across all core operating layers.",
    priceTRY: 24900,
    priceUSD: 799,
  },
];

export function getProductBySlug(slug: string) {
  return PAY_PRODUCTS.find((item) => item.slug === slug) ?? null;
}
