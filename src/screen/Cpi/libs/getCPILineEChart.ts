import moment from "moment";

export function getCPILineEChart(data: any) {
  const names = data?.publicCPIBarChart?.cpi_groups?.map((x: any) => x?.name);

  function getDataByName(name: string) {
    const cpiData: any = [];

    data?.publicCPIBarChart?.data?.map((item: any) => {
      if (item[name]) {
        item[name]?.map((_item: any) => {
          const date = [
            moment(_item?.published_date).year(),
            moment(_item?.published_date).month() + 1,
            moment(_item?.published_date).date(),
          ].join("/");

          cpiData.push({
            name: name,
            value: [date, _item?.point],
          });
        });
      }
    });

    return cpiData;
  }

  const date = new Date();

  const option = {
    toolbox: {
      feature: {
        dataView: { show: true },
        saveAsImage: {
          show: true,
          name: `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}_cpiLineCharts`,
        },
      },
    },
    legend: {
      selectedMode: false,
    },
    grid: {
      left: 0,
      right: 0,
      top: 240,
      bottom: 0,
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: {
      type: "time",
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      alignTicks: true,
      axisLine: {
        show: true,
        alignWithLabel: true,
      },
      axisTick: {
        alignWithLabel: true,
      },
    },
    series: [
      ...names?.map((name: string) => {
        return {
          name: name,
          type: "line",
          smooth: true,
          data: getDataByName(name),
        };
      }),
    ],
  };

  return option;
}
