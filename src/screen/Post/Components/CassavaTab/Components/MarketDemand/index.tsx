import MarketDemandBarEChart from "./components/MarketDemandBarEChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import style from "./market.module.scss"
const years = [2019, 2020, 2021, 2022, 2023];

const marketData = [
  { market: "world", data: [1344.94, 1603.63, 2752.29, 4101.98, 2625.24] },
  { market: "china", data: [641.71, 782.88, 1534.87, 2036.72, 1551.38] },
  { market: "thailand", data: [267.31, 419.10, 420.32, 565.09, 552.44] },
  { market: "vietnam", data: [194.18, 162.51, 543.36, 1175.86, 212.08] },
  { market: "united_state", data: [96.18, 91.47, 90.97, 109.25, 134.25] },
  { market: "korea", data: [42.08, 49.08, 62.47, 106.54, 63.65] },
  { market: "netherlands", data: [12.39, 12.16, 22.37, 33.16, 21.28] },
  { market: "spain", data: [14.22, 17.31, 13.74, 11.23, 16.15] },
  { market: "french", data: [9.27, 9.25, 8.09, 9.84, 14.81] },
  { market: "canada", data: [5.61, 5.89, 5.85, 6.97, 8.43] },
  { market: "united_kingdom", data: [5.01, 4.93, 5.07, 6.37, 6.82] },
];
export const MarketDemand = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.cassava?.market_demand?.title}
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        {dict?.cassava?.market_demand?.desc_one}
        <sup>{dict?.cassava?.market_demand?.sup_desc_one}</sup>
      </p>

      <p className="text-right">{dict?.cassava?.market_demand?.unit}</p>

      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>{dict?.cassava?.market_demand?.market}</TableHead>
            {years.map((year) => (
              <TableHead key={year}>{year}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((row) => (
            <TableRow key={row.market} className="text-base">
              <TableCell>{dict?.cassava?.market_demand[row.market]}</TableCell>
              {row.data.map((value, index) => (
                <TableCell key={index} >{value.toFixed(2)}</TableCell>
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
            data: [1551.38, 552.44, 212.08, 134.25, 63.65, 21.28],
          },
          {
            name: "2022",
            data: [2036.72, 565.09, 1175.86, 109.25, 106.54, 33.16],
          },
          {
            name: "2021",
            data: [1534.87, 420.32, 543.36, 90.97, 62.47, 22.37],
          },
          {
            name: "2020",
            data: [782.88, 419.1, 162.51, 91.47, 49.08, 12.16],
          },
          {
            name: "2019",
            data: [641.71, 267.31, 194.18, 96.18, 42.08, 12.39],
          },
        ]}
        xaxis={{
          categories: [
            `${dict?.cassava?.market_demand?.china}`,
            `${dict?.cassava?.market_demand?.thailand}`,
            `${dict?.cassava?.market_demand?.vietnam}`,
            `${dict?.cassava?.market_demand?.united_state}`,
            `${dict?.cassava?.market_demand?.korea}`,
            `${dict?.cassava?.market_demand?.netherlands}`,
          ],
        }}
      />
      <hr />
      <div className="lh-lg">
        <p>
          <strong>{dict?.cassava?.market_demand?.source}</strong>
        </p>
        <sup>{dict?.cassava?.market_demand?.sup_desc_one}</sup>
        ITC Trade Map
        <br />
      </div>
    </div>
  );
};
