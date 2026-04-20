import { groq } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import type { Locale } from "@/lib/i18n/config";
import { pickLocale } from "@/lib/sanity/localize";
import { sanityClient } from "@/lib/sanity/client";

type LocalizedValue = {
  en?: string;
  tr?: string;
};

type LayerResult = {
  _id: string;
  name?: LocalizedValue;
  description?: LocalizedValue;
  slug?: { current: string };
  order: number;
};

type PipelineResult = {
  _id: string;
  name?: LocalizedValue;
  audience?: LocalizedValue;
  promise?: LocalizedValue;
  ctaLabel?: LocalizedValue;
  ctaHref: string;
  order: number;
};

type KarmaFramingResult = {
  _id: string;
  title?: LocalizedValue;
  description?: LocalizedValue;
  order: number;
};

type ManifestoResult = {
  _id: string;
  title?: LocalizedValue;
  intro?: LocalizedValue;
  bodyEn?: PortableTextBlock[];
  bodyTr?: PortableTextBlock[];
  endCtaLabel?: LocalizedValue;
  endCtaHref?: string;
};

type HomeStatResult = {
  label?: LocalizedValue;
};

type ConsultingDiffRowResult = {
  consulting?: LocalizedValue;
  infrastructure?: LocalizedValue;
};

type PageResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  hero?: {
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    subtitle?: LocalizedValue;
  };
  homeShiftLeft?: LocalizedValue;
  homePrimaryCtaLabel?: LocalizedValue;
  homeSecondaryCtaLabel?: LocalizedValue;
  homeSecondaryCtaHref?: string;
  homeShiftHeading?: LocalizedValue;
  homeRealityHeading?: LocalizedValue;
  homeLayersHeading?: LocalizedValue;
  homeFutureFeatureLabel?: LocalizedValue;
  homeGrowHeading?: LocalizedValue;
  homeEcosystemHeading?: LocalizedValue;
  homeMoatsHeading?: LocalizedValue;
  homeMoatsLinkLabel?: LocalizedValue;
  homeMoatsLinkHref?: string;
  homeShiftRight?: LocalizedValue;
  homeKarmaQuote?: LocalizedValue;
  homeEcosystemStats?: HomeStatResult[];
  homeMoatsTeaser?: LocalizedValue;
  homeClosingSignature?: LocalizedValue;
  endOfInequality?: LocalizedValue;
  infrastructureEndHeading?: LocalizedValue;
  infrastructureCreatedHeading?: LocalizedValue;
  infrastructureKarmaHeading?: LocalizedValue;
  infrastructureDifferenceHeading?: LocalizedValue;
  infrastructureDifferenceLeftLabel?: LocalizedValue;
  infrastructureDifferenceRightLabel?: LocalizedValue;
  infrastructureCreatedStatement?: LocalizedValue;
  infrastructureKarmaNinthLayer?: LocalizedValue;
  consultingDiffRows?: ConsultingDiffRowResult[];
  consultingDiffCtaLabel?: LocalizedValue;
  consultingDiffCtaHref?: string;
  karmaDelayProblem?: LocalizedValue;
  karmaFramingsHeading?: LocalizedValue;
  karmaDelayHeading?: LocalizedValue;
  karmaRealtimeHeading?: LocalizedValue;
  karmaRealtimeDiagramLabel?: LocalizedValue;
  karmaDiagramActionLabel?: LocalizedValue;
  karmaDiagramObservationLabel?: LocalizedValue;
  karmaRealtimeExplanation?: LocalizedValue;
  karmaCtaLabel?: LocalizedValue;
  karmaCtaHref?: string;
  manifestoRef?: ManifestoResult;
};

export type LocalizedLayer = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

export type LocalizedPipeline = {
  id: string;
  name: string;
  audience: string;
  promise: string;
  ctaLabel: string;
  ctaHref: string;
};

export type LocalizedKarmaFraming = {
  id: string;
  title: string;
  description: string;
};

export type LocalizedManifesto = {
  id: string;
  title: string;
  intro: string;
  body: PortableTextBlock[];
  endCtaLabel: string;
  endCtaHref: string;
};

