import { defineField, defineType } from "sanity";

export const clientQuote = defineType({
  name: "clientQuote",
  title: "Client quote",
  type: "document",
  fields: [
    defineField({ name: "clientName", title: "Client name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "quote", title: "Quote", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "logoLabel", title: "Logo label", type: "string" }),
  ],
});
