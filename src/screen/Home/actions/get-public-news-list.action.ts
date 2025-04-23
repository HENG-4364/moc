import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_NEWS_LIST_QUERY } from "@/screen/News/graphql";

export async function getPublicNewsListAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_NEWS_LIST_QUERY,
    variables: {
      filter: {
        status: "PUBLISHED",
        is_key_activity: 1,
      },
      lazyLoading: {
        limit: 3,
      },
      websiteId: settings.websiteId,
    },
  });

  return data;
}
