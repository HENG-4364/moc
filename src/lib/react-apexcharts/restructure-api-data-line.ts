export function restructureApiDataLine(data: any) {
  const sampleData: any = {
    options: {
      legend: {
        position: "right",
        offsetX: -30,
        offsetY: 50,
      },
      chart: {
        fontFamily: "Hanuman, Arial, sans-serif",
        offsetY: 50,
        parentHeightOffset: 100,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "85%",
          endingShape: "rounded",
        },
      },
      xaxis: {
        categories: [],
        labels: {
          show: true,
          rotate: -35,
          rotateAlways: true,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "Hanuman, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
          offsetX: 0,
          offsetY: 15,
          format: undefined,
          formatter: undefined,
          datetimeUTC: true,
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
        },
      },
      yaxis: {
        title: {
          text: "តំលៃប្រចាំថ្ងៃគិតជា (៛)",
        },
      },
    },
    series: [],
  };

  if (data) {
    let series_item: any = {};
    let series_data;
    let xaxis_available = 0;
    for (const item of data) {
      series_item = {};
      series_item["name"] = item?.id;

      if (item?.data) {
        series_data = [];
        for (const x of item?.data) {
          series_data.push(x?.y);

          if (xaxis_available === 0) {
            sampleData["options"]["xaxis"]["categories"] = [
              ...sampleData["options"]["xaxis"]["categories"],
              x?.x,
            ];
          }
        }

        xaxis_available = 1;
        series_item["data"] = series_data;
      }

      sampleData["series"] = [...sampleData["series"], series_item];
    }

    return sampleData;
  }

  return sampleData;
}
