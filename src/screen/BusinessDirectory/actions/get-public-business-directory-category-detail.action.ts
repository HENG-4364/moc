
import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_DETAIL } from "../graphql/get-public-business-directory-category-detail-query";

export async function getPublicBusinessDirectoryCategoryDetailAction({
  id,
}: {
  id: number;
}) {
  const { data } = await client.query({
    query: GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_DETAIL,
    variables: {
      websiteId: settings.websiteId,
      publicBusinessDirectoryCategoryDetailId: id,
    },
  });

  return data;
}
