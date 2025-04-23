import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getCPIBarEChart } from "../libs/getCPIBarEChart";

export const CPIBarEChart = ({ data }: any) => {
  const [chartHeight, setChartHeight] = useState(window.innerHeight * 0.6);

  useEffect(() => {
    const handleResize = () => {
      setChartHeight(window.innerHeight * 0.6);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactECharts
      option={getCPIBarEChart(data)}
      style={{ width: "100%", height: chartHeight }}
      opts={{ renderer: "svg" }}
    />
  );
};
