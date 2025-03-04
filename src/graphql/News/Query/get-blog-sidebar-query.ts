import { gql } from "@apollo/client";

export const BLOG_SIDEBAR_QUERY = gql`
  query blogSidebarQuery($filter: FilterNews, $pagination: PaginationInput,$websiteId: Int!) {
    publicNewsCategoryList(websiteId: $websiteId) {
      id
      name
      name_en
    }

    publicNewsList(filter: $filter, pagination: $pagination, websiteId: $websiteId) {
      data {
        id
        title
        title_en
        description
        thumbnail
        summary
        created_at
      }
    }
  }
`;