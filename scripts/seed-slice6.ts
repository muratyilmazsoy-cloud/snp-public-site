import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing Sanity env vars for seed:slice6");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });
const ls = (en: string, tr: string) => ({ en, tr });

const sitePages = [
  {
    _id: "sitePage-about-overview",
    _type: "sitePage",
    title: ls("About", "Hakkimizda"),
    slug: { _type: "slug", current: "about-overview" },
    heroEyebrow: ls("About", "Hakkimizda"),
    heroTitle: ls("Built for trust and run", "Guven ve calistirma icin kuruldu"),
    heroSubtitle: ls("Standards & Partners is the business infrastructure company that turns strategy into a continuously operating system.", "Standards & Partners, stratejiyi surekli calisan bir sisteme donusturen business infrastructure sirketidir."),
  },
  {
    _id: "sitePage-about-bull-spirit",
    _type: "sitePage",
    title: ls("Bull spirit", "Bull spirit"),
    slug: { _type: "slug", current: "about-bull-spirit" },
    heroEyebrow: ls("Doctrine", "Doktrin"),
    heroTitle: ls("Bull spirit", "Bull spirit"),
    heroSubtitle: ls("Bull spirit is disciplined forward motion under uncertainty.", "Bull spirit, belirsizlik altinda disiplinli ileri harekettir."),
    sections: [
      { _type: "sectionBlock", heading: ls("What it means", "Ne ifade eder"), content: ls("We stay in the arena, absorb pressure, and keep moving with operational discipline.", "Sahada kalir, baskiyi emer ve operasyonel disiplinle ilerleriz.") },
      { _type: "sectionBlock", heading: ls("How it is practiced", "Nasil uygulanir"), content: ls("Clear command lines, measurable responsibilities, and weekly execution rhythm.", "Net komuta cizgileri, olculebilir sorumluluklar ve haftalik icra ritmi.") },
    ],
  },
  {
    _id: "sitePage-about-secrecy-doctrine",
    _type: "sitePage",
    title: ls("Secrecy doctrine", "Gizlilik doktrini"),
    slug: { _type: "slug", current: "about-secrecy-doctrine" },
    heroEyebrow: ls("Doctrine", "Doktrin"),
    heroTitle: ls("Secrecy doctrine", "Gizlilik doktrini"),
    heroSubtitle: ls("Client data is treated as strategic infrastructure.", "Musteri verisi stratejik altyapi olarak ele alinir."),
    sections: [
      { _type: "sectionBlock", heading: ls("Need-to-know by design", "Tasarim geregi ihtiyac kadar erisim"), content: ls("Access follows role, context, and auditable purpose.", "Erisim rol, baglam ve denetlenebilir amaca gore tanimlanir.") },
      { _type: "sectionBlock", heading: ls("Operational confidentiality", "Operasyonel gizlilik"), content: ls("We institutionalize confidentiality into workflow, tooling, and escalation layers.", "Gizliligi is akisina, araclara ve eskalasyon katmanlarina gomuyoruz.") },
    ],
  },
  {
    _id: "sitePage-about-pricing-equation",
    _type: "sitePage",
    title: ls("Pricing equation", "Fiyat denklemi"),
    slug: { _type: "slug", current: "about-pricing-equation" },
    heroEyebrow: ls("Model", "Model"),
    heroTitle: ls("Pricing equation", "Fiyat denklemi"),
    heroSubtitle: ls("Pricing is mapped to risk reduction, velocity gain, and decision quality.", "Fiyatlama risk azalimi, hiz kazanimi ve karar kalitesi ile eslestirilir."),
    sections: [
      { _type: "sectionBlock", heading: ls("Equation", "Denklem"), content: ls("Value = protected downside + accelerated upside + orchestration certainty.", "Deger = korunan asagi yon + hizlanan yukari yon + orkestrasyon guvencesi.") },
    ],
  },
  {
    _id: "sitePage-contact",
    _type: "sitePage",
    title: ls("Contact", "Iletisim"),
    slug: { _type: "slug", current: "contact" },
    heroEyebrow: ls("Contact", "Iletisim"),
    heroTitle: ls("Start your infrastructure conversation", "Altyapi gorusmesini baslatin"),
    heroSubtitle: ls("Tell us where your business is stuck. We will map the right next move.", "Isletmenizin nerede sikistigini anlatin. Dogru sonraki adimi birlikte haritalayalim."),
    ctaLabel: ls("Send message", "Mesaj gonder"),
  },
  {
    _id: "sitePage-diagnose",
    _type: "sitePage",
    title: ls("Diagnose", "Diagnose"),
    slug: { _type: "slug", current: "diagnose" },
    heroEyebrow: ls("Diagnose", "Diagnose"),
    heroTitle: ls("Run a business diagnostic", "Isletme diagnostigi baslatin"),
    heroSubtitle: ls("Use the bot to capture weak signals before they become strategic damage.", "Stratejik hasara donusmeden zayif sinyalleri bot ile yakalayin."),
    sections: [
      { _type: "sectionBlock", heading: ls("Step 1", "Adim 1"), content: ls("Share current bottlenecks and constraints.", "Mevcut darbohazlarinizi ve kisitlarinizi paylasin.") },
      { _type: "sectionBlock", heading: ls("Step 2", "Adim 2"), content: ls("Receive an infrastructure-oriented diagnosis.", "Altyapi odakli bir teshis alin.") },
      { _type: "sectionBlock", heading: ls("Step 3", "Adim 3"), content: ls("Book a follow-up walkthrough if needed.", "Gerekirse devam yuruyusu planlayin.") },
    ],
  },
  {
    _id: "sitePage-infrastructure-cot",
    _type: "sitePage",
    title: ls("Chain of trust", "Guven zinciri"),
    slug: { _type: "slug", current: "infrastructure-cot" },
    heroEyebrow: ls("Infrastructure", "Altyapi"),
    heroTitle: ls("COT: chain of trust", "COT: guven zinciri"),
    heroSubtitle: ls("A trust chain where every action creates a verifiable operational echo.", "Her aksiyonun dogrulanabilir operasyonel yankiya donustugu bir guven zinciri."),
    bullets: [
      ls("Action visibility", "Aksiyon gorunurlugu"), ls("Compliance continuity", "Uyum surekliligi"), ls("Auditability by default", "Varsayilan denetlenebilirlik"), ls("Cross-layer signal flow", "Katmanlar arasi sinyal akisi"), ls("Real-time correction", "Gercek zamanli duzeltme"),
      ls("Treasury synchrony", "Hazine senkronu"), ls("Procurement integrity", "Satinalma butunlugu"), ls("HR accountability", "IK hesap verebilirligi"), ls("Tax confidence", "Vergi guveni"), ls("Partner transparency", "Partner seffafligi"),
      ls("Supplier observability", "Tedarikci gozlemlenebilirligi"), ls("Customer trust loop", "Musteri guven dongusu"), ls("Data lineage", "Veri soyagaci"), ls("Incident traceability", "Olay izlenebilirligi"), ls("Board confidence", "Yonetim guveni"),
      ls("Scalable governance", "Olceklenebilir yonetisim"), ls("Regional command visibility", "Bolgesel komuta gorunurlugu"), ls("Branch consistency", "Sube tutarliligi"), ls("Embedded finance proofs", "Gomulu finans kanitlari"), ls("Karma response loop", "Karma geri besleme dongusu"), ls("Doctrine integrity", "Doktrin butunlugu"),
    ],
    sections: [
      { _type: "sectionBlock", heading: ls("What COT changes", "COT neyi degistirir"), content: ls("COT links actions to consequences instantly so teams learn faster and recover earlier.", "COT aksiyonlari sonuclara aninda baglar; ekipler daha hizli ogrenir ve daha erken toparlar.") },
    ],
    ctaLabel: ls("Open diagnose", "Diagnose ac"),
    ctaHref: "/diagnose",
  },
];

