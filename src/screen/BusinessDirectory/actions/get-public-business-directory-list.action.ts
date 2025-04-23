import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_BUSINESS_DIRECTORY_LIST_QUERY } from "../graphql";

export async function getPublicBusinessDirectoryListAction() {
    const { data } = await client.query({
        query: GET_PUBLIC_BUSINESS_DIRECTORY_LIST_QUERY,
        variables: {
            pagination: {
                page: 1,
                size: 10,
            },
            websiteId: settings.websiteId,
            busCategoryId: Number(null),
            //   businessDirectoryFilter: {
            //     filterInput: searchQuery,
            //   },
        },
    });

    return data;
}
