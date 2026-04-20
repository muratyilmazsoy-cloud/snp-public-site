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

type PipelineDetailResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  heroEyebrow?: LocalizedValue;
  heroTitle?: LocalizedValue;
  heroSubtitle?: LocalizedValue;
  distinctionLabel?: LocalizedValue;
  distinctionText?: LocalizedValue;
  sectionOneHeading?: LocalizedValue;
  sectionTwoHeading?: LocalizedValue;
  sectionThreeHeading?: LocalizedValue;
  sectionFourHeading?: LocalizedValue;
  sectionFiveHeading?: LocalizedValue;
  listOne?: LocalizedValue[];
  listTwo?: LocalizedValue[];
  listThree?: LocalizedValue[];
  contentOne?: LocalizedValue;
  contentTwo?: LocalizedValue;
  contentThree?: LocalizedValue;
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
  formSubmitLabel?: LocalizedValue;
  formNameLabel?: LocalizedValue;
  formEmailLabel?: LocalizedValue;
  formCompanyLabel?: LocalizedValue;
  formPhoneLabel?: LocalizedValue;
  formCountryLabel?: LocalizedValue;
  formMessageLabel?: LocalizedValue;
  formExtraOneLabel?: LocalizedValue;
  formExtraTwoLabel?: LocalizedValue;
};

type RankResult = { _id: string; name?: LocalizedValue; order: number };
type CorpsResult = { _id: string; name?: LocalizedValue; order: number };
type RegionResult = {
  _id: string;
  name?: LocalizedValue;
  slug?: { current: string };
  city?: string;
  status?: "active" | "reserved" | "available";
  description?: LocalizedValue;
};
type BranchResult = {
  _id: string;
  name?: LocalizedValue;
  city?: string;
  lat: number;
  lng: number;
  status?: "active" | "reserved" | "available";
  regionRef?: { _id: string };
  countryRef?: { _id: string };
};
type CountryResult = {
  _id: string;
  name?: LocalizedValue;
  code?: string;
  centerLat?: number;
  centerLng?: number;
  defaultZoom?: number;
};

export type LocalizedPipelineDetail = {
  id: string;
  title: string;
  slug: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  distinctionLabel: string;
  distinctionText: string;
  sectionOneHeading: string;
  sectionTwoHeading: string;
  sectionThreeHeading: string;
  sectionFourHeading: string;
  sectionFiveHeading: string;
  listOne: string[];
  listTwo: string[];
  listThree: string[];
  contentOne: string;
  contentTwo: string;
  contentThree: string;
  ctaLabel: string;
  ctaHref: string;
  formSubmitLabel: string;
  formLabels: {
    name: string;
    email: string;
    company: string;
    phone: string;
    country: string;
    message: string;
    extraOne: string;
    extraTwo: string;
    sending: string;
    success: string;
    error: string;
  };
};

export type LocalizedRank = { id: string; name: string; order: number };
export type LocalizedCorps = { id: string; name: string; order: number };
export type LocalizedRegion = {
  id: string;
  name: string;
  slug: string;
  city: string;
  status: "active" | "reserved" | "available";
  description: string;
};
export type LocalizedBranch = {
  id: string;
  name: string;
  city: string;
  lat: number;
  lng: number;
  status: "active" | "reserved" | "available";
  regionId: string;
  countryId: string;
};
export type LocalizedCountry = {
  id: string;
  name: string;
  code: string;
  centerLat: number;
  centerLng: number;
  defaultZoom: number;
};

const pipelineDetailBySlugQuery = groq`
  *[_type == "pipelineDetail" && slug.current == $slug][0]{
    _id, title, slug, heroEyebrow, heroTitle, heroSubtitle, distinctionLabel, distinctionText,
    sectionOneHeading, sectionTwoHeading, sectionThreeHeading, sectionFourHeading, sectionFiveHeading,
    listOne, listTwo, listThree, contentOne, contentTwo, contentThree, ctaLabel, ctaHref,
    formSubmitLabel, formNameLabel, formEmailLabel, formCompanyLabel, formPhoneLabel, formCountryLabel,
    formMessageLabel, formExtraOneLabel, formExtraTwoLabel
  }
`;

const ranksQuery = groq`*[_type == "rank"] | order(order asc){ _id, name, order }`;
const corpsQuery = groq`*[_type == "corps"] | order(order asc){ _id, name, order }`;
const regionsQuery = groq`*[_type == "franchiseRegion"]{ _id, name, slug, city, status, description }`;
const branchesQuery = groq`*[_type == "branch"]{ _id, name, city, lat, lng, status, regionRef->{_id}, countryRef->{_id} }`;
const countriesQuery = groq`*[_type == "country"]{ _id, name, code, centerLat, centerLng, defaultZoom }`;

