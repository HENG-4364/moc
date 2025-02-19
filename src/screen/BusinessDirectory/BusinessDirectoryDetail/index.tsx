import { BookmarkIcon, MapPin, Phone, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SwiperCard from "../components/Banner/components/swiper";
import { JoinSection } from "../components/Banner/BannerSwiper";

export default function BusinessDirectoryDetailScreen() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Map Placeholder */}
            <div className="border border-b-0 rounded-t-lg">
              <div className=" h-[100%] bg-gray-200">
                <Image
                  src="/ministry-of-commerece-banner.jpg"
                  alt="Map"
                  width={1000}
                  height={300}
                  className="h-full w-full "
                />
              </div>
              <div className="hidden xl:block bg-[#2980B9] p-1 text-center text-white text-xs md:text-sm">
                Do you own this business? If yes,{" "}
                <Link href="#" className="underline hover:text-slate-300">
                  click here
                </Link>{" "}
                to claim it now and unlock the page's full features!
              </div>
            </div>
            {/* Business Info */}
            <div className="rounded-b-lg border border-t-0">
              <div className="p-4">
                <div className="flex items-start gap-6">
                  <div className="mb-3 h-20 w-20 md:h-32 md:w-32 flex-shrink-0 overflow-hidden  bg-gray-50 ">
                    <Image
                      src="/icons/icon-512x512.png?height=100&width=100"
                      alt="Business placeholder"
                      width={100}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between py-2">
                    <div>
                      <div className="flex gap-2">
                        <h1 className="md:text-2xl font-bold">
                          Ministry Of Commerce
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="md:text-2xl font-bold">
                          ក្រសួងពាណិជ្ជកម្ម
                        </h1>
                      </div>
                      <div className="mt-1 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs md:text-sm text-gray-600">
                        Commercial Properties
                      </div>
                    </div>
                    <div className="float-end flex items-center">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <BookmarkIcon className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-200" />
                <div className="space-y-4 mt-6">
                  <div className="flex gap-3 text-sm">
                    <div>
                      <MapPin className="!h-5 !w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">
                        2/F A.B. Sandoval Building, Oranbo Drive corner Shaw
                        Boulevard, Pasig City 1600 Metro Manila
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div>
                      <Phone className="!h-5 !w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Landline</p>
                      <p className="text-gray-600">+63 (2) 8 635 4011</p>
                      <p className="text-gray-600">+63 (2) 7 901 4459</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="mt-6">
              <CardContent className="p-4">
                <Tabs defaultValue="business" className="">
                  <TabsList className="w-full justify-start border-b">
                    <TabsTrigger
                      value="business"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Business Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Reviews
                    </TabsTrigger>
                    <TabsTrigger
                      value="photos"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Photos
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Videos
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="business" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 font-semibold">
                          <span className="rounded-full bg-[#dff2ff] p-1">
                            <Star className="h-4 w-4 text-[#2980B9]" />
                          </span>
                          Categories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Commercial Properties",
                            "Real Estate Brokers",
                            "Residential Properties",
                          ].map((category) => (
                            <Link
                              key={category}
                              href="#"
                              className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:bg-gray-200"
                            >
                              {category}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="relative w-full overflow-hidden rounded-md bg-white">
              {/* Map Image */}
              <div className="relative h-[300px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7817.816496194703!2d104.864177!3d11.558435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951d9a9f773d7%3A0x9fb3b11a42d79a1d!2sDepartment%20of%20Business%20Registration%20of%20MOC!5e0!3m2!1sen!2skh!4v1739867659251!5m2!1sen!2skh"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-[#dff2ff] p-1">
                    <Star className="h-4 w-4 text-[#2980B9]" />
                  </span>
                  People Also Looked for
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link
                      key={i}
                      href="#"
                      className="flex gap-4 hover:bg-gray-50"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Business"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Name</h4>
                        <p className="text-sm text-gray-600">
                          Location details
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-[#dff2ff] p-1">
                    <Star className="h-4 w-4 text-[#2980B9]" />
                  </span>
                  Nearby Businesses
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <Link
                      key={i}
                      href="#"
                      className="flex gap-4 hover:bg-gray-50"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200">
                        <Image
                          src="/placeholder.svg?height=64&width=64"
                          alt="Business"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">Business Name</h4>
                        <p className="text-sm text-gray-600">0.05 km</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <JoinSection />
    </div>
  );
}
