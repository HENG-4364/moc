import { gql } from "@apollo/client";

export const RESET_PASSWORD_MUTATION = gql`
mutation CreateNewPasswordPublicUser($input: CreateNewPasswordPublicUserInput) {
  createNewPasswordPublicUser(input: $input) {
    success
    message
  }
}
`;
