import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CalendarIcon,
  CircleX,
  LayoutGrid,
  LineChart,
} from "lucide-react";
import { MySelect } from "./my-select";
import { parseAsString, useQueryState } from "nuqs";
import { useState } from "react";
import moment from "moment";
import { format } from "date-fns";
import { CommodityPriceTable } from "./commodity-price-table";

export type CommodityPriceTableSectionProps = {
  publicProvinceList: any;
  productList: any;
  setTab: any;
  tab: any;
};

export const CommodityPriceTableSection = ({
  productList,
  publicProvinceList,
  setTab,
  tab,
}: CommodityPriceTableSectionProps) => {
  const [products, setProducts] = useState<any>([
    {
      value: 107,
      label: "ប្រេងសាំងធម្មតា",
    },
    {
      value: 108,
      label: "ប្រេងម៉ាស៊ូត",
    },
    {
      value: 109,
      label: "ប្រេងកាត",
    },
  ]);

  const [provinces, setProvinces] = useState<any>([
    {
      value: 1,
      label: "ភ្នំពេញ",
    },
    {
      value: 2,
      label: "កំពត",
    },
    {
      value: 3,
      label: "បន្ទាយមានជ័យ",
    },
    {
      value: 4,
      label: "បាត់ដំបង",
    },
    {
      value: 5,
      label: "កំពង់ចាម",
    },
  ]);

  const [date, setDate] = useQueryState(
    "startDate",
    parseAsString.withDefault(new Date().toISOString())
  );
  const onHandleClearDatePicker = () => {
    setDate(null);
  };

  const productOptions = productList?.data?.map((product: any) => ({
    label: product.name,
    value: product.id,
  }));

  const provinceOptions = publicProvinceList?.map((province: any) => {
    return {
      value: province.id,
      label: province.name,
    };
  });

  const onChangeProduct = (product: any) => {
    setProducts(product);
  };

  const onChangeProvince = (province: any) => {
    setProvinces(province);
  };

  const onChangeTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <>
      <div className="mb-8 bg-white px-4 py-10 rounded-md shadow-md">
        <div className="">
          <h1 className="text-2xl font-semibold mb-6 ">កំណត់លក្ខខណ្ឌ</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="col-span-1 lg:col-span-1">
            <label className="block text-base mb-2">ថ្ងៃខែឆ្នាំ</label>
            <div className="relative mb-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-gray-300",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? (
                      <div className="flex w-full items-center justify-between ">
                        <span>{format(date, "dd/MM/yyyy")}</span>
                        <div
                          className="m-2 text-red-600"
                          onClick={onHandleClearDatePicker}
                        >
                          <CircleX className="size-4" />
                        </div>
                      </div>
                    ) : (
                      <span className="truncate">ស្វែងរកតាមកាលបរិច្ឆេទ</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 " align="start">
                  <Calendar
                    mode="single"
                    selected={date ? new Date(date) : undefined}
                    onSelect={(date) =>
                      setDate(date ? format(date, "yyyy-MM-dd") : null)
                    }
                    className="max-w-full "
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <label className="block text-base mb-2">ផលិតផល</label>
            <MySelect
              options={productOptions}
              isMulti={true}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              onChange={onChangeProduct}
              allowSelectAll={true}
              value={products}
              placeholder="ជ្រើសរើសផលិតផល..."
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <label className="block text-base mb-2">ខេត្ត/ទីក្រុង</label>
            <MySelect
              options={provinceOptions}
              isMulti={true}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              onChange={onChangeProvince}
              allowSelectAll={true}
              value={provinces}
              placeholder="ជ្រើសរើសប្រភេទ..."
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
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

      <div className="mt-4 bg-white rounded-md shadow-md">
        <CommodityPriceTable
          filter={{
            byProvince:
              provinces
                ?.filter((item: any) => item.value !== "*")
                .map((i: any) => i?.value) || [],
            byDate: moment(date).format("YYYY-MM-DD"),
            byProductId:
              products
                ?.filter((item: any) => item.value !== "*")
                .map((i: any) => i?.value) || [],
          }}
        />
      </div>
    </>
  );
};
