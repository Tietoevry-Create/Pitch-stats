import S from "@sanity/desk-tool/structure-builder";
import { RiHome4Line, RiBracketsLine, RiMenuAddLine } from "react-icons/ri";
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
        .icon(RiMenuAddLine)
        .child(
          S.document()
            .schemaType("navigation")
            .documentId("navigation")
            .title("Meny")
        ),
      S.listItem()
        .title("Sider")
        .icon(RiBracketsLine)
        .child(S.documentTypeList("site")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["frontPage", "site", "footer", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
