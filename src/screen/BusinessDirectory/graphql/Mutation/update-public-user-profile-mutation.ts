import { gql } from "@apollo/client";

export const UPDATE_PUBLIC_USER_ME_MUTATION = gql`
mutation Mutation($publicUserUpdateProfileId: Int!, $websiteId: Int!, $input: UpdatePublicUserInput) {
  publicUserUpdateProfile(id: $publicUserUpdateProfileId, websiteId: $websiteId, input: $input) {
    message
    success
  }
}
`;