import { gql } from "@apollo/client";

export const GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_LIST_QUERY = gql`
  query getPublicBusinessDirectoryCategoryListQuery($websiteId: Int!) {
    publicBusinessDirectoryCategoryList(websiteId: $websiteId) {
      data {
        thumbnail
        id
        name_kh
        name_en
      }
    }
  }
`;
