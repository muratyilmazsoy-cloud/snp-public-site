import { defineField, defineType } from "sanity";

export const branch = defineType({
  name: "branch",
  title: "Branch",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "localizedString", validation: (rule) => rule.required() }),
    defineField({ name: "city", title: "City", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "lat", title: "Latitude", type: "number", validation: (rule) => rule.required() }),
    defineField({ name: "lng", title: "Longitude", type: "number", validation: (rule) => rule.required() }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: ["active", "reserved", "available"] }, validation: (rule) => rule.required() }),
    defineField({ name: "regionRef", title: "Region", type: "reference", to: [{ type: "franchiseRegion" }] }),
    defineField({ name: "countryRef", title: "Country", type: "reference", to: [{ type: "country" }], validation: (rule) => rule.required() }),
  ],
});
