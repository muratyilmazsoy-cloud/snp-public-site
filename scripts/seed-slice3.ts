import { createClient } from "@sanity/client";

type Localized = { en: string; tr: string };
const ls = (en: string, tr: string): Localized => ({ en, tr });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !apiVersion) throw new Error("Missing NEXT_PUBLIC_SANITY_* environment values.");
if (!token) throw new Error("Missing SANITY_API_WRITE_TOKEN in environment.");

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const operasyonDoc = {
  _id: "operasyon-main",
  _type: "operasyon",
  title: ls("Operasyon 4.0", "Operasyon 4.0"),
  slug: { _type: "slug", current: "operasyon-4-0" },
  heroEyebrow: ls("The flagship", "Amiral urun"),
  heroTitle: ls("The nervous system of your company.", "Sirketinizin sinir sistemi."),
  heroSubtitle: ls("One Business Operating System. Five layers. Sixty countries.", "Tek bir Business Operating System. Bes katman. Altmis ulke."),
  heroCtaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
  heroCtaHref: "/operasyon-4-0",
  whatItReplacesHeading: ls("What it replaces", "Neyi degistirir"),
  legacyStackLabel: ls("Legacy stack", "Eski yigin"),
  operasyonStackLabel: ls("Operasyon 4.0", "Operasyon 4.0"),
  legacyItems: [
    ls("Fragmented tools and disconnected workflows", "Parcali araclar ve kopuk is akisleri"),
    ls("Slow reporting and delayed decisions", "Yavas raporlama ve geciken kararlar"),
    ls("Manual handoffs and repetitive operations", "Manuel devirler ve tekrar eden operasyonlar"),
  ],
  operasyonItems: [
    ls("Unified operating intelligence", "Birlesik isletim zekasi"),
    ls("Real-time governance and control", "Gercek zamanli yonetisim ve kontrol"),
    ls("Automated execution with human oversight", "Insan gozetimiyle otomatik calisma"),
  ],
  layersHeading: ls("The five layers", "Bes katman"),
  mseHeading: ls("MSE: Macroeconomic Synchronization Engine", "MSE: Macroeconomic Synchronization Engine"),
  mseDescription: ls("A synchronization layer connecting operations to macro signals across 60 countries.", "Operasyonlari 60 ulkedeki makro sinyallerle esleyen senkronizasyon katmani."),
  embeddedFinanceHeading: ls("Embedded finance", "Gomulu finans"),
  embeddedFinanceDescription: ls("Finance is part of operating flow, not a late-stage reporting artifact.", "Finans gec raporlama degil, operasyon akisinin bir parcasidir."),
  marketplaceHeading: ls("23-product SaaS marketplace integration", "23 urunluk SaaS pazar yeri entegrasyonu"),
  marketplaceDescription: ls("Operasyon 4.0 is the orchestration layer that keeps every product in sync.", "Operasyon 4.0 tum urunleri senkron tutan orkestrasyon katmanidir."),
  testimonials: [
    ls("We finally run one system, not separate departments.", "Artik ayri departmanlar degil, tek bir sistem calistiriyoruz."),
    ls("Our response speed changed after we installed Operasyon 4.0.", "Operasyon 4.0 kurduktan sonra tepki hizimiz degisti."),
  ],
  finalCtaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
  finalCtaHref: "/operasyon-4-0",
  formHeading: ls("Book a walkthrough", "Walkthrough randevusu al"),
  formSubmitLabel: ls("Send request", "Talep gonder"),
  formNameLabel: ls("Name", "Ad"),
  formEmailLabel: ls("Email", "E-posta"),
  formCompanyLabel: ls("Company", "Sirket"),
  formCountryLabel: ls("Country", "Ulke"),
  formMessageLabel: ls("Message", "Mesaj"),
};

