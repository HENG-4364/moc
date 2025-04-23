import { gql } from "@apollo/client";

export const GET_PUBLIC_ANNOUNCEMENT_QUERY = gql`
  query getPublicAnnouncementListQuery(
    $websiteId: Int!
    $pagination: PaginationInput
  ) {
    publicAnnounceList(websiteId: $websiteId, pagination: $pagination) {
      data {
        id
        name
        name_en
        link
        published_date
      }
    }
  }
`;