export type LocalizedPage = {
  id: string;
  slug: string;
  title: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  homeShiftLeft: string;
  homePrimaryCtaLabel: string;
  homeSecondaryCtaLabel: string;
  homeSecondaryCtaHref: string;
  homeShiftHeading: string;
  homeRealityHeading: string;
  homeLayersHeading: string;
  homeFutureFeatureLabel: string;
  homeGrowHeading: string;
  homeEcosystemHeading: string;
  homeMoatsHeading: string;
  homeMoatsLinkLabel: string;
  homeMoatsLinkHref: string;
  homeShiftRight: string;
  homeKarmaQuote: string;
  homeEcosystemStats: string[];
  homeMoatsTeaser: string;
  homeClosingSignature: string;
  endOfInequality: string;
  infrastructureEndHeading: string;
  infrastructureCreatedHeading: string;
  infrastructureKarmaHeading: string;
  infrastructureDifferenceHeading: string;
  infrastructureDifferenceLeftLabel: string;
  infrastructureDifferenceRightLabel: string;
  infrastructureCreatedStatement: string;
  infrastructureKarmaNinthLayer: string;
  consultingDiffRows: { consulting: string; infrastructure: string }[];
  consultingDiffCtaLabel: string;
  consultingDiffCtaHref: string;
  karmaDelayProblem: string;
  karmaFramingsHeading: string;
  karmaDelayHeading: string;
  karmaRealtimeHeading: string;
  karmaRealtimeDiagramLabel: string;
  karmaDiagramActionLabel: string;
  karmaDiagramObservationLabel: string;
  karmaRealtimeExplanation: string;
  karmaCtaLabel: string;
  karmaCtaHref: string;
  manifesto: LocalizedManifesto | null;
};

const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    hero,
    homeShiftLeft,
    homePrimaryCtaLabel,
    homeSecondaryCtaLabel,
    homeSecondaryCtaHref,
    homeShiftHeading,
    homeRealityHeading,
    homeLayersHeading,
    homeFutureFeatureLabel,
    homeGrowHeading,
    homeEcosystemHeading,
    homeMoatsHeading,
    homeMoatsLinkLabel,
    homeMoatsLinkHref,
    homeShiftRight,
    homeKarmaQuote,
    homeEcosystemStats,
    homeMoatsTeaser,
    homeClosingSignature,
    endOfInequality,
    infrastructureEndHeading,
    infrastructureCreatedHeading,
    infrastructureKarmaHeading,
    infrastructureDifferenceHeading,
    infrastructureDifferenceLeftLabel,
    infrastructureDifferenceRightLabel,
    infrastructureCreatedStatement,
    infrastructureKarmaNinthLayer,
    consultingDiffRows,
    consultingDiffCtaLabel,
    consultingDiffCtaHref,
    karmaDelayProblem,
    karmaFramingsHeading,
    karmaDelayHeading,
    karmaRealtimeHeading,
    karmaRealtimeDiagramLabel,
    karmaDiagramActionLabel,
    karmaDiagramObservationLabel,
    karmaRealtimeExplanation,
    karmaCtaLabel,
    karmaCtaHref,
    manifestoRef->{
      _id,
      title,
      intro,
      bodyEn,
      bodyTr,
      endCtaLabel,
      endCtaHref
    }
  }
`;

const layersQuery = groq`
  *[_type == "layer"] | order(order asc) {
    _id,
    name,
    description,
    slug,
    order
  }
`;

const pipelinesQuery = groq`
  *[_type == "pipeline"] | order(order asc) {
    _id,
    name,
    audience,
    promise,
    ctaLabel,
    ctaHref,
    order
  }
`;

const karmaFramingsQuery = groq`
  *[_type == "karmaFraming"] | order(order asc) {
    _id,
    title,
    description,
    order
  }
