import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_BUSINESS_DIRECTORY_RELATED_LIST_QUERY } from "../graphql";

export type GetPublicBusinessDirectoryListActionProps = {
  businessCategoryId: number;
};

export async function getPublicBusinessDirectoryRelatedListAction({
  businessCategoryId,
}: GetPublicBusinessDirectoryListActionProps) {
  const { data } = await client.query({
    query: GET_PUBLIC_BUSINESS_DIRECTORY_RELATED_LIST_QUERY,
    variables: {
      websiteId: settings?.websiteId,
      filter: {
        businessCategoryId: businessCategoryId,
      },
    },
  });

  return data;
}
