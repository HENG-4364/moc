import { gql } from "@apollo/client";

export const GET_PUBLIC_NEWS_AND_DOCUMENTS_SEARCH_QUERY = gql`
  query getPublicNewsAndDocumentsSearchQuery(
    $newsFilter: NewsSearchFilter
    $documentsFilter: DocumentsSearchFilter
    $newsPagination: PaginationInput
    $documentsPagination: PaginationInput
  ) {
    publicNewsSearch(filter: $newsFilter, pagination: $newsPagination) {
      data {
        id
        title
        summary
        title_en
        summary_en
        published_date
        thumbnail
      }
      pagination {
        total
        size
        current
      }
    }

    publicDocumentsSearch(
      filter: $documentsFilter
      pagination: $documentsPagination
    ) {
      data {
        id
        title
        file_url
      }
      pagination {
        total
        size
        current
      }
    }
  }
`;