`;

export async function getPageBySlug(slug: string, locale: Locale): Promise<LocalizedPage | null> {
  const page = await sanityClient.fetch<PageResult | null>(pageBySlugQuery, { slug });

  if (!page) {
    return null;
  }

  const manifesto = page.manifestoRef
    ? {
        id: page.manifestoRef._id,
        title: pickLocale(page.manifestoRef.title, locale),
        intro: pickLocale(page.manifestoRef.intro, locale),
        body: locale === "tr" ? (page.manifestoRef.bodyTr ?? []) : (page.manifestoRef.bodyEn ?? []),
        endCtaLabel: pickLocale(page.manifestoRef.endCtaLabel, locale),
        endCtaHref: page.manifestoRef.endCtaHref ?? "",
      }
    : null;

  return {
    id: page._id,
    slug: page.slug?.current ?? slug,
    title: pickLocale(page.title, locale),
    hero: {
      eyebrow: pickLocale(page.hero?.eyebrow, locale),
      title: pickLocale(page.hero?.title, locale),
      subtitle: pickLocale(page.hero?.subtitle, locale),
    },
    homeShiftLeft: pickLocale(page.homeShiftLeft, locale),
    homePrimaryCtaLabel: pickLocale(page.homePrimaryCtaLabel, locale),
    homeSecondaryCtaLabel: pickLocale(page.homeSecondaryCtaLabel, locale),
    homeSecondaryCtaHref: page.homeSecondaryCtaHref ?? "",
    homeShiftHeading: pickLocale(page.homeShiftHeading, locale),
    homeRealityHeading: pickLocale(page.homeRealityHeading, locale),
    homeLayersHeading: pickLocale(page.homeLayersHeading, locale),
    homeFutureFeatureLabel: pickLocale(page.homeFutureFeatureLabel, locale),
    homeGrowHeading: pickLocale(page.homeGrowHeading, locale),
    homeEcosystemHeading: pickLocale(page.homeEcosystemHeading, locale),
    homeMoatsHeading: pickLocale(page.homeMoatsHeading, locale),
    homeMoatsLinkLabel: pickLocale(page.homeMoatsLinkLabel, locale),
    homeMoatsLinkHref: page.homeMoatsLinkHref ?? "",
    homeShiftRight: pickLocale(page.homeShiftRight, locale),
    homeKarmaQuote: pickLocale(page.homeKarmaQuote, locale),
    homeEcosystemStats:
      page.homeEcosystemStats?.map((item) => pickLocale(item.label, locale)).filter(Boolean) ?? [],
    homeMoatsTeaser: pickLocale(page.homeMoatsTeaser, locale),
    homeClosingSignature: pickLocale(page.homeClosingSignature, locale),
    endOfInequality: pickLocale(page.endOfInequality, locale),
    infrastructureEndHeading: pickLocale(page.infrastructureEndHeading, locale),
    infrastructureCreatedHeading: pickLocale(page.infrastructureCreatedHeading, locale),
    infrastructureKarmaHeading: pickLocale(page.infrastructureKarmaHeading, locale),
    infrastructureDifferenceHeading: pickLocale(page.infrastructureDifferenceHeading, locale),
    infrastructureDifferenceLeftLabel: pickLocale(page.infrastructureDifferenceLeftLabel, locale),
    infrastructureDifferenceRightLabel: pickLocale(page.infrastructureDifferenceRightLabel, locale),
    infrastructureCreatedStatement: pickLocale(page.infrastructureCreatedStatement, locale),
    infrastructureKarmaNinthLayer: pickLocale(page.infrastructureKarmaNinthLayer, locale),
    consultingDiffRows:
      page.consultingDiffRows?.map((item) => ({
        consulting: pickLocale(item.consulting, locale),
        infrastructure: pickLocale(item.infrastructure, locale),
      })) ?? [],
    consultingDiffCtaLabel: pickLocale(page.consultingDiffCtaLabel, locale),
    consultingDiffCtaHref: page.consultingDiffCtaHref ?? "",
    karmaDelayProblem: pickLocale(page.karmaDelayProblem, locale),
    karmaFramingsHeading: pickLocale(page.karmaFramingsHeading, locale),
    karmaDelayHeading: pickLocale(page.karmaDelayHeading, locale),
    karmaRealtimeHeading: pickLocale(page.karmaRealtimeHeading, locale),
    karmaRealtimeDiagramLabel: pickLocale(page.karmaRealtimeDiagramLabel, locale),
    karmaDiagramActionLabel: pickLocale(page.karmaDiagramActionLabel, locale),
    karmaDiagramObservationLabel: pickLocale(page.karmaDiagramObservationLabel, locale),
    karmaRealtimeExplanation: pickLocale(page.karmaRealtimeExplanation, locale),
    karmaCtaLabel: pickLocale(page.karmaCtaLabel, locale),
    karmaCtaHref: page.karmaCtaHref ?? "",
    manifesto,
  };
}

export async function getLayers(locale: Locale): Promise<LocalizedLayer[]> {
  const layers = await sanityClient.fetch<LayerResult[]>(layersQuery);

  return layers.map((item) => ({
    id: item._id,
    name: pickLocale(item.name, locale),
    description: pickLocale(item.description, locale),
    slug: item.slug?.current ?? "",
  }));
}

export async function getPipelines(locale: Locale): Promise<LocalizedPipeline[]> {
  const pipelines = await sanityClient.fetch<PipelineResult[]>(pipelinesQuery);

  return pipelines.map((item) => ({
    id: item._id,
    name: pickLocale(item.name, locale),
    audience: pickLocale(item.audience, locale),
    promise: pickLocale(item.promise, locale),
    ctaLabel: pickLocale(item.ctaLabel, locale),
    ctaHref: item.ctaHref,
  }));
}

export async function getKarmaFramings(locale: Locale): Promise<LocalizedKarmaFraming[]> {
  const framings = await sanityClient.fetch<KarmaFramingResult[]>(karmaFramingsQuery);

  return framings.map((item) => ({
    id: item._id,
    title: pickLocale(item.title, locale),
    description: pickLocale(item.description, locale),
  }));
}

type OperasyonResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  heroEyebrow?: LocalizedValue;
  heroTitle?: LocalizedValue;
  heroSubtitle?: LocalizedValue;
  heroCtaLabel?: LocalizedValue;
  heroCtaHref?: string;
  whatItReplacesHeading?: LocalizedValue;
  legacyStackLabel?: LocalizedValue;
  operasyonStackLabel?: LocalizedValue;
  legacyItems?: LocalizedValue[];
  operasyonItems?: LocalizedValue[];
  layersHeading?: LocalizedValue;
  mseHeading?: LocalizedValue;
  mseDescription?: LocalizedValue;
  embeddedFinanceHeading?: LocalizedValue;
  embeddedFinanceDescription?: LocalizedValue;
  marketplaceHeading?: LocalizedValue;
  marketplaceDescription?: LocalizedValue;
  testimonials?: LocalizedValue[];
  finalCtaLabel?: LocalizedValue;
  finalCtaHref?: string;
  formHeading?: LocalizedValue;
  formSubmitLabel?: LocalizedValue;
  formNameLabel?: LocalizedValue;
  formEmailLabel?: LocalizedValue;
  formCompanyLabel?: LocalizedValue;
  formCountryLabel?: LocalizedValue;
  formMessageLabel?: LocalizedValue;
};

type LayerDetailResult = {
  _id: string;
  name?: LocalizedValue;
  slug?: { current: string };
  definition?: LocalizedValue;
  problemHeading?: LocalizedValue;
  problemParagraphs?: LocalizedValue[];
  outcomes?: LocalizedValue[];
  outcomesHeading?: LocalizedValue;
  connectionsHeading?: LocalizedValue;
  connectionsText?: LocalizedValue;
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
};

type MseResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  heroEyebrow?: LocalizedValue;
  heroTitle?: LocalizedValue;
  heroSubtitle?: LocalizedValue;
  coverageHeading?: LocalizedValue;
  coveragePoints?: LocalizedValue[];
  visualizationLabel?: LocalizedValue;
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
};

export type LocalizedOperasyon = {
  id: string;
  title: string;
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  whatItReplacesHeading: string;
  legacyStackLabel: string;
  operasyonStackLabel: string;
  legacyItems: string[];
  operasyonItems: string[];
  layersHeading: string;
  mseHeading: string;
  mseDescription: string;
  embeddedFinanceHeading: string;
  embeddedFinanceDescription: string;
  marketplaceHeading: string;
  marketplaceDescription: string;
  testimonials: string[];
  finalCtaLabel: string;
  finalCtaHref: string;
  formHeading: string;
  formSubmitLabel: string;
  formLabels: {
    name: string;
    email: string;
    company: string;
    country: string;
    message: string;
    sending: string;
    success: string;
    error: string;
  };
};

export type LocalizedLayerDetail = {
  id: string;
  name: string;
  slug: string;
  definition: string;
  problemHeading: string;
  problemParagraphs: string[];
  outcomesHeading: string;
  outcomes: string[];
  connectionsHeading: string;
  connectionsText: string;
  ctaLabel: string;
  ctaHref: string;
};

export type LocalizedMse = {
  id: string;
  title: string;
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  coverageHeading: string;
  coveragePoints: string[];
  visualizationLabel: string;
  ctaLabel: string;
  ctaHref: string;
};

const operasyonBySlugQuery = groq`
  *[_type == "operasyon" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroCtaLabel,
    heroCtaHref,
    whatItReplacesHeading,
    legacyStackLabel,
    operasyonStackLabel,
    legacyItems,
    operasyonItems,
    layersHeading,
    mseHeading,
    mseDescription,
    embeddedFinanceHeading,
    embeddedFinanceDescription,
    marketplaceHeading,
    marketplaceDescription,
    testimonials,
    finalCtaLabel,
    finalCtaHref,
    formHeading,
    formSubmitLabel,
    formNameLabel,
    formEmailLabel,
    formCompanyLabel,
    formCountryLabel,
    formMessageLabel
  }
