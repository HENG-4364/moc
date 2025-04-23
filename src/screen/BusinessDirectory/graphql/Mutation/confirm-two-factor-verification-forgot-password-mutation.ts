import { gql } from "@apollo/client";

export const CONFIRM_TWO_FACTOR_VERIFICATION_MUTATION = gql`
 mutation ConfirmTwoFactorVerificationForgotPassword($input: ConfirmTwoFactorVerificationForgotPasswordInput) {
  confirmTwoFactorVerificationForgotPassword(input: $input) {
    token
    success
    message
  }
}
`;