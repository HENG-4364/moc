import { gql } from "@apollo/client";

export const NEWS_DETAIL = gql`
  query publicNewsDetail($id: Int!, $websiteId: Int!) {
    publicNewsDetail(id: $id, websiteId: $websiteId) {
      id
      title
      title_en
      description
      description_en
      thumbnail
      created_at
      published_date
      status
      summary
      summary_en
      category {
        id
        name
        name_en
      }
    }
  }
`;