import ReactECharts from "echarts-for-react";
import { getCPIBarEChart } from "../../libs/getCPIBarEChart";

const BarChart = ({ data }: any) => {
  return (
    <ReactECharts
      option={getCPIBarEChart(data)}
      style={{ width: "100%", height: "600px" }}
      opts={{ renderer: "svg" }}
    ></ReactECharts>
  );
};

export default BarChart;