const businessArmyPage = {
  _id: "businessArmy-about",
  _type: "businessArmyPage",
  title: ls("Business army constitution", "Business army anayasasi"),
  slug: { _type: "slug", current: "about-business-army" },
  heroEyebrow: ls("Constitution v1", "Anayasa v1"),
  heroTitle: ls("SnP business army constitution", "SnP business army anayasasi"),
  heroSubtitle: ls("Foundational governance charter of the business infrastructure era.", "Business infrastructure cagin temel yonetisim belgesi."),
  preamble: ls(
    "For decades, businesses were run by fragmented systems. Accounting, finance, HR, procurement, and IT moved separately. This constitution defines the doctrine for a centralized, disciplined, and scalable operating command.",
    "Isletmeler yillarca daginik sistemlerle yonetildi. Muhasebe, finans, IK, satin alma ve IT ayri yurudu. Bu anayasa merkezi, disiplinli ve olceklenebilir bir operasyon komutasi tanimlar.",
  ),
  doctrinePrinciples: [
    ls("Unity of command", "Komuta birligi"),
    ls("Centralized intelligence", "Merkezi zeka"),
    ls("Distributed presence", "Dagitilmis varlik"),
    ls("Specialized corps structure", "Uzmanlasmis corps yapisi"),
    ls("Merit-based promotion", "Liyakat bazli terfi"),
    ls("Standardization before scale", "Olcekten once standardizasyon"),
    ls("Bull spirit doctrine", "Bull spirit doktrini"),
  ],
  ranks: [
    ls("Business trainer", "Business trainer"),
    ls("Business operator", "Business operator"),
    ls("Senior operator", "Senior operator"),
    ls("Business captain", "Business captain"),
    ls("Business commander", "Business commander"),
    ls("Business colonel", "Business colonel"),
    ls("Business general", "Business general"),
    ls("Business master", "Business master"),
    ls("Business sage", "Business sage"),
    ls("Business jedi", "Business jedi"),
  ],
  corps: [
    ls("Accounting corps", "Accounting corps"),
    ls("Finance corps", "Finance corps"),
    ls("HR corps", "HR corps"),
    ls("Procurement corps", "Procurement corps"),
    ls("IT systems corps", "IT systems corps"),
    ls("Tax and compliance corps", "Tax ve compliance corps"),
    ls("Audit corps", "Audit corps"),
    ls("Transformation corps", "Transformation corps"),
  ],
  territorialCommand: [
    ls("Central command", "Merkez komuta"),
    ls("Regional commands (7)", "Bolgesel komutalar (7)"),
    ls("Provincial commands (81)", "Il komutalari (81)"),
    ls("Cluster commands", "Kume komutalari"),
    ls("Branch outposts (1000)", "Sube karakollari (1000)"),
  ],
  closing: ls(
    "This is not just an organizational model. It is a new doctrine for operating businesses in the infrastructure era.",
    "Bu yalnizca bir organizasyon modeli degildir. Altyapi caginda isletme yonetimi icin yeni bir doktrindir.",
  ),
};

