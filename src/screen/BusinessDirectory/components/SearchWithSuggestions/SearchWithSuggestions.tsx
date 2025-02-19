"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample data - replace with actual data
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

export function SearchWithSuggestions({ dict }: { dict: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filteredResults = useMemo(() => {
    if (!searchTerm) return [];
    return searchItems.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="z-10 text-white p-5">
        <h1 className="mb-5 text-4xl font-bold">ស្វែងរកអាជីវកម្ម</h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="relative bg-white bg-opacity-30 p-4 rounded-lg"
          >
            <div className="relative w-full  lg:w-[799px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>

              <Input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                className="w-full pl-10 pr-28 text-black"
                placeholder="Search..."
              />

              <div className="absolute inset-y-0 right-1 flex items-center ">
                <Button className="px-6 hover:bg-[#297fb9ea]" type="submit">
                  Search
                </Button>
              </div>
            </div>

            {isOpen && filteredResults.length > 0 && (
              <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
