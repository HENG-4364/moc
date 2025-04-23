import { gql } from "@apollo/client";

export const UPDATE_BUSINESS_DIRECTORY_MUTATION = gql`
  mutation BusinessDirectoryUpdateProfile(
    $businessDirectoryUpdateProfileId: Int!
    $websiteId: Int!
    $input: BusinessDirectoryUpdateProfileInput
  ) {
    businessDirectoryUpdateProfile(
      id: $businessDirectoryUpdateProfileId
      websiteId: $websiteId
      input: $input
    ) {
      message
      success
    }
  }
`;