const layerDetails = [
  {
    _id: "layer-detail-business-os",
    _type: "layerDetail",
    name: ls("Operasyon 4.0", "Operasyon 4.0"),
    slug: { _type: "slug", current: "business-os" },
    definition: ls("The operating backbone coordinating every business function.", "Tum is fonksiyonlarini koordine eden isletim omurgasi."),
    problemHeading: ls("The problem this layer solves", "Bu katmanin cozdugu problem"),
    problemParagraphs: [
      ls("Teams operate with partial visibility.", "Ekipler parcali gorunumle calisir."),
      ls("Execution quality depends on individual heroics.", "Uygulama kalitesi bireysel caba ile ayakta kalir."),
      ls("Critical data arrives after decisions are made.", "Kritik veri, kararlar verildikten sonra gelir."),
    ],
    outcomesHeading: ls("What it does", "Ne yapar"),
    outcomes: [
      ls("Unifies process orchestration", "Surec orkestrasyonunu birlestirir"),
      ls("Standardizes operating rhythm", "Isletim ritmini standartlastirir"),
      ls("Reduces execution drift", "Uygulama sapmasini azaltir"),
    ],
    connectionsHeading: ls("Connection to other layers", "Diger katmanlarla bag"),
    connectionsText: ls("Business OS routes signals to Compliance, Auditing, Investment, and Potential.", "Business OS sinyalleri Compliance, Auditing, Investment ve Potential katmanlarina yonlendirir."),
    ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
    ctaHref: "/operasyon-4-0",
  },
  {
    _id: "layer-detail-compliance",
    _type: "layerDetail",
    name: ls("Compliance 4.0", "Compliance 4.0"),
    slug: { _type: "slug", current: "compliance" },
    definition: ls("Regulation and governance monitored in real time.", "Regulasyon ve yonetisimin gercek zamanda izlenmesi."),
    problemHeading: ls("The problem this layer solves", "Bu katmanin cozdugu problem"),
    problemParagraphs: [
      ls("Rules are tracked late.", "Kurallar gec takip edilir."),
      ls("Control evidence is scattered.", "Kontrol kanitlari daginiktir."),
      ls("Risk accumulates before escalation.", "Risk, yukselmeden once birikir."),
    ],
    outcomesHeading: ls("What it does", "Ne yapar"),
    outcomes: [
      ls("Live compliance monitoring", "Canli uyum izleme"),
      ls("Structured control evidence", "Yapilandirilmis kontrol kaniti"),
      ls("Earlier risk intervention", "Riske erken mudahale"),
    ],
    connectionsHeading: ls("Connection to other layers", "Diger katmanlarla bag"),
    connectionsText: ls("Compliance 4.0 feeds real-time control status to Auditing and Business OS.", "Compliance 4.0 gercek zamanli kontrol durumunu Auditing ve Business OS katmanina aktarir."),
    ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
    ctaHref: "/operasyon-4-0",
  },
  {
    _id: "layer-detail-auditing",
    _type: "layerDetail",
    name: ls("Auditing 4.0", "Auditing 4.0"),
    slug: { _type: "slug", current: "auditing" },
    definition: ls("Continuous audit visibility inside daily operations.", "Gunluk operasyonun icinde surekli denetim gorunurlugu."),
    problemHeading: ls("The problem this layer solves", "Bu katmanin cozdugu problem"),
    problemParagraphs: [
      ls("Audit is treated as periodic interruption.", "Denetim donemsel kesinti gibi ele alinir."),
      ls("Findings are discovered too late.", "Bulgular cok gec fark edilir."),
      ls("Action plans lose momentum.", "Aksiyon planlari ivme kaybeder."),
    ],
    outcomesHeading: ls("What it does", "Ne yapar"),
    outcomes: [
      ls("Always-on audit posture", "Surekli acik denetim durusu"),
      ls("Early anomaly signaling", "Erken anomali sinyali"),
      ls("Faster corrective loops", "Daha hizli duzeltici dongu"),
    ],
    connectionsHeading: ls("Connection to other layers", "Diger katmanlarla bag"),
    connectionsText: ls("Auditing 4.0 validates signals from Compliance and strengthens Investment decisions.", "Auditing 4.0 Compliance sinyallerini dogrular ve Investment kararlarini guclendirir."),
    ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
    ctaHref: "/operasyon-4-0",
  },
  {
    _id: "layer-detail-investment",
    _type: "layerDetail",
    name: ls("Investment 4.0", "Investment 4.0"),
    slug: { _type: "slug", current: "investment" },
    definition: ls("Embedded capital allocation guided by operating truth.", "Isletim gercegiyle yonlendirilen gomulu sermaye tahsisi."),
    problemHeading: ls("The problem this layer solves", "Bu katmanin cozdugu problem"),
    problemParagraphs: [
      ls("Capital decisions lag behind operations.", "Sermaye kararlari operasyondan geri kalir."),
      ls("Growth plans are disconnected from constraints.", "Buyume planlari kisitlardan kopuktur."),
      ls("Financial reaction time is slow.", "Finansal tepki suresi yavastir."),
    ],
    outcomesHeading: ls("What it does", "Ne yapar"),
    outcomes: [
      ls("Context-aware allocation", "Baglama duyarlı tahsis"),
      ls("Faster growth cycles", "Daha hizli buyume donguleri"),
      ls("Integrated funding logic", "Butunlesik fonlama mantigi"),
    ],
    connectionsHeading: ls("Connection to other layers", "Diger katmanlarla bag"),
    connectionsText: ls("Investment 4.0 consumes inputs from Business OS, Compliance, and Auditing.", "Investment 4.0, Business OS, Compliance ve Auditing katmanlarindan girdiler alir."),
    ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
    ctaHref: "/operasyon-4-0",
  },
  {
    _id: "layer-detail-potential",
    _type: "layerDetail",
    name: ls("Potential 4.0", "Potential 4.0"),
    slug: { _type: "slug", current: "potential" },
    definition: ls("A layer for activating hidden and idle business value.", "Gizli ve atil is degerini aktive eden katman."),
    problemHeading: ls("The problem this layer solves", "Bu katmanin cozdugu problem"),
    problemParagraphs: [
      ls("Untapped capacity stays invisible.", "Kullanilmayan kapasite gorunmez kalir."),
      ls("Value leaks are normalized.", "Deger kayiplari normallesir."),
      ls("Transformation opportunities are postponed.", "Donusum firsatlari ertelenir."),
    ],
    outcomesHeading: ls("What it does", "Ne yapar"),
    outcomes: [
      ls("Discovers idle assets", "Atil varliklari kesfeder"),
      ls("Activates hidden capacity", "Gizli kapasiteyi aktive eder"),
      ls("Converts potential to throughput", "Potansiyeli ciktiya donusturur"),
    ],
    connectionsHeading: ls("Connection to other layers", "Diger katmanlarla bag"),
    connectionsText: ls("Potential 4.0 amplifies gains produced by all other layers.", "Potential 4.0 diger tum katmanlarin urettigi kazanclari buyutur."),
    ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
    ctaHref: "/operasyon-4-0",
  },
];

