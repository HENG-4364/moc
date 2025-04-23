import { gql } from "@apollo/client";

export const GET_PRIMARY_MENU_QUERY = gql`
  query getPrimaryMenuQuery($websiteId: Int!) {
    menuIsPrimary(websiteId: $websiteId) {
      menu
    }
  }
`;
