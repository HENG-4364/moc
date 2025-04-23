"use client";

import { Title } from "@/components/Title/Title";
import { cn } from "@/lib/utils";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CashewTab from "./Components/CashewTab";
import { parseAsString, useQueryState } from "nuqs";
import RiceTab from "./Components/Ricetab";
import CassavaTab from "./Components/CassavaTab";
import PailinLonganTab from "./Components/PailinLonganTab";
import PepperTab from "./Components/PepperTab";

export const highPotentialProductsVerticalTabs = [
  { id: 1, label: "គ្រាប់ស្វាយចន្ទី", value: "cashew" },
  { id: 2, label: "ដំឡូងមី", value: "cassava" },
  { id: 3, label: "មៀនប៉ៃលិន", value: "pailinLongan" },
  { id: 4, label: "ស្រូវ អង្ករ", value: "rice" },
  { id: 5, label: "ម្រេច", value: "pepper" },
];

const HighPotentialProductsScreen = ({ dict }: any) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const [verticalTab, setVerticalTab] = useQueryState(
    "verticalTab",
    parseAsString.withDefault("cashew")
  );
  const [, setHorizontalTab] = useQueryState(
    "horizontalTab",
    parseAsString.withDefault("basicInformation")
  );

  const setVertical = (verticalTab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    setVerticalTab(verticalTab);
    setHorizontalTab(null);
    push(`${window.location.origin}/${pathname}?${params}`);
  };

  let verticalTabTabPotentialProducts: React.ReactNode;

  switch (verticalTab) {
    case "cashew":
      verticalTabTabPotentialProducts = <CashewTab />;
      break;

    case "cassava":
      verticalTabTabPotentialProducts = <CassavaTab dict={dict} />;
      break;

    case "pailinLongan":
      verticalTabTabPotentialProducts = <PailinLonganTab dict={dict} />;
      break;
    case "rice":
      verticalTabTabPotentialProducts = <RiceTab dict={dict} />;
      break;

    case "pepper":
      verticalTabTabPotentialProducts = <PepperTab dict={dict} />;
      break;

    default:
      verticalTabTabPotentialProducts = <CashewTab />;
      break;
  }
  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateArrows);
      updateArrows();

      return () => scrollContainer.removeEventListener("scroll", updateArrows);
    }
  }, []);

  return (
    <section className="bg-[#f6f7f8]">
      <div className="container mx-auto px-4 pb-12">
        <Title title="មុខទំនិញសក្ដានុពលខ្ពស់" />
        <div className="lg:grid grid-cols-11 gap-6 hidden">
          {/* Sidebar */}
          <div className="col-span-3 bg-white shadow-md h-[288px]">
            <div className="w-full shadow-sm">
              <div ref={scrollContainerRef} className="p-2 rounded-md w-full ">
                {highPotentialProductsVerticalTabs.map((type) => (
                  <div
                    key={type.id}
                    className={cn(
                      "px-4 py-3 rounded-sm  cursor-pointer my-1",
                      "hover:bg-gray-50",
                      verticalTab === type.value
                        ? "bg-gradient-to-b from-[#2980B9] to-[#286e9d] text-white"
                        : "after:bg-transparent border border-gray-100"
                    )}
                    onClick={() => (
                      setVerticalTab(type.value), setVertical(type.value)
                    )}
                  >
                    {type.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-8 bg-white shadow-md">
            {verticalTabTabPotentialProducts}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative ">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto whitespace-nowrap  p-2 space-x-4 scrollbar-hide rounded-md"
              style={{}}
            >
              {highPotentialProductsVerticalTabs.map((type) => (
                <button
                  key={type.id}
                  className={`rounded-md ${
                    verticalTab === type.value
                      ? "bg-gradient-to-b from-[#2980B9] to-[#24648f] text-white"
                      : "bg-gray-200"
                  } px-2 py-2 text-md`}
                  onClick={() => (
                    setVerticalTab(type.value), setVertical(type.value)
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-end gap-2 mt-2 mb-5">
            <button
              className={`p-2 rounded-full shadow-md ${
                !showLeftArrow
                  ? "bg-gray-50 hover:bg-gray-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => scroll("left")}
            >
              <ChevronLeft
                className={` ${!showLeftArrow ? "text-gray-400" : ""}`}
              />
            </button>
            <button
              className={`p-2 rounded-full shadow-md ${
                !showRightArrow
                  ? "bg-gray-50 hover:bg-gray-50"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => scroll("right")}
            >
              <ChevronRight
                className={` ${!showRightArrow ? "text-gray-400" : ""}`}
              />
            </button>
          </div> */}
          <div className="col-span-8 bg-white shadow-md">
            {verticalTabTabPotentialProducts}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighPotentialProductsScreen;
