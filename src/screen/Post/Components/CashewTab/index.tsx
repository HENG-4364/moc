"use client";

import { Title } from "@/components/Title/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BasicInformation } from "./Components/BasicInformatin";
import { HorizontalTabPotentialProducts } from "@/types";
import { CustomsTariffRate } from "./Components/CustomsTariffRate";
import { MarketDemand } from "./Components/MarketDemand";
import { StrengthsOpportunitiesAndRecommendations } from "./Components/StrengthsOpportunitiesAndRecommendations";
import { parseAsString, useQueryState } from "nuqs";
const newsTypes = [
  {
    id: "basicInformation",
    label: "ក.ព័ត៌មានមូលដ្ឋាន",
  },
  {
    id: "marketDemand",
    label: "ខ.តម្រូវការទីផ្សារ",
  },
  {
    id: "customsTariffRate",
    label: "គ.អត្រាពន្ធគយ",
  },
  {
    id: "strengthsOpportunities",
    label: "ឃ.ចំណុចខ្លាំង ឱកាស និងអនុសាសន៍",
  },
];

const CashewTab: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const [horizontalTab, setHorizontalTab] = useQueryState(
    "horizontalTab",
    parseAsString.withDefault("basicInformation")
  );

  const setHorizontal = (horizontalTab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("horizontalTab", horizontalTab);
    push(`${window.location.origin}/${pathname}?${params}`);
  };

  let horizontalTabPotentialProducts: React.ReactNode;

  switch (horizontalTab) {
    case "basicInformation":
      horizontalTabPotentialProducts = <BasicInformation />;
      break;

    case "marketDemand":
      horizontalTabPotentialProducts = <MarketDemand />;
      break;

    case "customsTariffRate":
      horizontalTabPotentialProducts = <CustomsTariffRate />;
      break;

    case "strengthsOpportunities":
      horizontalTabPotentialProducts = (
        <StrengthsOpportunitiesAndRecommendations />
      );
      break;

    default:
      horizontalTabPotentialProducts = <BasicInformation />;
      break;
  }

  return (
    <div>
      {/* Main Content */}
      <div className="w-full shadow-sm">
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex justify-between p-2 scrollbar-hide rounded-md w-full"
        >
          {newsTypes.map((type) => (
            <button
              key={type.id}
              className={cn(
                "px-4 py-2 rounded-md transition-all duration-200 font-semibold text-[15px] xl:text-[16px]",
                "hover:bg-gray-50",
                "relative",
                "after:absolute after:bottom-0 after:left-0 after:right-0",
                "after:h-[2px] after:rounded-full",
                horizontalTab === type.id
                  ? "after:bg-gradient-to-r after:from-[#2980B9] after:to-[#21638f]"
                  : "after:bg-transparent"
              )}
              onClick={() => (
                setHorizontalTab(type.id), setHorizontal(type.id)
              )}
            >
              {type.label}
            </button>
          ))}
        </div>
        <div className="lg:hidden px-3">
          <div className="relative ">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto whitespace-nowrap  p-2 space-x-4 scrollbar-hide rounded-md"
              style={{}}
            >
              {newsTypes.map((type) => (
                <button
                key={type.id}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-200 font-semibold text-[15px] xl:text-[16px]",
                  "hover:bg-gray-50",
                  "relative",
                  "after:absolute after:bottom-0 after:left-0 after:right-0",
                  "after:h-[2px] after:rounded-full",
                  horizontalTab === type.id
                    ? "after:bg-gradient-to-r after:from-[#2980B9] after:to-[#21638f]"
                    : "after:bg-transparent"
                )}
                onClick={() => (
                  setHorizontalTab(type.id), setHorizontal(type.id)
                )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">{horizontalTabPotentialProducts}</div>
    </div>
  );
};

export default CashewTab;
