import { getPublicBusinessDirectoryCategoryListAction, getPublicBusinessDirectoryListAction } from "@/screen/BusinessDirectory/actions";
import BusinessDirectorySearchScreen from "@/screen/BusinessDirectory/BusinessDirectorySearch";
import React from "react";
import { getDictionaryByFolder } from "../../dictionaries";

type Params = Promise<{ lang: string }>;

const BusinessDirectorySearchPage = async ({ params }: { params: Params; }) => {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "business_directory");
  const getPublicBusinessDirectoryCategoryListRes =
    await getPublicBusinessDirectoryCategoryListAction();
  const getPublicBusinessDirectoryListRes =
    await getPublicBusinessDirectoryListAction();
  return (
    <div>
      <BusinessDirectorySearchScreen dict={dict} publicBusinessDirectoryCategoryList={
        getPublicBusinessDirectoryCategoryListRes?.publicBusinessDirectoryCategoryList
      }
        publicBusinessDirectoryList={
          getPublicBusinessDirectoryListRes?.publicBusinessDirectoryList
        } />
    </div>
  );
};

export default BusinessDirectorySearchPage;
