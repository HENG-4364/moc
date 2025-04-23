import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

export const CPITable = ({ data }: any) => {
  const names = data?.publicCPIBarChart?.cpi_groups?.map((x: any) => x?.name);

  function getPointByName(name: string, idx: number) {
    const cpiData: any = [];

    data?.publicCPIBarChart?.data[idx][name]?.map((data: any) => {
      cpiData.push(data?.point);
    });

    return cpiData;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          {data?.publicCPIBarChart?.cpis?.map((x: any) => {
            return (
              <TableHead key={x?.id}>
                {[
                  moment(x?.published_date).year(),
                  moment(x?.published_date).month() + 1,
                  moment(x?.published_date).date(),
                ].join("/")}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>

      <TableBody>
        {names?.map((name: any, idx: number) => {
          const points = getPointByName(name, idx);

          return (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>

              {points?.map((point: number, idx: number) => {
                return <TableCell key={idx}>{point}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
