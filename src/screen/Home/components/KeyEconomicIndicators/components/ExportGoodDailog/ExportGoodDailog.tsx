"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commafy } from "@/lib/number-formatter";
import { useParams } from "next/navigation";
import { getDictionaryByFolderClient } from "@/lib/dictionaries-client";
type TopExportProductModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  importTradeProductCategory: any;
  exportTradeProductCategory: any;
};

export function TopExportProductModal({
  open,
  setOpen,
  importTradeProductCategory,
  exportTradeProductCategory,
}: TopExportProductModalProps) {
  const params: any = useParams();
  const { lang } = params;
  const dict = getDictionaryByFolderClient(lang || "kh", "home");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-sm max-w-[400px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>
            {
              dict?.key_economic_indicators?.top_export_import_product_modal
                ?.title
            }
          </DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-auto scrollbar-hide">
          <Tabs defaultValue="exportTab" className="w-full">
            <TabsList className="mb-4 ">
              <TabsTrigger value="exportTab" className="text-[16px]">
                {
                  dict?.key_economic_indicators?.top_export_import_product_modal
                    ?.export
                }
              </TabsTrigger>
              <TabsTrigger value="importTab" className="text-[16px]">
                {
                  dict?.key_economic_indicators?.top_export_import_product_modal
                    ?.import
                }
              </TabsTrigger>
            </TabsList>
            <TabsContent value="exportTab">
              <Table className="text-[16px] md:text-base w-full overflow-x-scroll">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 ">#</TableHead>
                    <TableHead className="min-w-[150px] text-[16px]">
                      {
                        dict?.key_economic_indicators
                          ?.top_export_import_product_modal?.table?.khmer_name
                      }
                    </TableHead>
                    <TableHead className="text-right min-w-[150px] text-[16px]">
                      {
                        dict?.key_economic_indicators
                          ?.top_export_import_product_modal?.table?.total_value
                      }
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exportTradeProductCategory.map((item: any, idx: number) => (
                    <TableRow
                      key={item.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <TableCell>{idx + 1}</TableCell>
                      <TableCell>{item?.description_kh}</TableCell>
                      <TableCell className="text-right">
                        $ {commafy(item?.total_value)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="importTab">
              <Table className="text-[16px] md:text-base w-full overflow-x-scroll">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 ">#</TableHead>
                    <TableHead className="min-w-[150px] text-[16px]">
                      {
                        dict?.key_economic_indicators
                          ?.top_export_import_product_modal?.table?.khmer_name
                      }
                    </TableHead>
                    <TableHead className="text-right min-w-[150px] text-[16px]">
                      {
                        dict?.key_economic_indicators
                          ?.top_export_import_product_modal?.table?.total_value
                      }
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {importTradeProductCategory.map((item: any, idx: number) => (
                    <TableRow
                      key={item.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <TableCell>{idx + 1}</TableCell>
                      <TableCell>{item?.description_kh}</TableCell>
                      <TableCell className="text-right">
                        $ {commafy(item?.total_value)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button variant="destructive" onClick={() => setOpen(false)}>
            បិទ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
