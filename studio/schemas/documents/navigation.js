export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      type: "array",
      title: "Lenker",
      name: "menuLinks",
      of: [{ type: "link", title: "Link", name: "link" }],
    },
  ],
};
