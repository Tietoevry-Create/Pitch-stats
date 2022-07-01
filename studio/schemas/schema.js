import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
//documents
import frontPage from "./documents/frontPage";
import site from "./documents/site";
import blockContent from "./fields/blockContent";
//fields
import title from "./fields/title";
import webSiteUrl from "./fields/webSiteUrl";
import category from "./documents/category";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    frontPage,
    site,
    category,
    title,
    webSiteUrl,
    blockContent,
  ]),
});
