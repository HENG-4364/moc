import { gql } from "@apollo/client";

export const GET_PUBLIC_COMMODITY_PRICE_LINE_REPORT_QUERY = gql`
  query publicCommodityPriceLineReportQuery(
    $commodityPriceLineReportFilter: CommodityPriceDetailLineReportFilter
  ) {
    publicCommodityPriceLineReport(
      reportLineFilter: $commodityPriceLineReportFilter
    ) {
      items {
        id
        data {
          x
          y
        }
      }
    }
  }
`;
