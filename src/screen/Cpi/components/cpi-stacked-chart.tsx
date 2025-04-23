import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { getCPIStackedEChart } from "../libs/getCPIStackedEChart";

export const CPIStackedEChart = ({ data }: any) => {
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
      option={getCPIStackedEChart(data)}
      style={{ width: "100%", height: chartHeight }}
      opts={{ renderer: "svg" }}
    />
  );
};