const moatItems = [
  ["Product moat", "A good product protects us", "Products are copied quickly", "Margin erosion", "Continuous innovation and orchestration"],
  ["Supply chain moat", "Our suppliers are unique to us", "Everyone can access global sourcing", "Supply loss", "Multi-source live integration"],
  ["Customer relationship moat", "Customers never leave", "Loyalty is breakable through data", "Customer churn", "CRM intelligence and retention systems"],
  ["Price advantage moat", "Low cost is durable", "AI closes price gaps fast", "Price war", "Dynamic pricing infrastructure"],
  ["Know-how moat", "Our knowledge is protected", "AI decodes processes", "Faster imitation", "Systematize process intelligence"],
  ["Distribution moat", "Our dealer network is untouchable", "Platform economy is open to everyone", "Channel loss", "Omni-channel orchestration"],
  ["Brand moat", "Brand strength protects us", "Viral challengers appear rapidly", "Brand erosion", "Continuous brand experience management"],
  ["Production capacity moat", "Factory scale protects us", "Contract manufacturing is widespread", "Capacity parity", "Flexible production and data visibility"],
  ["Accounting mastery moat", "A strong accountant is enough", "Algorithms outperform intuition", "Tax and compliance risk", "Real-time compliance system"],
  ["Tax maneuver moat", "Tax can always be optimized", "Digital tax surveillance is continuous", "Assessment risk", "Automated tax intelligence"],
  ["Single advisor moat", "One trusted advisor is enough", "Single-person dependency creates risk", "Knowledge loss", "Institutional knowledge system"],
  ["Bookkeeping moat", "Keeping books is enough", "Records alone do not manage risk", "Blind risk", "Live audit infrastructure"],
  ["International invisibility moat", "Offshore is invisible", "CRS and FATCA create visibility", "Global tax risk", "Global compliance infrastructure"],
  ["Financing access moat", "Credit is available when needed", "Credit access is algorithmic", "Liquidity squeeze", "Financial score management"],
  ["Generational wisdom moat", "Three generations of trade protects us", "Data outruns intuition", "Adaptation loss", "Digitize experience"],
  ["Wealth security moat", "Existing wealth protects us", "Static wealth decays", "Hidden wealth erosion", "Active wealth orchestration"],
  ["Exit illusion moat", "If needed, we can exit and live on wealth", "Exiting does not preserve wealth", "Intergenerational erosion", "Build an adaptive business"],
  ["Seniority moat", "30 years of history protects us", "Agile entrants can outrun decades", "Leadership loss", "Build agile scalable systems"],
  ["Physical prestige moat", "Big offices mean power", "Hybrid models reduce physical advantage", "Idle asset burden", "Flexible workspace and digital operations"],
  ["Power symbol moat", "Visible size equals authority", "Power now comes from adaptive systems", "Prestige erosion", "Rebuild reputation through system strength"],
  ["Factory barrier moat", "Machine scale prevents competition", "Manufacturing is globally replicable", "Rapid parity", "Differentiate through orchestration"],
].map(([name, oldBelief, newReality, risk, solution]) => ({
  _type: "moatItem",
  name: ls(name, `${name} kalesi`),
  oldBelief: ls(oldBelief, oldBelief),
  newReality: ls(newReality, newReality),
  risk: ls(risk, risk),
  solution: ls(solution, solution),
}));

