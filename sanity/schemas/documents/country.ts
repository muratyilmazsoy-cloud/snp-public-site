import { defineField, defineType } from "sanity";

export const country = defineType({
  name: "country",
  title: "Country",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "code", title: "ISO code", type: "string", validation: (rule) => rule.required().min(2).max(2) }),
    defineField({ name: "centerLat", title: "Center latitude", type: "number", validation: (rule) => rule.required() }),
    defineField({ name: "centerLng", title: "Center longitude", type: "number", validation: (rule) => rule.required() }),
    defineField({ name: "defaultZoom", title: "Default zoom", type: "number", initialValue: 5, validation: (rule) => rule.required().min(1).max(18) }),
  ],
});
