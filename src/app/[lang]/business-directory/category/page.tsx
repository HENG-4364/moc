import { getPublicBusinessDirectoryCategoryListAction } from "@/screen/BusinessDirectory/actions";
import BusinessDirectoryCategoryScreen from "@/screen/BusinessDirectory/BusinessDirectoryCategory";
import React from "react";

const BusinessDirectoryCategoryPage = async () => {
  const getPublicBusinessDirectoryCategoryListRes =
    await getPublicBusinessDirectoryCategoryListAction();

  return (
    <div>
      <BusinessDirectoryCategoryScreen
        publicBusinessDirectoryCategoryList={
          getPublicBusinessDirectoryCategoryListRes?.publicBusinessDirectoryCategoryList
        }
      />
    </div>
  );
};

export default BusinessDirectoryCategoryPage;
