import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Stats")
    .items([
      S.listItem()
        .title("Forside")
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.listItem()
        .title("Footer")
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
