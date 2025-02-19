"use client";

import { useEffect, useState } from "react";
import style from "./swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import KeyEconomicIndicatorsCard from "../KeyEconomicIndicatorsCard/KeyEconomicIndicatorsCard";
import { TopExportProductModal } from "./ExportGoodDailog/ExportGoodDailog";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 1,
    title: "តម្លៃប្រេងសាំង",
    link: "https://www.businessregistration.moc.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/sang.png",
    name: "តម្លៃ",
  },
  {
    id: 2,
    title: "សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់",
    link: "https://ecommercelicensing.moc.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/statistic.png",
    name: "0.46%",
  },
  {
    id: 3,
    title: "ទំនិញនាំចេញ-នាំចូល",
    link: "https://cambodiaip.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/export-goods.png",
    name: "នាំចូល",
  },
  {
    id: 4,
    title: "ទំនិញសក្ដានុពល",
    link: "http://www.setfo.gov.kh",
    date: "១១/ធ្នូ/២០២៤",
    image: "/cashew.png",
    name: "នាំចេញ",
  },
];
interface Treatment {
  id: number;
  name: string;
  price: number;
}

const treatments: Treatment[] = [
  { id: 1, name: "សម្អាតធ្មេញ", price: 0 },
  { id: 2, name: "ដេញក្រាស និងការពារដេញក្រាស", price: 0 },
  { id: 3, name: "ការបូ", price: 0 },
  { id: 4, name: "ដកធ្មេញដោយគ្មានការឈឺចាប់", price: 0 },
  { id: 5, name: "ប្តូរធ្មេញក្រាស៥០ និងការពីដេក", price: 0 },
  { id: 6, name: "ប្តូរធ្មេញស្រទាប់ខ្នង", price: 0 },
  { id: 7, name: "កាត់", price: 0 },
  { id: 8, name: "ប្តូរធ្មេញស្រទាប់កាត់", price: 0 },
  { id: 9, name: "ដេញក្រាស ប្រភេទថ្ម", price: 0 },
  { id: 10, name: "ដាក់ Veneer", price: 0 },
  { id: 11, name: "ខាតក្រអូម", price: 0 },
  { id: 12, name: "ដេញពេញមាត់ទាំង", price: 0 },
  { id: 13, name: "ដកធ្មេញកូនក្មេង", price: 0 },
];
export default function KeyEconomicIndicatorsSwiper() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
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
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
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
              title={"តម្លៃប្រេងសាំង"}
              image={"/sang.png"}
              date={"១១/ធ្នូ/២០២៤"}
              name={"តម្លៃ"}
              link="/commodity-values"
            />
          </SwiperSlide>
          <SwiperSlide>
            <KeyEconomicIndicatorsCard
              title={"សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់"}
              image={"/statistic.png"}
              date={"១១/ធ្នូ/២០២៤"}
              name={"0.46%"}
              link="/cpi"
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => {
              setOpen(true);
            }}
          >
            <KeyEconomicIndicatorsCard
              title={"ទំនិញនាំចេញ-នាំចូល"}
              image={"/export-goods.png"}
              date={"១១/ធ្នូ/២០២៤"}
              name={"នាំចូល"}
              link="#"
            />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => router.push("/post/high-potential-products")}
          >
            <KeyEconomicIndicatorsCard
              title={"ទំនិញសក្ដានុពល"}
              image={"/cashew.png"}
              date={"១១/ធ្នូ/២០២៤"}
              name={"នាំចេញ"}
            />
          </SwiperSlide>
        </Swiper>
        <TopExportProductModal
          open={open}
          setOpen={setOpen}
          data={treatments}
        />
      </div>
    </div>
  );
}
