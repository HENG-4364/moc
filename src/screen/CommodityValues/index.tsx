"use client";

import { parseAsString, useQueryState } from "nuqs";
import {
  CommodityPriceBarSection,
  CommodityPriceLineSection,
  CommodityPriceTableSection,
} from "./Components";
import { Title } from "@/components/Title/Title";

export type CommodityValuesScreenProps = {
  publicProvinceList: any;
  productList: any;
};

export default function CommodityValuesScreen({
  productList,
  publicProvinceList,
}: CommodityValuesScreenProps) {
  const [tab, setTab] = useQueryState("tab", parseAsString.withDefault("bar"));

  return (
    <section className="bg-gray-50 pb-20">
      <div className="container mx-auto">
        <Title title={"សន្ទស្សន៍ថ្លៃទំនិញប្រចាំថ្ងៃ"} />

        {tab === "bar" && (
          <CommodityPriceBarSection
            productList={productList}
            publicProvinceList={publicProvinceList}
            tab={tab}
            setTab={setTab}
          />
        )}

        {tab === "line" && (
          <CommodityPriceLineSection
            productList={productList}
            publicProvinceList={publicProvinceList}
            tab={tab}
            setTab={setTab}
          />
        )}

        {tab === "table" && (
          <CommodityPriceTableSection
            productList={productList}
            publicProvinceList={publicProvinceList}
            tab={tab}
            setTab={setTab}
          />
        )}
      </div>
    </section>
  );
}
