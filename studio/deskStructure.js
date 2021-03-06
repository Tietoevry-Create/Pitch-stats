import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Front Page")
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.listItem().title("Sites").child(S.documentTypeList("site")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["frontPage", "site"].includes(listItem.getId())
      ),
    ]);
