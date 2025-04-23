"use client";

import { Calendar, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NewsDetailSidebar from "./components/NewsDetailSidebar";
import { FacebookShareButton } from "react-share";
import { FaFacebookF } from "react-icons/fa6";
import { useParams } from "next/navigation";
import {
  convertLatinMonth,
  convertToLatinNumber,
} from "@/function/DayNumberToKhmerNumber";
import PageBody from "@/components/PageBody";

type PostDetailProps = {
  news: any;
  dict?: any;
  loading?: any;
};
function NewsDetailScreen({ news, dict, loading }: PostDetailProps) {
  const params = useParams<{ lang: string }>();

  const currentLang = params?.lang || "en-US";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
  };
  const getDate = news?.published_date?.split("/");
  if (news.status == "REVERSION") {
    process.browser && window.location.replace("/404");
  }
  return (
    <>
      <section className="pt-4 lg:pt-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-9">
            <div className="w-full  col-span-1 lg:col-span-8">
              <div className="blog-details-desc">
                <div className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-[2rem] font-bold mt-5 mobile-title-detail leading-9 md:leading-[1.5] lg:leading-[1.5] mb-3">
                  {news?.title || news?.title_en ? (
                    <>
                      {" "}
                      {currentLang === "kh"
                        ? news?.title
                        : news?.title_en
                        ? news?.title_en
                        : news?.title}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-base text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span className="ml-2">
                    {dict?.news_detail?.public_date}:{" "}
                    <strong>
                      {getDate ? (
                        <>
                          {" "}
                          {currentLang === "kh" ? (
                            <>
                              {getDate[0]}-{getDate[1]}-{getDate[2]}
                            </>
                          ) : (
                            <>
                              {convertToLatinNumber(
                                news.created_at.split("/")[0]
                              )}
                              -
                              {convertLatinMonth(news.created_at.split("/")[1])}
                              -
                              {convertToLatinNumber(
                                news.created_at.split("/")[2]
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        "... "
                      )}
                    </strong>
                  </span>
                  <span className="mx-2">|</span>
                  <span>
                    {dict?.news_detail?.type_of_news}: &nbsp;
                    <strong className="text-blue-400 underline hover:text-blue-500">
                      {" "}
                      <Link href={`/news?category=${news?.category?.id}`}>
                        {currentLang === "kh"
                          ? news?.category?.name
                          : news?.category?.name_en
                          ? news?.category?.name_en
                          : news?.category?.name}
                      </Link>
                    </strong>
                  </span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center mb-3 gap-x-2">
                  <span> {dict?.news_detail?.share}: </span>
                  <FacebookShareButton
                    url={`https://moc.gov.kh/news/${news.id}`}
                  >
                    <div
                      className={`flex items-center justify-center w-[25px] rounded-sm h-[25px] hover:cursor-pointer hover:brightness-95 bg-[#1978D3]`}
                    >
                      <FaFacebookF color="white" size={18} />
                    </div>
                  </FacebookShareButton>
                  <LinkIcon
                    size={20}
                    className="cursor-pointer font-semibold"
                    onClick={copyToClipboard}
                  />
                </div>
                <div className="article-image">
                  <Image
                    src={news?.thumbnail ? news?.thumbnail : ""}
                    alt={news?.title}
                    className="next-image"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="article-content">
                  <div
                    className="entry-meta"
                    style={{
                      marginBottom: "20px",
                      paddingLeft: 50,
                      paddingRight: 50,
                    }}
                  ></div>
                  <p className="summary-detail"> </p>
                  <PageBody
                    data={
                      currentLang === "kh"
                        ? news?.description
                        : news?.description_en
                        ? news?.description_en
                        : news?.description
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full  col-span-1 lg:col-span-4">
              <NewsDetailSidebar dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsDetailScreen;
