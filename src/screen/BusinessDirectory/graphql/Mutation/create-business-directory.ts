import { gql } from "@apollo/client";

export const CREATE_BUSINESS_DIRECTORY_BY_PUBLIC_USER_MUTATION = gql`
 mutation CreateBusinessDirectoryByPublicUser($websiteId: Int!, $input: BusinessDirectoryInput) {
  createBusinessDirectoryByPublicUser(websiteId: $websiteId, input: $input)
}
`;
