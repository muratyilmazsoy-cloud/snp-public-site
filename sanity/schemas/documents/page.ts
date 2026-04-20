import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeShiftLeft",
      title: "Home shift left",
      type: "localizedText",
    }),
    defineField({
      name: "homePrimaryCtaLabel",
      title: "Home primary CTA label",
      type: "localizedString",
    }),
    defineField({
      name: "homeSecondaryCtaLabel",
      title: "Home secondary CTA label",
      type: "localizedString",
    }),
    defineField({
      name: "homeSecondaryCtaHref",
      title: "Home secondary CTA href",
      type: "string",
    }),
    defineField({
      name: "homeShiftHeading",
      title: "Home shift heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeRealityHeading",
      title: "Home reality heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeLayersHeading",
      title: "Home layers heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeFutureFeatureLabel",
      title: "Home future feature label",
      type: "localizedString",
    }),
    defineField({
      name: "homeGrowHeading",
      title: "Home grow heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeEcosystemHeading",
      title: "Home ecosystem heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeMoatsHeading",
      title: "Home moats heading",
      type: "localizedString",
    }),
    defineField({
      name: "homeMoatsLinkLabel",
      title: "Home moats link label",
      type: "localizedString",
    }),
    defineField({
      name: "homeMoatsLinkHref",
      title: "Home moats link href",
      type: "string",
    }),
    defineField({
      name: "homeShiftRight",
      title: "Home shift right",
      type: "localizedText",
    }),
    defineField({
      name: "homeKarmaQuote",
      title: "Home karma quote",
      type: "localizedString",
    }),
    defineField({
      name: "homeEcosystemStats",
      title: "Home ecosystem stats",
      type: "array",
      of: [defineArrayMember({ type: "homeStat" })],
    }),
    defineField({
      name: "homeMoatsTeaser",
      title: "Home moats teaser",
      type: "localizedText",
    }),
    defineField({
      name: "homeClosingSignature",
      title: "Home closing signature",
      type: "localizedString",
    }),
    defineField({
      name: "endOfInequality",
      title: "Infrastructure end of inequality",
      type: "localizedText",
    }),
    defineField({
      name: "infrastructureEndHeading",
      title: "Infrastructure end heading",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureCreatedHeading",
      title: "Infrastructure created heading",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureKarmaHeading",
      title: "Infrastructure karma heading",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureDifferenceHeading",
      title: "Infrastructure difference heading",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureDifferenceLeftLabel",
      title: "Infrastructure difference left label",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureDifferenceRightLabel",
      title: "Infrastructure difference right label",
      type: "localizedString",
    }),
    defineField({
      name: "infrastructureCreatedStatement",
      title: "Infrastructure created statement",
      type: "localizedText",
    }),
    defineField({
      name: "infrastructureKarmaNinthLayer",
      title: "Infrastructure karma as ninth layer",
      type: "localizedText",
    }),
    defineField({
      name: "consultingDiffRows",
      title: "Consulting difference rows",
      type: "array",
      of: [defineArrayMember({ type: "consultingDiffRow" })],
    }),
    defineField({
      name: "consultingDiffCtaLabel",
      title: "Consulting difference CTA label",
      type: "localizedString",
    }),
    defineField({
      name: "consultingDiffCtaHref",
      title: "Consulting difference CTA href",
      type: "string",
    }),
    defineField({
      name: "karmaDelayProblem",
      title: "Karma delay problem",
      type: "localizedText",
    }),
    defineField({
      name: "karmaFramingsHeading",
      title: "Karma framings heading",
      type: "localizedString",
    }),
    defineField({
      name: "karmaDelayHeading",
      title: "Karma delay heading",
      type: "localizedString",
    }),
    defineField({
      name: "karmaRealtimeHeading",
      title: "Karma realtime heading",
      type: "localizedString",
    }),
    defineField({
      name: "karmaRealtimeDiagramLabel",
      title: "Karma realtime diagram label",
      type: "localizedString",
    }),
    defineField({
      name: "karmaDiagramActionLabel",
      title: "Karma diagram action label",
      type: "localizedString",
    }),
    defineField({
      name: "karmaDiagramObservationLabel",
      title: "Karma diagram observation label",
      type: "localizedString",
    }),
    defineField({
      name: "karmaRealtimeExplanation",
      title: "Karma realtime explanation",
      type: "localizedText",
    }),
    defineField({
      name: "karmaCtaLabel",
      title: "Karma CTA label",
      type: "localizedString",
    }),
    defineField({
      name: "karmaCtaHref",
      title: "Karma CTA href",
      type: "string",
    }),
    defineField({
      name: "manifestoRef",
      title: "Manifesto",
      type: "reference",
      to: [{ type: "manifesto" }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "richText",
    }),
  ],
});
