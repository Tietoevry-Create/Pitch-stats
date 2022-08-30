export default {
  name: "frontPage",
  title: "Front page",
  type: "document",
  fields: [
    {
      type: "title",
      title: "Title",
      name: "title",
    },
    { type: "blockContent", name: "blockContent", title: "Block Content" },

    {
      name: "categoryRefList",
      title: "Categories",
      type: "array",
      of: [
        {
          name: "categoryRef",
          title: "Category",
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
