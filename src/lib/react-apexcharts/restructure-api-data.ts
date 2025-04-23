export function restructureApiData(data: any) {
  let insertedProduct: any = {};
  const series: any = {};
  const tableData: any = {};
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
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: true,
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
          offsetY: 0,
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
    tableData: [],
  };

  if (data) {
    for (const item of data) {
      if (!insertedProduct[`${item.product_name}`]) {
        sampleData.options.xaxis.categories.push(item.product_name);
      }

      insertedProduct[`${item.product_name}`] = item.product_name;

      if (!series[`${item.province_name}`]) {
        series[`${item.province_name}`] = {
          name: item.province_name,
          data: [],
        };
      }

      if (!tableData[`${item.province_name}`]) {
        tableData[`${item.province_name}`] = {
          name: item.province_name,
          data: [],
        };
      }

      series[`${item.province_name}`].data.push(item.daily_price);
      tableData[`${item.province_name}`].data.push({
        product_name: item.product_name,
        daily_price: item.daily_price,
      });
    }

    for (const key of Object.keys(series)) {
      sampleData.series.push(series[key]);
    }

    for (const key of Object.keys(tableData)) {
      sampleData.tableData.push(tableData[key]);
    }

    return sampleData;
  }
}
