"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Title } from "@/components/Title/Title";
import { useEffect, useRef, useState } from "react";
import { OfficialDocumentPagination } from "./components/Pagination/Pagination";
import { PdfCard } from "./components/DocumentCard/DocumentCard";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import EmptyData from "./components/EmptyData/EmptyData";
import { settings } from "@/lib/settings";
import { useQuery } from "@apollo/client";
import {
  convertToKhmerNumberWithZeroPrefix,
  khmerMonth,
} from "@/function/DayNumberToKhmerNumber";
import DateHelper from "@/function/DateHelper";
import { Input } from "@/components/ui/input";
import { DocumentListingPlaceholder } from "./components/Placeholder";
import { PUBLIC_DOC_CATEGORY_DETAIL } from "./graphql";

type Props = {
  publicDocumentCategory?: any;
  publicDocumentList?: any;
  dict?: any;
  selectDocumentCategory?: any;
};

type RenderFilePdfProp = {
  slug: string;
  documentName?: any;
  setDocumentName?: any;
  dict?: any;
};

function RenderFilePdf({ slug, documentName, dict }: RenderFilePdfProp) {
  const query = useSearchParams();
  const page = query.get("page") ? Number(query.get("page")) : 1;
  const params = useParams<{ lang: string }>();

  const currentLang = params?.lang || "en-US";
  const { data, loading } = useQuery(PUBLIC_DOC_CATEGORY_DETAIL, {
    variables: {
      websiteId: settings.websiteId,
      slug,
      detail_filter: {
        document_name: documentName,
      },
      pagination: {
        page: page,
        size: 6,
      },
    },
  });

  if (data?.publicDocumentCategoryDetail?.files?.length === 0) {
    return <EmptyData />;
  }

  return (
    <>
      {loading || !data ? (
        <>
          <DocumentListingPlaceholder />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.publicDocumentCategoryDetail?.files?.map(
              (item: any, idx: number) => (
                <PdfCard
                  key={idx + 1}
                  date={
                    currentLang === "kh" ? (
                      <>
                        {dict?.date}:{" "}
                        {convertToKhmerNumberWithZeroPrefix(
                          DateHelper.getNowDateTime(
                            Number(item.published_date),
                            "DD"
                          )
                        )}
                        -
                        {convertToKhmerNumberWithZeroPrefix(
                          khmerMonth(
                            DateHelper.getNowDateTime(
                              Number(item.published_date),
                              "MMM"
                            )
                          )
                        )}
                        -
                        {convertToKhmerNumberWithZeroPrefix(
                          DateHelper.getNowDateTime(
                            Number(item.published_date),
                            "YYYY"
                          )
                        )}{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        {dict?.date}:{" "}
                        {DateHelper.getNowDateTime(
                          Number(item.published_date),
                          "DD-MMM-YYYY "
                        )}
                      </>
                    )
                  }
                  time={
                    currentLang === "kh" ? (
                      <>
                        {convertToKhmerNumberWithZeroPrefix(
                          DateHelper.getNowDateTime(
                            Number(item.published_date),
                            "HH:mm:ss A"
                          )
                        )}
                      </>
                    ) : (
                      <>
                        {" "}
                        {DateHelper.getNowDateTime(
                          Number(item.published_date),
                          " HH:mm:ss A"
                        )}
                      </>
                    )
                  }
                  title={item.title}
                  link={item.file_url}
                />
              )
            )}
          </div>
          <div className="flex justify-end ">
            <div className="w-full mt-5">
              <OfficialDocumentPagination
                currentPage={
                  data?.publicDocumentCategoryDetail?.pagination?.current
                }
                total={data?.publicDocumentCategoryDetail?.pagination?.total}
                size={data?.publicDocumentCategoryDetail?.pagination?.size}
                limit={8}
                dict={dict}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function OfficialDocumentScreen({
  publicDocumentCategory,
  selectDocumentCategory,
  dict,
}: Props) {
  const [documentName, setDocumentName] = useState();
  const [activeCategory, setActiveCategory] = useState(selectDocumentCategory);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [startX, setStartX] = useState(0);

  const { push } = useRouter();

  const searchParams = useSearchParams();
  const select = searchParams.get("select");
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const currentLang = params?.lang || "en-US";

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

  const setSelect = (select: any, page?: any) => {
    if (select && page) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page);
      params.set("select", select);
      push(`${window.location.origin}/${pathname}?${params}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("select", select);
      push(`${window.location.origin}/${pathname}?${params}`);
    }
  };

  const onHandleChangeDocument = (e: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    setDocumentName(e.target.value);
    push(`${window.location.origin}/${pathname}?${params}`);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="bg-[#f6f7f8]">
        <div className="container mx-auto px-4 pb-12">
          {/* Header */}
          <div className="text-center mb-3">
            <Title
              title={
                currentLang === "kh"
                  ? publicDocumentCategory?.category_name
                  : publicDocumentCategory?.category_name_en
              }
            />
            <div className="flex justify-start">
              <div className="relative !w-[600px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  className="pl-10 py-6 w-full max-w-xl border border-gray-100 shadow-sm rounded-xl"
                  placeholder={dict?.search}
                  onChange={(e) => onHandleChangeDocument(e)}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onMouseMove={handleDrag}
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide whitespace-nowrap p-2 space-x-4 scrollbar-thin rounded-md"
              style={{}}
            >
              {publicDocumentCategory?.folders?.length > 0 && (
                <button
                  className={`rounded-md ${
                    activeCategory === publicDocumentCategory.slug
                      ? "bg-gradient-to-b from-[#2980B9] to-[#297fb9d8] text-white"
                      : "bg-gray-200"
                  } px-2 py-2 text-md`}
                  onClick={() => (
                    setActiveCategory(publicDocumentCategory.slug),
                    setSelect(publicDocumentCategory.slug, "1")
                  )}
                >
                  {lang == "kh" ? " ទាំងអស់" : "All"}
                </button>
              )}

              {publicDocumentCategory?.folders?.map(
                (item: any, idx: number) => (
                  <button
                    key={idx}
                    className={`rounded-md ${
                      activeCategory === item?.slug
                        ? "bg-gradient-to-b from-[#2980B9] to-[#297fb9d8] text-white"
                        : "bg-gray-200"
                    } px-2 py-2 text-md`}
                    onClick={() => (
                      setActiveCategory(item?.slug), setSelect(item?.slug, "1")
                    )}
                  >
                    {lang == "kh"
                      ? item?.category_name
                      : item?.category_name_en
                      ? item?.category_name_en
                      : item?.category_name}
                  </button>
                )
              )}
            </div>
          </div>

          {publicDocumentCategory?.folders?.length > 0 && (
            <div className="flex justify-end gap-2 mt-2 mb-5">
              <button
                className={`p-2 rounded-full shadow-md ${
                  !showLeftArrow
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
                className={`p-2 rounded-full shadow-md ${
                  !showRightArrow
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
          )}

          <RenderFilePdf
            slug={select ? select : publicDocumentCategory?.slug}
            documentName={documentName}
            setDocumentName={setDocumentName}
            dict={dict}
          />
        </div>
      </div>
    </>
  );
}
