import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_PAGE_DETAIL_QUERY } from "../graphql";

export async function getPublicPageDetailAction(slug: any) {
  const { data } = await client.query({
    query: GET_PUBLIC_PAGE_DETAIL_QUERY,
    variables: {
      websiteId: settings?.websiteId,
      slug: slug,
    },
  });

  return data;
}
