import { defineField, defineType } from "sanity";

export const corps = defineType({
  name: "corps",
  title: "Corps",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Order", type: "number", validation: (rule) => rule.required().integer().min(1) }),
  ],
});
