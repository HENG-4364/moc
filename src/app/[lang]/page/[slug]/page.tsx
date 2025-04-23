import React from "react";
import { getDictionaryByFolder } from "../../dictionaries";
import { Metadata } from "next";
import PageDetailScreen from "@/screen/PageDetail";
import { getPublicPageDetailAction } from "@/screen/PageDetail/actions";

type Params = Promise<{ lang: string; slug: string }>;

const PageDetailPage = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionaryByFolder(lang, "page");
  const getPublicPageDetailRes = await getPublicPageDetailAction(slug);

  return (
    <PageDetailScreen
      dict={dict}
      page={getPublicPageDetailRes?.publicPageDetail}
    />
  );
};

export default PageDetailPage;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { lang } = await params;

  const dict = await getDictionaryByFolder(lang, "page");

  return {
    title: dict?.head_title,
  };
}
