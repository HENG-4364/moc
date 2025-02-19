"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BarChart3, Lock, Globe } from "lucide-react";
import style from "./swiper.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ImageCard from "./ImageCard";

export default function SwiperCard() {
  return (
    <div className={style.sliderWrapper}>
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
          1200: { slidesPerView: 3 },
          992: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          450: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        slidesPerView={4}
        modules={[Autoplay, Pagination]}
        className="mySwiper !pb-10 "
       
      >
        <SwiperSlide className="cursor-pointer">
          <ImageCard
            imageSrc={"/ex1.jpg"}
            logoSrc={<BarChart3 className="w-6 h-6" />}
            title={"ក្រុមហ៊ុនមហាជនទទួលខុសត្រូវមានកម្រិត"}
          />
        </SwiperSlide>

        <SwiperSlide className="cursor-pointer">
          <ImageCard
            imageSrc={"/ex2.jpg"}
            logoSrc={<Lock className="w-6 h-6" />}
            title={"ក្រុមហ៊ុនឯកជនទទួលខុសត្រូវមានកម្រិត"}
          />
        </SwiperSlide>

        <SwiperSlide className="cursor-pointer">
          <ImageCard
            imageSrc={"/ex3.jpg"}
            logoSrc={<Globe className="w-6 h-6" />}
            title={"ក្រុមហ៊ុនបរទេស"}
          />
        </SwiperSlide>
      </Swiper>

      <div className="w-full flex justify-center mt-2">
        <div className="swiper-custom-pagination" />
      </div>
    </div>
  );
}
