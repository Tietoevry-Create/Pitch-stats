export default {
  name: "webSiteUrl",
  title: "Webside url",
  type: "url",
  description: "Url for the websiden som skal testes (required) ",
  validation: (Rule) => Rule.required(),
  placeholder: "https://www.google.com/",
};
