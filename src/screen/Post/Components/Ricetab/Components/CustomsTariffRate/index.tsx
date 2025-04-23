"use client";
import CustomsTariffRateTable from "./components/CustomsTariffRateTable";
import style from "./customs-tariff-rate.module.scss";

export const CustomsTariffRate = ({ dict }: any) => {
  const tableData = [
    {
      title: `${dict?.rice?.tariff_rate?.indonesia}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "AHKFTA",
        "AIFTA",
        "AJCEP",
        "AKFTA",
        "AANZFTA",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.rice?.tariff_rate?.rice}`,
          "Rp.450/kg",
          "Rp.450/kg",
          "Rp.450/kg",
          "Rp.450/kg",
          "Rp.450/kg",
          "Rp.450/kg",
          "Rp.450/kg",
          "30%",
          "25%",
        ],
      ],
    },
    {
      title: `${dict?.rice?.tariff_rate?.philippine}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "AIFTA",
        "AJCEP",
        "AKFTA",
        "AANZFTA",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.rice?.tariff_rate?.rice}`,
          "15%",
          "15%",
          "15%",
          "15%",
          "15%",
          "15%",
          "15%",
        ],
      ],
    },
    {
      title: `${dict?.rice?.tariff_rate?.saudi_arabia}`,
      headers: [`${dict?.rice?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.rice?.tariff_rate?.rice}`, "0%"]],
    },
    {
      title: `${dict?.rice?.tariff_rate?.united_state}`,
      headers: [`${dict?.rice?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.rice?.tariff_rate?.rice}`, "11.2%"]],
    },
    {
      title: `${dict?.rice?.tariff_rate?.china}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "CCFTA",
        "RCEP",
      ],
      data: [[`${dict?.rice?.tariff_rate?.rice}`, "65%", "50%", "65%", "65%"]],
    },
    {
      title: `${dict?.rice?.tariff_rate?.malaysia}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "AJCEP",
        "AKFTA",
        "ATIGA",
      ],
      data: [
        [`${dict?.rice?.tariff_rate?.rice}`, "40%", "40%", "0%", "32%", "20%"],
      ],
    },
    {
      title: `${dict?.rice?.tariff_rate?.united_kingdom}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "DCTS (Comprehensive preferences)",
      ],
      data: [[`${dict?.rice?.tariff_rate?.rice}`, "15.02%", "0%"]],
    },
    {
      title: `${dict?.rice?.tariff_rate?.japan}`,
      headers: [`${dict?.rice?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.rice?.tariff_rate?.rice}`, "341 JPY/kg"]],
    },
    {
      title: `${dict?.rice?.tariff_rate?.vietnam}`,
      headers: [
        `${dict?.rice?.tariff_rate?.market}`,
        "MFN",
        "AANZFTA",
        "ACFTA",
        "AIFTA",
        "AJCEP",
        "AKFTA",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.rice?.tariff_rate?.rice}`,
          "40%",
          "0%",
          "5%",
          "0%",
          "0%",
          "0%",
          "40%",
          "5%",
        ],
      ],
    },
  ];

  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.rice?.tariff_rate?.title}
      </h2>

      <p className={`leading-9`} style={{ textIndent: "50px" }}>
        {dict?.rice?.tariff_rate?.desc_one}
        <sup>{dict?.rice?.tariff_rate?.sup_desc_one}</sup>៖
      </p>

      {tableData.map((table, index) => (
        <div key={index}>
          <h3 className={`leading-9 pt-2 ${style.bold_smaller_text}`}>
            {table.title}
          </h3>
          <CustomsTariffRateTable columns={table.headers} data={table.data} />
        </div>
      ))}

      <div className="leading-9">
        <p>
          <strong>{dict?.rice?.tariff_rate?.source}</strong>
        </p>
        <sup>{dict?.rice?.tariff_rate?.sup_desc_one}</sup>
        {dict?.rice?.tariff_rate?.source_desc}; Asean Tariff Finder
        <br />
      </div>
    </div>
  );
};
