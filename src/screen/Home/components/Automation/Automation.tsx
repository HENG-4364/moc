"use client";
import { Title } from "@/components/Title/Title";
import React from "react";
import AutomationSwiper from "./components";

export default function Automation() {
  return (
    <div>
      <Title title={"សេវាកម្មស្វ័យប្រវត្តកម្ម"} />
      <div
        className=" bg-[#2196F3] bg-opacity-90 flex items-center"
        style={{
          background: `url(${"/bg-dark.png"}) no-repeat`,
          height: "339px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mt-10">
          <AutomationSwiper />
        </div>
      </div>
    </div>
  );
}
