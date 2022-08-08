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
        "No need to change this beyond generate, as this is a data point",
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
