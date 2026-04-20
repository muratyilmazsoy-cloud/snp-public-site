import { defineArrayMember, defineField, defineType } from "sanity";

export const layerDetail = defineType({
  name: "layerDetail",
  title: "Layer detail",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "definition", title: "Definition", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "problemHeading", title: "Problem heading", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({
      name: "problemParagraphs",
      title: "Problem paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "localizedText" })],
      validation: (rule) => rule.required().min(3).max(3),
    }),
    defineField({
      name: "outcomes",
      title: "Outcome bullets",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(3).max(5),
    }),
    defineField({ name: "outcomesHeading", title: "Outcomes heading", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "connectionsHeading", title: "Connections heading", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "connectionsText", title: "Connections text", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string", validation: (rule) => rule.required() }),
  ],
});
