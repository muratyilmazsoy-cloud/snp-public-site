import { createClient } from "@sanity/client";

type Localized = { en: string; tr: string };
const ls = (en: string, tr: string): Localized => ({ en, tr });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !apiVersion) throw new Error("Missing NEXT_PUBLIC_SANITY_* values.");
if (!token) throw new Error("Missing SANITY_API_WRITE_TOKEN.");

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const servicesDocs = [
  {
    _id: "services-overview",
    _type: "servicesPage",
    title: ls("Services", "Hizmetler"),
    slug: { _type: "slug", current: "services-overview" },
    heroEyebrow: ls("Delivered by people who run the infrastructure", "Altyapiyi isleten ekipten teslim"),
    heroTitle: ls("Services with the system behind them.", "Arkasinda sistem olan hizmetler."),
    heroSubtitle: ls("Services are the delivery arm of Business Infrastructure.", "Hizmetler, Business Infrastructure'in teslim koludur."),
    tierHeading: ls("Three tiers", "Uc seviye"),
    tierCards: [
      { _type: "object", name: ls("Essentials", "Essentials"), summary: ls("Core finance, accounting, compliance and legal operations.", "Temel finans, muhasebe, uyum ve hukuk operasyonlari."), href: "/services/essentials" },
      { _type: "object", name: ls("Advanced", "Advanced"), summary: ls("Growth, structuring, and strategic support for complex operations.", "Karmasik operasyonlar icin buyume, yapilanma ve stratejik destek."), href: "/services/advanced" },
      { _type: "object", name: ls("Digital", "Digital"), summary: ls("Digital delivery, automation, and Operasyon 4.0-connected services.", "Dijital teslim, otomasyon ve Operasyon 4.0 baglantili hizmetler."), href: "/services/digital" },
    ],
    pricingCalloutLabel: ls("See the pricing equation", "Fiyatlandirma denklemini gor"),
    pricingCalloutHref: "/services/pricing",
  },
  {
    _id: "services-essentials",
    _type: "servicesPage",
    title: ls("Services essentials", "Services essentials"),
    slug: { _type: "slug", current: "services-essentials" },
    heroEyebrow: ls("Essentials", "Essentials"),
    heroTitle: ls("Foundational services", "Temel hizmetler"),
    heroSubtitle: ls("Core operational services delivered with infrastructure discipline.", "Altyapi disiplini ile teslim edilen cekirdek operasyonel hizmetler."),
    serviceLines: [
      { _type: "serviceLine", title: ls("Accounting (SMMM)", "Muhasebe (SMMM)"), description: ls("Daily accounting execution with measurable control quality.", "Gunluk muhasebe icrasini olculebilir kontrol kalitesiyle yurutur." ) },
      { _type: "serviceLine", title: ls("Payroll", "Bordrolama"), description: ls("Payroll cycles managed with compliance-grade process controls.", "Bordro dongulerini uyum odakli surec kontrolleriyle yonetir." ) },
      { _type: "serviceLine", title: ls("Reporting", "Raporlama"), description: ls("Operational and financial reporting built for decision velocity.", "Karar hizini artiran operasyonel ve finansal raporlama sunar." ) },
      { _type: "serviceLine", title: ls("Tax & fiscal law", "Vergi ve mali mevzuat"), description: ls("Tax risk visibility and fiscal compliance execution.", "Vergi risk gorunurlugu ve mali uyum icrasi saglar." ) },
      { _type: "serviceLine", title: ls("YMM / Sworn CPA", "YMM hizmetleri"), description: ls("Certified assurance with structured audit-ready evidence.", "Yapilandirilmis denetime hazir kanitlarla guvence sunar." ) },
      { _type: "serviceLine", title: ls("Audit", "Denetim"), description: ls("Continuous audit posture integrated with daily operations.", "Gunluk operasyonla entegre surekli denetim durusu kurar." ) },
      { _type: "serviceLine", title: ls("Labor & SSI law", "Is ve SGK mevzuati"), description: ls("Workforce compliance and labor law alignment.", "Isgucu uyumu ve is mevzuati hizalamasini saglar." ) },
      { _type: "serviceLine", title: ls("VAT refund", "KDV iadesi"), description: ls("Accelerates VAT recovery workflows with documentation integrity.", "Belge butunluguyle KDV iade sureclerini hizlandirir." ) },
    ],
    contactCtaLabel: ls("Contact us", "Iletisime gec"),
    contactCtaHref: "/contact",
  },
  {
    _id: "services-advanced",
    _type: "servicesPage",
    title: ls("Services advanced", "Services advanced"),
    slug: { _type: "slug", current: "services-advanced" },
    heroEyebrow: ls("Advanced", "Advanced"),
    heroTitle: ls("Strategic and structural services", "Stratejik ve yapisal hizmetler"),
    heroSubtitle: ls("Services for scaling, structuring, and strategic resilience.", "Olceklenme, yapilanma ve stratejik dayaniklilik icin hizmetler."),
    serviceLines: [
      { _type: "serviceLine", title: ls("Government incentives and grants", "Tesvik ve hibe yonetimi"), description: ls("Maps opportunities and executes incentive workflows.", "Firsatlari haritalar ve tesvik sureclerini yurutur.") },
      { _type: "serviceLine", title: ls("Business consulting", "Isletme danismanligi"), description: ls("Outcome-driven advisory integrated with execution.", "Icra ile entegre sonuc odakli danismanlik sunar.") },
      { _type: "serviceLine", title: ls("Operations support", "Operasyon destegi"), description: ls("Stabilizes operational load during growth transitions.", "Buyume gecislerinde operasyon yukunu dengeler.") },
      { _type: "serviceLine", title: ls("Foreign trade and customs", "Dis ticaret ve gumruk"), description: ls("Trade flows managed with compliance and speed.", "Ticaret akislarini uyum ve hizla yonetir.") },
      { _type: "serviceLine", title: ls("Domestic/international structuring", "Yurtici/yurtdisi yapilanma"), description: ls("Structures entities for legal and operational fit.", "Sirket yapilarini hukuki ve operasyonel uyuma gore tasarlar.") },
      { _type: "serviceLine", title: ls("Virtual CFO", "Virtual CFO"), description: ls("Financial steering with embedded operational context.", "Operasyon baglamiyla finansal yonlendirme saglar.") },
      { _type: "serviceLine", title: ls("Financial services", "Finansal hizmetler"), description: ls("Decision-grade finance operations and controls.", "Karar kalitesinde finans operasyonu ve kontrolu sunar.") },
      { _type: "serviceLine", title: ls("3rd Eye, Devil's Advocate, Family Constitution, M&A", "3rd Eye, Devil's Advocate, Aile Anayasasi, M&A"), description: ls("Specialized strategic interventions for long-term continuity.", "Uzun vadeli sureklilik icin ozellesmis stratejik mudahaleler sunar.") },
    ],
    contactCtaLabel: ls("Contact us", "Iletisime gec"),
    contactCtaHref: "/contact",
  },
  {
    _id: "services-digital",
    _type: "servicesPage",
    title: ls("Services digital", "Services digital"),
    slug: { _type: "slug", current: "services-digital" },
    heroEyebrow: ls("Digital", "Digital"),
    heroTitle: ls("Digital services connected to infrastructure", "Altyapiya bagli dijital hizmetler"),
    heroSubtitle: ls("Digital capability delivered as operational throughput.", "Dijital kabiliyeti operasyonel ciktiya cevirir."),
    serviceLines: [
      { _type: "serviceLine", title: ls("Operasyon 4.0", "Operasyon 4.0"), description: ls("The central operating system layer for integrated delivery.", "Butunlesik teslimin merkez isletim sistemi katmani.") },
      { _type: "serviceLine", title: ls("Virtual Accounting", "Virtual Muhasebe"), description: ls("Accounting delivery model built for distributed execution.", "Dagitik icra icin tasarlanmis muhasebe teslim modeli.") },
      { _type: "serviceLine", title: ls("Virtual HR", "Virtual IK"), description: ls("HR operations with digital workflow control.", "Dijital is akisi kontroluyle IK operasyonlari sunar.") },
      { _type: "serviceLine", title: ls("RPA & Robotics", "RPA ve Robotik"), description: ls("Automates repetitive loops with controlled exception handling.", "Tekrarli donguleri kontrollu istisna yonetimiyle otomatiklestirir.") },
      { _type: "serviceLine", title: ls("SnP Flow", "SnP Flow"), description: ls("Flow-based orchestration for critical business pipelines.", "Kritik is pipeline'lari icin akis tabanli orkestrasyon kurar.") },
      { _type: "serviceLine", title: ls("BI Reporting", "BI Raporlama"), description: ls("Business intelligence that links metrics to action.", "Metrikleri aksiyonla baglayan is zekasi sunar.") },
      { _type: "serviceLine", title: ls("Process Excellence", "Surec Mukemmelligi"), description: ls("Systematic improvement of operating quality and speed.", "Isletim kalitesi ve hizini sistematik olarak iyilestirir.") },
    ],
    contactCtaLabel: ls("Contact us", "Iletisime gec"),
    contactCtaHref: "/contact",
  },
  {
    _id: "services-pricing",
    _type: "servicesPage",
    title: ls("Pricing equation", "Fiyatlandirma denklemi"),
    slug: { _type: "slug", current: "services-pricing" },
    heroEyebrow: ls("Pricing equation", "Fiyatlandirma denklemi"),
    heroTitle: ls("Services pricing equation", "Hizmet fiyatlandirma denklemi"),
    heroSubtitle: ls("Pricing is tied to operating scope, risk, and infrastructure depth.", "Fiyatlandirma operasyon kapsami, risk ve altyapi derinligiyle baglidir."),
    serviceLines: [
      { _type: "serviceLine", title: ls("Scope", "Kapsam"), description: ls("Workload and complexity of service lines.", "Hizmet hatlarinin is yuku ve karmasikligi.") },
      { _type: "serviceLine", title: ls("Risk", "Risk"), description: ls("Regulatory and operational exposure.", "Duzenleyici ve operasyonel maruziyet.") },
      { _type: "serviceLine", title: ls("Infrastructure depth", "Altyapi derinligi"), description: ls("Degree of integration with Operasyon 4.0.", "Operasyon 4.0 ile entegrasyon seviyesi.") },
    ],
  },
];

