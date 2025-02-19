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

export default function CustomsTariffTable({
  columns,
  data,
}: CustomsTariffTableProps) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="text-lg">
            {columns.map((col, index) => (
              <TableHead key={index}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="leading-loose hover:bg-muted/50 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} className="text-base">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
