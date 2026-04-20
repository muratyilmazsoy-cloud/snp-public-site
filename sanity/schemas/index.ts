import { type SchemaTypeDefinition } from "sanity";
import { page } from "@/sanity/schemas/documents/page";
import { hero } from "@/sanity/schemas/objects/hero";
import { localizedString } from "@/sanity/schemas/objects/localizedString";
import { richText } from "@/sanity/schemas/objects/richText";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, hero, richText, localizedString],
};
