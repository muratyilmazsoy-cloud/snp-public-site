import { defineArrayMember, defineField, defineType } from "sanity";

export const mse = defineType({
  name: "mse",
  title: "MSE page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "coverageHeading", title: "Coverage heading", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({
      name: "coveragePoints",
      title: "Coverage points",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(3),
    }),
    defineField({ name: "visualizationLabel", title: "Visualization label", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "ctaHref", title: "CTA href", type: "string", validation: (rule) => rule.required() }),
  ],
});
