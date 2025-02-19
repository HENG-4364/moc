import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import style from "./market.module.scss";
import MarketDemandBarEChart from "./components/MarketDemandBarEChart";

export const MarketDemand = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.pailin_longan?.market_demand?.title}
      </h2>

      <p className="ms-1 leading-10" style={{ textIndent: "50px" }}>
        {dict?.pailin_longan?.market_demand?.desc_one}
        <sup>{dict?.pailin_longan?.market_demand?.sup_desc_one}</sup>
      </p>

      <p className="text-right">{dict?.pailin_longan?.market_demand?.unit}</p>

      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>{dict?.pailin_longan?.market_demand?.market}</TableHead>
            <TableHead>២០១៩</TableHead>
            <TableHead>២០២០</TableHead>
            <TableHead>២០២១</TableHead>
            <TableHead>២០២២</TableHead>
            <TableHead>២០២៣</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              key: "world",
              data: [3416.06, 3614.15, 4274.33, 3855.06, 3436.29],
            },
            { key: "china", data: [919.1, 1177.19, 1438.11, 1268.56, 877.03] },
            {
              key: "united_state",
              data: [216.04, 243.94, 275.11, 306.31, 350.57],
            },
            {
              key: "netherlands",
              data: [238.08, 243.9, 302.19, 281.37, 238.71],
            },
            { key: "germany", data: [135.04, 145.32, 150.19, 149.99, 171.15] },
            {
              key: "hong_kong",
              data: [188.76, 187.98, 297.12, 146.86, 125.83],
            },
            { key: "french", data: [100.21, 95.03, 119.24, 109.71, 122.38] },
            {
              key: "russia_federation",
              data: [125.19, 142.69, 140.14, 118.62, 120.42],
            },
            { key: "indonesia", data: [144.93, 72.56, 120.72, 141.99, 110.38] },
            { key: "vietnam", data: [144.79, 40.71, 22.78, 29.31, 102.14] },
            { key: "canada", data: [61.0, 69.46, 81.34, 87.57, 93.54] },
            {
              key: "united_kingdom",
              data: [66.14, 57.61, 81.31, 72.85, 86.22],
            },
            {
              key: "united_arab_emirates",
              data: [69.9, 75.79, 83.52, 86.05, 60.46],
            },
          ].map((row) => (
            <TableRow key={row.key} className="text-base">
              <TableCell>
                {dict?.pailin_longan?.market_demand[row.key]}
              </TableCell>
              {row.data.map((value, index) => (
                <TableCell key={index}>{value.toFixed(2)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MarketDemandBarEChart
        dics={dict}
        series={[
          {
            name: "2023",
            data: [
              877.03, 350.57, 238.71, 171.15, 125.83, 122.38, 120.42, 110.38,
              102.14, 93.54, 86.22, 60.46,
            ],
          },
          {
            name: "2022",
            data: [
              1268.56, 306.31, 281.37, 149.99, 146.86, 109.71, 118.62, 141.99,
              29.31, 87.57, 72.85, 86.05,
            ],
          },
          {
            name: "2021",
            data: [
              1438.11, 275.11, 302.19, 150.19, 297.12, 119.24, 140.14, 120.72,
              22.78, 81.34, 81.31, 83.52,
            ],
          },
          {
            name: "2020",
            data: [
              1177.19, 243.94, 243.9, 145.32, 187.98, 95.03, 142.69, 72.56,
              40.71, 69.46, 57.61, 75.79,
            ],
          },
          {
            name: "2019",
            data: [
              919.1, 216.04, 238.08, 135.04, 188.76, 100.21, 125.19, 144.93,
              144.79, 61.0, 66.14, 69.9,
            ],
          },
        ]}
        xaxis={{
          categories: [
            `${dict?.pailin_longan?.market_demand?.china}`,
            `${dict?.pailin_longan?.market_demand?.united_state}`,
            `${dict?.pailin_longan?.market_demand?.netherlands}`,
            `${dict?.pailin_longan?.market_demand?.germany}`,
            `${dict?.pailin_longan?.market_demand?.hong_kong}`,
            `${dict?.pailin_longan?.market_demand?.french}`,
            `${dict?.pailin_longan?.market_demand?.russia_federation}`,
            `${dict?.pailin_longan?.market_demand?.indonesia}`,
            `${dict?.pailin_longan?.market_demand?.vietnam}`,
            `${dict?.pailin_longan?.market_demand?.canada}`,
            `${dict?.pailin_longan?.market_demand?.united_kingdom}`,
            `${dict?.pailin_longan?.market_demand?.united_arab_emirates}`,
          ],
        }}
      />
      <hr />
      <div className="lh-lg">
        <p>
          <strong>{dict?.pailin_longan?.market_demand?.source}</strong>
        </p>
        <sup>{dict?.pailin_longan?.market_demand?.sup_desc_one}</sup>ITC Trade
        Map
        <br />
      </div>
    </div>
  );
};
