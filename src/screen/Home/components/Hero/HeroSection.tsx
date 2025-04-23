"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import style from "./hero-section.module.scss";

export type HeroSectionProps = {
  dict: any;
};

function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section className={`w-full ${style.bannerContainer}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <h2 className={`${style.title}`}>{dict?.banner_title}</h2>
        </div>

        <div>
          <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            slidesPerView={4}
            modules={[Pagination]}
            className="mySwiper p-2"
          >
            {[
              {
                href: "#automation-services",
                img: "/home-banner/automation-services-banner-card.jpg",
                text: dict?.banner_items?.automation_services,
              },
              {
                href: "#key-activities",
                img: "/home-banner/activity-banner-card.jpg",
                text: dict?.banner_items?.key_activities,
              },
              {
                href: "#economic-indicators",
                img: "/home-banner/economic-indicator-banner-card.jpg",
                text: dict?.banner_items?.economic_indicators,
              },
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className={`flex justify-center ${style.bannerCardSlide}`}
              >
                <Link href={item.href} className="no-underline">
                  <div
                    className="p-8 aspect-square w-full bg-cover bg-center rounded-[60px] flex flex-col justify-between shadow-lg"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  >
                    <div className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full self-start">
                      <h6>{item.text}</h6>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-0 xl:mt-8">
          <Image
            src="/moc-banner-eco.png"
            alt=""
            width={1000}
            height={1000}
            className={`max-w-full h-auto ${style.bannerEcoImg}`}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
