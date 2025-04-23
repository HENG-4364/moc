"use client";

import { Title } from "@/components/Title/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NewsCard from "./components/NewsCard";
import NewsCardPlaceholder from "./components/NewsCardPlaceholder";
import {
  convertLatinMonth,
  convertToLatinNumber,
} from "@/function/DayNumberToKhmerNumber";
import { useQuery } from "@apollo/client";
import { settings } from "@/lib/settings";
import { useOnScreen } from "@/function/useOnScreen";
import { NEWS_QUERY } from "./graphql";

type Props = {
  dict?: any;
};

function NewsScreen({ dict }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const [more, setMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [category, setCategory] = useState(0)
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    category ? Number(category) : 0
  );
  const { setRef, isVisible } = useOnScreen({ threshold: 0.3 });

  const { data, loading, refetch } = useQuery(NEWS_QUERY, {
    variables: {
      filter: {
        status: "PUBLISHED",
      },
      pagination: {
        page: 1,
        size: 15,
      },
      lazyLoading: {
        limit: 15,
      },
      websiteId: settings.websiteId,
      newsCategoryId: Number(category) || 0,
    },
  });

  useEffect(() => {
    if (isVisible) {
      setIsLoading(true);
      setMore(false);
      setTimeout(() => {
        if (
          data?.publicNewsList?.data?.length <
          data?.publicNewsList?.pagination?.total
        ) {
          setMore(true);
          refetch({
            lazyLoading: {
              limit: data?.publicNewsList?.lazyLoading?.limit + 12,
            },
          });
        }
        setIsLoading(false);
      }, 1500);
    }

    return () => { };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateArrows);
      updateArrows();

      return () => scrollContainer.removeEventListener("scroll", updateArrows);
    }
  }, []);

  const setSelect = (category: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    push(`${window.location.origin}/${pathname}?${params}`);
  };

  return (
    <section className="blog-section pt-50 pb-70">
      <Title title={"ព័ត៌មានប្រចាំថ្ងៃ"} />
      {(loading || !data) ? (
        <>
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`h-10 px-4 py-2 rounded-md animate-pulse flex items-center justify-center bg-gray-200
                        }`}
                  >
                    <div
                      className={`bg-gray-300 animate-pulse  ${index === 1 ? "w-[110px] " : "w-[60px]  "
                        }  }`}
                    ></div>
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NewsCardPlaceholder />
              <NewsCardPlaceholder />
              <NewsCardPlaceholder />
              <NewsCardPlaceholder />
              <NewsCardPlaceholder />
              <NewsCardPlaceholder />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex flex-wrap gap-3  scrollbar-hide rounded-md"
                style={{}}
              >
                <button
                  className={`rounded-md ${activeCategory === 0
                    ? "bg-gradient-to-b from-[#2980B9] to-[#297fb9d8] text-white"
                    : "bg-gray-200"
                    } px-2 py-2 text-md`}
                  onClick={() => (setActiveCategory(0), setSelect(0))}
                >
                  ទាំងអស់
                </button>
                {data?.publicNewsCategoryList.map((type: any, indx: number) => (
                  <button
                    key={type.id}
                    className={`rounded-md ${activeCategory === type.id
                      ? "bg-gradient-to-b from-[#2980B9] to-[#297fb9d8] text-white"
                      : "bg-gray-200"
                      } px-2 py-2 text-md`}
                    onClick={() => (
                      setActiveCategory(type.id), setSelect(type.id)
                    )}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
            {showLeftArrow && showRightArrow && (
              <>
                <div className="flex justify-end gap-2 mt-2 mb-5">
                  <button
                    className={`p-2 rounded-full shadow-md ${!showLeftArrow
                      ? "bg-gray-50 hover:bg-gray-50"
                      : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    onClick={() => scroll("left")}
                  >
                    <ChevronLeft
                      className={` ${!showLeftArrow ? "text-gray-400" : ""}`}
                    />
                  </button>
                  <button
                    className={`p-2 rounded-full shadow-md ${!showRightArrow
                      ? "bg-gray-50 hover:bg-gray-50"
                      : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    onClick={() => scroll("right")}
                  >
                    <ChevronRight
                      className={` ${!showRightArrow ? "text-gray-400" : ""}`}
                    />
                  </button>
                </div>
              </>
            )}

            <div className=" py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.publicNewsList?.data?.map((item: any, idx: any) => {
                  const getDate = item.published_date?.split("/");
                  const category = item?.category;
                  return (
                    <div key={idx + 1} className="w-full">
                      <NewsCard
                        id={item?.id}
                        dict={dict}
                        btnName={dict?.read_more}
                        category={
                          lang === "kh"
                            ? category?.name
                            : category?.name_en
                              ? category?.name_en
                              : category?.name
                        }
                        categoryLink={category?.id}
                        date={
                          getDate
                            ? `${lang === "kh"
                              ? getDate[0]
                              : convertToLatinNumber(getDate[0])
                            }-${lang === "kh"
                              ? getDate[1]
                              : convertLatinMonth(getDate[1])
                            }-${lang === "kh"
                              ? getDate[2]
                              : convertToLatinNumber(getDate[2])
                            }`
                            : ""
                        }
                        description={
                          lang === "kh"
                            ? item?.summary
                            : item?.summary_en
                              ? item?.summary_en
                              : item?.summary
                        }
                        image={
                          item.thumbnail
                            ? item.thumbnail
                            : "/placeholder-image.jpg"
                        }
                        link={`/news/${item?.id}/`}
                        title={
                          lang === "kh"
                            ? item?.title
                            : item?.title_en
                              ? item?.title_en
                              : item?.title
                        }
                      />
                    </div>
                  );
                })}

                {isLoading && (
                  <>
                    <NewsCardPlaceholder />
                    <NewsCardPlaceholder />
                    <NewsCardPlaceholder />
                  </>
                )}

                {more && !isLoading && <span ref={setRef}></span>}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default NewsScreen;
