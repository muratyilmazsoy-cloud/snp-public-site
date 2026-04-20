import { defineArrayMember, defineField, defineType } from "sanity";

export const businessArmyPage = defineType({
  name: "businessArmyPage",
  title: "Business Army page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "localizedString" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "localizedText" }),
    defineField({ name: "preamble", title: "Preamble", type: "localizedText" }),
    defineField({
      name: "doctrinePrinciples",
      title: "Doctrine principles",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
    }),
    defineField({
      name: "ranks",
      title: "Ranks",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(10).max(10),
    }),
    defineField({
      name: "corps",
      title: "Corps",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(8).max(8),
    }),
    defineField({
      name: "territorialCommand",
      title: "5-tier territorial command",
      type: "array",
      of: [defineArrayMember({ type: "localizedString" })],
      validation: (rule) => rule.required().min(5).max(5),
    }),
    defineField({ name: "closing", title: "Closing", type: "localizedText" }),
  ],
});
