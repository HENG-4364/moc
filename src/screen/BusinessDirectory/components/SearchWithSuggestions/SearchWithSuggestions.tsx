"use client";

import type React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomeSelect } from "./components/Select";
import { getProvince } from "@/hooks/provinces";
import { usePublicBusinessDirectoryCategoryList } from "@/hooks/business-directory-category-list";

export type SearchWithSuggestionsProps = {
  dict: any;
  publicBusinessDirectoryList: any
};
export function SearchWithSuggestions({ dict, publicBusinessDirectoryList }: SearchWithSuggestionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

  const filteredResults = [
    ...new Set([
      ...(publicBusinessDirectoryList?.data
        ?.filter((business: any) =>
          // business.business_name_en?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.business_name?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        ?.map((business: any) => business.business_name) || []),
      ...(publicBusinessDirectoryList?.data
        ?.filter((business: any) =>
          business.business_name_en?.toLowerCase().includes(searchTerm.toLowerCase())
          //|| business.business_name?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        ?.map((business: any) => business.business_name_en) || []),
    ]),
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(
        `/business-directory/search?q=${encodeURIComponent(searchTerm)}`
      );
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full h-[450px] pt-20 flex justify-center text-center bg-[url('/business-directory-search-banner.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="absolute text-white p-5 w-full max-w-5xl mx-auto">
        <h1 className="  mb-5 text-4xl font-bold ">ស្វែងរកអាជីវកម្ម</h1>
        <div className="w-full" ref={containerRef}>
          <form onSubmit={handleSubmit} className="relative">
            <div className="hidden md:flex flex-col md:flex-row gap-4  md:bg-white  p-2 rounded-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  className="w-full pl-10 text-black border-none"
                  placeholder="Search businesses..."
                />
                {isOpen && filteredResults?.length > 0 && searchTerm && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {filteredResults?.map((item: any, index: number) => (
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
                )}
              </div>
              {/* <CustomeSelect
                options={getCategories()}
                onChange={(e: any) => setCategory(e)}
                value={category}
                placeholder="Select Category"
                className="w-full md:w-[200px] bg-white text-gray-900 border-none"
              />
              <CustomeSelect
                options={getProvince()}
                onChange={(e: any) => setProvince(e)}
                value={province}
                placeholder="Select Location"
                className="w-full md:w-[200px] bg-white text-gray-900 border-none"
              /> */}

              <Button
                type="submit"
                className="w-full md:w-auto bg-[#297fb9] hover:bg-[#297fb9ea]"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="md:hidden flex flex-row gap-4 bg-white  p-1 rounded-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  className="w-full pl-10 text-black border-none"
                  placeholder="Search businesses..."
                />
                {isOpen && filteredResults?.length > 0 && searchTerm && (
                  <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-2">
                      {filteredResults.map((item: any, index: number) => (
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
                )}
              </div>
              <Button
                type="submit"
                className="md:w-auto bg-[#297fb9] hover:bg-[#297fb9ea]"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
