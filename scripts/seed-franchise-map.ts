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

const countries = [
  { id: "country-tr", code: "TR", name: ls("Turkey", "Turkiye"), centerLat: 39, centerLng: 35, defaultZoom: 5 },
  { id: "country-de", code: "DE", name: ls("Germany", "Almanya"), centerLat: 51, centerLng: 10, defaultZoom: 5 },
  { id: "country-ae", code: "AE", name: ls("UAE", "BAE"), centerLat: 24.3, centerLng: 54.4, defaultZoom: 6 },
  { id: "country-gb", code: "GB", name: ls("UK", "Birlesik Krallik"), centerLat: 54.3, centerLng: -2.5, defaultZoom: 5 },
  { id: "country-sa", code: "SA", name: ls("Saudi Arabia", "Suudi Arabistan"), centerLat: 23.9, centerLng: 45.1, defaultZoom: 5 },
].map((country) => ({ _id: country.id, _type: "country", ...country }));

const regions = [
  { id: "region-istanbul-anadolu", city: "Istanbul Anadolu", status: "active", country: "country-tr" },
  { id: "region-istanbul-avrupa", city: "Istanbul Avrupa", status: "reserved", country: "country-tr" },
  { id: "region-ankara", city: "Ankara", status: "available", country: "country-tr" },
  { id: "region-izmir", city: "Izmir", status: "available", country: "country-tr" },
  { id: "region-antalya", city: "Antalya", status: "available", country: "country-tr" },
  { id: "region-berlin", city: "Berlin", status: "available", country: "country-de" },
  { id: "region-munich", city: "Munich", status: "available", country: "country-de" },
].map((region) => ({ _id: region.id, _type: "franchiseRegion", name: ls(region.city, region.city), slug: { _type: "slug", current: region.id.replace("region-", "") }, city: region.city, status: region.status, description: ls(`${region.city} region portfolio`, `${region.city} bolge portfoyu`) }));

const branches = [
  { id: "branch-istanbul-anadolu", city: "Istanbul Anadolu", lat: 40.992, lng: 29.126, status: "active", region: "region-istanbul-anadolu", country: "country-tr" },
  { id: "branch-istanbul-avrupa", city: "Istanbul Avrupa", lat: 41.008, lng: 28.978, status: "reserved", region: "region-istanbul-avrupa", country: "country-tr" },
  { id: "branch-ankara", city: "Ankara", lat: 39.933, lng: 32.859, status: "available", region: "region-ankara", country: "country-tr" },
  { id: "branch-izmir", city: "Izmir", lat: 38.423, lng: 27.142, status: "available", region: "region-izmir", country: "country-tr" },
  { id: "branch-antalya", city: "Antalya", lat: 36.896, lng: 30.713, status: "available", region: "region-antalya", country: "country-tr" },
  { id: "branch-berlin", city: "Berlin", lat: 52.52, lng: 13.405, status: "available", region: "region-berlin", country: "country-de" },
  { id: "branch-munich", city: "Munich", lat: 48.137, lng: 11.575, status: "available", region: "region-munich", country: "country-de" },
].map((branch) => ({
  _id: branch.id,
  _type: "branch",
  name: ls(`${branch.city} Branch`, `${branch.city} Sube`),
  city: branch.city,
  lat: branch.lat,
  lng: branch.lng,
  status: branch.status,
  regionRef: { _type: "reference", _ref: branch.region },
  countryRef: { _type: "reference", _ref: branch.country },
}));

async function run() {
  const docs = [...countries, ...regions, ...branches];
  for (const doc of docs) {
    await client.createOrReplace(doc as never);
  }
  console.log(`Seeded ${docs.length} franchise map docs to dataset \"${dataset}\".`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
