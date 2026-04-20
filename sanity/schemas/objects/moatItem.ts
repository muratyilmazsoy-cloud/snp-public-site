import { defineField, defineType } from "sanity";

export const moatItem = defineType({
  name: "moatItem",
  title: "Moat item",
  type: "object",
  fields: [
    defineField({ name: "name", title: "Moat name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "oldBelief", title: "Old belief", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "newReality", title: "New reality", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "risk", title: "Risk", type: "localizedText", validation: (rule) => rule.required() }),
    defineField({ name: "solution", title: "Solution", type: "localizedText", validation: (rule) => rule.required() }),
  ],
});
