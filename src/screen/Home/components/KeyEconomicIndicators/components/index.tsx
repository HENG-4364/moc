"use client";

import { useEffect, useState } from "react";
import style from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import KeyEconomicIndicatorsCard from "../KeyEconomicIndicatorsCard/KeyEconomicIndicatorsCard";
import { TopExportProductModal } from "./ExportGoodDailog/ExportGoodDailog";
import moment from "moment-timezone";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  convertToKhmerMonth,
  convertToKhmerNumberWithZeroPrefix,
} from "@/function/DayNumberToKhmerNumber";
import { useParams } from "next/navigation";
import { ArrowRightLeft, ChartNoAxesCombined, Fuel, PlaneTakeoff } from "lucide-react";

export type KeyEconomicIndicatorsSwiperProps = {
  dict: any;
  importTradeProductCategory: any;
  exportTradeProductCategory: any;
  publicKeyEconomicIndicators: any;
};

export default function KeyEconomicIndicatorsSwiper({
  dict,
  importTradeProductCategory,
  exportTradeProductCategory,
  publicKeyEconomicIndicators,
}: KeyEconomicIndicatorsSwiperProps) {
  const params = useParams<{ lang: string }>();
  const { lang } = params;
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const splitDate = (timestamp: any) => {
    return moment(Number(timestamp)).format("DD/MMM/yyyy").split("/");
  };

  const cpiDateParts = splitDate(
    publicKeyEconomicIndicators?.cpiIndicator?.date
  );
  const gasolineDateParts = splitDate(
    publicKeyEconomicIndicators?.gasolineIndicator?.date
  );

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mx-auto">
      <div className={` ${style.sliderWrapper}`}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            450: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          slidesPerView={4}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "50px" }}
        >
          <SwiperSlide>
            <KeyEconomicIndicatorsCard
              title={dict?.key_economic_indicators?.gasoline_price_index_label}
              image={"/sang.png"}
              icon={<Fuel className="w-8 h-8" />}
              color={"bg-blue-500/10 text-blue-500"}
              date={
                lang === "en-US"
                  ? `${gasolineDateParts[0]}/${gasolineDateParts[1]}/${gasolineDateParts[2]}`
                  : `${convertToKhmerNumberWithZeroPrefix(
                    gasolineDateParts[0]
                  )}/${convertToKhmerMonth(
                    gasolineDateParts[1]
                  )}/${convertToKhmerNumberWithZeroPrefix(
                    gasolineDateParts[2]
                  )}`
              }
              name={dict?.key_economic_indicators?.gasoline_price_index_value}
              link="/commodity-values"
              dict={dict}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KeyEconomicIndicatorsCard
              title={dict?.key_economic_indicators?.consumer_price_index}
              image={"/statistic.png"}
              icon={<ChartNoAxesCombined className="w-8 h-8" />}
              color="bg-green-500/10 text-green-500"
              date={
                lang === "en-US"
                  ? `${cpiDateParts[0]}/${cpiDateParts[1]}/${cpiDateParts[2]}`
                  : `${convertToKhmerNumberWithZeroPrefix(
                    cpiDateParts[0]
                  )}/${convertToKhmerMonth(
                    cpiDateParts[1]
                  )}/${convertToKhmerNumberWithZeroPrefix(cpiDateParts[2])}`
              }
              name={"0.46%"}
              link="/cpi"
              dict={dict}
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              setOpen(true);
            }}
          >
            <KeyEconomicIndicatorsCard
              title={dict?.key_economic_indicators?.top_import_label}
              image={"/export-goods.png"}
              icon={<ArrowRightLeft  className="w-8 h-8" />}
              color="bg-orange-500/10 text-orange-500"
              date={
                lang === "en-US"
                  ? currentYear?.toString()
                  : convertToKhmerNumberWithZeroPrefix(currentYear?.toString())
              }
              name={dict?.key_economic_indicators?.top_import_value}
              dict={dict}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KeyEconomicIndicatorsCard
              title={dict?.key_economic_indicators?.top_export_label}
              image={"/cashew.png"}
              icon={<PlaneTakeoff  className="w-8 h-8" />}
              color="bg-yellow-500/10 text-yellow-500"
              date={
                lang === "en-US"
                  ? currentYear?.toString()
                  : convertToKhmerNumberWithZeroPrefix(currentYear?.toString())
              }
              name={dict?.key_economic_indicators?.top_export_value}
              dict={dict}
              link="/post/high-potential-products"
            />
          </SwiperSlide>
        </Swiper>
        <TopExportProductModal
          open={open}
          setOpen={setOpen}
          importTradeProductCategory={importTradeProductCategory}
          exportTradeProductCategory={exportTradeProductCategory}
        />
      </div>
    </div>
  );
}
