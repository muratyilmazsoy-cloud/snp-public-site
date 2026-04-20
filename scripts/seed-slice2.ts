import { createClient } from "@sanity/client";

type Localized = { en: string; tr: string };

function ls(en: string, tr: string): Localized {
  return { en, tr };
}

function block(text: string) {
  return {
    _type: "block",
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        text,
        marks: [],
      },
    ],
  };
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_* environment values.");
}

if (!token) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN in environment.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const layers = [
  {
    _id: "layer-operasyon-4-0",
    _type: "layer",
    name: ls("Operasyon 4.0", "Operasyon 4.0"),
    slug: { _type: "slug", current: "business-os" },
    description: ls(
      "The business operating system and central nervous system of the company.",
      "Sirketin merkezi sinir sistemi olan isletim altyapisi.",
    ),
    order: 1,
  },
  {
    _id: "layer-compliance-4-0",
    _type: "layer",
    name: ls("Compliance 4.0", "Compliance 4.0"),
    slug: { _type: "slug", current: "compliance" },
    description: ls("Real-time regulatory compliance.", "Gercek zamanli duzenleyici uyum."),
    order: 2,
  },
  {
    _id: "layer-auditing-4-0",
    _type: "layer",
    name: ls("Auditing 4.0", "Auditing 4.0"),
    slug: { _type: "slug", current: "auditing" },
    description: ls("Continuous internal and external audit.", "Surekli ic ve dis denetim."),
    order: 3,
  },
  {
    _id: "layer-investment-4-0",
    _type: "layer",
    name: ls("Investment 4.0", "Investment 4.0"),
    slug: { _type: "slug", current: "investment" },
    description: ls("Embedded finance and growth engine.", "Gomulu finans ve buyume motoru."),
    order: 4,
  },
  {
    _id: "layer-potential-4-0",
    _type: "layer",
    name: ls("Potential 4.0", "Potential 4.0"),
    slug: { _type: "slug", current: "potential" },
    description: ls("Activates hidden and idle value in the business.", "Isletmedeki gizli ve atil degeri aktive eder."),
    order: 5,
  },
];

const pipelines = [
  {
    _id: "pipeline-fix-your-company",
    _type: "pipeline",
    name: ls("Fix your company", "Sirketini duzelt"),
    audience: ls("Business owners", "Isletme sahipleri"),
    promise: ls("Diagnose what is broken and install infrastructure.", "Sorunu tespit et, altyapiyi kur, sureci islet."),
    ctaLabel: ls("Start diagnosis", "Diagnoza basla"),
    ctaHref: "/grow/fix-your-company",
    order: 1,
  },
  {
    _id: "pipeline-become-a-partner",
    _type: "pipeline",
    name: ls("Become a partner", "Partner ol"),
    audience: ls("Entrepreneurs", "Girisimciler"),
    promise: ls("Build and sell a regional SnP portfolio.", "Bolgesel SnP portfoyu kur ve yonet."),
    ctaLabel: ls("Explore partner path", "Partner yolunu kesfet"),
    ctaHref: "/grow/become-a-partner",
    order: 2,
  },
  {
    _id: "pipeline-build-your-career",
    _type: "pipeline",
    name: ls("Build your career", "Kariyerini insa et"),
    audience: ls("Professionals", "Profesyoneller"),
    promise: ls("Join the Business Army and level up your role.", "Business Army'e katil ve rolunu gelistir."),
    ctaLabel: ls("Apply now", "Hemen basvur"),
    ctaHref: "/grow/build-your-career",
    order: 3,
  },
  {
    _id: "pipeline-transform-your-office",
    _type: "pipeline",
    name: ls("Transform your office", "Ofisini donustur"),
    audience: ls("Accounting firm owners", "Muhasebe ofisi sahipleri"),
    promise: ls("Keep your identity and gain global infrastructure power.", "Kimligini koru, global altyapi gucune baglan."),
    ctaLabel: ls("Start the conversation", "Gorusmeyi baslat"),
    ctaHref: "/grow/transform-your-office",
    order: 4,
  },
];

const karmaFramings = [
  {
    _id: "karma-framing-physics",
    _type: "karmaFraming",
    title: ls("Physics", "Fizik"),
    description: ls("Newton's third law reminds us every force creates a counter-force.", "Newton'un ucuncu yasasi her etkinin bir tepki dogurdugunu soyler."),
    order: 1,
  },
  {
    _id: "karma-framing-philosophy",
    _type: "karmaFraming",
    title: ls("Philosophy", "Felsefe"),
    description: ls("You reap what you sow in every strategic decision.", "Her stratejik kararda ektigini bicersin."),
    order: 2,
  },
  {
    _id: "karma-framing-spirituality",
    _type: "karmaFraming",
    title: ls("Spirituality", "Maneviyat"),
    description: ls("Every intention is observed and eventually reflected back.", "Her niyet gorulur ve sonunda sana geri doner."),
    order: 3,
  },
  {
    _id: "karma-framing-biology",
    _type: "karmaFraming",
    title: ls("Biology", "Biyoloji"),
    description: ls("Homeostasis restores balance after disturbance.", "Homeostaz denge bozuldugunda sistemi tekrar dengeye ceker."),
    order: 4,
  },
];

