"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Star,
  MapPin,
  Search,
  ListTodo,
  LayoutGrid,
  Filter,
  PhoneCall,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import Select from "react-select";
import {
  getCommune,
  getDistrict,
  getProvince,
  getVillage,
} from "@/hooks/provinces";
import { FilterDrawer } from "./Components/FilterDrawer";
import { JoinSection } from "../components/Banner/BannerSwiper";
import { useQuery } from "@apollo/client";
import { GET_PUBLIC_BUSINESS_DIRECTORY_LIST_QUERY } from "../graphql";
import { settings } from "@/lib/settings";
import EmptySearch from "@/screen/Search/Components/EmptySearchData/EmptySearchData";
import CompanyCardPlaceholder from "../components/CompanyCard/CompanyCardPlaceholder";
import GridCompanyCardPlaceholder from "../components/CompanyCard/GridCompanyCardPlaceholder";
const searchItems = [
  "Construction",
  "General pest control (termite control) and vermin control",
  "General Pest Control Which Includes Cockroach Control",
  "Gravity Conveyors, Screw Conveyors",
  "2 Screw Conveyor, Roller Conveyor",
  "6 Rooms (1 Master bed room - air conditioned / 5 room...)",
  "Concrete Pipes & Other Concrete Products",
  "Construction plastic and construction materials",
];
export type BusinessDirectoryScreenProps = {
  dict: any;
  publicBusinessDirectoryCategoryList: any;
  publicBusinessDirectoryList: any
};

