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
import { parseImageUrl } from "@/function/parseImage";
const newsTypes = [
  {
    id: "all",
    label: "ទាំងអស់",
  },
  {
    id: "agreement",
    label: "សេចក្តីព្រមព្រៀង",
  },
  {
    id: "general-information",
    label: "ព័ត៌មានទូទៅ",
  },
  {
    id: "message",
    label: "សារលិខិត",
  },
  {
    id: "news-announcement",
    label: "សេចក្តីប្រកាសព័ត៌មាន",
  },
  {
    id: "notification",
    label: "សេចក្តីជូនដំណឹង",
  },
  {
    id: "meeting",
    label: "កិច្ចប្រជុំ",
  },
  {
    id: "workshop",
    label: "សិក្ខាសាលា",
  },
];
const data = {
  publicNewsList: {
    data: [
      {
        id: "1",
        published_date: "១២/មករា/២០២៤", // DD/MM/YYYY format
        category: {
          id: "101",
          name: "ប្រភេទថ្មី", // Khmer category name
          name_en: "Latest News", // English category name
        },
        summary:
          "(សៀងហៃ, ចិន)៖ នារសៀលថ្ងៃអង្គារ ទី៥ ខែវិច្ឆិកា ឆ្នាំ២០២៤ ក្រសួងពាណិជ្ជកម្មនៃព្រះរាជាណាចក្រកម្ពុជា បាននាំយកផលិតផលដែលមានគុណភាពខ្ពស់របស់កម្ពុជាជាង ១០០មុខ រួមមាន៖ អង្ករ គ្រាប់ស្វាយចន្ទី សម្ភារធ្វើដំណើរនិងការបូប ផលិតផលសម្គាល់ភូមិសាស្រ្តទំនិញ ទឹកឃ្មុំ កាហ្វេ ដំណាប់ស្វាយ តែម្រេច តែ ទឹកជ្រលក់ម្រេច ម្សៅប្រហុក ស្ករត្នោត ទឹកស្ករត្នោត ស្ករគ្រាប់ត្នោត មីកញ្ចប់ មីជាតិ សម្ភារកែច្នៃសំណល់ប្លាស្ទិក ។ល។ ដើម្បីចូលរួមដាក់តាំងបង្ហាញក្នុងព្រិត្តិការណ៍ពិព័រណ៍កម្រិតអន្តរជាតិនៅទីក្រុងសៀងហៃ សាធារណរដ្ឋប្រជាមានិតចិន។ ", // Khmer summary
        summary_en: "This is the English summary of the article.", // English summary
        thumbnail: "/news1.webp", // Thumbnail image path
        title:
          "កិច្ចសម្ភាសន៍ពិសេស លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម ជាមួយទូរទស្សន៍ជាតិកម្ពុជា ស្ដីពី “កិច្ចសហប្រតិបត្តិការ តំបន់ត្រីកោណអភិវឌ្ឍន៍កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA)", // Khmer title
        title_en: "Article Title", // English title
      },
      {
        id: "2",
        published_date: "១២/មករា/២០២៤",
        category: {
          id: "102",
          name: "អត្ថបទពិសេស", // Khmer category name
          name_en: "Featured Articles", // English category name
        },
        summary:
          "(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃចន្ទ ទី៤ ខែវិច្ឆិកា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ ហៃយ៉ាត់រីជិនស៊ី ភ្នំពេញ ឯកឧត្តម សំហេង បូរ៉ា រដ្ឋលេខាធិការក្រសួងពាណិជ្ជកម្ម បានចូលរួមកិច្ចប្រជុំគណៈកម្មការតម្រង់ទិសកម្មវិធី (Program Steering Committee) លើកទី២ នៃកម្មវិធីភាពជាដៃគូ កម្ពុជា-អូស្រ្តាលី សម្រាប់ការអភិវឌ្ឍសេដ្ឋកិច្ចប្រកបដោយភាពធន់ (CAPRED) ក្នុងក្របខណ្ឌហិរញ្ញប្បទានឥតសំណងពីរដ្ឋាភិបាលអូស្រ្តាលី ដោយមាន ឯកឧត្តម រស់ សីលវ៉ា រដ្ឋលេខាធិការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ និង លោក Andreas Zurbrugg នាយកផ្នែកសហប្រតិបត្តិការ នៃស្ថានទូតអូស្រ្តាលីប្រចាំនៅប្រទេសកម្ពុជា ធ្វើជាសហប្រធានដឹកនាំកិច្ចប្រជុំនេះ។",
        summary_en: "Summary for the featured article.",
        thumbnail: "/news2.webp",
        title:
          " ឯកឧត្តម សំហេង បូរ៉ា រដ្ឋលេខាធិការក្រសួងពាណិជ្ជកម្ម ",
        title_en: "Featured Article",
      },
      {
        id: "3",
        published_date: "១២/មករា/២០២៤",
        category: {
          id: "103",
          name: "ព័ត៌មានសំខាន់ៗ", // Khmer category name
          name_en: "Breaking News", // English category name
        },
        summary:
          "(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃអង្គារ ទី៥ ខែវិច្ឆិកា ឆ្នាំ២០២៤ នៅទីស្តីការក្រសួងពាណិជ្ជកម្ម លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន អនុពាណិជ្ជកម្មតែងតាំងថ្មីចូលជួបសម្តែងការគួរសម និងផ្តល់អនុសាសន៍ណែនាំមុនចេញទៅបំពេញការងារនៅតាមស្ថានតំណាងក្រៅប្រទេស។",
        summary_en: "Summary for the breaking news.",
        thumbnail: "/news3.webp", // No thumbnail, uses the placeholder image
        title:
          "លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន អនុពាណិជ្ជកម្មតែងតាំងថ្មីចូលជួបសម្តែងការគួរសម និងផ្តល់អនុសាសន៍ណែនាំមុនចេញទៅបំពេញការងារនៅតាមស្ថានតំណាងក្រៅប្រទេស",
        title_en: "Breaking News",
      },
      {
        id: "4",
        published_date: "១២/មករា/២០២៤", // DD/MM/YYYY format
        category: {
          id: "101",
          name: "ប្រភេទថ្មី", // Khmer category name
          name_en: "Latest News", // English category name
        },
        summary:
          "(សៀងហៃ, ចិន)៖ នារសៀលថ្ងៃអង្គារ ទី៥ ខែវិច្ឆិកា ឆ្នាំ២០២៤ ក្រសួងពាណិជ្ជកម្មនៃព្រះរាជាណាចក្រកម្ពុជា បាននាំយកផលិតផលដែលមានគុណភាពខ្ពស់របស់កម្ពុជាជាង ១០០មុខ រួមមាន៖ អង្ករ គ្រាប់ស្វាយចន្ទី សម្ភារធ្វើដំណើរនិងការបូប ផលិតផលសម្គាល់ភូមិសាស្រ្តទំនិញ ទឹកឃ្មុំ កាហ្វេ ដំណាប់ស្វាយ តែម្រេច តែ ទឹកជ្រលក់ម្រេច ម្សៅប្រហុក ស្ករត្នោត ទឹកស្ករត្នោត ស្ករគ្រាប់ត្នោត មីកញ្ចប់ មីជាតិ សម្ភារកែច្នៃសំណល់ប្លាស្ទិក ។ល។ ដើម្បីចូលរួមដាក់តាំងបង្ហាញក្នុងព្រិត្តិការណ៍ពិព័រណ៍កម្រិតអន្តរជាតិនៅទីក្រុងសៀងហៃ សាធារណរដ្ឋប្រជាមានិតចិន។ ", // Khmer summary
        summary_en: "This is the English summary of the article.", // English summary
        thumbnail: "/news1.webp", // Thumbnail image path
        title:
          "កិច្ចសម្ភាសន៍ពិសេស លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម ជាមួយទូរទស្សន៍ជាតិកម្ពុជា ស្ដីពី “កិច្ចសហប្រតិបត្តិការ តំបន់ត្រីកោណអភិវឌ្ឍន៍កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA)", // Khmer title
        title_en: "Article Title", // English title
      },
      {
        id: "5",
        published_date: "១២/មករា/២០២៤",
        category: {
          id: "102",
          name: "អត្ថបទពិសេស", // Khmer category name
          name_en: "Featured Articles", // English category name
        },
        summary:
          "(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃចន្ទ ទី៤ ខែវិច្ឆិកា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ ហៃយ៉ាត់រីជិនស៊ី ភ្នំពេញ ឯកឧត្តម សំហេង បូរ៉ា រដ្ឋលេខាធិការក្រសួងពាណិជ្ជកម្ម បានចូលរួមកិច្ចប្រជុំគណៈកម្មការតម្រង់ទិសកម្មវិធី (Program Steering Committee) លើកទី២ នៃកម្មវិធីភាពជាដៃគូ កម្ពុជា-អូស្រ្តាលី សម្រាប់ការអភិវឌ្ឍសេដ្ឋកិច្ចប្រកបដោយភាពធន់ (CAPRED) ក្នុងក្របខណ្ឌហិរញ្ញប្បទានឥតសំណងពីរដ្ឋាភិបាលអូស្រ្តាលី ដោយមាន ឯកឧត្តម រស់ សីលវ៉ា រដ្ឋលេខាធិការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ និង លោក Andreas Zurbrugg នាយកផ្នែកសហប្រតិបត្តិការ នៃស្ថានទូតអូស្រ្តាលីប្រចាំនៅប្រទេសកម្ពុជា ធ្វើជាសហប្រធានដឹកនាំកិច្ចប្រជុំនេះ។",
        summary_en: "Summary for the featured article.",
        thumbnail: "/news2.webp",
        title:
          " ឯកឧត្តម សំហេង បូរ៉ា រដ្ឋលេខាធិការក្រសួងពាណិជ្ជកម្ម បានចូលរួមកិច្ចប្រជុំគណៈកម្មការតម្រង់ទិសកម្មវិធី (Program Steering Committee) លើកទី២ នៃកម្មវិធីភាពជាដៃគូ កម្ពុជា-អូស្រ្តាលី សម្រាប់ការអភិវឌ្ឍសេដ្ឋកិច្ចប្រកបដោយភាពធន់ (CAPRED) ក្នុងក្របខណ្ឌហិរញ្ញប្បទានឥតសំណងពីរដ្ឋាភិបាលអូស្រ្តាលី ដោយមាន ឯកឧត្តម រស់ សីលវ៉ា រដ្ឋលេខាធិការក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ និង លោក Andreas Zurbrugg នាយកផ្នែកសហប្រតិបត្តិការ នៃស្ថានទូតអូស្រ្តាលីប្រចាំនៅប្រទេសកម្ពុជា ធ្វើជាសហប្រធានដឹកនាំកិច្ចប្រជុំនេះ",
        title_en: "Featured Article",
      },
      {
        id: "6",
        published_date: "១២/មករា/២០២៤",
        category: {
          id: "103",
          name: "ព័ត៌មានសំខាន់ៗ", // Khmer category name
          name_en: "Breaking News", // English category name
        },
        summary:
          "(ភ្នំពេញ)៖ នាព្រឹកថ្ងៃអង្គារ ទី៥ ខែវិច្ឆិកា ឆ្នាំ២០២៤ នៅទីស្តីការក្រសួងពាណិជ្ជកម្ម លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន អនុពាណិជ្ជកម្មតែងតាំងថ្មីចូលជួបសម្តែងការគួរសម និងផ្តល់អនុសាសន៍ណែនាំមុនចេញទៅបំពេញការងារនៅតាមស្ថានតំណាងក្រៅប្រទេស។",
        summary_en: "Summary for the breaking news.",
        thumbnail: "/news3.webp", // No thumbnail, uses the placeholder image
        title:
          "លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន អនុពាណិជ្ជកម្មតែងតាំងថ្មីចូលជួបសម្តែងការគួរសម និងផ្តល់អនុសាសន៍ណែនាំមុនចេញទៅបំពេញការងារនៅតាមស្ថានតំណាងក្រៅប្រទេស",
        title_en: "Breaking News",
      },
    ],
  },
};
type Props = {
  dict?: any;
};
function NewsScreen({ dict }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const select = searchParams.get("select");
  const page = searchParams.get("page");
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

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
  return (
    <section className="blog-section pt-50 pb-70">
      <div className="container">
        <Title title={"ព័ត៌មានប្រចាំថ្ងៃ"} />
        <div className="relative">
          {/* Left Arrow */}
          {/* {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-l-lg bg-gray-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )} */}

          {/* Scrollable Area */}
          <div
            ref={scrollContainerRef}
            className="flex flex-wrap gap-3 p-2 scrollbar-hide rounded-md"
            style={{}}
          >
            {newsTypes.map((type) => (
              <button
                key={type.id}
                className={`rounded-md ${
                  activeCategory === type.id
                    ? "bg-gradient-to-b from-[#2980B9] to-[#24648f] text-white"
                    : "bg-gray-200"
                } px-2 py-2 text-md`}
                onClick={() => (
                  setActiveCategory(type.id), setSelect(type.id, "1")
                )}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {/* {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-r-lg bg-gray-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )} */}
        </div>
        {showLeftArrow && showRightArrow && (
          <>
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
          </>
        )}
      </div>

      <div className="container mx-auto px-4 py-5">
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
                      ? `${
                          lang === "kh"
                            ? getDate[0]
                            : convertToLatinNumber(getDate[0])
                        }-${
                          lang === "kh"
                            ? getDate[1]
                            : convertLatinMonth(getDate[1])
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
                  image={parseImageUrl(
                    item.thumbnail ? item.thumbnail : "/placeholder-image.jpg",
                    "1280x850"
                  )}
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

          {/* {isLoading && (
          <>
            <NewsCardPlaceholder />
            <NewsCardPlaceholder />
            <NewsCardPlaceholder />
          </>
        )}

        {more && !isLoading && <span ref={setRef}></span>} */}
        </div>
      </div>
    </section>
  );
}

export default NewsScreen;
