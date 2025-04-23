import { gql } from "@apollo/client";

export const GET_PUBLIC_DOCUMENT_CATEGORY_LIST_QUERY = gql`
  query getPublicDocumentCategoryListQuery($websiteId: Int!) {
    publicDocumentCategoryList(websiteId: $websiteId) {
      data {
        id
        category_name
        category_name_en
        slug
      }
    }
  }
`;
