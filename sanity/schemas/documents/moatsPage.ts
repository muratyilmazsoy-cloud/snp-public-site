import { defineArrayMember, defineField, defineType } from "sanity";

export const moatsPage = defineType({
  name: "moatsPage",
  title: "Moats page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText" }),
    defineField({
      name: "items",
      title: "Moat items",
      type: "array",
      of: [defineArrayMember({ type: "moatItem" })],
      validation: (rule) => rule.required().min(20),
    }),
    defineField({ name: "closingThesis", title: "Closing thesis", type: "localizedText" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString" }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string" }),
  ],
});
