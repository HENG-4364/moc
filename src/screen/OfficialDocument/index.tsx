"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScrollText,
  Search,
  Image,
  Ship,
  Scale,
  ClipboardCheck,
  FileText,
  FileCheck,
  FileClock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DocumentSearch } from "./components/DocumentSearch/DocumentSearch";
import { DocumentFilters } from "./components/DocumentFilter/DocumentFilter";
import { FeaturedDocuments } from "./components/DocumentFeature/DocumentFeature";
import { Title } from "@/components/Title/Title";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { OfficialDocumentPagination } from "./components/Pagionation/Pagination";
import { PdfCard } from "./components/DocumentCard/DocumentCard";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import EmptyData from "./components/EmptyData/EmptyData";

const documentTypes = [
  {
    id: "all",
    label: "ទាំងអស់",
  },
  {
    id: "decree",
    label: "អនុក្រឹត្យ",
  },
  {
    id: "announcement",
    label: "ប្រកាស",
  },
  {
    id: "business-law",
    label: "ច្បាប់ពាក់ព័ន្ធវិស័យពាណិជ្ជកម្ម",
  },
  {
    id: "agreement",
    label: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
  },
  {
    id: "budget-management-of-the-ministry-of-commerce",
    label: "ការគ្រប់គ្រងថវិការបស់ក្រសួងពាណិជ្ជកម្ម",
  },
  {
    id: "notice",
    label: "សេចក្តីជូនដំណឹង",
  },
  {
    id: "policy",
    label: "គោលនយោបាយ",
  },
  {
    id: "clv-dta",
    label: "ឯកសារពាក់ព័ន្ធនឹងតំបន់ CLV DTA",
  },
  {
    id: "wto-file",
    label: "ឯកសារពាក់ព័ន្ធ WTO",
  },
];

// const documents = [
//   {
//     id: 1,
//     icon: Search,
//     title: "សេចក្តីជូនដំណឹង",
//     description: "ស្វែងរកឯកសារផ្លូវការ និងសេចក្តីជូនដំណឹងផ្សេងៗ",
//     color: "bg-blue-500/10 text-blue-500",
//     count: 25,
//   },
//   {
//     id: 2,
//     icon: Image,
//     title: "ប្រកាស",
//     description: "ប្រកាសព័ត៌មាន និងការផ្សព្វផ្សាយផ្សេងៗ",
//     color: "bg-purple-500/10 text-purple-500",
//     count: 18,
//   },
//   {
//     id: 3,
//     icon: Ship,
//     title: "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
//     description: "ឯកសារពាក់ព័ន្ធនឹងការដឹកជញ្ជូន និងឡូជីស្ទីក",
//     color: "bg-green-500/10 text-green-500",
//     count: 32,
//   },
//   {
//     id: 4,
//     icon: ScrollText,
//     title: "អនុក្រឹត្យ",
//     description: "អនុក្រឹត្យ និងឯកសារផ្លូវការផ្សេងៗ",
//     color: "bg-red-500/10 text-red-500",
//     count: 15,
//   },
//   {
//     id: 5,
//     icon: Scale,
//     title: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
//     description: "កិច្ចព្រមព្រៀង និងឯកសារពាណិជ្ជកម្មផ្សេងៗ",
//     color: "bg-amber-500/10 text-amber-500",
//     count: 28,
//   },
//   {
//     id: 6,
//     icon: ClipboardCheck,
//     title: "គោលការណ៍ណែនាំ",
//     description: "គោលការណ៍ណែនាំ និងបទបញ្ជាផ្សេងៗ",
//     color: "bg-teal-500/10 text-teal-500",
//     count: 22,
//   },
// ];
const all = [
  {
    title: "Cambodia and WTO-Year 2004-KH-Eng",
    date: "០១-កក្កដា-២០២៤",
    time: "២៣:០០:០០ PM",
    fileSize: "1.2MB",
  },
  {
    title: "CAMBODIA'S 20-YEAR JOURNEY AS A WTO MEMBER-KH-ENG_FINAL",
    date: "០១-កក្កដា-២០២៤",
    time: "០១:០០:០០ PM",
    fileSize: "3.5MB",
  },
  {
    title: "អនុក្រឹត្យលេខ ២៩៨ អនក្រ.បក ចុះថ្ងៃទី ១៣ ខែ កក្កដា ឆ្នាំ២០២៤",
    date: "០២-កក្កដា-២០២៤",
    time: "០២:០០:២០ PM",
    fileSize: "2.8MB",
  },
  {
    title: "សារាចរណែនាំស្តីពីការអនុវត្ត សេចក្តីសម្រេច ហត្ថ នៃយន្តការ CLV-DTA",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "1.8MB",
  },
  {
    title:
      "ប្រកាសអន្តរក្រសួងទីផ្សារមូលបត្រ សេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ហត្ថ នៃយន្តការ",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "4.2MB",
  },
];
const decree = [
  {
    title: "Cambodia and WTO-Year 2004-KH-Eng",
    date: "០១-កក្កដា-២០២៤",
    time: "២៣:០០:០០ PM",
    fileSize: "1.2MB",
  },
  {
    title: "CAMBODIA'S 20-YEAR JOURNEY AS A WTO MEMBER-KH-ENG_FINAL",
    date: "០១-កក្កដា-២០២៤",
    time: "០១:០០:០០ PM",
    fileSize: "3.5MB",
  },
  {
    title: "អនុក្រឹត្យលេខ ២៩៨ អនក្រ.បក ចុះថ្ងៃទី ១៣ ខែ កក្កដា ឆ្នាំ២០២៤",
    date: "០២-កក្កដា-២០២៤",
    time: "០២:០០:២០ PM",
    fileSize: "2.8MB",
  },
  {
    title: "សារាចរណែនាំស្តីពីការអនុវត្ត សេចក្តីសម្រេច ហត្ថ នៃយន្តការ CLV-DTA",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "1.8MB",
  },
  {
    title:
      "ប្រកាសអន្តរក្រសួងទីផ្សារមូលបត្រ សេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ហត្ថ នៃយន្តការ",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "4.2MB",
  },
  {
    title:
      "ប្រកាសអន្តរក្រសួងទីផ្សារមូលបត្រ សេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ហត្ថ នៃយន្តការ",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "4.2MB",
  },
  {
    title:
      "ប្រកាសអន្តរក្រសួងទីផ្សារមូលបត្រ សេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ហត្ថ នៃយន្តការ",
    date: "០២-កក្កដា-២០២៤",
    time: "០១:៣៣:២០ AM",
    fileSize: "4.2MB",
  },
];

