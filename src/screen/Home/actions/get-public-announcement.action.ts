import { client } from "@/lib/graphql/apollo";
import { GET_PUBLIC_ANNOUNCEMENT_QUERY } from "../graphql";
import { settings } from "@/lib/settings";

export async function getPublicAnnouncementAction() {
  const { data } = await client.query({
    query: GET_PUBLIC_ANNOUNCEMENT_QUERY,
    variables: {
      websiteId: settings.websiteId,
      pagination: {
        page: 1,
        size: 15,
      },
    },
  });

  return data;
}
