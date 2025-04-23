import BusinessDirectoryScreen from "@/screen/BusinessDirectory";
import React from "react";
import { getDictionaryByFolder } from "../dictionaries";
import { Metadata } from "next";
import { getPublicBusinessDirectoryCategoryListAction, getPublicBusinessDirectoryListAction } from "@/screen/BusinessDirectory/actions";

type Params = Promise<{ lang: string }>;

const BusinessDirectoryPage = async ({ params }: { params: Params }) => {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "business_directory");
  const getPublicBusinessDirectoryCategoryListRes =
    await getPublicBusinessDirectoryCategoryListAction();
  const getPublicBusinessDirectoryListRes =
    await getPublicBusinessDirectoryListAction();

  return (
    <>
      <BusinessDirectoryScreen
        dict={dict}
        publicBusinessDirectoryCategoryList={
          getPublicBusinessDirectoryCategoryListRes?.publicBusinessDirectoryCategoryList
        }
        publicBusinessDirectoryList={
          getPublicBusinessDirectoryListRes?.publicBusinessDirectoryList
        }
      />
    </>
  );
};

export default BusinessDirectoryPage;
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "business_directory");
  return {
    title: dict?.head_title,
  };
}
