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

const pipelines = [
  { _id: "pipeline-fix-your-company", _type: "pipeline", name: ls("Fix your company", "Sirketini duzelt"), audience: ls("Business owners", "Isletme sahipleri"), promise: ls("You do your business. We do everything around it.", "Sen isine odaklan. Biz etrafindaki sistemi yonetelim."), ctaLabel: ls("Start diagnosis", "Diagnoza basla"), ctaHref: "/grow/fix-your-company", order: 1, roleType: "owner" },
  { _id: "pipeline-become-a-partner", _type: "pipeline", name: ls("Become a partner", "Partner ol"), audience: ls("Entrepreneurs", "Girisimciler"), promise: ls("Build and sell regional portfolios.", "Bolgesel portfoyleri kur ve sat."), ctaLabel: ls("See the map", "Haritayi gor"), ctaHref: "/grow/become-a-partner", order: 2, roleType: "seller" },
  { _id: "pipeline-build-your-career", _type: "pipeline", name: ls("Build your career", "Kariyerini insa et"), audience: ls("Professionals", "Profesyoneller"), promise: ls("Join the Business Jedi Academy.", "Business Jedi Academy'ye katil."), ctaLabel: ls("Apply", "Basvur"), ctaHref: "/grow/build-your-career", order: 3, roleType: "professional" },
  { _id: "pipeline-transform-your-office", _type: "pipeline", name: ls("Transform your office", "Ofisini donustur"), audience: ls("Office owners", "Ofis sahipleri"), promise: ls("Global-firm power, regional identity.", "Global firma gucu, bolgesel kimlik."), ctaLabel: ls("Start the conversation", "Gorusmeyi baslat"), ctaHref: "/grow/transform-your-office", order: 4, roleType: "maker" },
];

