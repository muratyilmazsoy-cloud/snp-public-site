import { defineArrayMember, defineField, defineType } from "sanity";

export const sitePage = defineType({
  name: "sitePage",
  title: "Site page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "localizedString" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText" }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [defineArrayMember({ type: "sectionBlock" })],
    }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
    }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString" }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string" }),
  ],
});
