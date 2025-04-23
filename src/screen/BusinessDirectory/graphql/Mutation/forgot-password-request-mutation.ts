import { gql } from "@apollo/client";

export const FORGOT_PASSWORD_REQUEST_MUTATION = gql`
 mutation ForgotPasswordPublicUser($input: ForgotPasswordPublicUserInput) {
  forgotPasswordPublicUser(input: $input) {
    success
    message
  }
}
`;
