import { gql } from "@apollo/client";

export const GET_PUBLIC_KEY_ECONOMIC_INDICATORS_QUERY = gql`
  query getPublicKeyEconomicIndicatorsQuery($websiteId: Int!) {
    publicKeyEconomicIndicators(websiteId: $websiteId) {
      gasolineIndicator {
        percentage
        date
      }
      cpiIndicator {
        percentage
        date
      }
    }
  }
`;
