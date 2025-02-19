import style from "./market.module.scss";
import MarketDemandBarEChart from "./components/MarketDemandBarEChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PepperMarketDemandProps {
  dict: any; // Replace 'any' with a more specific type if available
}
const marketData = [
  { key: "world", data: [1171.42, 1131.25, 1546.66, 1751.11, 1221.1] },
  { key: "united_state", data: [185.93, 178.97, 257.11, 299.98, 196.4] },
  { key: "india", data: [93.15, 85.57, 171.74, 202.7, 162.42] },
  { key: "germany", data: [98.23, 86.09, 123.71, 122.56, 79.8] },
  { key: "vietnam", data: [65.11, 74.2, 75.98, 157.03, 77.0] },
  { key: "french", data: [32.43, 32.89, 49.44, 46.07, 40.68] },
  { key: "egypt", data: [43.61, 46.67, 46.5, 47.74, 37.45] },
  { key: "pakistan", data: [26.62, 28.09, 47.75, 28.92, 37.18] },
  { key: "china", data: [38.43, 60.76, 48.55, 38.23, 36.58] },
  { key: "japan", data: [25.0, 22.48, 30.91, 44.46, 32.63] },
  { key: "united_arab_emirates", data: [33.02, 37.69, 89.24, 99.43, 30.75] },
  { key: "netherlands", data: [27.37, 22.39, 31.99, 38.75, 29.27] },
  { key: "morocco", data: [19.02, 18.58, 16.0, 27.38, 25.99] },
];
export const MarketDemand = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.pepper?.market_demand?.title}
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        {dict?.pepper?.market_demand?.desc_one}
        <sup>{dict?.pepper?.market_demand?.sup_desc_one}</sup>
      </p>

      <p className="text-right leading-10">{dict?.pepper?.market_demand?.unit}</p>

      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className="font-bold">
              {dict?.pepper?.market_demand?.market}
            </TableHead>
            <TableHead className="font-bold">2019</TableHead>
            <TableHead className="font-bold">2020</TableHead>
            <TableHead className="font-bold">2021</TableHead>
            <TableHead className="font-bold">2022</TableHead>
            <TableHead className="font-bold">2023</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((row) => (
            <TableRow key={row.key} className="hover:bg-muted/50 text-base">
              <TableCell className="font-medium">
                {dict?.pepper?.market_demand[row.key]}
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
              196.4, 162.42, 79.8, 77.0, 40.68, 37.45, 37.18, 36.58, 32.63,
              30.75,
            ],
          },
          {
            name: "2022",
            data: [
              299.98, 202.7, 122.56, 157.03, 46.07, 47.74, 28.92, 38.23, 44.46,
              99.43,
            ],
          },
          {
            name: "2021",
            data: [
              257.11, 171.74, 123.71, 75.98, 49.44, 46.5, 47.75, 48.55, 30.91,
              89.24,
            ],
          },
          {
            name: "2020",
            data: [
              178.97, 85.57, 86.09, 74.2, 32.89, 46.67, 28.09, 60.76, 22.48,
              37.69,
            ],
          },
          {
            name: "2019",
            data: [
              185.93, 93.15, 98.23, 65.11, 32.43, 43.61, 26.62, 38.43, 25.0,
              33.02,
            ],
          },
        ]}
        xaxis={{
          categories: [
            `${dict?.pepper?.market_demand?.united_state}`,
            `${dict?.pepper?.market_demand?.india}`,
            `${dict?.pepper?.market_demand?.germany}`,
            `${dict?.pepper?.market_demand?.vietnam}`,
            `${dict?.pepper?.market_demand?.french}`,
            `${dict?.pepper?.market_demand?.egypt}`,
            `${dict?.pepper?.market_demand?.pakistan}`,
            `${dict?.pepper?.market_demand?.china}`,
            `${dict?.pepper?.market_demand?.japan}`,
            `${dict?.pepper?.market_demand?.united_arab_emirates}`,
          ],
        }}
      />
      <hr />
      <div className="lh-lg">
        <p>
          <strong>{dict?.pepper?.market_demand?.source}</strong>
        </p>
        <sup>{dict?.pepper?.market_demand?.sup_desc_one}</sup>
        ITC Trade Map
        <br />
      </div>
    </div>
  );
};
export default MarketDemand;
