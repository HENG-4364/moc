import { gql } from "@apollo/client";

export const GET_PUBLIC_PAGE_DETAIL_QUERY = gql`
  query getPublicPageDetailQuery($slug: String!, $websiteId: Int!) {
    publicPageDetail(slug: $slug, websiteId: $websiteId) {
      id
      title
      title_en
      description
      thumbnail
      slug
    }
  }
`;
