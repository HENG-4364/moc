import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
 mutation SignInPublicUser($input: SignInPublicUserInput) {
  signInPublicUser(input: $input) {
    token
  }
}
`;