const details = [
  {
    _id: "pipeline-detail-grow-overview", _type: "pipelineDetail", title: ls("Grow", "Buyu"), slug: { _type: "slug", current: "grow-overview" },
    heroEyebrow: ls("Four ways to grow", "Buyumenin dort yolu"), heroTitle: ls("Everyone starts with the same dots.", "Herkes ayni noktalardan baslar."), heroSubtitle: ls("Choose the door that matches your role.", "Rolune uygun kapidan gir."),
    sectionOneHeading: ls("Four pipeline doors", "Dort pipeline kapisi"), ctaLabel: ls("Explore", "Kesfet"), ctaHref: "/grow",
  },
  {
    _id: "pipeline-detail-fix", _type: "pipelineDetail", title: ls("Fix your company", "Sirketini duzelt"), slug: { _type: "slug", current: "fix-your-company" },
    heroEyebrow: ls("B2B pipeline", "B2B pipeline"), heroTitle: ls("You do your business. We do everything around it.", "Sen isine odaklan. Biz etrafindaki her seyi yonetelim."), heroSubtitle: ls("Diagnose, install, operate.", "Diagnoz et, altyapiyi kur, sistemi islet."),
    sectionOneHeading: ls("Is this you?", "Bu siz misiniz?"), listOne: [ls("Decisions are delayed", "Kararlar gecikiyor"), ls("Processes are fragmented", "Surecler parcalaniyor"), ls("Visibility is low", "Gorunurluk dusuk"), ls("Costs are drifting", "Maliyetler kayiyor"), ls("Growth stalls", "Buyume duruyor")],
    sectionTwoHeading: ls("How we fix it", "Nasil duzeltiyoruz"), listTwo: [ls("Diagnose", "Diagnoz"), ls("Install infrastructure", "Altyapiyi kur"), ls("Operate", "Islet")],
    sectionThreeHeading: ls("Inclusions", "Kapsam"), contentOne: ls("End-to-end business infrastructure delivery.", "Uctan uca business infrastructure teslimi."),
    ctaLabel: ls("Start diagnosis", "Diagnoza basla"), ctaHref: "/diagnose", formSubmitLabel: ls("Start diagnosis", "Diagnoza basla"),
    formNameLabel: ls("Name", "Ad"), formEmailLabel: ls("Email", "E-posta"), formCompanyLabel: ls("Company", "Sirket"), formMessageLabel: ls("Message", "Mesaj"),
  },
  {
    _id: "pipeline-detail-partner", _type: "pipelineDetail", title: ls("Become a partner", "Partner ol"), slug: { _type: "slug", current: "become-a-partner" },
    heroEyebrow: ls("Franchise pipeline", "Franchise pipeline"), heroTitle: ls("Are you a carrier?", "Tasiyici misiniz?"), heroSubtitle: ls("Sellers build and sell regional portfolios.", "Seller'lar bolgesel portfoy kurar ve satar."),
    distinctionLabel: ls("Critical distinction: SELLERS", "Kritik ayrim: SELLER"), distinctionText: ls("Franchise candidates are sellers. They do not deliver services.", "Franchise adaylari seller'dir. Hizmet teslim etmezler."),
    sectionOneHeading: ls("Three tiers", "Uc seviye"), listOne: [ls("Point", "Point"), ls("Center", "Center"), ls("Lounge", "Lounge")],
    sectionTwoHeading: ls("Evaluation fee", "Degerlendirme ucreti"), contentOne: ls("6,000 TL serious-candidate filter.", "6.000 TL ciddi aday filtresi."),
    sectionThreeHeading: ls("Franchise map", "Franchise haritasi"), sectionFourHeading: ls("Application flow", "Basvuru akisi"),
    ctaLabel: ls("See the map", "Haritayi gor"), ctaHref: "/contact/franchise-map", formSubmitLabel: ls("Apply", "Basvur"),
    formNameLabel: ls("Name", "Ad"), formCompanyLabel: ls("Company", "Sirket"), formCountryLabel: ls("City / country of interest", "Il / ulke ilgisi"), formPhoneLabel: ls("Phone", "Telefon"), formExtraOneLabel: ls("Budget range", "Butce araligi"), formExtraTwoLabel: ls("Preferred region", "Tercih edilen bolge"),
  },
  {
    _id: "pipeline-detail-career", _type: "pipelineDetail", title: ls("Build your career", "Kariyerini insa et"), slug: { _type: "slug", current: "build-your-career" },
    heroEyebrow: ls("Business Jedi Academy", "Business Jedi Academy"), heroTitle: ls("Everyone starts with the same dots.", "Herkes ayni noktalardan baslar."), heroSubtitle: ls("Grow through ranks and corps.", "Rutbe ve korpuslar uzerinden yuksel."),
    sectionOneHeading: ls("10-rank hierarchy", "10 rutbeli hiyerarsi"), sectionTwoHeading: ls("8 corps", "8 korpus"), sectionThreeHeading: ls("Training tracks", "Egitim track'leri"),
    listOne: [ls("Professional", "Mesleki"), ls("Technology", "Teknoloji"), ls("Robotics", "Robotik")],
    ctaLabel: ls("Apply", "Basvur"), ctaHref: "/grow/build-your-career", formSubmitLabel: ls("Apply", "Basvur"),
    formNameLabel: ls("Name", "Ad"), formEmailLabel: ls("Email", "E-posta"), formExtraOneLabel: ls("Current profession", "Mevcut meslek"), formExtraTwoLabel: ls("Rank aspiration", "Hedef rutbe"),
  },
  {
    _id: "pipeline-detail-transform", _type: "pipelineDetail", title: ls("Transform your office", "Ofisini donustur"), slug: { _type: "slug", current: "transform-your-office" },
    heroEyebrow: ls("Transformation pipeline", "Donusum pipeline"), heroTitle: ls("You are no longer alone.", "Artik yalniz degilsin."), heroSubtitle: ls("Makers keep their identity and gain infrastructure power.", "Maker'lar kimligini korurken altyapi gucu kazanir."),
    distinctionLabel: ls("Critical distinction: MAKERS", "Kritik ayrim: MAKER"), distinctionText: ls("Transformation candidates are makers who deliver services.", "Donusum adaylari hizmet teslim eden maker'lardir."),
    sectionOneHeading: ls("Seven professional categories", "Yedi profesyonel kategori"), listOne: [ls("Tax & fiscal", "Vergi ve mali"), ls("Law & compliance", "Hukuk ve uyum"), ls("Finance & banking", "Finans ve bankacilik"), ls("Government incentives", "Tesvikler"), ls("HR & organization", "IK ve organizasyon"), ls("Foreign trade & customs", "Dis ticaret ve gumruk"), ls("Quality & systems", "Kalite ve sistem")],
    sectionTwoHeading: ls("What you keep", "Neyi korursun"), contentOne: ls("Identity, clients, and regional domain.", "Kimligini, musterilerini ve bolgesel alanini."),
    sectionThreeHeading: ls("What you gain", "Neyi kazanirsin"), contentTwo: ls("Operasyon 4.0, shared infrastructure, lower repetitive load.", "Operasyon 4.0, ortak altyapi, daha dusuk tekrarli yuk."),
    sectionFourHeading: ls("Positioning", "Konum"), contentThree: ls("Global-firm power, regional identity.", "Global firma gucu, bolgesel kimlik."),
    ctaLabel: ls("Start the conversation", "Gorusmeyi baslat"), ctaHref: "/grow/transform-your-office", formSubmitLabel: ls("Start the conversation", "Gorusmeyi baslat"),
    formNameLabel: ls("Name", "Ad"), formCompanyLabel: ls("Firm name", "Firma adi"), formExtraOneLabel: ls("Category", "Kategori"), formExtraTwoLabel: ls("Years in practice", "Meslekte yil"), formMessageLabel: ls("Current tooling", "Mevcut araclar"),
  },
];

