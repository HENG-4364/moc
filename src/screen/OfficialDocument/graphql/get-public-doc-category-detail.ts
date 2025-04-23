import { gql } from "@apollo/client";

export const PUBLIC_DOC_CATEGORY_DETAIL = gql`
  query publicDocumentCategoryDetail(
    $slug: String
    $websiteId: Int!
    $detail_filter: FilterPublicDocumentCategory
    $pagination: PaginationInput
  ) {
    publicDocumentCategoryDetail(
      slug: $slug
      websiteId: $websiteId
      filter: $detail_filter
      pagination: $pagination
    ) {
      id
      category_name
      slug
      files {
        title
        file_url
        published_date
      }
      folders {
        id
        category_name
        slug
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;
