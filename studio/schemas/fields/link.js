export default {
  name: "link",
  title: "Lenke",
  type: "object",
  description: "Enten skriv inn en URl eller velg en referanse",
  fields: [
    {
      title: "Label",
      name: "label",
      description: "Den synlige 'labelen' for lenken.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "url",
      title: "URL",
      name: "href",
      description: "En URL som f.eks https://www.google.com/",
      placeholder: "https://www.google.com/",
      hidden: ({ parent }) => parent?.linkReference,
    },
    {
      title: "Referanse",
      name: "linkReference",
      type: "reference",
      to: [
        { type: "site" },
        { type: "category" },
        { type: "frontPage" },
        { type: "sitePage" },
      ],
      hidden: ({ parent }) => parent?.href,
      options: {
        disableNew: true,
      },
    },
  ],
};
