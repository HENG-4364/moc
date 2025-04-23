import { restructureApiDataLine } from "@/lib/react-apexcharts";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { GET_PUBLIC_COMMODITY_PRICE_LINE_REPORT_QUERY } from "../graphql";
import { CommodityPriceLoading } from "./commodity-price-loading";
import { CommodityPriceNoData } from "./commodity-price-no-data";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type CommodityPriceLineChartProps = {
  filter: any;
};

export const CommodityPriceLineChart = ({
  filter,
}: CommodityPriceLineChartProps) => {
  const { data, loading } = useQuery(
    GET_PUBLIC_COMMODITY_PRICE_LINE_REPORT_QUERY,
    {
      variables: {
        commodityPriceLineReportFilter: filter,
      },
    }
  );

  if (!data || loading) return <CommodityPriceLoading />;

  if (data?.publicCommodityPriceLineReport?.items?.length <= 0)
    return <CommodityPriceNoData />;

  const chartData = restructureApiDataLine(
    data?.publicCommodityPriceLineReport?.items
  );

  return <Chart type="line" height="700" {...chartData} />;
};
