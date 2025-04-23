"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import { Suspense } from "react";
import NewsSearchCard from "./Components/NewsSearchCard/NewsSearchCard";
import DocumentsSearchCard from "./Components/DocumentsSearchCard/DocumentsSearchCard";
import EmptySearch from "./Components/EmptySearchData/EmptySearchData";
import { DocumentPagination } from "@/components/Pagination/DocPagination/DocPagination";
import { NewsPagination } from "@/components/Pagination/NewsPagination/NewsPagination";
import {
  convertLatinMonth,
  convertToLatinNumber,
} from "@/function/DayNumberToKhmerNumber";

export default function SearchPage({ data, dict, params }: any) {
  const { lang } = params;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const filteredNews = data?.publicNewsSearch?.data?.filter((item: any) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = data?.publicDocumentsSearch?.data?.filter(
    (item: any) => item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (searchQuery) {
      newSearchParams.set("q", searchQuery);
    } else {
      newSearchParams.delete("q");
    }
    router.push(`/search?${newSearchParams.toString()}`, { scroll: false });
  }, [searchQuery, router, searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#F6F7F8] pt-5 lg:pt-10 pb-20">
      <div className="container">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold py-8">
            ស្វែងរកព័ត៌មាន និងឯកសារផ្លូវការ
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 ">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
              <Input
                type="search"
                className="pl-12 pr-28 h-14 w-full border border-gray-100 shadow-sm"
                placeholder="ស្វែងរកឯកសារ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search documents and news"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Button
                  type="submit"
                  className="bg-[#337ab7] hover:bg-[#286090] text-white px-6"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </form>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {filteredNews.length > 0 || filteredDocuments?.length > 0 ? (
              <>
                {/* Left Column - News Results */}
                <div className="col-span-1 lg:col-span-2">
                  <h2 className="text-xl font-semibold mb-4">
                    លទ្ធផលស្វែងរកព័ត៌មានសរុបទាំង៖{" "}
                    {data?.publicNewsSearch?.pagination?.total}
                  </h2>
                  {filteredNews.length > 0 ? (
                    <>
                      {filteredNews.map((item: any) => {
                        const getDate = item?.published_date?.split("/");
                        return (
                          <div key={item.id}>
                            <NewsSearchCard
                              imageSrc={item.thumbnail}
                              title={item.title}
                              badge={lang === "kh" ? "ព័ត៌មាន" : "News"}
                              date={
                                getDate ? (
                                  <>
                                    {" "}
                                    {lang === "kh" ? (
                                      <>
                                        {getDate[0]}-{getDate[1]}-{getDate[2]}
                                      </>
                                    ) : (
                                      <>
                                        {convertToLatinNumber(getDate[0])}-
                                        {convertLatinMonth(getDate[1])}-
                                        {convertToLatinNumber(getDate[2])}
                                      </>
                                    )}
                                  </>
                                ) : (
                                  "... "
                                )
                              }
                              description={
                                lang === "kh" ? item.summary : item.summary_en
                              }
                              onClick={() => router.push(`/news/${item.id}`)}
                            />
                          </div>
                        );
                      })}
                      <div className="flex justify-end">
                        <div className="w-full mt-5">
                          <NewsPagination
                            currentPage={
                              data?.publicNewsSearch?.pagination?.current
                            }
                            total={data?.publicNewsSearch?.pagination?.total}
                            size={data?.publicNewsSearch?.pagination?.size}
                            limit={5}
                            dict={dict}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <EmptySearch />
                    </>
                  )}
                </div>

                {/* Right Column - PDF Documents */}
                <div className="col-span-1 lg:col-span-1">
                  <div className="sticky top-20 transition-colors duration-300 ease-in-out">
                    <h2 className="text-xl font-semibold mb-4">
                      លទ្ធផលស្វែងរកឯកសារសរុបទាំង៖{" "}
                      {data?.publicDocumentsSearch?.pagination?.total}
                    </h2>
                    {filteredDocuments?.length > 0 ? (
                      <>
                        {filteredDocuments.map((item: any) => (
                          <div key={item.id}>
                            <DocumentsSearchCard
                              title={item.title}
                              onClick={() => {
                                window.open(`${item?.file_url}`, "blank");
                              }}
                            />
                          </div>
                        ))}
                        <div className="flex justify-end">
                          <div className="w-full mt-5">
                            <DocumentPagination
                              currentPage={
                                data?.publicDocumentsSearch?.pagination?.current
                              }
                              total={
                                data?.publicDocumentsSearch?.pagination?.total
                              }
                              size={
                                data?.publicDocumentsSearch?.pagination?.size
                              }
                              limit={5}
                              dict={dict}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <EmptySearch />
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <EmptySearch />
              </>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
