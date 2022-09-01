export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      description: "The visible label of the link.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "url",
      title: "URL",
      name: "href",
      description: "En URL som f.eks https://www.google.com/",
      placeholder: "https://www.google.com/",
    },
    {
      title: "Referanse",
      name: "linkReference",
      type: "reference",
      to: [{ type: "site" }],
    },
  ],
};
