import moment from "moment";

export function getCPIStackedEChart(data: any) {
  const names = data?.publicCPIBarChart?.cpi_groups?.map((x: any) => x?.name);

  function getPointByName(name: string, idx: number) {
    const cpiData: any = [];

    data?.publicCPIBarChart?.data[idx][name]?.map((data: any) => {
      cpiData.push(data?.point);
    });

    return cpiData;
  }

  function getTotalPoints(dataIndex: number) {
    let totalPoints = 0;

    names?.map((name: string) => {
      data?.publicCPIBarChart?.data?.map((cpiData: any) => {
        if (cpiData[name]) {
          totalPoints += cpiData[name][dataIndex]?.point;
        }
      });
    });

    return totalPoints;
  }

  function getPercentage(value: number, totalValue: number) {
    if (totalValue === 0) {
      return 0;
    }

    return ((value / totalValue) * 100).toFixed(2);
  }

  const option = {
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
    yAxis: {
      type: "value",
    },
    xAxis: {
      type: "category",
      data: data?.publicCPIBarChart?.cpis?.map((x: any) => {
        return [
          moment(x?.published_date).year(),
          moment(x?.published_date).month() + 1,
          moment(x?.published_date).date(),
        ].join("/");
      }),
    },
    series: names?.map((name: any, idx: number) => {
      const points = getPointByName(name, idx);

      return {
        name,
        type: "bar",
        stack: "total",
        barWidth: "90%",
        label: {
          show: true,
          formatter: (params: any) => {
            const totalPoints = getTotalPoints(params.dataIndex);
            return getPercentage(Number(params?.value), totalPoints) + "%";
          },
        },
        data: points,
      };
    }),
    tooltip: {
      trigger: "axis",
    },
  };

  return option;
}
