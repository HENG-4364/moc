"use client";

import React from "react";
import dynamic from "next/dynamic";
import { MarketDemandBarEChartProps } from "../../../../types";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MarketDemandBarEChart = (props: MarketDemandBarEChartProps) => {
  const dict = props.dics;
  const chartOptions = {
    series: props.series,
    options: {
      chart: {
        height: 350,
        fontFamily: "Hanuman",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: props?.xaxis,
      // yaxis: {
      //   title: {
      //     text: "គិតជាពាន់ដុល្លារ",
      //   },
      // },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return "$ " + val + " millions";
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <p className="text-center mt-5">
          <strong>{dict?.rice?.market_demand?.chart_title}</strong>
        </p>
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={500}
          width="100%"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MarketDemandBarEChart;