const moatsPage = {
  _id: "moats-infrastructure",
  _type: "moatsPage",
  title: ls("Moats", "Kaleler"),
  slug: { _type: "slug", current: "infrastructure-moats" },
  heroTitle: ls("Old moats are collapsing", "Eski kaleler cokuyor"),
  heroSubtitle: ls("Everything can be copied except how perfectly your business works.", "Her sey kopyalanabilir; isletmenizin ne kadar kusursuz isledigi disinda."),
  items: moatItems,
  closingThesis: ls("The only enduring moat is orchestration quality.", "Kalici tek moat orkestrasyon kalitesidir."),
  ctaLabel: ls("Diagnose your moat gaps", "Moat bosluklarini analiz et"),
  ctaHref: "/diagnose",
};

const teamMembers = [
  ["Murat", "CEO", "Leads doctrine, ecosystem architecture, and growth execution."],
  ["Kiraz", "COO", "Leads daily operating rhythm, process integrity, and command continuity."],
  ["Aydin", "Senior partner", "Leads compliance and strategic regulatory programs."],
  ["Berkant", "Transformation lead", "Builds scalable transformation playbooks across sectors."],
  ["Erkan", "Finance lead", "Owns finance and embedded liquidity orchestration."],
  ["Erdal", "Operations lead", "Runs field operations and branch synchronization."],
].map(([name, role, bio]) => ({
  _id: `team-${String(name).toLowerCase()}`,
  _type: "teamMember",
  name,
  role: ls(String(role), String(role)),
  bio: ls(String(bio), String(bio)),
}));

const quotes = [
  ["Ankara Group", "They did not send us a report, they built our operating rhythm."],
  ["Istanbul Retail Holding", "Our compliance latency dropped from weeks to hours."],
  ["Ege Manufacturing", "Decision quality improved because data started speaking in real time."],
  ["Marmara Trade Network", "They stayed inside the system and made it run."],
].map(([clientName, quote], idx) => ({
  _id: `client-quote-${idx + 1}`,
  _type: "clientQuote",
  clientName,
  logoLabel: clientName,
  quote: ls(String(quote), String(quote)),
}));

async function run() {
  const docs = [...sitePages, businessArmyPage, moatsPage, ...teamMembers, ...quotes];
  for (const doc of docs) {
    await client.createOrReplace(doc as never);
  }
  console.log(`Seeded slice 6 docs: ${docs.length}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
