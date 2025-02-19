"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Bell, Globe, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import style from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import KeyActivitiesCard from "../KeyActivitiesCard/KeyActivitiesCard";

const slides = [
  {
    id: 1,
    image: "https://s2.moc.gov.kh/mocspace/mocspace_1723181662062.png",
    title: "ដំណឹងប្រកួតថ្នាក់ជាតិ",
    description:
      "ពិធីប្រកាសលទ្ធផល និងបិទវគ្គបណ្តុះបណ្តាល ស្តីពីការអនុវត្តន៍",
  },
  {
    id: 2,
    image: "https://s2.moc.gov.kh/mocspace/mocspace_1731048391859.jpg",
    title: "មន្ត្រីជំនាញថ្នាក់ជាតិ",
    description: "ប្រជុំជាមួយ សាលាក្រុងព្រះសីហនុ និងមន្ទីរពាក់ព័ន្ធ",
  },
  {
    id: 3,
    image: "https://s2.moc.gov.kh/mocspace/mocspace_1730970517538.jpg",
    title: "ប្រជុំពិភាក្សា",
    description: "កិច្ចប្រជុំ និងការត្រួតពិនិត្យការអនុវត្តន៍",
  },
  {
    id: 4,
    image: "https://s2.moc.gov.kh/mocspace/mocspace_1730969305246.jpg",
    title: "ប្រជុំពិភាក្សា",
    description: "កិច្ចប្រជុំ និងការត្រួតពិនិត្យការអនុវត្តន៍",
  },
];

export default function KeyActivitiesSwiper() {
  const [mounted, setMounted] = useState(false);

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
            1200: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            450: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          slidesPerView={3}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "50px" }}
        >
          {slides.map((slide) => (
            <SwiperSlide  key={slide.id}>
              <KeyActivitiesCard
                title={slide?.title}
                image={slide?.image}
                description={slide?.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
