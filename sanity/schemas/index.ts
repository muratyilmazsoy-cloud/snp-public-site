import { type SchemaTypeDefinition } from "sanity";
import { karmaFraming } from "@/sanity/schemas/documents/karmaFraming";
import { layer } from "@/sanity/schemas/documents/layer";
import { layerDetail } from "@/sanity/schemas/documents/layerDetail";
import { manifesto } from "@/sanity/schemas/documents/manifesto";
import { mse } from "@/sanity/schemas/documents/mse";
import { operasyon } from "@/sanity/schemas/documents/operasyon";
import { page } from "@/sanity/schemas/documents/page";
import { pipeline } from "@/sanity/schemas/documents/pipeline";
import { consultingDiffRow } from "@/sanity/schemas/objects/consultingDiffRow";
import { hero } from "@/sanity/schemas/objects/hero";
import { homeStat } from "@/sanity/schemas/objects/homeStat";
import { localizedString } from "@/sanity/schemas/objects/localizedString";
import { localizedText } from "@/sanity/schemas/objects/localizedText";
import { richText } from "@/sanity/schemas/objects/richText";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    layer,
    pipeline,
    manifesto,
    karmaFraming,
    operasyon,
    layerDetail,
    mse,
    hero,
    richText,
    localizedString,
    localizedText,
    homeStat,
    consultingDiffRow,
  ],
};
