
import { client } from "@/lib/graphql/apollo";
import { settings } from "@/lib/settings";
import { GET_PUBLIC_BUSINESS_DIRECTORY_DETAIL_QUERY } from "../graphql";

export async function getPublicBusinessDirectoryDetailAction({
    id,
}: {
    id: number;
}) {
    const { data } = await client.query({
        query: GET_PUBLIC_BUSINESS_DIRECTORY_DETAIL_QUERY,
        variables: {
            websiteId: settings.websiteId,
            publicBusinessDirectoryDetailId: id,
        },
    });

    return data;
}
