import SearchScreen from "@/screen/Search";
import React from "react";
import { getDictionaryByFolder } from "../dictionaries";
import { Metadata } from "next";
import { getPublicNewsAndDocumentsSearchAction } from "@/screen/Search/actions";

type SearchParams = {
  q: string;
  doc_page: string;
  news_page: string;
};

type Params = {
  lang: string;
};

const SearchPage = async ({
  params,
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
  params: Promise<Params>;
}) => {
  const { q, doc_page, news_page } = await searchParams;
  const { lang } = await params;
  const getPublicNewsAndDocumentsSearchRes =
    await getPublicNewsAndDocumentsSearchAction({ q, doc_page, news_page });
  const dict = await getDictionaryByFolder(lang, "search");

  return (
    <SearchScreen
      data={getPublicNewsAndDocumentsSearchRes}
      dict={dict}
      params={params}
    />
  );
};

export default SearchPage;

export async function generateMetadata(props: {
  params: Promise<any>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params;

  const dict = await getDictionaryByFolder(lang, "search");

  return {
    title: dict?.head_title,
  };
}