const manifestoDoc = {
  _id: "manifesto-core",
  _type: "manifesto",
  title: ls("Infrastructure manifesto", "Altyapi manifestosu"),
  intro: ls(
    "This is the editorial foundation of the new category: business infrastructure.",
    "Bu metin yeni kategorinin editoryal temelidir: business infrastructure.",
  ),
  bodyEn: [
    block("We did not invent the universal law. We made it visible for companies."),
    block("Infrastructure is not a report. It is the system that stays inside and keeps running."),
    block("Every action has a karma. Operasyon 4.0 makes that karma observable in real time."),
  ],
  bodyTr: [
    block("Evrensel yasayi biz icat etmedik. Sirketler icin gorunur hale getirdik."),
    block("Altyapi bir rapor degil. Iceride kalan ve surekli calisan bir sistemdir."),
    block("Her eylemin bir karmasi vardir. Operasyon 4.0 bu karmayi gercek zamanda gorunur kilar."),
  ],
  endCtaLabel: ls("Every action has a karma. Start with one.", "Her eylemin bir karmasi var. Bir adimla basla."),
  endCtaHref: "/diagnose",
};

const homePage = {
  _id: "page-home",
  _type: "page",
  title: ls("Home", "Ana sayfa"),
  slug: { _type: "slug", current: "home" },
  hero: {
    eyebrow: ls("A Business Infrastructure company", "Bir Business Infrastructure sirketi"),
    title: ls("We didn't invent it. We made it visible.", "Biz icat etmedik. Gorunur hale getirdik."),
    subtitle: ls(
      "The universal law was always at work. We built the infrastructure to reveal it.",
      "Evrensel yasa hep calisiyordu. Biz onu ortaya cikaran altyapiyi kurduk.",
    ),
  },
  homePrimaryCtaLabel: ls("Diagnose your company", "Sirketini diagnoz et"),
  homeSecondaryCtaLabel: ls("Read the manifesto", "Manifestoyu oku"),
  homeSecondaryCtaHref: "/infrastructure/manifesto",
  homeShiftHeading: ls("The shift", "Gecis"),
  homeRealityHeading: ls("The reality", "Gercek"),
  homeShiftLeft: ls("You had consultants.", "Danismanlarin vardi."),
  homeShiftRight: ls("You needed infrastructure.", "Ihtiyacin altyapiydi."),
  homeLayersHeading: ls("The five layers", "Bes katman"),
  homeFutureFeatureLabel: ls("Future Feature", "Future Feature"),
  homeKarmaQuote: ls("Every action has a karma.", "Her eylemin bir karmasi var."),
  homeGrowHeading: ls("Grow", "Buyu"),
  homeEcosystemHeading: ls("Ecosystem at a glance", "Ekosistem bir bakista"),
  homeEcosystemStats: [
    { _type: "homeStat", label: ls("23 SaaS products", "23 SaaS urunu") },
    { _type: "homeStat", label: ls("2.38M business reach", "2.38M isletme erisimi") },
    { _type: "homeStat", label: ls("60 countries", "60 ulke") },
    { _type: "homeStat", label: ls("1000 branch goal", "1000 sube hedefi") },
  ],
  homeMoatsHeading: ls("Moats teaser", "Hendekler tanitimi"),
  homeMoatsTeaser: ls(
    "Your old castles are falling. Discover the only one that stands.",
    "Eski kalelerin dusuyor. Ayakta kalan tek kaleyi kesfet.",
  ),
  homeMoatsLinkLabel: ls("Explore moats", "Hendekleri kesfet"),
  homeMoatsLinkHref: "/infrastructure/moats",
  homeClosingSignature: ls(
    "trust and run · Standards & Partners · Est. 2017",
    "trust and run · Standards & Partners · Est. 2017",
  ),
};