const sectorDocs = [
  ["family-businesses", "Family businesses", "Aile sirketleri"],
  ["smes", "SMEs", "KOBI'ler"],
  ["holdings", "Holdings", "Holdingler"],
  ["ecommerce", "E-commerce", "E-ticaret"],
  ["foreign-investors", "Foreign investors", "Yabanci yatirimcilar"],
  ["accounting-offices", "Accounting offices", "Muhasebe ofisleri"],
].map(([slug, en, tr]) => ({
  _id: `sector-${slug}`,
  _type: "sectorPage",
  title: ls(en, tr),
  slug: { _type: "slug", current: slug },
  heroEyebrow: ls("Sector", "Sektor"),
  heroTitle: ls(`${en} sector focus`, `${tr} sektor odagi`),
  heroSubtitle: ls("Infrastructure-led growth for this segment.", "Bu segment icin altyapi odakli buyume modeli."),
  challenges: [
    ls("Fragmented operations and delayed decisions", "Parcali operasyonlar ve geciken kararlar"),
    ls("Compliance pressure under growth", "Buyume altinda artan uyum baskisi"),
    ls("Cost and productivity imbalance", "Maliyet ve verim dengesizligi"),
  ],
  serviceLinks: [
    { _type: "object", label: ls("Essentials", "Essentials"), href: "/services/essentials" },
    { _type: "object", label: ls("Advanced", "Advanced"), href: "/services/advanced" },
    { _type: "object", label: ls("Digital", "Digital"), href: "/services/digital" },
  ],
  ctaLabel: ls("Start diagnosis", "Diagnoza basla"),
  ctaHref: "/diagnose",
}));

async function run() {
  const docs = [...servicesDocs, ...sectorDocs];
  for (const doc of docs) await client.createOrReplace(doc as never);
  console.log(`Seeded ${docs.length} Slice 5 documents to dataset \"${dataset}\".`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
