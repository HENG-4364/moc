import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_CPI_GROUP_LIST_QUERY } from "../graphql";

export async function getPublicCPIGroupListAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_CPI_GROUP_LIST_QUERY,
    variables: {
      websiteId: settings.websiteId,
    },
  });

  return data;
}
