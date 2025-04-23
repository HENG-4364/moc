import { gql } from '@apollo/client';

export const PUBLIC_USER_REGISTRATION_MUTATION = gql`
  mutation CreatePublicUser($input: CreatePublicUserInput) {
  createPublicUser(input: $input) {
    success
    message
  }
}
`;
