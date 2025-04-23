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
import { format, formatISO, subDays } from "date-fns";
import Select from "react-select";
import { CommodityPriceLineChart } from "./commodity-price-line-chart";
import moment from "moment";

export type CommodityPriceLineSectionProps = {
  publicProvinceList: any;
  productList: any;
  setTab: any;
  tab: any;
};

export const CommodityPriceLineSection = ({
  productList,
  publicProvinceList,
  setTab,
  tab,
}: CommodityPriceLineSectionProps) => {
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

  const [province, setProvince] = useState<any>({
    value: 1,
    label: "ភ្នំពេញ",
  });

  const [startDate, setStartDate] = useQueryState(
    "startDate",
    parseAsString.withDefault(formatISO(subDays(new Date(), 7)))
  );

  const [endDate, setEndDate] = useQueryState(
    "endDate",
    parseAsString.withDefault(new Date().toISOString())
  );

  const onHandleClearStartDatePicker = () => {
    setStartDate(null);
  };

  const onHandleClearEndDatePicker = () => {
    setEndDate(null);
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
    setProvince(province);
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
            <label className="block text-base mb-2">ថ្ងៃខែឆ្នាំចាប់ផ្តើម</label>
            <div className="relative mb-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-gray-300",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {startDate ? (
                      <div className="flex w-full items-center justify-between ">
                        <span>{format(startDate, "dd/MM/yyyy")}</span>
                        <div
                          className="m-2 text-red-600"
                          onClick={onHandleClearStartDatePicker}
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
                    selected={startDate ? new Date(startDate) : undefined}
                    onSelect={(date) =>
                      setStartDate(date ? format(date, "yyyy-MM-dd") : null)
                    }
                    className="max-w-full "
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <label className="block text-base mb-2">ថ្ងៃខែឆ្នាំចុងក្រោយ</label>
            <div className="relative mb-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-gray-300",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {endDate ? (
                      <div className="flex w-full items-center justify-between ">
                        <span>{format(endDate, "dd/MM/yyyy")}</span>
                        <div
                          className="m-2 text-red-600"
                          onClick={onHandleClearEndDatePicker}
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
                    selected={endDate ? new Date(endDate) : undefined}
                    onSelect={(date) =>
                      setEndDate(date ? format(date, "yyyy-MM-dd") : null)
                    }
                    className="max-w-full "
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <label className="block text-base mb-2">ខេត្ត/ទីក្រុង</label>
            <Select
              options={provinceOptions}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              onChange={onChangeProvince}
              value={province}
              placeholder="ជ្រើសរើសប្រភេទ..."
            />
          </div>
        </div>

        <div>
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
        <CommodityPriceLineChart
          filter={{
            byProvince: Number(province?.value),
            byProduct:
              products
                ?.filter((item: any) => item.value !== "*")
                .map((i: any) => i?.value) || [],
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
          }}
        />
      </div>
    </>
  );
};
