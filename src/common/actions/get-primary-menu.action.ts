import { settings } from "@/lib/settings";
import { GET_PRIMARY_MENU_QUERY } from "../graphql/query";
import { client } from "@/lib/graphql/apollo";

export async function getPrimaryMenuAction() {
  const { data } = await client.query({
    query: GET_PRIMARY_MENU_QUERY,
    variables: {
      websiteId: settings?.websiteId,
    },
  });

  const menuData =
    data?.menuIsPrimary?.menu && JSON.parse(data?.menuIsPrimary?.menu);

  return {
    primaryMenu: menuData?.pages?.length > 0 && menuData?.pages[0]?.children,
  };
}
