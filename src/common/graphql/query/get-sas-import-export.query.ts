import { gql } from "@apollo/client";

export const GET_SAS_IMPORT_EXPORT_QUERY = gql`
  query getSasImportExportQuery {
    exportTradeProductCategory {
      total_value
      id
      description_eng
      description_kh
    }

    importTradeProductCategory {
      total_value
      id
      description_eng
      description_kh
    }
  }
`;
