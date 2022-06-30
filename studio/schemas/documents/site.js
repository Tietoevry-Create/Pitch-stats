export default {
  name: "site",
  title: "Site",
  type: "document",
  fields: [{ type: "title", name: "title" }],
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
