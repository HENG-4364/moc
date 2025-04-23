import { gql } from "@apollo/client";

export const GET_PUBLIC_CPI_BAR_CHART_QUERY = gql`
  query getPublicCPIBarChartQuery(
    $websiteId: Int!
    $goods: [Int]
    $limit: Int
  ) {
    publicCPIBarChart(websiteId: $websiteId, goods: $goods, limit: $limit)
  }
`;
