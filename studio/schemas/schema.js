import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
//documents
import frontPage from "./documents/frontPage";
import site from "./documents/site";
//fields
import title from "./fields/title";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([frontPage, site, title]),
});