export default function BusinessDirectorySearchScreen({
  publicBusinessDirectoryCategoryList,
  publicBusinessDirectoryList,
  dict,
}: BusinessDirectoryScreenProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [changeView, setChangeView] = useState("grid");
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>();
  const [province, setProvince] = useState<any>();
  const [district, setDistrict] = useState<any>();
  const [commune, setCommune] = useState<any>();
  const [villageOrGroup, setVillageOrGroup] = useState<any>();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const checkLang = lang === "kh" ? "kh" : "en-US";
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const { data, loading } = useQuery(GET_PUBLIC_BUSINESS_DIRECTORY_LIST_QUERY, {
    variables: {
      pagination: {
        page: 1,
        size: 10,
      },
      websiteId: settings.websiteId,
      filter: {
        businessCategoryId: Number(selectedCategory) || null,
        business_name: search,
        province: checkLang === "en-US" ? province?.label_en : province?.label,
        district: checkLang === "en-US" ? district?.label_en : district?.label,
        commune: checkLang === "en-US" ? commune?.label_en : commune?.label,
        village:
          checkLang === "en-US"
            ? villageOrGroup?.label_en
            : villageOrGroup?.label,
      },
    },
  });

  useEffect(() => {
    if (!province) {
      setDistrict(null);
      setCommune(null);
      setVillageOrGroup(null);
    }
  }, [province]);

  useEffect(() => {
    if (!district) {
      setCommune(null);
      setVillageOrGroup(null);
    }
  }, [district]);

  useEffect(() => {
    if (!commune) {
      setVillageOrGroup(null);
    }
  }, [commune]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (searchQuery) {
      newSearchParams.set("q", searchQuery);
    } else {
      newSearchParams.delete("q");
    }
    router.push(`/business-directory/search?${newSearchParams.toString()}`, { scroll: false });
  }, [searchQuery, router, searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(
        `/business-directory/search?q=${encodeURIComponent(searchTerm)}`
      );
      setIsOpen(false);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(prev => (prev === categoryId ? null : categoryId));
  };
  const handdleClearFilter = () => {
    setProvince(null);
    setDistrict(null);
    setCommune(null);
    setVillageOrGroup(null);
    setSelectedCategory(null);
  }
  return (
    <section className="bg-[#F6F7F8]">
      <div className="container mx-auto px-4 py-6">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/business-directory">
                  Business Directory
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{search ? search : ".........."}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-4">
          <div className="text-2xl font-semibold">{search ? search : ".........."}</div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-5">
          {/* Sidebar */}
          <div className="hidden lg:block w-full lg:w-[300px] py-4 border-r">
            <div className="">
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-blue-900">
                    CATEGORIES
                  </h2>
                  <div className="space-y-0">
                    {publicBusinessDirectoryCategoryList?.data.map(
                      (item: any) => (
                        <div
                          key={item.id}
                          className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
                        >
                          <Checkbox
                            id={`category-${item.id}`}
                            checked={selectedCategory === item?.id}
                            onCheckedChange={() =>
                              handleCategoryChange(item.id)
                            }
                          />
                          <label
                            htmlFor={`category-${item.id}`}
                            className="ml-2 text-sm cursor-pointer"
                          >
                            {checkLang === "en-US"
                              ? item.name_en
                              : item.name_kh}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-blue-900">
                    LOCATIONS
                  </h2>

                  <div className="grid grid-cols-1 px-3 space-y-2 ">
                    <div className="space-y-2">
                      <label
                        htmlFor="province"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.province}
                      </label>
                      <Select
                        id="province"
                        options={getProvince()}
                        onChange={setProvince}
                        value={province}
                        isClearable={true}
                        placeholder={dict?.province}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.district}
                      </label>
                      <Select
                        id="district"
                        options={getDistrict(province?.value)}
                        onChange={setDistrict}
                        value={district}
                        isClearable={true}
                        placeholder={dict?.district}
                        isDisabled={!province}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="commune"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.commune}
                      </label>
                      <Select
                        id="commune"
                        options={getCommune(district?.value)}
                        onChange={setCommune}
                        value={commune}
                        isClearable={true}
                        placeholder={dict?.commune}
                        isDisabled={!district}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="village"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.village}
                      </label>
                      <Select
                        id="village"
                        options={getVillage(commune?.value)}
                        onChange={setVillageOrGroup}
                        value={villageOrGroup}
                        isClearable={true}
                        placeholder={dict?.village}
                        isDisabled={!commune}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Map */}
            <div className="py-4">
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-row gap-4 bg-white p-1 shadow-sm rounded-lg">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsOpen(true)}
                      className="w-full pl-10 text-black border-none"
                      placeholder="Search businesses..."
                    />
                    {/* {isOpen && filteredResults?.length > 0 && searchTerm && (
                      <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <ul className="py-2">
                          {filteredResults.map((item, index) => (
                            <li
                              onClick={() => {
                                setSearchTerm(item);
                                setIsOpen(false);
                              }}
                              key={index}
                              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <Search className="h-4 w-4 text-gray-500 mr-3 flex-shrink-0" />
                              <span className="text-sm text-black line-clamp-1">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                  </div>

                  <Button
                    type="submit"
                    className="w-auto bg-[#297fb9] hover:bg-[#297fb9ea]"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </form>
            </div>
            {/* Business Listings */}
            <div className="">
              <h2 className="text-xl font-semibold  mb-5 ">
                {data?.publicBusinessDirectoryList?.data?.length > 0 && (
                  <div>
                    Top {data?.publicBusinessDirectoryList?.pagination?.total}{" "}
                    of Business
                  </div>
                )}
              </h2>
              <div className="flex flex-row gap-1 justify-between lg:justify-end items-center mb-5 ">
                <FilterDrawer
                  handleCategoryChange={handleCategoryChange}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  setProvince={setProvince}
                  setDistrict={setDistrict}
                  setCommune={setCommune}
                  setVillageOrGroup={setVillageOrGroup}
                  province={province}
                  district={district}
                  commune={commune}
                  villageOrGroup={villageOrGroup}
                  publicBusinessDirectoryCategoryList={
                    publicBusinessDirectoryCategoryList
                  }
                  dict={dict}
                />
                {data?.publicBusinessDirectoryList?.data?.length > 0 && (
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
                )}
              </div>
              {changeView === "grid" && (
                <>
                  {(!data || loading) ? <>
                    <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                      <GridCompanyCardPlaceholder />
                    </div>
                  </> :
                    <>
                      {data?.publicBusinessDirectoryList?.data?.length > 0 ? <>
                        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
                          {data?.publicBusinessDirectoryList?.data.map(
                            (business: any) => (
                              <div
                                onClick={() =>
                                  router.push(
                                    `/business-directory/${business.id}`
                                  )
                                }
                                key={business.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                              >
                                <div className=" bg-gray-50">
                                  <img
                                    src={
                                      business.business_logo ||
                                      "/icons/icon-512x512.png?height=100&width=100"
                                    }
                                    alt={business.business_name}
                                    className="w-full h-full object-contain p-3"
                                  />
                                </div>
                                <div className="p-4">
                                  <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < business.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                          }`}
                                      />
                                    ))}
                                  </div>
                                  <div className="space-y-2">
                                    <p className="text-lg font-semibold line-clamp-1">
                                      {" "}
                                      {business.business_name}
                                    </p>
                                    <p className="font-medium line-clamp-1 text-gray-600">
                                      {business.business_name_en}
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
                            )
                          )}
                        </div>
                      </>
                        : <>
                          <EmptySearch />
                        </>}
                    </>
                  }
                </>
              )}
              {changeView === "list" && (
                <>
                  {(!data || loading) ? <>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                      <CompanyCardPlaceholder />
                      <CompanyCardPlaceholder />
                      <CompanyCardPlaceholder />
                      <CompanyCardPlaceholder />
                    </div>
                  </> : <>
                    {data?.publicBusinessDirectoryList?.data?.length > 0 ?
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                          {data?.publicBusinessDirectoryList?.data.map(
                            (business: any) => (
                              <CompanyCard
                                logoSrc={
                                  business.business_logo ||
                                  "/icons/icon-512x512.png?height=100&width=100"
                                }
                                companyType={business.province}
                                enCompanyName={business.business_name_en}
                                khCompanyName={business.business_name}
                                link={`/business-directory/${business.id}`}
                                phoneNumber={business?.phone_number}
                              />
                            )
                          )}
                        </div></> : <> <EmptySearch /></>}

                  </>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <JoinSection />
    </section>
  );
}