`;

const layerDetailBySlugQuery = groq`
  *[_type == "layerDetail" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    definition,
    problemHeading,
    problemParagraphs,
    outcomes,
    outcomesHeading,
    connectionsHeading,
    connectionsText,
    ctaLabel,
    ctaHref
  }
`;

const mseBySlugQuery = groq`
  *[_type == "mse" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    coverageHeading,
    coveragePoints,
    visualizationLabel,
    ctaLabel,
    ctaHref
  }
`;

export async function getOperasyonBySlug(slug: string, locale: Locale): Promise<LocalizedOperasyon | null> {
  const doc = await sanityClient.fetch<OperasyonResult | null>(operasyonBySlugQuery, { slug });
  if (!doc) return null;

  return {
    id: doc._id,
    title: pickLocale(doc.title, locale),
    slug: doc.slug?.current ?? slug,
    heroEyebrow: pickLocale(doc.heroEyebrow, locale),
    heroTitle: pickLocale(doc.heroTitle, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle, locale),
    heroCtaLabel: pickLocale(doc.heroCtaLabel, locale),
    heroCtaHref: doc.heroCtaHref ?? "",
    whatItReplacesHeading: pickLocale(doc.whatItReplacesHeading, locale),
    legacyStackLabel: pickLocale(doc.legacyStackLabel, locale),
    operasyonStackLabel: pickLocale(doc.operasyonStackLabel, locale),
    legacyItems: doc.legacyItems?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    operasyonItems: doc.operasyonItems?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    layersHeading: pickLocale(doc.layersHeading, locale),
    mseHeading: pickLocale(doc.mseHeading, locale),
    mseDescription: pickLocale(doc.mseDescription, locale),
    embeddedFinanceHeading: pickLocale(doc.embeddedFinanceHeading, locale),
    embeddedFinanceDescription: pickLocale(doc.embeddedFinanceDescription, locale),
    marketplaceHeading: pickLocale(doc.marketplaceHeading, locale),
    marketplaceDescription: pickLocale(doc.marketplaceDescription, locale),
    testimonials: doc.testimonials?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    finalCtaLabel: pickLocale(doc.finalCtaLabel, locale),
    finalCtaHref: doc.finalCtaHref ?? "",
    formHeading: pickLocale(doc.formHeading, locale),
    formSubmitLabel: pickLocale(doc.formSubmitLabel, locale),
    formLabels: {
      name: pickLocale(doc.formNameLabel, locale),
      email: pickLocale(doc.formEmailLabel, locale),
      company: pickLocale(doc.formCompanyLabel, locale),
      country: pickLocale(doc.formCountryLabel, locale),
      message: pickLocale(doc.formMessageLabel, locale),
      sending: locale === "tr" ? "Gonderiliyor..." : "Sending...",
      success: locale === "tr" ? "Talebiniz alindi. Kisa surede iletisim kuracagiz." : "Request sent. We will contact you shortly.",
      error: locale === "tr" ? "Talep gonderilemedi. Lutfen tekrar deneyin." : "Could not send your request. Please try again.",
    },
  };
}

export async function getLayerDetailBySlug(slug: string, locale: Locale): Promise<LocalizedLayerDetail | null> {
  const doc = await sanityClient.fetch<LayerDetailResult | null>(layerDetailBySlugQuery, { slug });
  if (!doc) return null;

  return {
    id: doc._id,
    name: pickLocale(doc.name, locale),
    slug: doc.slug?.current ?? slug,
    definition: pickLocale(doc.definition, locale),
    problemHeading: pickLocale(doc.problemHeading, locale),
    problemParagraphs: doc.problemParagraphs?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    outcomesHeading: pickLocale(doc.outcomesHeading, locale),
    outcomes: doc.outcomes?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    connectionsHeading: pickLocale(doc.connectionsHeading, locale),
    connectionsText: pickLocale(doc.connectionsText, locale),
    ctaLabel: pickLocale(doc.ctaLabel, locale),
    ctaHref: doc.ctaHref ?? "",
  };
}

export async function getMseBySlug(slug: string, locale: Locale): Promise<LocalizedMse | null> {
  const doc = await sanityClient.fetch<MseResult | null>(mseBySlugQuery, { slug });
  if (!doc) return null;

  return {
    id: doc._id,
    title: pickLocale(doc.title, locale),
    slug: doc.slug?.current ?? slug,
    heroEyebrow: pickLocale(doc.heroEyebrow, locale),
    heroTitle: pickLocale(doc.heroTitle, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle, locale),
    coverageHeading: pickLocale(doc.coverageHeading, locale),
    coveragePoints: doc.coveragePoints?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    visualizationLabel: pickLocale(doc.visualizationLabel, locale),
    ctaLabel: pickLocale(doc.ctaLabel, locale),
    ctaHref: doc.ctaHref ?? "",
  };
}