interface Announcement {
  title: string;
  date: string;
  time: string;
  fileSize: string;
}
const announcement: Announcement[] = [];

const stats = [
  {
    icon: FileText,
    label: "ឯកសារសរុប",
    value: "១៤០",
    color: "text-blue-500",
  },
  {
    icon: FileCheck,
    label: "បានបញ្ចប់",
    value: "៩៥",
    color: "text-green-500",
  },
  {
    icon: FileClock,
    label: "កំពុងដំណើរការ",
    value: "៤៥",
    color: "text-amber-500",
  },
];

const categories = [
  "ទាំងអស់",
  "អនុក្រឹត្យ",
  "ប្រកាស",
  "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
  "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
  "គោលការណ៍ណែនាំ",
  "សេចក្តីជូនដំណឹង",
  "សេចក្តីណែនាំ",
  "គោលនយោបាយ",
  "បទបញ្ជា",
];

export function OfficialDocumentScreen() {
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
    <>
      <div className="bg-[#f6f7f8]">
        <div className="container mx-auto px-4 pb-12">
          {/* Header */}
          <div className="text-center mb-3">
            <Title title={"ឯកសារផ្លូវការ"} />
            <DocumentSearch />
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto whitespace-nowrap  p-2 space-x-4 scrollbar-hide rounded-md"
              style={{}}
            >
              {documentTypes.map((type) => (
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
          </div>

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
          
          {activeCategory === "all" && (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {all.map((doc, index) => (
                  <PdfCard key={index} {...doc} />
                ))}
              </div>
              <div className="flex justify-end ">
                <div className="w-full mt-5">
                  <OfficialDocumentPagination
                    currentPage={Number(page)}
                    total={80}
                    size={10}
                    limit={9}
                  />
                </div>
              </div>
            </>
          )}
          {activeCategory === "decree" && (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {decree.map((doc, index) => (
                  <PdfCard key={index} {...doc} />
                ))}
              </div>
              <div className="flex justify-end ">
                <div className="w-full mt-5">
                  <OfficialDocumentPagination
                    currentPage={Number(page)}
                    total={80}
                    size={10}
                    limit={9}
                  />
                </div>
              </div>
            </>
          )}
          {activeCategory === "announcement" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "business-law" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "agreement" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory ===
            "budget-management-of-the-ministry-of-commerce" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "notice" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "policy" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "clv-dta" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
          {activeCategory === "wto-file" && (
            <>
              {announcement?.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {announcement.map((doc: any, index: number) => (
                      <PdfCard key={index} {...doc} />
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-full mt-5">
                      <OfficialDocumentPagination
                        currentPage={Number(page)}
                        total={announcement.length} // Dynamically set total based on announcement length
                        size={10}
                        limit={9}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <EmptyData />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
