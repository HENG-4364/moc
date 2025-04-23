import { GET_SAS_IMPORT_EXPORT_QUERY } from "../graphql/query";
import { sasClient } from "../../lib/graphql/sasApollo";

export async function getSasImportExportAction() {
  const { data } = await sasClient.query({
    query: GET_SAS_IMPORT_EXPORT_QUERY,
  });

  return data;
}
