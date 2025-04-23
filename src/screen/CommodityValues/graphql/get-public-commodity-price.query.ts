import { gql } from "@apollo/client";

export const GET_PUBLIC_COMMODITY_PRICE_QUERY = gql`
  query publicCommodityPriceQuery(
    $commodityPriceFilter: CommodityDetailFilter
  ) {
    publicCommodityPrice(commodityPriceFilter: $commodityPriceFilter) {
      daily_price
      product_name
      province_name
    }
  }
`;
