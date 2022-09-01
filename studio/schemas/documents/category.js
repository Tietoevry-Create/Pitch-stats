export default {
  name: "category",
  title: "Kategori",
  type: "document",
  fields: [
    {
      type: "title",
      title: "Tittel",
      name: "title",
    },
    {
      type: "text",
      name: "lede",
      title: "Ledetekst",
      description: "En kort tekst som beskriver kategorien ",
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
    {
			type: "text",
			name: "path",
			title: "Path",
			description: "Path som kan brukes til å generere SVG bilder",
    }
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
