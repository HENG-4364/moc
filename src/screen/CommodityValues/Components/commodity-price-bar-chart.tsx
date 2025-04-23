import { restructureApiData } from "@/lib/react-apexcharts";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { GET_PUBLIC_COMMODITY_PRICE_QUERY } from "../graphql";
import { CommodityPriceLoading } from "./commodity-price-loading";
import { CommodityPriceNoData } from "./commodity-price-no-data";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type CommodityPriceBarChartProps = {
  filter: any;
};

export const CommodityPriceBarChart = ({
  filter,
}: CommodityPriceBarChartProps) => {
  const { data, loading } = useQuery(GET_PUBLIC_COMMODITY_PRICE_QUERY, {
    variables: {
      commodityPriceFilter: filter,
    },
  });

  if (!data || loading) return <CommodityPriceLoading />;

  if (!data?.publicCommodityPrice) return <CommodityPriceNoData />;

  const chartData = restructureApiData(data?.publicCommodityPrice);

  return <Chart type="bar" height="700" {...chartData} />;
};
