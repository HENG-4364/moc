import CustomsTariffRateTable from "./components/CustomsTariffRateTable";
import style from "./customs-tariff-rate.module.scss";
export const CustomsTariffRate = ({ dict }: any) => {
  const tableData = [
    {
      title: `${dict?.pailin_longan?.tariff_rate?.china}`,
      headers: [
        `${dict?.pailin_longan?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "RCEP",
        "CCFTA",
        "LDC",
      ],
      data: [
        [
          `${dict?.pailin_longan?.tariff_rate?.pailin_longan}`,
          "12%",
          "0%",
          "0%",
          "0%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.united_state}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [
        [`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "2.2%", "0%"],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.netherlands}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [
        [`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "8.8%", "0%"],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.germany}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN", "LDC"],
      data: [
        [`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "8.8%", "0%"],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.hong_kong}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN", "AHKFTA"],
      data: [
        [`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "0%", "0%"],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.french}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "8.8%"]],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.russia_federation}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "0%"]],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.indonesia}`,
      headers: [
        `${dict?.pailin_longan?.tariff_rate?.market}`,
        "MFN",
        "AANZFTA",
        "ACFTA",
        "AHKFTA",
        "AIFTA",
        "AJCEP",
        "AKFTA",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.pailin_longan?.tariff_rate?.pailin_longan}`,
          "5%",
          "0%",
          "0%",
          "0%",
          "3.11%",
          "0%",
          "0%",
          "3%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.vietnam}`,
      headers: [
        `${dict?.pailin_longan?.tariff_rate?.market}`,
        "MFN",
        "AANZFTA",
        "ACFTA",
        "AHKFTA",
        "AIFTA",
        "AJCEP",
        "AKFTA",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.pailin_longan?.tariff_rate?.pailin_longan}`,
          "25%",
          "0%",
          "0%",
          "10%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.canada}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "0%"]],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.united_kingdom}`,
      headers: [`${dict?.pailin_longan?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "0%"]],
    },
    {
      title: `${dict?.pailin_longan?.tariff_rate?.united_arab_emirates}`,
      headers: [
        `${dict?.pailin_longan?.tariff_rate?.market}`,
        "MFN",
        "CAM-UAE",
      ],
      data: [
        [`${dict?.pailin_longan?.tariff_rate?.pailin_longan}`, "0%", "0%"],
      ],
    },
  ];

  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`lh-lg ${style.bold_text}`}>
        {dict?.pailin_longan?.tariff_rate?.title}
      </h2>

      <p className={` lh-lg `} style={{ textIndent: "50px" }}>
        {dict?.pailin_longan?.tariff_rate?.desc_one}
        <sup>{dict?.pailin_longan?.tariff_rate?.sup_desc_one}</sup>៖
      </p>

      {tableData.map((table, index) => (
        <div key={index}>
          <h3 className={`lh-lg  ${style.bold_smaller_text}`}>{table.title}</h3>
          <CustomsTariffRateTable columns={table.headers} data={table.data} />
        </div>
      ))}
      <div className="lh-lg">
        <p>
          <strong>{dict?.pailin_longan?.tariff_rate?.source}</strong>
        </p>
        <sup>{dict?.pailin_longan?.tariff_rate?.sup_desc_one}</sup>
        {dict?.pailin_longan?.tariff_rate?.source_desc}; Asean Tariff Finder
        <br />
      </div>
    </div>
  );
};
