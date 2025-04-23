import React from "react";
import NewsDetailScreen from "@/screen/NewsDetail";
import { Metadata } from "next";
import { getDictionaryByFolder } from "../../dictionaries";
import { getData } from "@/screen/News/actions";

type Params = Promise<{ lang: string }>;

const NewsDetail = async ({ params }: { params: Params }) => {
  const { news } = await getData(params);
  const { lang } = await params;

  const dict = await getDictionaryByFolder(lang, "news");
  return <NewsDetailScreen news={news} dict={dict} />;
};

export default NewsDetail;

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const { news } = await getData(params);
  const { lang } = params;

  const first =
    lang === "kh" ? news?.title : news?.title_en ? news?.title_en : news?.title;
  const title = `${first} | moc.gov.kh`;

  return { title };
}
