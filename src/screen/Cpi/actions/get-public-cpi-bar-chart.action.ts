import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_CPI_BAR_CHART_QUERY } from "../graphql";

export async function getPublicCPIBarChartAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_CPI_BAR_CHART_QUERY,
    variables: {
      websiteId: settings.websiteId,
    },
  });

  return data;
}
