export default {
  name: "frontPage",
  title: "Front page",
  type: "document",
  fields: [
    {
      type: "title",
      title: "Tittel",
      name: "title",
    },
    { type: "blockContent", name: "blockContent", title: "Riktekst" },

    {
      name: "categoryRefList",
      title: "Kategorier",
      type: "array",
      of: [
        {
          name: "categoryRef",
          title: "Kategori",
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
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