const infrastructurePage = {
  _id: "page-infrastructure",
  _type: "page",
  title: ls("Infrastructure", "Infrastructure"),
  slug: { _type: "slug", current: "infrastructure" },
  hero: {
    eyebrow: ls("The category", "Kategori"),
    title: ls("Infrastructure, not consulting.", "Danismanlik degil, altyapi."),
    subtitle: ls(
      "A city can't live without electricity, water, or internet. Why does a business live without Business Infrastructure?",
      "Bir sehir elektrik, su ve internet olmadan yasayamaz. Peki bir isletme neden Business Infrastructure olmadan yasasin?",
    ),
  },
  infrastructureEndHeading: ls("The end of inequality", "Esitsizligin sonu"),
  endOfInequality: ls(
    "Infrastructure makes operating capability accessible, repeatable, and measurable for every company.",
    "Altyapi, isletme kapasitesini her sirket icin erisilebilir, tekrar edilebilir ve olculebilir hale getirir.",
  ),
  infrastructureCreatedHeading: ls("What we created", "Ne yarattik"),
  infrastructureCreatedStatement: ls(
    "Five layers, one operating logic, one ecosystem.",
    "Bes katman, tek isletim mantigi, tek ekosistem.",
  ),
  infrastructureKarmaHeading: ls("Karma as the ninth layer", "Dokuzuncu katman olarak karma"),
  infrastructureKarmaNinthLayer: ls(
    "Karma is no longer delayed when infrastructure instruments every action.",
    "Altyapi her eylemi olctugunde karma artik gecikmeli degildir.",
  ),
  infrastructureDifferenceHeading: ls("How this differs from consulting", "Danismanliktan farki"),
  infrastructureDifferenceLeftLabel: ls("Consulting", "Danismanlik"),
  infrastructureDifferenceRightLabel: ls("Infrastructure", "Altyapi"),
  consultingDiffRows: [
    {
      _type: "consultingDiffRow",
      consulting: ls("They wrote reports.", "Rapor yazdilar."),
      infrastructure: ls("We stay inside and run the system.", "Iceride kalir ve sistemi isletiriz."),
    },
    {
      _type: "consultingDiffRow",
      consulting: ls("Snapshot decisions.", "Anlik kararlar."),
      infrastructure: ls("Continuous operating intelligence.", "Surekli isletim zekasi."),
    },
  ],
  consultingDiffCtaLabel: ls("Read the full manifesto", "Tam manifestoyu oku"),
  consultingDiffCtaHref: "/infrastructure/manifesto",
};

const manifestoPage = {
  _id: "page-infrastructure-manifesto",
  _type: "page",
  title: ls("Infrastructure manifesto", "Infrastructure manifestosu"),
  slug: { _type: "slug", current: "infrastructure-manifesto" },
  hero: {
    eyebrow: ls("Manifesto", "Manifesto"),
    title: ls("Infrastructure manifesto", "Infrastructure manifestosu"),
    subtitle: ls("Long-form editorial page.", "Uzun form editoryal sayfa."),
  },
  manifestoRef: { _type: "reference", _ref: "manifesto-core" },
};

const karmaPage = {
  _id: "page-infrastructure-karma",
  _type: "page",
  title: ls("Karma", "Karma"),
  slug: { _type: "slug", current: "infrastructure-karma" },
  hero: {
    eyebrow: ls("Karma", "Karma"),
    title: ls("Every action has a karma.", "Her eylemin bir karmasi var."),
    subtitle: ls(
      "Karma is the ninth layer of COT and the rule behind business consequences.",
      "Karma, COT'un dokuzuncu katmanidir ve is sonucunun temel kuralidir.",
    ),
  },
  karmaFramingsHeading: ls("Four framings", "Dort cerceve"),
  karmaDelayHeading: ls("The delay problem", "Gecikme problemi"),
  karmaDelayProblem: ls(
    "Karma works today, but often with delay. Delay hides risk until it compounds.",
    "Karma bugun de calisir ancak cogu zaman gecikmelidir. Gecikme, riskin birikmesini gizler.",
  ),
  karmaRealtimeHeading: ls("What Operasyon 4.0 does", "Operasyon 4.0 ne yapar"),
  karmaRealtimeExplanation: ls(
    "Operasyon 4.0 reduces delay by observing actions, linking signals, and producing an immediate response path.",
    "Operasyon 4.0 eylemleri gozlemleyip sinyalleri baglayarak gecikmeyi azaltir ve anlik yanit yolu olusturur.",
  ),
  karmaDiagramActionLabel: ls("Action", "Eylem"),
  karmaDiagramObservationLabel: ls("Observation", "Gozlem"),
  karmaRealtimeDiagramLabel: ls("Real-time karma", "Gercek zamanli karma"),
  karmaCtaLabel: ls("Explore Operasyon 4.0", "Operasyon 4.0'i kesfet"),
  karmaCtaHref: "/operasyon-4-0",
};

async function run() {
  const docs = [
    ...layers,
    ...pipelines,
    ...karmaFramings,
    manifestoDoc,
    homePage,
    infrastructurePage,
    manifestoPage,
    karmaPage,
  ];

  for (const doc of docs) {
    await client.createOrReplace(doc as never);
  }

  console.log(`Seeded ${docs.length} documents to Sanity dataset \"${dataset}\".`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
