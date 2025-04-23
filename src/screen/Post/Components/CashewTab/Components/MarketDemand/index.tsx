import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MarketDemandBarEChart from "./components/MarketDemandBarEChart";
import style from "./market-demand.module.scss";
export const MarketDemand = () => {
  return (
    <div className="text-lg">
      <h2 className={`mb-2 ${style.title_text}`}>ខ. តម្រូវការទីផ្សារ</h2>
      <p className="ml-4 leading-loose">
        ទិន្នន័យនៃការនាំចូលគ្រាប់ស្វាយចន្ទីមានសំបកលើទីផ្សារពិភពលោក
        និងប្រទេសនាំចូលធំៗ<sup>២</sup>៖
      </p>
      <p className="text-end">ឯកតា៖ ពាន់ដុល្លារ</p>
      <Table className="w-full text-left">
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>ទីផ្សារ</TableHead>
            <TableHead>២០១៩</TableHead>
            <TableHead>២០២០</TableHead>
            <TableHead>២០២១</TableHead>
            <TableHead>២០២២</TableHead>
            <TableHead>២០២៣</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            [
              "ពិភពលោក",
              "2,852,702",
              "2,588,333",
              "4,795,870",
              "4,243,158",
              "2,636,827",
            ],
            [
              "ឥណ្ឌា",
              "1,097,656",
              "1,086,928",
              "1,126,253",
              "1,885,751",
              "1,336,744",
            ],
            [
              "វៀតណាម",
              "1,668,415",
              "1,418,765",
              "3,619,816",
              "2,299,091",
              "1,233,562",
            ],
            ["អេមីរ៉ាតអារ៉ាប់រួម", "208", "647", "176", "440", "37,712"],
            ["ចិន", "18,579", "15,881", "12,697", "11,113", "9,969"],
            ["អាល់ហ្សេរី", "364", "737", "2,301", "1,768", "2,285"],
            ["ប៊ែលហ្សិក", "3,700", "3,168", "4,242", "3,141", "2,111"],
            ["ដាណឺម៉ាក", "328", "252", "1,046", "1,495", "1,735"],
            ["ម៉ាឌីវ", "1,009", "630", "1,270", "1,549", "1,694"],
            ["អាល្លឺម៉ង់", "68", "15", "42", "60", "1,611"],
            ["កាណាដា", "870", "539", "830", "2,020", "1,006"],
          ].map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-base">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
      <MarketDemandBarEChart
        series={[
          {
            name: "2023",
            data: [1336.75, 1294.34, 39.52, 9.97, 3.3],
          },
          {
            name: "2022",
            data: [1885.75, 2299.09, 0.44, 11.11, 1.77],
          },
          {
            name: "2021",
            data: [1126.25, 3619.82, 0.18, 12.7, 2.3],
          },
          {
            name: "2020",
            data: [1086.93, 1418.77, 0.65, 15.88, 0.74],
          },
          {
            name: "2019",
            data: [1097.66, 1668.42, 0.21, 18.58, 0.36],
          },
        ]}
        xaxis={{
          categories: [
            "ឥណ្ឌា",
            "វៀតណាម",
            "អេមីរ៉ាតអារ៉ាប់រួម",
            "ចិន",
            "អាល់ហ្សេរី",
          ],
        }}
      />
      <p className="leading-loose pt-2">
        ទិន្នន័យនៃការនាំចូលគ្រាប់ស្វាយចន្ទីបកសំបកលើទីផ្សារពិភពលោក
        និងប្រទេសនាំចូលធំៗ៖
      </p>
      <p className="text-end">ឯកតា៖ ពាន់ដុល្លារ</p>
      <Table className="w-full text-left">
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead>ទីផ្សារ</TableHead>
            <TableHead>២០១៩</TableHead>
            <TableHead>២០២០</TableHead>
            <TableHead>២០២១</TableHead>
            <TableHead>២០២២</TableHead>
            <TableHead>២០២៣</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            [
              "ពិភពលោក",
              "4,351,402",
              "4,108,531",
              "4,469,691",
              "4,143,819",
              "3,826,271",
            ],
            [
              "សហរដ្ឋអាមេរិក",
              "1,200,622",
              "1,103,244",
              "1,216,950",
              "970,482",
              "842,968",
            ],
            [
              "អាល្លឺម៉ង់",
              "477,294",
              "491,080",
              "425,928",
              "429,125",
              "425,015",
            ],
            ["ហូឡង់", "312,262", "342,903", "347,056", "298,503", "301,295"],
            ["ចិន", "165,947", "151,093", "190,915", "252,159", "246,041"],
            ["វៀតណាម", "123,638", "141,786", "131,846", "62,659", "153,164"],
            [
              "ចក្រភពអង់គ្លេស",
              "177,490",
              "149,211",
              "150,264",
              "145,177",
              "142,302",
            ],
            ["តួគី", "41,364", "48,519", "57,738", "75,131", "129,944"],
            ["បារាំង", "112,904", "120,145", "133,038", "121,275", "121,289"],
            [
              "អេមីរ៉ាតអារ៉ាប់រួម",
              "139,290",
              "110,019",
              "171,302",
              "194,222",
              "120,241",
            ],
            ["អេស្បាញ", "82,572", "71,856", "84,732", "91,830", "103,250"],
          ].map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-base">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MarketDemandBarEChart
        series={[
          {
            name: "2023",
            data: [
              842.97, 425.02, 301.3, 246.04, 153.25, 142.3, 129.94, 121.29,
              120.25, 103.25,
            ],
          },
          {
            name: "2022",
            data: [
              970.48, 429.13, 298.5, 252.16, 62.66, 145.18, 75.13, 121.28,
              194.22, 91.83,
            ],
          },
          {
            name: "2021",
            data: [
              1216.95, 425.93, 347.06, 190.92, 131.85, 150.26, 57.74, 133.04,
              171.3, 84.73,
            ],
          },
          {
            name: "2020",
            data: [
              1103.24, 491.08, 342.9, 151.09, 141.79, 149.21, 48.52, 120.15,
              110.02, 71.86,
            ],
          },
          {
            name: "2019",
            data: [
              1200.62, 477.29, 312.26, 165.95, 123.64, 177.49, 41.36, 112.9,
              139.29, 82.57,
            ],
          },
        ]}
        xaxis={{
          categories: [
            "សហរដ្ឋអាមេរិក",
            "អាល្លឺម៉ង់",
            "ហូឡង់",
            "ចិន",
            "វៀតណាម",
            "ចក្រភពអង់គ្លេស",
            "តួគី",
            "បារាំង",
            "អេមីរ៉ាតអារ៉ាប់រួម",
            "អេស្បាញ",
          ],
        }}
      />
      <hr className="my-6" />
      <div className="leading-loose">
        <p>
          <strong>ប្រភព៖</strong>
        </p>
        <sup>២</sup>ITC Trade Map
        <br />
      </div>
    </div>
  );
};
