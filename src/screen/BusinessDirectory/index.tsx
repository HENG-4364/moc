"use client";

import { Suspense, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, LayoutGrid, ListTodo, MapPin, Star } from "lucide-react";
import TypeOfBusiness from "./components/TypeOfBusiness/TypeOfBusiness";
import { SearchWithSuggestions } from "./components/SearchWithSuggestions/SearchWithSuggestions";
import { JoinSection } from "./components/Banner/BannerSwiper";
import CompanyCardPlaceholder from "./components/CompanyCard/CompanyCardPlaceholder";
import CompanyCard from "./components/CompanyCard/CompanyCard";
import { businesses } from "./BusinessDirectorySearch/data/data";
const fakeCompanies = [
  {
    khCompanyName: "ក្រុមហ៊ុន អេកូស៊ីស្ទឹម",
    enCompanyName: "Ecosystem Co., Ltd.",
    companyType: "Technology",
    logoSrc: "/logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/business-directory/1",
    phoneNumber: "012 345 678",
  },
  {
    khCompanyName: "ក្រុមហ៊ុន សុខភាព",
    enCompanyName: "HealthCare Inc.",
    companyType: "Healthcare",
    logoSrc: "/logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/business-directory/1",
    phoneNumber: "098 765 432",
  },
  {
    khCompanyName: "ក្រុមហ៊ុន ឃ្រីអេធីវ",
    enCompanyName: "Creative Solutions",
    companyType: "Marketing",
    logoSrc: "/logo.png",
    dict: {
      contact_number: "លេខទំនាក់ទំនង",
      type_of_work: "ប្រភេទការងារ",
    },
    link: "/business-directory/1",
    phoneNumber: "011 223 344",
  },
];

export default function BusinessDirectoryScreen({ dict }: { dict: any }) {
  return (
    <Suspense fallback={<div />}>
      <BusinessDirectoryContent dict={dict} />
    </Suspense>
  );
}

function BusinessDirectoryContent({ dict }: { dict: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [changeView, setChangeView] = useState("grid");
  return (
    <section className="bg-[#F6F7F8]">
      <div className="mb-8">
        <SearchWithSuggestions dict={dict} />
      </div>

      <TypeOfBusiness dict={dict} />

      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">នាមករណ៍អាជីវកម្ម</h3>
          {/* <Button
            variant="ghost"
            className="flex items-center"
            onClick={() => router.push("/business-directory/search")}
          >
            មើលទាំងអស់ <ChevronRight className="ml-1 h-4 w-4" />
          </Button> */}
          <div className="flex justify-end items-center ">
            <div className="flex flex-row gap-1">
              <div
                className="cursor-pointer p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 duration-300 transition-all"
                onClick={() => setChangeView("list")}
              >
                <ListTodo />
              </div>
              <div
                className="cursor-pointer p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 duration-300 transition-all"
                onClick={() => setChangeView("grid")}
              >
                <LayoutGrid />
              </div>
            </div>
          </div>
        </div>

        {changeView === "grid" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {businesses.map((business) => (
              <div
                onClick={() =>
                  router.push(`/business-directory/${business.id}`)
                }
                key={business.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className=" bg-gray-50">
                  <img
                    src={
                      business.image ||
                      "/icons/icon-512x512.png?height=100&width=100"
                    }
                    alt={business.name}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
                <div className="p-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < business.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-semibold line-clamp-1">
                      {" "}
                      {business.name}
                    </p>
                    <p className="font-medium line-clamp-1 text-gray-600">
                      {business.name_en}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {business.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {changeView === "list" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business) => (
              <CompanyCard
                logoSrc={
                  business.image ||
                  "/icons/icon-512x512.png?height=100&width=100"
                }
                companyType={business.location}
                enCompanyName={business.name_en}
                khCompanyName={business.name}
                link={`/business-directory/${business.id}`}
                phoneNumber="012 345 678"
              />
            ))}
          </div>
        )}
      </div>

      <JoinSection />
    </section>
  );
}
