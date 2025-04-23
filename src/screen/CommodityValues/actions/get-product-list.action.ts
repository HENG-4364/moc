import { settings } from "@/lib/settings";
import { GET_PRODUCT_LIST_QUERY } from "../graphql";
import { client } from "@/lib/graphql/apollo";

export async function getProductListAction() {
  const { data } = await client.query({
    query: GET_PRODUCT_LIST_QUERY,
    variables: {
      websiteId: settings?.websiteId,
    },
  });

  return data;
}
