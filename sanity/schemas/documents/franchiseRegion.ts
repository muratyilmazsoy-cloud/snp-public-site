import { defineField, defineType } from "sanity";

export const franchiseRegion = defineType({
  name: "franchiseRegion",
  title: "Franchise region",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name.en" }, validation: (rule) => rule.required() }),
    defineField({ name: "city", title: "City", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["active", "reserved", "available"] }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
  ],
});
