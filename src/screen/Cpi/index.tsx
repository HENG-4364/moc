"use client";

import { useState } from "react";
import { Title } from "@/components/Title/Title";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import {
  BarChart3,
  ChartBarStacked,
  LayoutGrid,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { parseAsString, useQueryState } from "nuqs";
import { MySelect } from "../CommodityValues/Components";
import { useQuery } from "@apollo/client";
import { GET_PUBLIC_CPI_BAR_CHART_QUERY } from "./graphql";
import { settings } from "@/lib/settings";
import {
  CPITable,
  CPIBarEChart,
  CPILineEChart,
  CPIStackedEChart,
} from "./components";

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

export type CpiScreenProps = {
  publicCPIGroupList: any;
};

export default function CpiScreen({ publicCPIGroupList }: CpiScreenProps) {
  const searchParams = useSearchParams();
  const [selectedProducts, setSelectedProducts] =
    useState<Product[]>(publicCPIGroupList);

  const [limit, setLimit] = useQueryState(
    "limit",
    parseAsString.withDefault("5")
  );
  const [tab, setTab] = useQueryState("tab", parseAsString.withDefault("bar"));

  const cpiGroupOptions = publicCPIGroupList.map((product: any) => ({
    label: product.name,
    value: product.id,
  }));

  const onChangeProduct = (selected: { label: string; value: string }[]) => {
    setSelectedProducts(
      selected.map((item) => ({ id: item.value, name: item.label }))
    );
  };

  const { data, loading } = useQuery(GET_PUBLIC_CPI_BAR_CHART_QUERY, {
    variables: {
      websiteId: Number(settings.websiteId),
      limit: Number(limit) || 5,
      goods:
        selectedProducts?.length > 0
          ? selectedProducts?.map((item) => item?.id)
          : undefined,
    },
  });

  if (!data || loading) return <></>;

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
                onChange={(option: any) => setLimit(option?.value?.toString())}
                defaultValue={{
                  label: selectLimitOptions?.find(
                    (item) => item?.value === (Number(limit) || 5)
                  )?.label,
                  value: Number(searchParams.get("limit")) || 5,
                }}
                value={{
                  label: selectLimitOptions?.find(
                    (item) =>
                      item?.value === (Number(searchParams.get("limit")) || 5)
                  )?.label,
                  value: Number(limit) || 5,
                }}
                options={selectLimitOptions}
              />
            </div>
          </div>

          {/* Category Selection */}
          <div className="">
            <label className="block text-base mb-2">ទំនិញ និងសេវា</label>
            <div className="flex-1">
              <MySelect
                options={cpiGroupOptions}
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
            onClick={() => setTab("bar")}
          >
            <BarChart3 className="h-5 w-5" />
          </div>

          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "line" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => setTab("line")}
          >
            <LineChart className="h-5 w-5" />
          </div>

          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "stacked" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => setTab("stacked")}
          >
            <ChartBarStacked className="h-5 w-5" />
          </div>

          <div
            className={cn(
              "bg-gray-50 p-2 rounded-md border-2 border-[#2980B9] hover:bg-[#2980B9] text-[#2980B9] hover:text-white cursor-pointer",
              tab === "table" ? "bg-[#2980B9] text-white" : ""
            )}
            onClick={() => setTab("table")}
          >
            <LayoutGrid className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4  bg-white rounded-md shadow-md p-10 ">
          {tab === "bar" && (
            <>
              <CPIBarEChart data={data} />
            </>
          )}

          {tab === "line" && (
            <>
              <CPILineEChart data={data} />
            </>
          )}

          {tab === "stacked" && (
            <>
              <CPIStackedEChart data={data} />
            </>
          )}

          {tab === "table" && (
            <>
              <CPITable data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
