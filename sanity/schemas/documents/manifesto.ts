import { defineField, defineType } from "sanity";

export const manifesto = defineType({
  name: "manifesto",
  title: "Manifesto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "localizedText",
    }),
    defineField({
      name: "bodyEn",
      title: "Body (English)",
      type: "richText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyTr",
      title: "Body (Turkish)",
      type: "richText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endCtaLabel",
      title: "End CTA label",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endCtaHref",
      title: "End CTA href",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
