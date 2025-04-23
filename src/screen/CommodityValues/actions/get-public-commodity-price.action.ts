import { settings } from "@/lib/settings";
import { GET_PUBLIC_COMMODITY_PRICE_QUERY } from "../graphql";
import { client } from "@/lib/graphql/apollo";
import moment from "moment";

type Province = {
  value: number;
  label: string;
};

type Product = {
  value: number;
  label: string;
};

export type GetPublicCommodityPriceActionProps = {
  provinces: Province[];
  products: Product[];
  date: string;
};

export async function getPublicCommodityPriceAction({
  provinces,
  products,
  date,
}: GetPublicCommodityPriceActionProps) {
  const { data } = await client.query({
    query: GET_PUBLIC_COMMODITY_PRICE_QUERY,
    variables: {
      commodityPriceFilter: {
        byProvince:
          provinces
            ?.filter((item: any) => item.value !== "*")
            .map((i) => i?.value) || [],
        byDate: moment(date).format("YYYY-MM-DD"),
        byProductId:
          products
            ?.filter((item: any) => item.value !== "*")
            .map((i) => i.value) || [],
      },
    },
  });

  return data;
}
