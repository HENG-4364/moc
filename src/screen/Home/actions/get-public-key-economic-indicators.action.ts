import { client } from "@/lib/graphql/apollo";
import { GET_PUBLIC_KEY_ECONOMIC_INDICATORS_QUERY } from "../graphql";
import { settings } from "@/lib/settings";

export async function getPublicKeyEconomicIndicatorsAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_KEY_ECONOMIC_INDICATORS_QUERY,
    variables: {
      websiteId: settings.websiteId,
    },
  });

  return data;
}
