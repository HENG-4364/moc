"use client";

import { Suspense } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import TypeOfBusiness from "./components/TypeOfBusiness/TypeOfBusiness";
import { SearchWithSuggestions } from "./components/SearchWithSuggestions/SearchWithSuggestions";
import { JoinSection } from "./components/Banner/BannerSwiper";
import CompanyCardPlaceholder from "./components/CompanyCard/CompanyCardPlaceholder";
import CompanyCard from "./components/CompanyCard/CompanyCard";
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
  return (
    <section className="bg-gray-10">
      <div className="mb-8">
        <SearchWithSuggestions dict={dict} />
      </div>

      <TypeOfBusiness dict={dict} />

      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">នាមករណ៍អាជីវកម្ម</h3>
          <Button
            variant="ghost"
            className="flex items-center"
            onClick={() => router.push("/business-directory/search")}
          >
            មើលទាំងអស់ <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {!fakeCompanies ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CompanyCardPlaceholder key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fakeCompanies?.length > 0 ? (
              fakeCompanies?.map((item: any, idx: number) => (
                <CompanyCard key={idx} {...item} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center">
                <Image
                  src="/empty-filter.png"
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover object-center"
                />
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold mb-2">
                    <i className="bi bi-exclamation-circle-fill mr-2"></i>
                    {dict?.error_message.title}
                  </p>
                  <p className="text-gray-600">
                    {dict?.error_message.sub_title}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <JoinSection/>
    </section>
  );
}