const ranks = [
  "Business Trainer","Business Operator","Senior Operator","Business Captain","Business Commander","Business Colonel","Business General","Business Master","Business Sage","Business Jedi",
].map((name, i) => ({ _id: `rank-${i+1}`, _type: "rank", name: ls(name, name), order: i+1 }));

const corps = ["Accounting","Finance","HR","Procurement","IT Systems","Tax & Compliance","Audit","Transformation"].map((name, i) => ({ _id: `corps-${i+1}`, _type: "corps", name: ls(name, name), order: i+1 }));

const regions = [
  { id: "istanbul", city: "Istanbul", status: "active" },
  { id: "ankara", city: "Ankara", status: "reserved" },
  { id: "izmir", city: "Izmir", status: "available" },
  { id: "antalya", city: "Antalya", status: "available" },
].map((r) => ({ _id: `region-${r.id}`, _type: "franchiseRegion", name: ls(r.city, r.city), slug: { _type: "slug", current: r.id }, city: r.city, status: r.status, description: ls(`${r.city} region overview`, `${r.city} bolge ozeti`) }));

const branches = [
  { id: "1", city: "Istanbul", lat: 41.01, lng: 28.97, status: "active", region: "region-istanbul" },
  { id: "2", city: "Ankara", lat: 39.93, lng: 32.85, status: "reserved", region: "region-ankara" },
  { id: "3", city: "Izmir", lat: 38.42, lng: 27.14, status: "available", region: "region-izmir" },
  { id: "4", city: "Antalya", lat: 36.89, lng: 30.70, status: "available", region: "region-antalya" },
].map((b) => ({ _id: `branch-${b.id}`, _type: "branch", name: ls(`${b.city} Branch`, `${b.city} Sube`), city: b.city, lat: b.lat, lng: b.lng, status: b.status, regionRef: { _type: "reference", _ref: b.region } }));

async function run() {
  const docs = [...pipelines, ...details, ...ranks, ...corps, ...regions, ...branches];
  for (const doc of docs) await client.createOrReplace(doc as never);
  console.log(`Seeded ${docs.length} Slice 4 documents to dataset \"${dataset}\".`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
