import { getDictionaryByFolder } from "@/app/[lang]/dictionaries";
import { getPublicBusinessDirectoryListAction } from "@/screen/BusinessDirectory/actions";
import { getPublicBusinessDirectoryCategoryDetailAction } from "@/screen/BusinessDirectory/actions/get-public-business-directory-category-detail.action";
import BusinessDirectoryCategoryDetailScreen from "@/screen/BusinessDirectory/BusinessDirectoryCategory/BusinessDirectoryCategoryDetail";
import React from "react";

type Params = Promise<{ lang: string; id: string }>;

const BusinessDirectoryCategoryDetailPage = async ({ params }: { params: Params; }) => {
  const { lang } = await params;
  const { id } = await params;
  const dict = await getDictionaryByFolder(lang, "business_directory");
  const categoryDetail = await getPublicBusinessDirectoryCategoryDetailAction({ id: Number(id) || 0 })
  const getPublicBusinessDirectoryListRes =
    await getPublicBusinessDirectoryListAction();
  return (
    <div>
      <BusinessDirectoryCategoryDetailScreen dict={dict} categoryDetail={categoryDetail} publicBusinessDirectoryList={
        getPublicBusinessDirectoryListRes?.publicBusinessDirectoryList
      } />
    </div>
  );
};

export default BusinessDirectoryCategoryDetailPage;
