import { gql } from "@apollo/client";

export const VERIFY_OTP_PUBLIC_USER_MUTATION = gql`
 mutation VerifyOTPPublicUser($input: VerifyOTPPublicUserInput) {
  verifyOTPPublicUser(input: $input) {
    message
    success
  }
}
`;
