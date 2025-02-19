"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Bell, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import style from "./swiper.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    content:
      "តម្លៃប្រេងឥន្ធនៈនៅរាជធានីភ្នំពេញ ចាប់ពីថ្ងៃទី១៦ ដល់ថ្ងៃទី ៣១ ខែ មករា ឆ្នាំ២០២៣",
    date: "២០២៤-០១-១៥",
  },
  {
    id: 2,
    content: "សេចក្តីជូនដំណឹងស្តីពីការបិទសេវាកម្មក្នុងថ្ងៃឈប់សម្រាក",
    date: "២០២៤-០១-១៤",
  },
  {
    id: 3,
    content:
      "សេចក្តីជូនដំណឹងស្តីពីការផ្អាកការផ្តល់សេវាសាធារណៈក្នុងឱកាសបុណ្យចូលឆ្នាំថ្មី",
    date: "២០២៤-០១-១៣",
  },
  {
    id: 4,
    content: "សេចក្តីជូនដំណឹងស្តីពីការកែសម្រួលតម្លៃសេវាសាធារណៈ",
    date: "២០២៤-០១-១២",
  },
];

export default function AnnouncementSwiper() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full  mx-auto">
      <div className={` ${style.sliderWrapper}`}>
        <Swiper
          // spaceBetween={30}
          // pagination={{
          //   clickable: true,
          //   bulletActiveClass: "bg-blue-600 !opacity-100",
          //   bulletClass: "swiper-pagination-bullet !bg-blue-300 !w-2 !h-2 !mx-1",
          // }}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          // slidesPerView={1}
          // modules={[Autoplay, Pagination]}
          // className="mySwiper"
          // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
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
                            fontFamily: "Khmer OS Siemreap, Arial, sans-serif",
                          }}
                        >
                          {slide.content}
                        </p>
                        <div className="flex justify-between items-center">
                          <span
                            className="text-sm bg-white text-[#2980B9] px-3 py-1 rounded-full"
                            style={{
                              fontFamily:
                                "Khmer OS Siemreap, Arial, sans-serif",
                            }}
                          >
                            {slide.date}
                          </span>
                          <button className="text-sm flex items-center hover:underline">
                            អានបន្ថែម <ChevronRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </AnimatePresence>
        </Swiper>
      </div>
    </div>
  );
}
