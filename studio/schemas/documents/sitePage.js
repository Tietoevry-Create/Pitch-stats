export default {
  name: "sitePage",
  title: "Redaktørsider",
  type: "document",
  description: "Side for redaktørinnhold",
  fields: [
    {
      type: "title",
      title: "Tittel",
      name: "title",
    },
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
