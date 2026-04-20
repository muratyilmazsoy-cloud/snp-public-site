import { defineField, defineType } from "sanity";

export const serviceLine = defineType({
  name: "serviceLine",
  title: "Service line",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "localizedText", validation: (rule) => rule.required() }),
  ],
});
