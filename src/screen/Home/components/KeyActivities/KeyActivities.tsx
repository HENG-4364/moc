"use client";

import { Title } from "@/components/Title/Title";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KeyActivitiesSwiper from "./components";

export default function KeyActivities() {
  return (
    <div>
      <Title title={"សកម្មភាព"} />

      <div className="container mx-auto">
        <KeyActivitiesSwiper />
      </div>
    </div>
  );
}
