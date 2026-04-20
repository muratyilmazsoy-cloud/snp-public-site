"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schema } from "@/sanity/schemas";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION ?? process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

export default defineConfig({
  name: "default",
  title: "SnP Content Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "tr", title: "Turkish" },
      ],
      schemaTypes: ["page"],
    }),
  ],
  apiVersion,
});
