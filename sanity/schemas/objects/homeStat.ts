import { defineField, defineType } from "sanity";

export const homeStat = defineType({
  name: "homeStat",
  title: "Home stat",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "label.en",
    },
  },
});
