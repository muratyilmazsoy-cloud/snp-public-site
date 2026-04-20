import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "role", title: "Role", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "bio", title: "Bio", type: "localizedText" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
  ],
});
