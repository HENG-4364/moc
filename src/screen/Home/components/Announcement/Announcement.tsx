"use client";

import { Title } from "@/components/Title/Title";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Bell, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import style from "./announcement.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "next/navigation";
import {
  convertLatinMonth,
  convertToLatinNumber,
} from "@/function/DayNumberToKhmerNumber";
import { AnnouncementPlaceholder } from "./components/Placeholder";
import Link from "next/link";

export type AnnouncementProps = {
  dict: any;
  publicAnnouncementList: any;
};

export function Announcement({
  publicAnnouncementList,
  dict,
}: AnnouncementProps) {
  const params = useParams<{ lang: string }>();
  const { lang } = params;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Title title={dict?.announcements_title} />

      <div className="container mx-auto px-4">
        {publicAnnouncementList ? (
          <div className="w-full mx-auto">
            <div className={` ${style.sliderWrapper}`}>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                style={{ paddingBottom: "50px" }}
              >
                <AnimatePresence mode="wait">
                  {publicAnnouncementList?.data?.map((item: any) => {
                    const getDate = item?.published_date?.split("/");

                    return (
                      <SwiperSlide key={item?.id} className="cursor-pointer">
                        <Link href={item?.link}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Card className="bg-gradient-to-r from-[#2980B9] to-[#57a0d0] text-white p-6 shadow-lg">
                              <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full">
                                  <Bell className="h-6 w-6 text-[#2980B9]" />
                                </div>
                                <div className="space-y-3 flex-1">
                                  <p
                                    className="text-lg font-medium line-clamp-2 leading-8"
                                    style={{
                                      fontFamily:
                                        "Khmer OS Siemreap, Arial, sans-serif",
                                    }}
                                  >
                                    {lang === "kh" ? item?.name : item?.name_en}
                                  </p>
                                  <div className="flex justify-between items-center">
                                    <span
                                      className="text-sm bg-white text-[#2980B9] px-3 py-1 rounded-full"
                                      style={{
                                        fontFamily:
                                          "Khmer OS Siemreap, Arial, sans-serif",
                                      }}
                                    >
                                      {getDate
                                        ? `${dict?.hot_news?.day}${
                                            lang === "kh"
                                              ? getDate[0]
                                              : convertToLatinNumber(getDate[0])
                                          } ${dict?.hot_news?.month}${
                                            lang === "kh"
                                              ? getDate[1]
                                              : convertLatinMonth(getDate[1])
                                          } ${dict?.hot_news?.year}${
                                            lang === "kh"
                                              ? getDate[2]
                                              : convertToLatinNumber(getDate[2])
                                          }`
                                        : ""}
                                    </span>
                                    <button className="text-sm flex items-center hover:underline">
                                      {dict?.hot_news?.read_more}{" "}
                                      <ChevronRight className="h-4 w-4 ml-1" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </motion.div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </AnimatePresence>
              </Swiper>
            </div>
          </div>
        ) : (
          <>
            <AnnouncementPlaceholder />
          </>
        )}
      </div>
    </div>
  );
}
