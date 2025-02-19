import moment from "moment";

export function getCPIBarEChart(data: any) {
  const names = data?.publicCPIBarChart?.cpi_groups?.map((x: any) => x?.name);

  function getPointByName(name: string, idx: number) {
    const cpiData: any = [];

    data?.publicCPIBarChart?.data[idx][name]?.map((data: any) => {
      cpiData.push(data?.point);
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
          }-${date.getFullYear()}_cpiBarCharts`,
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
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      data: data?.publicCPIBarChart?.cpis?.map((x: any) => {
        return [
          moment(x?.published_date).year(),
          moment(x?.published_date).month() + 1,
          moment(x?.published_date).date(),
        ].join("/");
      }),
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
    series: names?.map((name: any, idx: number) => {
      const points = getPointByName(name, idx);

      return {
        data: points,
        type: "bar",
        name: name,
        smooth: true,
      };
    }),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
  };

  return option;
}
