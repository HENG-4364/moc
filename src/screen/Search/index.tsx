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
import { OfficialDocumentPagination } from "../OfficialDocument/components/Pagionation/Pagination";

const newsData = [
  {
    id: 1,
    thumbnail: "/news1.webp",
    title:
      " លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក",
    description:
      " (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម និងពិសារអាហារការងារពេលព្រឹក។",
    date: "១៥-វិច្ឆិកា-២០២៤",
    badge: "ព័ត៌មាន",
  },
  {
    id: 2,
    thumbnail: "/news2.webp",
    title:
      " លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក",
    description:
      " (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម និងពិសារអាហារការងារពេលព្រឹក។",
    date: "១៥-វិច្ឆិកា-២០២៤",
    badge: "ព័ត៌មាន",
  },
  {
    id: 3,
    thumbnail: "/news3.webp",
    title:
      " លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក",
    description:
      " (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម និងពិសារអាហារការងារពេលព្រឹក។",
    date: "១៥-វិច្ឆិកា-២០២៤",
    badge: "ព័ត៌មាន",
  },
  {
    id: 4,
    thumbnail: "/news1.webp",
    title:
      " លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក",
    description:
      " (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម និងពិសារអាហារការងារពេលព្រឹក។",
    date: "១៥-វិច្ឆិកា-២០២៤",
    badge: "ព័ត៌មាន",
  },
  {
    id: 5,
    thumbnail: "/news1.webp",
    title:
      " លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ ចូលជួមសម្តែងការគួរសម​ និងពិសារអាហារការងារពេលព្រឹក",
    description:
      " (ភ្នំពេញ)៖ នាព្រឹកថ្ងៃច័ន្ទ ទី២៨ ខែតុលា ឆ្នាំ២០២៤ នៅសណ្ឋាគារ សាន់&មូន រីវើសាយ រាជធានីភ្នំពេញ លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម បានអនុញ្ញាតជូន លោកជំទាវ Astrid Emilie Helle ឯកអគ្គរាជទូតនៃព្រះរាជាណាចក្រន័រវេសប្រចាំព្រះរាជាណាចក្រកម្ពុជា​ និងគណៈប្រតិភូ ចូលជួបសម្តែងការគួរសម និងពិសារអាហារការងារពេលព្រឹក។",
    date: "១៥-វិច្ឆិកា-២០២៤",
    badge: "ព័ត៌មាន",
  },
];

const documentsData = [
  {
    id: 1,
    title: "Vol 13 for September 2024.pdf",
  },
  {
    id: 2,
    title: "Vol 34 for September 2024.pdf",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const page = searchParams.get("page");
  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = documentsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
    // The search is already handled by the useEffect hook
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
                    លទ្ធផលស្វែងរកព័ត៌មានសរុបទាំង៖ {filteredNews.length}
                  </h2>
                  {filteredNews.length > 0 ? (
                    <>
                      {filteredNews.map((item) => (
                        <>
                          <div key={item.id}>
                            <NewsSearchCard
                              imageSrc={item.thumbnail}
                              title={item.title}
                              badge={item.badge}
                              date={item.date}
                              description={item.description}
                              onClick={() => router.push(`/news/${item.id}`)}
                            />
                          </div>
                        </>
                      ))}
                      <div className="flex justify-end">
                        <div className="w-full mt-5">
                          <OfficialDocumentPagination
                            currentPage={Number(page)}
                            total={filteredNews.length} // Dynamically set total based on announcement length
                            size={10}
                            limit={5}
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
                      លទ្ធផលស្វែងរកឯកសារសរុបទាំង៖ {filteredDocuments.length}
                    </h2>
                    {filteredDocuments?.length > 0 ? (
                      <>
                        {filteredDocuments.map((item) => (
                          <div key={item.id}>
                            <DocumentsSearchCard
                              title={item.title}
                              onClick={() =>
                                router.push(`/documents/${item.id}`)
                              }
                            />
                          </div>
                        ))}
                        <div className="flex justify-end">
                          <div className="w-full mt-5">
                            <OfficialDocumentPagination
                              currentPage={Number(page)}
                              total={filteredDocuments.length} // Dynamically set total based on announcement length
                              size={10}
                              limit={5}
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
