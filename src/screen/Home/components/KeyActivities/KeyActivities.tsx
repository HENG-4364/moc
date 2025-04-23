"use client";

import { Title } from "@/components/Title/Title";
import { useEffect, useState } from "react";
import style from "./key-activities.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import KeyActivitiesCard from "./components/KeyActivitiesCard/KeyActivitiesCard";
import { useParams } from "next/navigation";
import { KeyActivitiesCardPlaceholder } from "./components/Placeholder";

export type KeyActivitiesProps = {
  dict: any;
  publicNewsList: any;
};

export default function KeyActivities({
  dict,
  publicNewsList,
}: KeyActivitiesProps) {
  const params = useParams<{ lang: string }>();
  const { lang } = params;
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="key-activities">
      <Title title={dict?.key_activities_title} />

      <div className="container mx-auto">
        <div className="w-full mx-auto">
          {publicNewsList?.data?.length > 0 ? (
            <>
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
                  {publicNewsList?.data?.map((item: any, idx: number) => {
                    const { title, title_en, thumbnail } = item;

                    return (
                      <SwiperSlide key={idx + 1}>
                        <KeyActivitiesCard
                          title={
                            lang === "kh" ? title : title_en ? title_en : title
                          }
                          image={thumbnail}
                          link={`/news/${item?.id}/`}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </>
          ) : (
            <>
              <KeyActivitiesCardPlaceholder />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
