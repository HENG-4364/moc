"use client";

import { Suspense, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { LayoutGrid, ListTodo, MapPin, PhoneCall } from "lucide-react";
import TypeOfBusiness from "./components/TypeOfBusiness/TypeOfBusiness";
import { SearchWithSuggestions } from "./components/SearchWithSuggestions/SearchWithSuggestions";
import CompanyCard from "./components/CompanyCard/CompanyCard";
import { JoinSection } from "./components/Banner/BannerSwiper";
import CompanyCardPlaceholder from "./components/CompanyCard/CompanyCardPlaceholder";
import GridCompanyCardPlaceholder from "./components/CompanyCard/GridCompanyCardPlaceholder";

export type BusinessDirectoryScreenProps = {
  dict: any;
  publicBusinessDirectoryCategoryList: any;
  publicBusinessDirectoryList: any;
};

export default function BusinessDirectoryScreen({
  dict,
  publicBusinessDirectoryCategoryList,
  publicBusinessDirectoryList,
}: BusinessDirectoryScreenProps) {
  return (
    <Suspense fallback={<div />}>
      <BusinessDirectoryContent
        dict={dict}
        publicBusinessDirectoryCategoryList={
          publicBusinessDirectoryCategoryList
        }
        publicBusinessDirectoryList={publicBusinessDirectoryList}
      />
    </Suspense>
  );
}

function BusinessDirectoryContent({
  dict,
  publicBusinessDirectoryCategoryList,
  publicBusinessDirectoryList,
}: BusinessDirectoryScreenProps) {
  const router = useRouter();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const [changeView, setChangeView] = useState("grid");

  return (
    <section className="bg-[#F6F7F8]">
      <div className="mb-8">
        <SearchWithSuggestions dict={dict} publicBusinessDirectoryList={publicBusinessDirectoryList} />
      </div>

      <TypeOfBusiness
        dict={dict}
        publicBusinessDirectoryCategoryList={
          publicBusinessDirectoryCategoryList
        }
      />

      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">នាមករណ៍អាជីវកម្ម</h3>

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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 pb-14">
            {publicBusinessDirectoryList?.data?.length > 0 ? <>
              {publicBusinessDirectoryList?.data.map((business: any) => {

                const {
                  id,
                  business_name,
                  business_name_en,
                  business_logo,
                  phone_number,
                } = business;

                return (
                  <div
                    onClick={() => router.push(`/business-directory/${id}`)}
                    key={id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className=" bg-gray-50">
                      <img
                        src={
                          business_logo ||
                          "/icons/icon-512x512.png?height=100&width=100"
                        }
                        alt={lang === "kh" ? business_name : business_name_en}
                        className="w-full h-full object-contain p-3"
                      />
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <p className="text-lg font-semibold line-clamp-1">
                          {business_name}
                        </p>
                        <p className="font-medium line-clamp-1 text-gray-600">
                          {business_name_en}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <PhoneCall className="w-4 h-4 mr-2" />
                          {business.phone_number}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 !mt-0.5">
                          <MapPin className="w-4 h-4 mr-2" />
                          {business.province}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}</> : <>

              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
              <GridCompanyCardPlaceholder />
            </>}

          </div>
        )}

        {changeView === "list" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-14">
            {publicBusinessDirectoryList?.data?.length > 0 ? <>
              {publicBusinessDirectoryList?.data.map((business: any) => {
                const {
                  id,
                  business_name,
                  business_name_en,
                  business_logo,
                  business_directory_category,
                  phone_number,
                } = business;

                return (
                  <CompanyCard
                    logoSrc={
                      business_logo ||
                      "/icons/icon-512x512.png?height=100&width=100"
                    }
                    companyType={business_directory_category?.name_kh}
                    enCompanyName={business_name_en}
                    khCompanyName={business_name}
                    link={`/business-directory/${id}`}
                    phoneNumber={phone_number}
                    key={id}
                  />
                );
              })}</> : <>

              <CompanyCardPlaceholder />
              <CompanyCardPlaceholder />
              <CompanyCardPlaceholder />
              <CompanyCardPlaceholder />
              <CompanyCardPlaceholder />
              <CompanyCardPlaceholder />
            </>}

          </div>
        )}
      </div>
      <JoinSection />
    </section>
  );
}
