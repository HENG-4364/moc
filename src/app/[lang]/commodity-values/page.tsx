import { getPublicProvinceListAction } from "@/common/actions";
import CommodityValuesScreen from "@/screen/CommodityValues";
import { getProductListAction } from "@/screen/CommodityValues/actions";
import React from "react";

const CommodityValuesPage = async () => {
  const [getPublicProvinceListRes, getProductListRes] = await Promise.all([
    getPublicProvinceListAction(),
    getProductListAction(),
  ]);

  return (
    <CommodityValuesScreen
      publicProvinceList={getPublicProvinceListRes?.publicProvinceList}
      productList={getProductListRes?.productList}
    />
  );
};

export default CommodityValuesPage;
