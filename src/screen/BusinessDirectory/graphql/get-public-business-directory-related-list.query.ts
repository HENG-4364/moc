import { gql } from "@apollo/client";

export const GET_PUBLIC_BUSINESS_DIRECTORY_RELATED_LIST_QUERY = gql`
  query publicBusinessDirectoryRelatedListQuery(
    $websiteId: Int!
    $filter: BusinessDirectoryRelatedFilter
  ) {
    publicBusinessDirectoryRelatedList(websiteId: $websiteId, filter: $filter) {
      id
      business_name
      business_name_en
      business_logo
    }
  }
`;
