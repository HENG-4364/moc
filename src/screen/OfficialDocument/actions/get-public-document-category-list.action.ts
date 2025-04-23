import { client } from "@/lib/graphql/apollo";
import { GET_PUBLIC_DOCUMENT_CATEGORY_LIST_QUERY } from "../graphql";
import { settings } from "@/lib/settings";

export async function getPublicDocumentCategoryListAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_DOCUMENT_CATEGORY_LIST_QUERY,
    variables: {
      websiteId: settings.websiteId,
    },
  });

  return data;
}
