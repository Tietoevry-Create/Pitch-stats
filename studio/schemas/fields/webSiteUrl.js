export default {
  name: "webSiteUrl",
  title: "Web site url",
  type: "url",
  description: "Url for the website to be tested (required) ",
  validation: (Rule) => Rule.required(),
  placeholder: "https://www.google.com/",
};
