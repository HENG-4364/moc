import { client } from "@/lib/graphql/apollo";
import { NEWS_DETAIL } from "../graphql";
import { settings } from "@/lib/settings";

export async function getData(params: any) {
    const { id } = await params;
    const { data, loading } = await client.query({
        query: NEWS_DETAIL,
        variables: {
            id: Number(id),
            websiteId: settings.websiteId,
        },
    });
    return {
        news: data.publicNewsDetail,
    };
}