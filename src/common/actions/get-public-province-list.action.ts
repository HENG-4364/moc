import { GET_PUBLIC_PROVINCE_LIST_QUERY } from "../graphql/query";
import { client } from "@/lib/graphql/apollo";

export async function getPublicProvinceListAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_PROVINCE_LIST_QUERY,
  });

  return data;
}
