import React from "react";
import NewsScreen from "@/screen/News";
import { getDictionaryByFolder } from "../dictionaries";
import { Metadata } from "next";

type Params = Promise<{ lang: string }>;

const NewsPage = async ({ params }: { params: Params }) => {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "news")
  return <NewsScreen dict={dict} />;
}

export default NewsPage;

export async function generateMetadata(props: { params: Promise<any> }): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params;

  const dict = await getDictionaryByFolder(lang, "news")

  return {
    title: dict?.head_title,
  };
}
