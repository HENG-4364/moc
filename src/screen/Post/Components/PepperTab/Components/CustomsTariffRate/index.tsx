import style from "./customs_tariff_rate.module.scss";
import CustomsTariffRateTable from "./components/CustomsTariffRateTable";
export const CustomsTariffRate = ({ dict }: any) => {
  const tableData = [
    {
      title: `${dict?.pepper?.tariff_rate?.united_state}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "0%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.india}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN", "LDC", "AIFTA"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "70%", "59.5%", "50%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.germany}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "0%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.vietnam}`,
      headers: [
        `${dict?.pepper?.tariff_rate?.market}`,
        "MFN",
        "AANZFTA",
        "ACFTA",
        "AJCEP",
        "AIFTA",
        "AKFTA",
        "RCEP",
        "ATIGA",
      ],
      data: [
        [
          `${dict?.pepper?.tariff_rate?.pepper}`,
          "20%",
          "0%",
          "0%",
          "0%",
          "0%",
          "0%",
          "20%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.french}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "0%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.egypt}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "2%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.pakistan}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "3%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.china}`,
      headers: [
        `${dict?.pepper?.tariff_rate?.market}`,
        "MFN",
        "ACFTA",
        "RCEP",
        "CCFTA",
        "LDC",
      ],
      data: [
        [
          `${dict?.pepper?.tariff_rate?.pepper}`,
          "20%",
          "5%",
          "17%",
          "14%",
          "0%",
        ],
      ],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.japan}`,
      headers: [
        `${dict?.pepper?.tariff_rate?.market}`,
        "MFN",
        "AJCEP",
        "RCEP",
        "LDC",
      ],
      data: [
        [`${dict?.pepper?.tariff_rate?.pepper}`, "3%", "0%", "2.3%", "0%"],
      ],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.united_arab_emirates}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN", "CAM-UAE"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "5%", "0%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.netherlands}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "0%"]],
    },
    {
      title: `${dict?.pepper?.tariff_rate?.morocco}`,
      headers: [`${dict?.pepper?.tariff_rate?.market}`, "MFN"],
      data: [[`${dict?.pepper?.tariff_rate?.pepper}`, "2,5%"]],
    },
  ];

  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.pepper?.tariff_rate?.title}
      </h2>

      <p
        className={`leading-10 ${style.accordion_text}`}
        style={{ textIndent: "50px" }}
      >
        {dict?.pepper?.tariff_rate?.desc_one}
        <sup>{dict?.pepper?.tariff_rate?.sup_desc_one}</sup>៖
      </p>
      {tableData.map((table, index) => (
        <div key={index}>
          <h3 className={`leading-10 pt-2 ${style.bold_smaller_text}`}>
            {table.title}
          </h3>
          <CustomsTariffRateTable columns={table.headers} data={table.data} />
        </div>
      ))}

      <div className="leading-10">
        <p>
          <strong>{dict?.pepper?.tariff_rate?.source}</strong>
        </p>
        <sup>{dict?.pepper?.tariff_rate?.sup_desc_one}</sup>
        {dict?.pepper?.tariff_rate?.source_desc}; Asean Tariff Finder
        <br />
      </div>
    </div>
  );
};
