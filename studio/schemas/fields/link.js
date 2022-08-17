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
      description: "An url like https://www.google.com/",
    },
  ],
};
