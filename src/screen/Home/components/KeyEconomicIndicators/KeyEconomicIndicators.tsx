"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Title } from "@/components/Title/Title";
import React from "react";
import KeyEconomicIndicatorsCard from "./KeyEconomicIndicatorsCard/KeyEconomicIndicatorsCard";
import KeyEconomicIndicatorsSwiper from "./components";

export default function KeyEconomicIndicators() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  return (
    <div>
      <Title title={"សូចនាករសេដ្ឋកិច្ច"} />

      <div className="container mx-auto">
        <KeyEconomicIndicatorsSwiper />
      </div>
    </div>
  );
}
