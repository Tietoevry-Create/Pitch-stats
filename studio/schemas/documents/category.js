export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      type: "title",
      title: "Title",
      name: "title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "No need to change this beyond generate, as this is a data point",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
      },
    },
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