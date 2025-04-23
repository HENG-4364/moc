import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MarketDemandBarEChart from "./components/MarketDemandBarEChart";
import style from "./market.module.scss"
interface Dict {
  rice: {
    market_demand: {
      title: string;
      desc_one: string;
      sup_desc_one: string;
      unit: string;
      market: string;
      world: string;
      indonesia: string;
      philippine: string;
      saudi_arabia: string;
      united_state: string;
      china: string;
      irak: string;
      malaysia: string;
      united_kingdom: string;
      japan: string;
      vietnam: string;
      source: string;
    };
  };
}

interface MarketDemandProps {
  dict: Dict;
}

export const MarketDemand = ({ dict }: MarketDemandProps) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.rice?.market_demand?.title}
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        {dict?.rice?.market_demand?.desc_one}
        <sup>{dict?.rice?.market_demand?.sup_desc_one}</sup>
      </p>

      <p className="text-right">{dict?.rice?.market_demand?.unit}</p>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-lg">
              <TableHead>{dict?.rice?.market_demand?.market}</TableHead>
              <TableHead>2019</TableHead>
              <TableHead>2020</TableHead>
              <TableHead>2021</TableHead>
              <TableHead>2022</TableHead>
              <TableHead>2023</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.world}</TableCell>
              <TableCell>25,474.17</TableCell>
              <TableCell>26,655.73</TableCell>
              <TableCell>29,322.88</TableCell>
              <TableCell>33,659.59</TableCell>
              <TableCell>33,359.72</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.indonesia}</TableCell>
              <TableCell>184.25</TableCell>
              <TableCell>195.41</TableCell>
              <TableCell>183.80</TableCell>
              <TableCell>202.04</TableCell>
              <TableCell>1,789.02</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.philippine}</TableCell>
              <TableCell>1,009.69</TableCell>
              <TableCell>862.01</TableCell>
              <TableCell>1,196.91</TableCell>
              <TableCell>1,273.46</TableCell>
              <TableCell>1,635.58</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.saudi_arabia}</TableCell>
              <TableCell>1,415.09</TableCell>
              <TableCell>1,404.24</TableCell>
              <TableCell>1,094.95</TableCell>
              <TableCell>1,387.97</TableCell>
              <TableCell>1,535.43</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.united_state}</TableCell>
              <TableCell>1,086.35</TableCell>
              <TableCell>1,283.84</TableCell>
              <TableCell>1,017.32</TableCell>
              <TableCell>1,405.74</TableCell>
              <TableCell>1,422.52</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.china}</TableCell>
              <TableCell>1,253.45</TableCell>
              <TableCell>1,458.97</TableCell>
              <TableCell>2,187.46</TableCell>
              <TableCell>2,622.69</TableCell>
              <TableCell>1,407.46</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.irak}</TableCell>
              <TableCell>857.76</TableCell>
              <TableCell>692.80</TableCell>
              <TableCell>792.79</TableCell>
              <TableCell>1,112.19</TableCell>
              <TableCell>1,339.43</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.malaysia}</TableCell>
              <TableCell>452.70</TableCell>
              <TableCell>589.52</TableCell>
              <TableCell>575.63</TableCell>
              <TableCell>609.32</TableCell>
              <TableCell>819.85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.united_kingdom}</TableCell>
              <TableCell>530.66</TableCell>
              <TableCell>619.17</TableCell>
              <TableCell>565.29</TableCell>
              <TableCell>603.22</TableCell>
              <TableCell>749.97</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.japan}</TableCell>
              <TableCell>489.74</TableCell>
              <TableCell>503.61</TableCell>
              <TableCell>520.43</TableCell>
              <TableCell>670.35</TableCell>
              <TableCell>745.69</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{dict?.rice?.market_demand?.vietnam}</TableCell>
              <TableCell>33.40</TableCell>
              <TableCell>127.38</TableCell>
              <TableCell>718.84</TableCell>
              <TableCell>689.63</TableCell>
              <TableCell>743.42</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <MarketDemandBarEChart
        series={[
          {
            name: "2023",
            data: [1789.02, 1635.58, 1535.43, 1422.52, 1407.46, 1339.43, 819.85, 749.97, 745.69, 743.42],
          },
          {
            name: "2022",
            data: [202.04, 1273.46, 1387.97, 1405.74, 2622.69, 1112.19, 609.32, 603.22, 670.35, 689.63],
          },
          {
            name: "2021",
            data: [183.8, 1196.91, 1094.95, 1017.32, 2187.46, 792.79, 575.63, 565.29, 520.43, 718.84],
          },
          {
            name: "2020",
            data: [195.41, 862.01, 1404.24, 1283.84, 1458.97, 692.8, 589.52, 619.17, 503.61, 127.38],
          },
          {
            name: "2019",
            data: [184.25, 1009.69, 1415.09, 1086.35, 1253.45, 857.76, 452.7, 530.66, 489.74, 33.4],
          },
        ]}
        xaxis={{
          categories: [
            dict?.rice?.market_demand?.indonesia,
            dict?.rice?.market_demand?.philippine,
            dict?.rice?.market_demand?.saudi_arabia,
            dict?.rice?.market_demand?.united_state,
            dict?.rice?.market_demand?.china,
            dict?.rice?.market_demand?.irak,
            dict?.rice?.market_demand?.malaysia,
            dict?.rice?.market_demand?.united_kingdom,
            dict?.rice?.market_demand?.japan,
            dict?.rice?.market_demand?.vietnam,
          ],
        }}
      />

      <hr className="my-6" />

      <div className="leading-loose">
        <p>
          <strong>{dict?.rice?.market_demand?.source}</strong>
        </p>
        <p>
          <sup>{dict?.rice?.market_demand?.sup_desc_one}</sup>ITC Trade Map
        </p>
      </div>
    </div>
  );
};

