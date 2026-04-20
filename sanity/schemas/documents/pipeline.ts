import { defineField, defineType } from "sanity";

export const pipeline = defineType({
  name: "pipeline",
  title: "Pipeline",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "promise",
      title: "Promise",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaHref",
      title: "CTA href",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "roleType",
      title: "Role type",
      type: "string",
      options: {
        list: ["seller", "maker", "professional", "owner"],
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
