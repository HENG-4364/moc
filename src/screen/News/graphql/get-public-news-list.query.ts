import { gql } from "@apollo/client";

export const GET_PUBLIC_NEWS_LIST_QUERY = gql`
  query getPublicNewsListQuery(
    $filter: FilterNews
    $pagination: PaginationInput
    $lazyLoading: LazyLoadingInput
    $websiteId: Int!
    $newsCategoryId: Int
  ) {
    publicNewsList(
      filter: $filter
      pagination: $pagination
      lazyLoading: $lazyLoading
      websiteId: $websiteId
      newsCategoryId: $newsCategoryId
    ) {
      data {
        id
        title
        title_en
        description
        description_en
        thumbnail
        summary
        summary_en
        created_at
        published_date
        is_key_activity
        category {
          id
          name
          name_en
        }
      }
      lazyLoading {
        limit
      }
      pagination {
        total
      }
    }
  }
`;
