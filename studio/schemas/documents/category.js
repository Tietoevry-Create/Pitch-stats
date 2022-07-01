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
