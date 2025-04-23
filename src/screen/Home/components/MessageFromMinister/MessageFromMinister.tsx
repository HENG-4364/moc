"use client";

import { motion } from "framer-motion";
import style from "./message-from-minister.module.scss";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative  overflow-hidden hidden lg:block">
      <div className="absolute inset-0 z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Image
              src="/flower-bg-loading.png"
              alt="floating-logo"
              width={40}
              height={40}
              className="w-auto h-auto opacity-20 select-none"
              style={{
                width: Math.random() * 30 + 25 + "px",
                height: "auto",
              }}
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/ministry-of-commerece.jpg"
          alt="Background"
          className="h-full w-full object-cover brightness-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#297fb9ec] to-[#2b86c29c]" />
      </div>

      <div className="container relative z-[20] mx-auto grid min-h-[82vh] gap-20 px-4 py-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white order-2 lg:order-1"
        >
          <div className="mb-6">
            <div
              className={` mb-5 text-[23px] lg:text-[28px] xl:text-[36px] leading-[1.8] uppercase ${style.font_fam}`}
            >
              សូមស្វាគមន៍មកកាន់គេហទំព័រក្រសួងពាណិជ្ជកម្ម
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1 w-24 bg-[#FAB4A2]" />
              <div className="h-1 w-8 bg-[#FE724E]" />
            </div>
          </div>
          <div className="leading-[2] text-[18px] lg:text-[20px] mb-5 text-slate-200 ">
            សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។
            ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម
            ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់
            កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ។
          </div>
          <button className="bg-white hover:bg-slate-200 text-[#2980B9] font-medium py-3 px-8 rounded-full transition-all duration-300 cursor-pointer">
            SEE MORE
          </button>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white order-1 lg:order-2 "
        >
          <Image
            src="/banner-white.png"
            alt="Background"
            className="h-full w-full object-contain "
            width={1920}
            height={1080}
          />
        </motion.div>

      </div>

    </section>
  );
}
