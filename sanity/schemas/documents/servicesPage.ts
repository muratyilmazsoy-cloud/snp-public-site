import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Services page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText" }),
    defineField({ name: "tierHeading", title: "Tier heading", type: "localizedString" }),
    defineField({
      name: "tierCards",
      title: "Tier cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
            defineField({ name: "summary", title: "Summary", type: "localizedText", validation: (rule) => rule.required() }),
            defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
          ],
        }),
      ],
    }),
    defineField({ name: "pricingCalloutLabel", title: "Pricing callout label", type: "localizedString" }),
    defineField({ name: "pricingCalloutHref", title: "Pricing callout href", type: "string" }),
    defineField({
      name: "serviceLines",
      title: "Service lines",
      type: "array",
      of: [defineArrayMember({ type: "serviceLine" })],
    }),
    defineField({ name: "contactCtaLabel", title: "Contact CTA label", type: "localizedString" }),
    defineField({ name: "contactCtaHref", title: "Contact CTA href", type: "string" }),
  ],
});
