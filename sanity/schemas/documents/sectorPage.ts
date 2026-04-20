import { defineArrayMember, defineField, defineType } from "sanity";

export const sectorPage = defineType({
  name: "sectorPage",
  title: "Sector page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "localizedString" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText" }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({
      name: "serviceLinks",
      title: "Service links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localizedString", validation: (rule) => rule.required() }),
            defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string", validation: (rule) => rule.required() }),
  ],
});
