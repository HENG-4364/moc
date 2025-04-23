import { gql } from "@apollo/client";

export const GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_DETAIL = gql`
 query PublicBusinessDirectoryCategoryDetail($publicBusinessDirectoryCategoryDetailId: Int!, $websiteId: Int!) {
  publicBusinessDirectoryCategoryDetail(id: $publicBusinessDirectoryCategoryDetailId, websiteId: $websiteId) {
    id
    thumbnail
    name_kh
    name_en
    created_by
    updated_by
    created_at
  }
}
`;
