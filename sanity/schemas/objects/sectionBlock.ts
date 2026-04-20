import { defineField, defineType } from "sanity";

export const sectionBlock = defineType({
  name: "sectionBlock",
  title: "Section block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "content", title: "Content", type: "localizedText", validation: (rule) => rule.required() }),
  ],
});
