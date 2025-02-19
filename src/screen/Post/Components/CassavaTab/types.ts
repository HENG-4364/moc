export type MarketDemandBarEChartSeriesProps = {
  name: string;
  data: number[];
};
export type MarketDemandBarEChartXaxisProps = {
  categories: string[];
};

export type MarketDemandBarEChartProps = {
  dics?: any;
  series: MarketDemandBarEChartSeriesProps[];
  xaxis: MarketDemandBarEChartXaxisProps;
};
