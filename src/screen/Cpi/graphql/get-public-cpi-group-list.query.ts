import { gql } from "@apollo/client";

export const GET_PUBLIC_CPI_GROUP_LIST_QUERY = gql`
  query getPublicCPIGroupListQuery($websiteId: Int!) {
    publicCPIGroupList(websiteId: $websiteId) {
      id
      name
      base_point
    }
  }
`;
