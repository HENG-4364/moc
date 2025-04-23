import { gql } from "@apollo/client";

export const GET_PRODUCT_LIST_QUERY = gql`
  query productListQuery($websiteId: Int!) {
    productList(websiteId: $websiteId) {
      data {
        id
        name
      }
    }
  }
`;
