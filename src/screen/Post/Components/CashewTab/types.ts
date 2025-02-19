export type MarketDemandBarEChartSeriesProps = {
  name: string;
  data: number[];
};
export type MarketDemandBarEChartXaxisProps = {
  categories: string[];
};

export type MarketDemandBarEChartProps = {
  series: MarketDemandBarEChartSeriesProps[];
  xaxis: MarketDemandBarEChartXaxisProps;
};
