import { gql } from "@apollo/client";

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($password: String!) {
    changePassword(password: $password)
  }
`;
