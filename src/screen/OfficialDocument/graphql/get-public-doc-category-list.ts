import { gql } from "@apollo/client";

export const PUBLIC_DOC_CATEGORY_LIST = gql`
  query publicDocumentCategoryDetail($slug: String, $websiteId: Int!) {
    publicDocumentCategoryDetail(slug: $slug, websiteId: $websiteId) {
      id
      category_name
      category_name_en
      slug
      files {
        title
        file_url
      }
      folders {
        id
        category_name
        category_name_en
        slug
      }
    }
    publicDocumentCategoryList(websiteId: $websiteId) {
      data {
        id
        category_name
        category_name_en
        slug
      }
    }
    menuIsPrimary(websiteId: $websiteId) {
      menu
    }
  }
`;
