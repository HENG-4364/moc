"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Star, MapPin, Search, ListTodo, LayoutGrid } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { GoogleMap } from "./google-map";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  businesses,
  categories,
  locations,
} from "../../BusinessDirectorySearch/data/data";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
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

export default function BusinessDirectoryCategoryDetailScreen() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [mapView, setMapView] = useState<"map" | "satellite">("map");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [changeView, setChangeView] = useState("list");
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
        `/business-directory/category/1?q=${encodeURIComponent(searchTerm)}`
      );
      setIsOpen(false);
    }
  };
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, categoryId] : prev.filter((id) => id !== categoryId)
    );
  };

  const handleLocationChange = (locationId: string, checked: boolean) => {
    setSelectedLocations((prev) =>
      checked ? [...prev, locationId] : prev.filter((id) => id !== locationId)
    );
  };

  return (
    <section className="bg-[#F6F7F8]">
      <div className="container mx-auto px-4 py-6 ">
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
                <BreadcrumbLink href="/business-directory/category">
                  Catetory
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>ទេសចរណ៍ និងសណ្ឋាគារ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-4">
          <div className="text-2xl font-semibold">ទេសចរណ៍ និងសណ្ឋាគារ</div>
        </div>
        <div className="flex flex-col lg:flex-row min-h-screen gap-5">
          {/* Sidebar */}
          <div className="w-full lg:w-[300px] py-4 border-r">
            <ScrollArea className="h-[calc(100vh-2rem)]">
              <div className="space-y-6">
                {/* Categories */}
                {/* <div>
                  <h2 className="text-lg font-semibold mb-4 text-blue-900">
                    CATEGORIES
                  </h2>
                  <div className="space-y-0">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
                      >
                        <Checkbox
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked: any) =>
                            handleCategoryChange(
                              category.id,
                              checked as boolean
                            )
                          }
                        />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Locations */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-blue-900">
                    LOCATIONS
                  </h2>
                  <div className="">
                    {locations.map((location) => (
                      <div
                        key={location.id}
                        className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
                      >
                        <Checkbox
                          id={`location-${location.id}`}
                          checked={selectedLocations.includes(location.id)}
                          onCheckedChange={(checked: any) =>
                            handleLocationChange(
                              location.id,
                              checked as boolean
                            )
                          }
                        />
                        <label
                          htmlFor={`location-${location.id}`}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {location.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
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
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true);
                      }}
                      onFocus={() => setIsOpen(true)}
                      className="w-full pl-10 text-black border-none"
                      placeholder="Search businesses..."
                    />
                    {isOpen && filteredResults.length > 0 && (
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
                    )}
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
              <h2 className="text-xl font-semibold ">Top 20 business</h2>
              <div className="flex flex-row gap-1 justify-end mb-5 ">
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
              {changeView === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {businesses.map((business) => (
                    <div
                      onClick={() =>
                        router.push(`/business-directory/${business.id}`)
                      }
                      key={business.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="h-48 bg-gray-50">
                        <img
                          src={
                            business.image ||
                            "/icons/icon-512x512.png?height=100&width=100"
                          }
                          alt={business.name}
                          className="w-full h-full object-contain p-2"
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
                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
