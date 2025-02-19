"use client";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TypeOfBusinessCardPlaceholder from "./Components/TypeOfBusinessCardPlaceholder";
import TypeOfBusinessCard from "./Components/TypeOfBusinessCard";

type TypeOfBusinessProps = {
  dict?: any;
  data?: any;
  loading?: boolean;
};
const businessCategories = [
  {
    id: 1,
    cardTitle: "Restaurants",
    thumbnail: "/logo.png",
  },
  {
    id: 2,
    cardTitle: "Health & Wellness",
    thumbnail: "/logo.png",
  },
  {
    id: 3,
    cardTitle: "Education",
    thumbnail: "/logo.png",
  },
  {
    id: 4,
    cardTitle: "Real Estate",
    thumbnail: "/logo.png",
  },
  {
    id: 5,
    cardTitle: "Technology",
    thumbnail: "/logo.png",
  },
  {
    id: 6,
    cardTitle: "Automotive",
    thumbnail: "/logo.png",
  },
  {
    id: 7,
    cardTitle: "Finance",
    thumbnail: "/logo.png",
  },
  {
    id: 8,
    cardTitle: "Entertainment",
    thumbnail: "/logo.png",
  },
  {
    id: 9,
    cardTitle: "Retail & Shopping",
    thumbnail: "/logo.png",
  },
  {
    id: 10,
    cardTitle: "Hospitality",
    thumbnail: "/logo.png",
  },
];

export default function TypeOfBusiness({ data, loading }: TypeOfBusinessProps) {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

  return (
    <div className="container pb-1 -translate-y-32 relative ">
      {loading || !businessCategories ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 `}
        >
          <div className="">
            <TypeOfBusinessCardPlaceholder />
          </div>
          <div className="hidden sm:block">
            <TypeOfBusinessCardPlaceholder />
          </div>
          <div className="hidden md:block">
            <TypeOfBusinessCardPlaceholder />
          </div>
          <div className="hidden lg:block">
            <TypeOfBusinessCardPlaceholder />
          </div>
        </div>
      ) : (
        <div>
          <button
            className={`swiper-custom-left-arrow shadow-lg text-black bg-white p-2 rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block `}
          >
            <ChevronLeft size={30} />
          </button>

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
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-custom-right-arrow",
              prevEl: ".swiper-custom-left-arrow",
            }}
          >
            {businessCategories?.map((item: any) => (
              <SwiperSlide
                key={item.id}
                className="cursor-pointer h-full pb-2 "
              >
                <TypeOfBusinessCard
                  cardTitle={lang === "kh" ? item.cardTitle : item.cardTitle}
                  id={item.id}
                  thumbnail={item.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-custom-right-arrow shadow-lg text-black bg-white p-2 rounded-full absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
