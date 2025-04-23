"use client";

import { Title } from "@/components/Title/Title";
import React from "react";
import AutomationSwiper from "./components";

export type AutomationProps = {
  dict: any;
};

export default function Automation({ dict }: AutomationProps) {
  return (
    <div id="automation-services">
      <Title title={dict?.automation_list_title} />

      <div>
        <div
          className="bg-[#2196F3] bg-opacity-90 flex items-center"
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
    </div>
  );
}
