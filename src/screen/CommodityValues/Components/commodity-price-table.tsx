import { restructureApiData } from "@/lib/react-apexcharts";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { GET_PUBLIC_COMMODITY_PRICE_QUERY } from "../graphql";
import { CommodityPriceLoading } from "./commodity-price-loading";
import { CommodityPriceNoData } from "./commodity-price-no-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type CommodityPriceTableProps = {
  filter: any;
};

export const CommodityPriceTable = ({ filter }: CommodityPriceTableProps) => {
  const { data, loading } = useQuery(GET_PUBLIC_COMMODITY_PRICE_QUERY, {
    variables: {
      commodityPriceFilter: filter,
    },
  });

  if (!data || loading) return <CommodityPriceLoading />;

  if (!data?.publicCommodityPrice) return <CommodityPriceNoData />;

  const chartData = restructureApiData(data?.publicCommodityPrice);

  return (
    <div className="p-6">
      {chartData?.tableData?.map((group: any, idx: number) => {
        const { name, data } = group;

        return (
          <Accordion type="single" collapsible className="border">
            <AccordionItem value={name} className="border-none px-4">
              <AccordionTrigger>{name}</AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead className="text-right">Daily Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item: any) => {
                      return (
                        <TableRow key={item?.id}>
                          <TableCell className="font-medium">
                            {item.product_name}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.daily_price}៛
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};
