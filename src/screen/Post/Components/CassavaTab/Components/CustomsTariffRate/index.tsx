import style from "./customs-tariff-rate.module.scss";
import CustomsTariffRateTable from "./components/CustomsTariffRateTable";

export const CustomsTariffRate = ({ dict }: any) => {
  const tableData = [
    {
      title: `${dict?.cassava?.tariff_rate?.china}`,
      headers: [
        `${dict?.cassava?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "RCEP",
        "CCFTA",
        "LDC",
      ],
      data: [
        [
          `${dict?.cassava?.tariff_rate?.cassava}`,
          "10%",
          "0%",
          "0%",
          "0%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.thailand}`,
      headers: [
        `${dict?.cassava?.tariff_rate?.market}`,
        "MFN",
        "AJCEP",
        "ACFTA",
        "AHKFTA",
        "AIFTA",
        "AKFTA",
        "AANZFTA",
        "RCEP",
        "ATIGA",
        "LDC",
      ],
      data: [
        [
          `${dict?.cassava?.tariff_rate?.cassava}`,
          "40%",
          "0%",
          "0%",
          "20%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.vietnam}`,
      headers: [
        `${dict?.cassava?.tariff_rate?.market}`,
        "MFN",
        "AANZFTA",
        "ACFTA",
        "AHKFTA",
        "AIFTA",
        "AKFTA",
        "AJCEP",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.cassava?.tariff_rate?.cassava}`,
          "3%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.united_state}`,
      headers: [
        `${dict?.cassava?.tariff_rate?.market}`,
        "MFN",
        "Preferential tariff for GSP countries",
      ],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "7.9%", "0%"]],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.korea}`,
      headers: [
        `${dict?.cassava?.tariff_rate?.market}`,
        "MFN",
        "LDC",
        "AKFTA",
        "RCEP",
        "ASEAN",
      ],
      data: [
        [
          `${dict?.cassava?.tariff_rate?.cassava}`,
          "20%(tariff quota) or 887.4%",
          "887.4%",
          "887.4%",
          "887.4%",
          "887.4%",
        ],
      ],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.netherlands}`,
      headers: [`${dict?.cassava?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "8.6%", "0%"]],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.spain}`,
      headers: [`${dict?.cassava?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "8.6%", "0%"]],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.french}`,
      headers: [`${dict?.cassava?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "8.6%", "0%"]],
    },
    {
      title: `${dict?.cassava?.tariff_rate?.canada}`,
      headers: [`${dict?.cassava?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "0%"]],
    },

    {
      title: `${dict?.cassava?.tariff_rate?.united_kingdom}`,
      headers: [`${dict?.cassava?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [[`${dict?.cassava?.tariff_rate?.cassava}`, "8.67%", "0%"]],
    },
  ];

  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`lh-lg ${style.bold_text}`}>
        {dict?.cassava?.tariff_rate?.title}
      </h2>

      <p className={`lh-lg`} style={{ textIndent: "50px" }}>
        {dict?.cassava?.tariff_rate?.desc_one}
        <sup>{dict?.cassava?.tariff_rate?.sup_desc_one}</sup>៖
      </p>

      {tableData.map((table, index) => (
        <div key={index}>
          <h3 className={`lh-lg pt-2 ${style.bold_smaller_text}`}>
            {table.title}
          </h3>
          <CustomsTariffRateTable columns={table.headers} data={table.data} />
        </div>
      ))}
      <div className="lh-lg">
        <p>
          <strong>{ dict?.cassava?.tariff_rate?.source}</strong>
        </p>
        <sup>{dict?.cassava?.tariff_rate?.sup_desc_one}</sup>
        {dict?.cassava?.tariff_rate?.source_desc}; Asean Tariff Finder
        <br />
      </div>
    </div>
  );
};
