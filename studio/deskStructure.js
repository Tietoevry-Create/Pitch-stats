import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Front Page")
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.listItem()
        .title("Footer")
        .child(
          S.document().schemaType("footer").documentId("footer").title("Footer")
        ),
      S.listItem()
        .title("Menu")
        .child(
          S.document()
            .schemaType("navigation")
            .documentId("navigation")
            .title("Menu")
        ),
      S.listItem().title("Sites").child(S.documentTypeList("site")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["frontPage", "site", "footer", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
