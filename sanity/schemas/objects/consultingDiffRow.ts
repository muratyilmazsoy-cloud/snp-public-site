import { defineField, defineType } from "sanity";

export const consultingDiffRow = defineType({
  name: "consultingDiffRow",
  title: "Consulting difference row",
  type: "object",
  fields: [
    defineField({
      name: "consulting",
      title: "Consulting side",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "infrastructure",
      title: "Infrastructure side",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
  ],
});
