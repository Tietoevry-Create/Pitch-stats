export default {
  name: "site",
  title: "Site",
  type: "document",
  fields: [
    { type: "title", name: "title" },
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