const mseDoc = {
  _id: "mse-main",
  _type: "mse",
  title: ls("MSE", "MSE"),
  slug: { _type: "slug", current: "mse" },
  heroEyebrow: ls("Macroeconomic synchronization", "Makroekonomik senkronizasyon"),
  heroTitle: ls("Macroeconomic Synchronization Engine", "Macroeconomic Synchronization Engine"),
  heroSubtitle: ls("A macro layer that aligns operations to country-level dynamics across 60 markets.", "Operasyonlari 60 pazardaki ulke dinamiklerine hizalayan makro katman."),
  coverageHeading: ls("Country coverage", "Ulke kapsami"),
  coveragePoints: [
    ls("Signal ingestion across 60 countries", "60 ulkede sinyal toplama"),
    ls("Context-aware adaptation by region", "Bolgeye gore baglamsal uyarlama"),
    ls("Unified decision language for global operations", "Global operasyonlar icin ortak karar dili"),
  ],
  visualizationLabel: ls("60-country sync map (placeholder)", "60 ulke senkronizasyon haritasi (placeholder)"),
  ctaLabel: ls("Book a walkthrough", "Walkthrough randevusu al"),
  ctaHref: "/operasyon-4-0",
};

async function run() {
  const docs = [operasyonDoc, ...layerDetails, mseDoc];
  for (const doc of docs) {
    await client.createOrReplace(doc as never);
  }
  console.log(`Seeded ${docs.length} Slice 3 documents to dataset \"${dataset}\".`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
