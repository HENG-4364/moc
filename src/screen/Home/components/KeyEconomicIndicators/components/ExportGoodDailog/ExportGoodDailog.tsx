// "use client";

// import { useState } from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface Treatment {
//   id: number;
//   name: string;
//   price: number;
// }

// const treatments: Treatment[] = [
//   { id: 1, name: "សម្អាតធ្មេញ", price: 0 },
//   { id: 2, name: "ដេញក្រាស និងការពារដេញក្រាស", price: 0 },
//   { id: 3, name: "ការបូ", price: 0 },
//   { id: 4, name: "ដកធ្មេញដោយគ្មានការឈឺចាប់", price: 0 },
//   { id: 5, name: "ប្តូរធ្មេញក្រាស៥០ និងការពីដេក", price: 0 },
//   { id: 6, name: "ប្តូរធ្មេញស្រទាប់ខ្នង", price: 0 },
//   { id: 7, name: "កាត់", price: 0 },
//   { id: 8, name: "ប្តូរធ្មេញស្រទាប់កាត់", price: 0 },
//   { id: 9, name: "ដេញក្រាស ប្រភេទថ្ម", price: 0 },
//   { id: 10, name: "ដាក់ Veneer", price: 0 },
//   { id: 11, name: "ខាតក្រអូម", price: 0 },
//   { id: 12, name: "ដេញពេញមាត់ទាំង", price: 0 },
//   { id: 13, name: "ដកធ្មេញកូនក្មេង", price: 0 },
// ];

// export function DentalPricesDialog({ open, setOpen }: any) {

//   return (
//     <Dialog open={open} onOpenChange={setOpen} >
//       <DialogContent className="max-w-3xl">
//         <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
//           <DialogTitle className="text-xl font-medium">
//             តារាងតម្លៃព្យាបាលធ្មេញតាមដំណាក់ទី ៧០
//           </DialogTitle>
//         </DialogHeader>

//         <Tabs defaultValue="stage" className="w-full">
//           <TabsList className="mb-4">
//             <TabsTrigger value="stage">ដំណាក់</TabsTrigger>
//             <TabsTrigger value="price">តំលៃ</TabsTrigger>
//           </TabsList>
//           <TabsContent value="stage">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-16">#</TableHead>
//                   <TableHead>ប្រភេទការព្យាបាល</TableHead>
//                   <TableHead className="text-right">តំលៃសរុប</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {treatments.map((treatment, index) => (
//                   <TableRow
//                     key={treatment.id}
//                     className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <TableCell>{treatment.id}</TableCell>
//                     <TableCell>{treatment.name}</TableCell>
//                     <TableCell className="text-right">
//                       $ {treatment.price.toFixed(2)}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TabsContent>
//           <TabsContent value="price">
//             <div className="text-center text-gray-500">
//               តំលៃនឹងត្រូវបានបង្ហាញនៅពេលក្រោយ
//             </div>
//           </TabsContent>
//         </Tabs>
//       </DialogContent>
//     </Dialog>
//   );
// }

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
type TopExportProductModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any[];
};

export function TopExportProductModal({
  open,
  setOpen,
  data,
}: TopExportProductModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="rounded-sm max-w-[400px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>តារាងទំនិញនាំចេញច្រើនជាងគេទាំង ២០</DialogTitle>
        </DialogHeader>
        <div className="flex-grow overflow-auto scrollbar-hide">
          <Tabs defaultValue="stage" className="w-full">
            <TabsList className="mb-4 ">
              <TabsTrigger value="stage" className="text-[16px] ">ដំណាក់</TabsTrigger>
              <TabsTrigger value="price" className="text-[16px]">តំលៃ</TabsTrigger>
            </TabsList>
            <TabsContent value="stage">
              <Table className="text-[16px] md:text-base w-full overflow-x-scroll ">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 ">#</TableHead>
                    <TableHead className="min-w-[150px] text-[16px]">ប្រភេទការព្យាបាល</TableHead>
                    <TableHead className="text-right min-w-[150px] text-[16px]">តំលៃសរុប</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((treatment, index) => (
                    <TableRow
                      key={treatment.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <TableCell>{treatment.id}</TableCell>
                      <TableCell>{treatment.name}</TableCell>
                      <TableCell className="text-right">
                        $ {treatment.price.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="price">
              <div className="text-center text-gray-500">
                តំលៃនឹងត្រូវបានបង្ហាញនៅពេលក្រោយ
              </div>
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
