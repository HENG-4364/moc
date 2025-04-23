import CpiScreen from "@/screen/Cpi";
import {
  getPublicCPIBarChartAction,
  getPublicCPIGroupListAction,
} from "@/screen/Cpi/actions";
import React from "react";

const CpiPage = async () => {
  const getPublicCPIGroupListRes = await getPublicCPIGroupListAction();
  if (!getPublicCPIGroupListRes) return <></>;

  return (
    <CpiScreen
      publicCPIGroupList={getPublicCPIGroupListRes?.publicCPIGroupList}
    />
  );
};

export default CpiPage;
