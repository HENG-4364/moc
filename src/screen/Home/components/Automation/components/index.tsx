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
import { Title } from "@/components/Title/Title";
import AutomationCard from "../AutomationCard/AutomationCard.";

const slides = [
  {
    id: 1,
    title: "Business Registration",
    link: "https://www.businessregistration.moc.gov.kh",
    icon: "flaticon-seo",
    color: "bg-b5a2f8",
    image: "/bs2.webp",
  },
  {
    id: 2,
    title: "Business license",
    link: "https://ecommercelicensing.moc.gov.kh",
    icon: "flaticon-laptop",
    color: "bg-e80d82",
    image: "/bs3.webp",
  },
  {
    id: 3,
    title: "Intellectual Property",
    link: "https://cambodiaip.gov.kh",
    icon: "flaticon-analysis-1",
    color: "bg-1db294",
    image: "/bs1.webp",
  },
  {
    id: 4,
    title: "Secured Transactions Filing Office",
    link: "http://www.setfo.gov.kh",
    icon: "flaticon-seo",
    color: "bg-f27e19",
    image: "/bs4.webp",
  },
  {
    id: 5,
    title: "CO Automation",
    link: "https://co.moc.gov.kh",
    icon: "flaticon-analysis-1",
    color: "bg-e74c3c",
    image: "/bs5.webp",
  },
];

export default function AutomationSwiper() {
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <AutomationCard
                image={slide?.image}
                color={slide?.color}
                link=""
                title={slide?.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
