"use client";

import { useEffect, useState } from "react";
import style from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AutomationCard from "../AutomationCard/AutomationCard.";
import { useParams } from "next/navigation";
import { businessServicesData } from "@/common/data";
import { BookOpenCheck } from "lucide-react";

export default function AutomationSwiper() {
  const params = useParams<{ lang: string }>();
  const { lang } = params;

  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mx-auto">
      <div className={`${style.sliderWrapper}`}>
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
          {businessServicesData?.map((slide) => {
            const Icon: any = slide?.icon;
            return (
              <>
                (
                <SwiperSlide key={slide.id}>
                  <AutomationCard
                    icon={<Icon className="w-9 h-9" />}
                    image={slide?.image}
                    color={slide?.color}
                    link={slide?.link}
                    title={lang === "kh" ? slide?.title : slide?.title_en}
                  />
                </SwiperSlide>
                )
              </>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}
