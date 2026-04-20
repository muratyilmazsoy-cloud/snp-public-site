import { defineType } from "sanity";

export const richText = defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [{ type: "block" }],
});
