import { client } from "@/lib/graphql/apollo";
import { PUBLIC_DOC_CATEGORY_LIST } from "../graphql";
import { settings } from "@/lib/settings";

export async function getPublicDocCategoryListAction(parent_slug: string) {
  const { data } = await client.query({
    query: PUBLIC_DOC_CATEGORY_LIST,
    variables: {
      slug: parent_slug,
      websiteId: settings.websiteId,
      timestamp: new Date().getTime(),
    },
  });

  return {
    document_category: data.publicDocumentCategoryDetail || null,
    document_category_id: parent_slug,
    menu: data.menuIsPrimary || null,
    documentCategory: data.publicDocumentCategoryList?.data || [],
  };
}
