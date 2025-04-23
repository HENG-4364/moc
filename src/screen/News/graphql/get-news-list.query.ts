import { gql } from "@apollo/client";

export const NEWS_QUERY = gql`
  query publicNewsList(
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

    publicNewsCategoryList(websiteId: $websiteId) {
      id
      name
      name_en
    }
  }
`;
