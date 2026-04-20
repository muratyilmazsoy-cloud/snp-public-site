import { defineField, defineType } from "sanity";

export const rank = defineType({
  name: "rank",
  title: "Rank",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
});
