export default {
  name: "navigation",
  title: "Navigasjon",
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
