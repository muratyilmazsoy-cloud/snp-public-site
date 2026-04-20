import { createClient } from "next-sanity";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
