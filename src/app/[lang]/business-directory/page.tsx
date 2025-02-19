import BusinessDirectoryScreen from "@/screen/BusinessDirectory";
import React from "react";
import { getDictionaryByFolder } from "../dictionaries";
import { Metadata } from "next";
type Params = Promise<{ lang: string }>;
const BusinessDirectoryPage = async ({ params }: { params: Params }) => {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "business_directory");
  return (
    <>
      <BusinessDirectoryScreen dict={dict} />
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
