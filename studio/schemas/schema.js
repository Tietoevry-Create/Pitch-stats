import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
//documents
import frontPage from "./documents/frontPage";
import site from "./documents/site";
import category from "./documents/category";
import footer from "./documents/footer";
//fields
import title from "./fields/title";
import webSiteUrl from "./fields/webSiteUrl";
import blockContent from "./fields/blockContent";
import link from "./fields/link";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    frontPage,
    site,
    category,
    title,
    webSiteUrl,
    blockContent,
    link,
    footer,
  ]),
});
