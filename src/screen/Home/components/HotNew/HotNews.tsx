"use client";

import * as React from "react";
import { Title } from "@/components/Title/Title";
import AnnouncementSwiper from "./components";


export function Announcement() {

  return (
    <div className="container mx-auto px-4 ">
      <Title title={"សេចក្តីជូនដំណឹង"} />
      <AnnouncementSwiper />
    </div>
  );
}
