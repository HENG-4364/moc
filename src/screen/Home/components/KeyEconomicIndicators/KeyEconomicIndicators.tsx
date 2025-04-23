"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import { Title } from "@/components/Title/Title";
import React from "react";
import KeyEconomicIndicatorsSwiper from "./components";

export type KeyEconomicIndicatorsProps = {
  dict: any;
  importTradeProductCategory: any;
  exportTradeProductCategory: any;
  publicKeyEconomicIndicators: any;
};

export default function KeyEconomicIndicators({
  dict,
  importTradeProductCategory,
  exportTradeProductCategory,
  publicKeyEconomicIndicators,
}: KeyEconomicIndicatorsProps) {
  const [api] = React.useState<CarouselApi>();
  const [, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div id="economic-indicators">
      <Title title={dict?.key_economic_indicators_title} />

      <div>
        <div className="container mx-auto">
          <KeyEconomicIndicatorsSwiper
            dict={dict}
            importTradeProductCategory={importTradeProductCategory}
            exportTradeProductCategory={exportTradeProductCategory}
            publicKeyEconomicIndicators={publicKeyEconomicIndicators}
          />
        </div>
      </div>
    </div>
  );
}
