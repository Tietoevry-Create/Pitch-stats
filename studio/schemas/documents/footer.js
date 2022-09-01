export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      type: "array",
      title: "Lenker",
      name: "footerLinks",
      of: [{ type: "link", title: "Lenke", name: "link" }],
    },
  ],
};
