export default {
  name: "site",
  title: "Site",
  type: "document",
  fields: [
    { type: "title", name: "title" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Ingen grunn til å forandre denne etter å ha trykket 'generate'",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
    },
    { type: "webSiteUrl", name: "webSiteUrl" },
    {
      title: "Category",
      name: "categoryReference",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
    },
    { type: "siteImage", name: "siteImage" },
    { type: "blockContent", name: "blockContent", title: "Block Content" },
  ],
  preview: {
    select: {
      title: "title",
    },

    prepare(selection) {
      const { title } = selection;

      return {
        title: title,
      };
    },
  },
};
