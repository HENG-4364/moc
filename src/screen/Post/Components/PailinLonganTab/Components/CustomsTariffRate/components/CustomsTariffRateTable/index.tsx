import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CustomsTariffTableProps = {
  columns: string[]; // Array of strings for column headers
  data: string[][]; // 2D array of strings for table data rows
};

const CustomsTariffRateTable = ({ columns, data }: CustomsTariffTableProps) => {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            {columns.map((col, index) => (
              <TableHead key={index} className="text-left whitespace-nowrap">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-muted/50">
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={cellIndex === 0 ? "min-w-[120px] text-base" : ""}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomsTariffRateTable;
