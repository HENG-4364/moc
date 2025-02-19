// "use client";

// import { Title } from "@/components/Title/Title";
// import React, { useState } from "react";
// import MySelect from "../CommodityValues/Components/MultiSelect";
// interface Product {
//   id: string;
//   name: string;
// }
// const CpiScreen = () => {
//   const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
//   const productList: Product[] = [
//     { id: "1", name: "Product A" },
//     { id: "2", name: "Product B" },
//     { id: "3", name: "Product C" },
//     { id: "4", name: "Product D" },
//     { id: "5", name: "Product E" },
//   ];

//   const categoryList: Product[] = [
//     { id: "1", name: "Category A" },
//     { id: "2", name: "Category B" },
//     { id: "3", name: "Category C" },
//   ];

//   const productOptions = productList.map((product) => ({
//     label: product.name,
//     value: product.id,
//   }));

//   const onChangeProduct = (selected: { label: string; value: string }[]) => {
//     setSelectedProducts(
//       selected.map((item) => ({ id: item.value, name: item.label }))
//     );
//   };

//   return (
//     <div>
//       <Title title={"សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់"} />
//       <div className="flex max-w-md">
//         <div className="flex-none bg-[#E9ECEF] px-3 py-2 text-sm text-gray-500 border border-r-0 border-input rounded-l-md rounded-r-none">
//           បង្ហាញ
//         </div>
//         <MySelect
//           options={productOptions}
//           isMulti={true}
//           closeMenuOnSelect={false}
//           hideSelectedOptions={false}
//           onChange={onChangeProduct}
//           allowSelectAll={true}
//           value={selectedProducts.map((product) => ({
//             label: product.name,
//             value: product.id,
//           }))}
//           placeholder="ជ្រើសរើសផលិតផល..."
//         />
//       </div>
//     </div>
//   );
// };

// export default CpiScreen;

"use client";

import { useState } from "react";
import { Title } from "@/components/Title/Title";
import MySelect from "../CommodityValues/Components/MultiSelect";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { BarChart3, LayoutGrid, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { parseAsString, useQueryState } from "nuqs";
import { data } from "./data";
import BarChart from "./components/BarChart";

interface Product {
  id: string;
  name: string;
}
const selectLimitOptions = [
  {
    label: "៥ ចុងក្រោយ",
    value: 5,
  },
  {
    label: "១០ ចុងក្រោយ",
    value: 10,
  },
  {
    label: "១៥ ចុងក្រោយ",
    value: 15,
  },
];

const productList: Product[] = [
  { id: "1", name: "MISCELLANEOUS" },
  { id: "2", name: "RESTAURANTS" },
  { id: "3", name: "EDUCATION" },
  { id: "4", name: "RECREATION AND CULTURE" },
  { id: "5", name: "COMMUNICATION" },
  { id: "6", name: "TRANSPORT" },
  { id: "7", name: "HEALTH" },
  { id: "8", name: "FURNISHINGS, HOUSEHOLD MAINTENANCE" },
  { id: "9", name: "HOUSING, WATER, ELECTRICITY, GAS AND OTHER FUELS" },
  { id: "10", name: "ALCOHOLIC BEVERAGES, TOBACCO AND NARCOTICS" },
  { id: "11", name: "FOOD AND NON-ALCOHOLIC BEVERAGES" },
  { id: "12", name: "CLOTHING AND FOOTWEAR" },
];
export default function CpiScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(productList);
  const [selectedLimit, setSelectedLimit] = useState<any>({
    label: selectLimitOptions?.find(
      (item) => item?.value === (Number(searchParams.get("limit")) || 5)
    )?.label,
    value: Number(searchParams.get("limit")) || 5,
  });
  const tabQuery = searchParams.get("q");
  // const [tab, setTab] = useState(tabQuery ? tabQuery : "bar");
  const [tab, setTab] = useQueryState(
    "tabQuery",
    parseAsString.withDefault("bar")
  );



  const categoryList: Product[] = [
    { id: "1", name: "៥​ ចុងក្រោយ" },
    { id: "2", name: "១០​ ចុងក្រោយ" },
    { id: "3", name: "១៥​ ចុងក្រោយ" },
  ];

  const productOptions = productList.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const onChangeProduct = (selected: { label: string; value: string }[]) => {
    setSelectedProducts(
      selected.map((item) => ({ id: item.value, name: item.label }))
    );
  };

  const onHandleChangeLimit = (selected: any) => {
    setSelectedLimit(selected);
    console.log(selected);

    router.push(`/cpi?limit=${selected?.value}`);
  };
  const onChangeTab = (tab: string) => {
    router.push(`/cpi?q=${tab}`);
    setTab(tab);
  };
  return (
    <div className="w-full bg-gray-50 pb-20">
      <div className="container mx-auto">
        <Title title={"សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់"} />
        <div className="space-y-6 mb-8 bg-white px-6 py-10 rounded-lg shadow-md">
          <div className="">
            <h1 className="text-2xl font-semibold mb-6 ">កំណត់លក្ខខណ្ឌ</h1>
          </div>
          {/* Time Period Selection */}
          <div className="">
            <label className="block text-base mb-2">បង្ហាញ</label>
            <div className="flex-1">
              <Select
                onChange={onHandleChangeLimit}
                defaultValue={{
                  label: selectLimitOptions?.find(
                    (item) =>
                      item?.value === (Number(searchParams.get("limit")) || 5)
                  )?.label,
                  value: Number(searchParams.get("limit")) || 5,
                }}
                value={selectedLimit}
                options={selectLimitOptions}
              />
            </div>
          </div>

          {/* Category Selection */}
          <div className="">
            <label className="block text-base mb-2">ទំនិញ និងសេវា</label>
            <div className="flex-1">
              <MySelect
                options={productOptions}
                isMulti={true}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                onChange={onChangeProduct}
                allowSelectAll={true}
                value={selectedProducts.map((product) => ({
                  label: product.name,
                  value: product.id,
                }))}
                placeholder="ជ្រើសរើសផលិតផល..."
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "bar" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => onChangeTab("bar")}
          >
            <BarChart3 className="h-5 w-5" />
          </div>

          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "line" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => onChangeTab("line")}
          >
            <LineChart className="h-5 w-5" />
          </div>

          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "table" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => onChangeTab("table")}
          >
            <LayoutGrid className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4  bg-white rounded-md shadow-md p-10 ">
          {tab === "bar" && (
            <>
              {data ? (
                <div>
                  <p>
                    ប្រភព: <b>វិទ្យាស្ថានជាតិស្ថិតិ</b>
                  </p>
                  <BarChart data={data} />
                </div>
              ) : (
                <div className="mt-4">
                  <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                    <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                      <div className="w-50 h-50 mb-2">
                        <Image
                          src="/no-data.svg"
                          alt="No results found"
                          width={128}
                          height={128}
                          className="w-full h-full"
                        />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        គ្មានទិន្នន័យ Bar
                      </h2>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {tab === "line" && (
            <div className="mt-4">
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                  <div className="w-50 h-50 mb-2">
                    <Image
                      src="/no-data.svg"
                      alt="No results found"
                      width={128}
                      height={128}
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    គ្មានទិន្នន័យ Line
                  </h2>
                </div>
              </div>
            </div>
          )}
          {tab === "table" && (
            <div className="mt-4">
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
                  <div className="w-50 h-50 mb-2">
                    <Image
                      src="/no-data.svg"
                      alt="No results found"
                      width={128}
                      height={128}
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    គ្មានទិន្នន័យ Table
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
