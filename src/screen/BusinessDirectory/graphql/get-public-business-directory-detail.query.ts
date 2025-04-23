import { gql } from "@apollo/client";

export const GET_PUBLIC_BUSINESS_DIRECTORY_DETAIL_QUERY = gql`
  query publicBusinessDirectoryDetailQuery(
    $publicBusinessDirectoryDetailId: Int!
    $websiteId: Int!
  ) {
    publicBusinessDirectoryDetail(
      id: $publicBusinessDirectoryDetailId
      websiteId: $websiteId
    ) {
      id
      business_name
      business_name_en
      business_logo
      public_user {
        id
        first_name
        last_name
        profile_picture
        phone_number
        email
        password
        status
        is_updated
        updated_at
        created_at
      }
      business_directory_category {
        id
        thumbnail
        name_kh
        name_en
        created_by
        updated_by
        created_at
      }
      started_date
      ended_date
      service
      service_en
      province
      province_en
      district
      district_en
      commune
      commune_en
      village
      village_en
      home_number
      street_number
      email
      website_url
      phone_number
      facebook_url
      youtube_url
      telegram_url
      tiktok_url
      map_url
      thumbnail
      banner
      published_date
      website_id
      active
      status
      created_at
      is_updated
    }
  }
`;
