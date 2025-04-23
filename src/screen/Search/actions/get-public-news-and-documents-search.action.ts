import { client } from "@/lib/graphql/apollo";
import { GET_PUBLIC_NEWS_AND_DOCUMENTS_SEARCH_QUERY } from "../gql";

export type GetPublicNewsAndDocumentsSearchActionProps = {
  q: string;
  news_page: string;
  doc_page: string;
};

export async function getPublicNewsAndDocumentsSearchAction({
  q,
  news_page,
  doc_page,
}: GetPublicNewsAndDocumentsSearchActionProps) {
  const { data } = await client.query({
    query: GET_PUBLIC_NEWS_AND_DOCUMENTS_SEARCH_QUERY,
    variables: {
      newsFilter: { title: q },
      documentsFilter: { title: q },
      newsPagination: { page: Number(news_page) || 1, size: 5 },
      documentsPagination: { page: Number(doc_page) || 1, size: 5 },
    },
  });

  return data;
}
