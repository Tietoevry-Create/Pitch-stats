export default {
  name: "webSiteUrl",
  title: "Web site url",
  type: "url",
  description: "Url for the website to be tested (rquired) ",
  validation: (Rule) => Rule.required(),
};
