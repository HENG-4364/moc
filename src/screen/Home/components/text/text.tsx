"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Plane,
  Users,
  Download,
  Calendar,
  ShoppingCart,
  FileText,
  Settings,
} from "lucide-react";
import style from "./text.module.scss";
import Image from "next/image";
import NetworkDiagram from "@/components/IconBanner";
import BusinessDiagram from "@/components/IconBanner/test1";
export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden hidden lg:block">
      {/* <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden "> */}
      {/* Floating Particles */}
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
      {/* </div> */}
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ministry-of-commerece.jpg"
          alt="Background"
          className="h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#297fb9ec] to-[#2677ad9d]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto grid min-h-[600px] gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white order-2 lg:order-1"
        >
          <div className="mb-6">
            <div
              className={` mb-5 text-[23px] lg:text-[28px] xl:text-[36px] leading-[1.8] uppercase ${style.font_fam}`}
              style={{
                fontWeight: "700  !important",
              }}
            >
              សូមស្វាគមន៍មកកាន់គេហទំព័រក្រសួងពាណិជ្ជកម្ម
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1 w-24 bg-[#FAB4A2]" />
              <div className="h-1 w-8 bg-[#FE724E]" />
            </div>
          </div>
          <div className="leading-[2] text-[18px] lg:text-[20px] font-medium">
            សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។
            ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម
            ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់
            កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ។
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white order-1 lg:order-2 "
        >
          <img
            src="/banner-white.png"
            alt="Background"
            className="h-full w-full object-contain "
          />
          {/* <NetworkDiagram/> */}
          {/* <BusinessDiagram /> */}
        </motion.div>
      </div>
    </section>
  );
}
