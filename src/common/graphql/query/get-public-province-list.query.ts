import { gql } from "@apollo/client";

export const GET_PUBLIC_PROVINCE_LIST_QUERY = gql`
  query publicProvinceListQuery {
    publicProvinceList {
      id
      name
    }
  }
`;