export async function getPipelineDetailBySlug(slug: string, locale: Locale): Promise<LocalizedPipelineDetail | null> {
  const doc = await sanityClient.fetch<PipelineDetailResult | null>(pipelineDetailBySlugQuery, { slug });
  if (!doc) return null;
  return {
    id: doc._id,
    title: pickLocale(doc.title, locale),
    slug: doc.slug?.current ?? slug,
    heroEyebrow: pickLocale(doc.heroEyebrow, locale),
    heroTitle: pickLocale(doc.heroTitle, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle, locale),
    distinctionLabel: pickLocale(doc.distinctionLabel, locale),
    distinctionText: pickLocale(doc.distinctionText, locale),
    sectionOneHeading: pickLocale(doc.sectionOneHeading, locale),
    sectionTwoHeading: pickLocale(doc.sectionTwoHeading, locale),
    sectionThreeHeading: pickLocale(doc.sectionThreeHeading, locale),
    sectionFourHeading: pickLocale(doc.sectionFourHeading, locale),
    sectionFiveHeading: pickLocale(doc.sectionFiveHeading, locale),
    listOne: doc.listOne?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    listTwo: doc.listTwo?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    listThree: doc.listThree?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    contentOne: pickLocale(doc.contentOne, locale),
    contentTwo: pickLocale(doc.contentTwo, locale),
    contentThree: pickLocale(doc.contentThree, locale),
    ctaLabel: pickLocale(doc.ctaLabel, locale),
    ctaHref: doc.ctaHref ?? "",
    formSubmitLabel: pickLocale(doc.formSubmitLabel, locale),
    formLabels: {
      name: pickLocale(doc.formNameLabel, locale),
      email: pickLocale(doc.formEmailLabel, locale),
      company: pickLocale(doc.formCompanyLabel, locale),
      phone: pickLocale(doc.formPhoneLabel, locale),
      country: pickLocale(doc.formCountryLabel, locale),
      message: pickLocale(doc.formMessageLabel, locale),
      extraOne: pickLocale(doc.formExtraOneLabel, locale),
      extraTwo: pickLocale(doc.formExtraTwoLabel, locale),
      sending: locale === "tr" ? "Gonderiliyor..." : "Sending...",
      success: locale === "tr" ? "Basvuru alindi." : "Application received.",
      error: locale === "tr" ? "Basvuru gonderilemedi." : "Could not submit your application.",
    },
  };
}

export async function getRanks(locale: Locale): Promise<LocalizedRank[]> {
  const docs = await sanityClient.fetch<RankResult[]>(ranksQuery);
  return docs.map((doc) => ({ id: doc._id, name: pickLocale(doc.name, locale), order: doc.order }));
}

export async function getCorps(locale: Locale): Promise<LocalizedCorps[]> {
  const docs = await sanityClient.fetch<CorpsResult[]>(corpsQuery);
  return docs.map((doc) => ({ id: doc._id, name: pickLocale(doc.name, locale), order: doc.order }));
}

export async function getFranchiseRegions(locale: Locale): Promise<LocalizedRegion[]> {
  const docs = await sanityClient.fetch<RegionResult[]>(regionsQuery);
  return docs.map((doc) => ({
    id: doc._id,
    name: pickLocale(doc.name, locale),
    slug: doc.slug?.current ?? "",
    city: doc.city ?? "",
    status: doc.status ?? "available",
    description: pickLocale(doc.description, locale),
  }));
}

export async function getBranches(locale: Locale): Promise<LocalizedBranch[]> {
  const docs = await sanityClient.fetch<BranchResult[]>(branchesQuery);
  return docs.map((doc) => ({
    id: doc._id,
    name: pickLocale(doc.name, locale),
    city: doc.city ?? "",
    lat: doc.lat,
    lng: doc.lng,
    status: doc.status ?? "available",
    regionId: doc.regionRef?._id ?? "",
    countryId: doc.countryRef?._id ?? "",
  }));
}

export async function getCountries(locale: Locale): Promise<LocalizedCountry[]> {
  const docs = await sanityClient.fetch<CountryResult[]>(countriesQuery);
  return docs.map((doc) => ({
    id: doc._id,
    name: pickLocale(doc.name, locale),
    code: doc.code ?? "",
    centerLat: doc.centerLat ?? 0,
    centerLng: doc.centerLng ?? 0,
    defaultZoom: doc.defaultZoom ?? 5,
  }));
}

type ServicesPageResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  heroEyebrow?: LocalizedValue;
  heroTitle?: LocalizedValue;
  heroSubtitle?: LocalizedValue;
  tierHeading?: LocalizedValue;
  tierCards?: { name?: LocalizedValue; summary?: LocalizedValue; href?: string }[];
  pricingCalloutLabel?: LocalizedValue;
  pricingCalloutHref?: string;
  serviceLines?: { title?: LocalizedValue; description?: LocalizedValue }[];
  contactCtaLabel?: LocalizedValue;
  contactCtaHref?: string;
};

type SectorPageResult = {
  _id: string;
  title?: LocalizedValue;
  slug?: { current: string };
  heroEyebrow?: LocalizedValue;
  heroTitle?: LocalizedValue;
  heroSubtitle?: LocalizedValue;
  challenges?: LocalizedValue[];
  serviceLinks?: { label?: LocalizedValue; href?: string }[];
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
};

export type LocalizedServicesPage = {
  id: string;
  slug: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  tierHeading: string;
  tierCards: { name: string; summary: string; href: string }[];
  pricingCalloutLabel: string;
  pricingCalloutHref: string;
  serviceLines: { title: string; description: string }[];
  contactCtaLabel: string;
  contactCtaHref: string;
};

export type LocalizedSectorPage = {
  id: string;
  slug: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  serviceLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
};

const servicesPageBySlugQuery = groq`
  *[_type == "servicesPage" && slug.current == $slug][0]{
    _id, title, slug, heroEyebrow, heroTitle, heroSubtitle, tierHeading, tierCards,
    pricingCalloutLabel, pricingCalloutHref, serviceLines, contactCtaLabel, contactCtaHref
  }
`;

const sectorPageBySlugQuery = groq`
  *[_type == "sectorPage" && slug.current == $slug][0]{
    _id, title, slug, heroEyebrow, heroTitle, heroSubtitle, challenges, serviceLinks, ctaLabel, ctaHref
  }
`;

const sectorPagesQuery = groq`
  *[_type == "sectorPage"] | order(title.en asc){
    _id, title, slug, heroEyebrow, heroTitle, heroSubtitle, challenges, serviceLinks, ctaLabel, ctaHref
  }
`;

export async function getServicesPageBySlug(slug: string, locale: Locale): Promise<LocalizedServicesPage | null> {
  const doc = await sanityClient.fetch<ServicesPageResult | null>(servicesPageBySlugQuery, { slug });
  if (!doc) return null;
  return {
    id: doc._id,
    slug: doc.slug?.current ?? slug,
    title: pickLocale(doc.title, locale),
    heroEyebrow: pickLocale(doc.heroEyebrow, locale),
    heroTitle: pickLocale(doc.heroTitle, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle, locale),
    tierHeading: pickLocale(doc.tierHeading, locale),
    tierCards: doc.tierCards?.map((item) => ({
      name: pickLocale(item.name, locale),
      summary: pickLocale(item.summary, locale),
      href: item.href ?? "",
    })) ?? [],
    pricingCalloutLabel: pickLocale(doc.pricingCalloutLabel, locale),
    pricingCalloutHref: doc.pricingCalloutHref ?? "",
    serviceLines: doc.serviceLines?.map((item) => ({
      title: pickLocale(item.title, locale),
      description: pickLocale(item.description, locale),
    })) ?? [],
    contactCtaLabel: pickLocale(doc.contactCtaLabel, locale),
    contactCtaHref: doc.contactCtaHref ?? "",
  };
}

function mapSector(doc: SectorPageResult, locale: Locale): LocalizedSectorPage {
  return {
    id: doc._id,
    slug: doc.slug?.current ?? "",
    title: pickLocale(doc.title, locale),
    heroEyebrow: pickLocale(doc.heroEyebrow, locale),
    heroTitle: pickLocale(doc.heroTitle, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle, locale),
    challenges: doc.challenges?.map((item) => pickLocale(item, locale)).filter(Boolean) ?? [],
    serviceLinks: doc.serviceLinks?.map((item) => ({
      label: pickLocale(item.label, locale),
      href: item.href ?? "",
    })) ?? [],
    ctaLabel: pickLocale(doc.ctaLabel, locale),
    ctaHref: doc.ctaHref ?? "",
  };
}

export async function getSectorPageBySlug(slug: string, locale: Locale): Promise<LocalizedSectorPage | null> {
  const doc = await sanityClient.fetch<SectorPageResult | null>(sectorPageBySlugQuery, { slug });
  if (!doc) return null;
  return mapSector(doc, locale);
}

export async function getSectorPages(locale: Locale): Promise<LocalizedSectorPage[]> {
  const docs = await sanityClient.fetch<SectorPageResult[]>(sectorPagesQuery);
  return docs.map((doc) => mapSector(doc, locale));
}
