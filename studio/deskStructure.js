import S from "@sanity/desk-tool/structure-builder";
import { RiHome4Line } from "react-icons/ri";
import { GiBarefoot } from "react-icons/gi";

export default () =>
  S.list()
    .title("Stats")
    .items([
      S.listItem()
        .title("Forside")
        .icon(RiHome4Line)
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.listItem()
        .title("Footer")
        .icon(GiBarefoot)
        .child(
          S.document().schemaType("footer").documentId("footer").title("Footer")
        ),
      S.listItem()
        .title("Meny")
        .child(
          S.document()
            .schemaType("navigation")
            .documentId("navigation")
            .title("Meny")
        ),
      S.listItem().title("Sider").child(S.documentTypeList("site")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["frontPage", "site", "footer", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
