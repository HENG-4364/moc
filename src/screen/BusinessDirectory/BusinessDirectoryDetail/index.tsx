"use client";

import {
  AtSign,
  Facebook,
  Globe,
  MapPin,
  PackageSearch,
  Phone,
  Star,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Lightbox } from "react-modal-image";
import GoogleMapIFrame from "@/components/GoogleMapIFrame";
import { JoinSection } from "../components/Banner/BannerSwiper";
import { FaTelegram, FaTiktok } from "react-icons/fa";
import ShareBusinessDirectoryModal from "../components/ShareBusinessDirectoryModal/ShareBusinessDirectoryModal";

type BusinessDirectoryDetailScreenProps = {
  publicBusinessDirectoryDetail: any;
  publicBusinessDirectoryRelatedList: any;
};

export default function BusinessDirectoryDetailScreen({
  publicBusinessDirectoryDetail,
  publicBusinessDirectoryRelatedList,
}: BusinessDirectoryDetailScreenProps) {
  const [modalImage, setModalImage] = useState("");
  const [modalImageOpen, setModalImageOpen] = useState(false);

  const onHandleOpenModalImage = (item: string) => {
    setModalImageOpen(true);
    setModalImage(item);
  };

  const onHandleCloseModalImage = () => {
    setModalImageOpen(false);
  };

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
                  src={publicBusinessDirectoryDetail?.banner}
                  alt="Map"
                  width={1000}
                  height={300}
                  className="h-full w-full"
                />
              </div>
              <div className="hidden xl:block bg-[#2980B9] py-1 text-center text-white text-xs md:text-sm"></div>
            </div>
            {/* Business Info */}
            <div className="rounded-b-lg border border-t-0">
              <div className="p-4">
                <div className="flex items-start gap-6">
                  <div className="mb-3 h-20 w-20 md:h-32 md:w-32 flex-shrink-0 overflow-hidden  bg-gray-50 ">
                    <Image
                      src={publicBusinessDirectoryDetail?.business_logo}
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
                          {publicBusinessDirectoryDetail?.business_name}
                        </h1>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="md:text-2xl font-bold">
                          {publicBusinessDirectoryDetail?.business_name_en}
                        </h1>
                      </div>
                      <div className="mt-1 inline-block rounded-full bg-gray-100 py-1 text-xs md:text-lg text-gray-600">
                        {
                          publicBusinessDirectoryDetail
                            ?.business_directory_category?.name_kh
                        }
                      </div>
                    </div>
                    <div className="float-end flex items-center">
                      <ShareBusinessDirectoryModal
                        publicBusinessDirectoryDetail={
                          publicBusinessDirectoryDetail
                        }
                      />
                    </div>
                  </div>
                </div>
                <hr className=" border-gray-200" />
                <div className="mt-3">
                  <p className="text-gray-600">Description</p>
                </div>
              </div>
            </div>
            <Card className="mt-6">
              <CardContent className="p-4">
                <Tabs defaultValue="businessDetail">
                  <TabsList className="w-full justify-start border-b">
                    <TabsTrigger
                      value="businessDetail"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Business Detail
                    </TabsTrigger>

                    <TabsTrigger
                      value="photoGallery"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#2980B9]"
                    >
                      Photo Gallery
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="businessDetail" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex gap-3 text-sm">
                        <div>
                          <h3 className="mb-3 flex items-center gap-2 font-semibold">
                            <span className="rounded-full bg-[#dff2ff] p-1">
                              <MapPin className="h-4 w-4 text-[#2980B9]" />
                            </span>
                            ទីតាំង
                          </h3>
                          <div className="pl-8">
                            <p className="text-gray-600">
                              ភូមិ៖ {publicBusinessDirectoryDetail?.village},
                              ឃុំ/សង្កាត់៖{" "}
                              {publicBusinessDirectoryDetail?.commune},
                              ស្រុក/ខណ្ឌ៖{" "}
                              {publicBusinessDirectoryDetail?.district},
                              ខេត្ត/ក្រុង៖{" "}
                              {publicBusinessDirectoryDetail?.province}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 text-sm">
                        <div>
                          <h3 className="mb-3 flex items-center gap-2 font-semibold">
                            <span className="rounded-full bg-[#dff2ff] p-1">
                              <Phone className="h-4 w-4 text-[#2980B9]" />
                            </span>
                            Phone Number
                          </h3>
                          <div className="pl-8">
                            <p className="text-gray-600">
                              (+855){" "}
                              {publicBusinessDirectoryDetail?.phone_number}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 text-sm">
                        <div>
                          <h3 className="mb-3 flex items-center gap-2 font-semibold">
                            <span className="rounded-full bg-[#dff2ff] p-1">
                              <AtSign className="h-4 w-4 text-[#2980B9]" />
                            </span>
                            Email
                          </h3>
                          <div className="pl-8">
                            <p className="text-gray-600">
                              {publicBusinessDirectoryDetail?.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {publicBusinessDirectoryDetail?.website_url && (
                        <div className="flex gap-3 text-sm">
                          <div>
                            <h3 className="mb-3 flex items-center gap-2 font-semibold">
                              <span className="rounded-full bg-[#dff2ff] p-1">
                                <Globe className="h-4 w-4 text-[#2980B9]" />
                              </span>
                              Website URL
                            </h3>
                            <div className="pl-8">
                              <Link
                                href={
                                  publicBusinessDirectoryDetail?.website_url
                                }
                                className="text-blue-600 break-all"
                              >
                                {publicBusinessDirectoryDetail?.website_url}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {publicBusinessDirectoryDetail?.facebook_url && (
                        <div className="flex gap-3 text-sm">
                          <div>
                            <h3 className="mb-3 flex items-center gap-2 font-semibold">
                              <span className="rounded-full bg-[#4C9CEE] p-1">
                                <Facebook className="h-4 w-4 text-white" />
                              </span>
                              Facebook URL
                            </h3>
                            <div className="pl-8">
                              <Link
                                href={
                                  publicBusinessDirectoryDetail?.facebook_url
                                }
                                className="text-blue-600 break-all"
                              >
                                {publicBusinessDirectoryDetail?.facebook_url}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {publicBusinessDirectoryDetail?.youtube_url && (
                        <div className="flex gap-3 text-sm">
                          <div>
                            <h3 className="mb-3 flex items-center gap-2 font-semibold">
                              <span className="rounded-full bg-red-600 p-1">
                                <Youtube className="h-4 w-4 text-white" />
                              </span>
                              Youtube URL
                            </h3>
                            <div className="pl-8">
                              <Link
                                href={
                                  publicBusinessDirectoryDetail?.youtube_url
                                }
                                className="text-blue-600 break-all"
                              >
                                {publicBusinessDirectoryDetail?.youtube_url}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {publicBusinessDirectoryDetail?.telegram_url && (
                        <div className="flex gap-3 text-sm">
                          <div>
                            <h3 className="mb-3 flex items-center gap-2 font-semibold">
                              <span className="rounded-full bg-[#2980B9] p-1">
                                <FaTelegram className="h-4 w-4 text-white" />
                              </span>
                              Telegram URL
                            </h3>
                            <div className="pl-8">
                              <Link
                                href={
                                  publicBusinessDirectoryDetail?.telegram_url
                                }
                                className="text-blue-600 break-all"
                              >
                                {publicBusinessDirectoryDetail?.telegram_url}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {publicBusinessDirectoryDetail?.tiktok_url && (
                        <div className="flex gap-3 text-sm">
                          <div>
                            <h3 className="mb-3 flex items-center gap-2 font-semibold">
                              <span className="rounded-full bg-black p-1">
                                <FaTiktok className="h-4 w-4 text-white" />
                              </span>
                              TikTok URL
                            </h3>
                            <div className="pl-8">
                              <Link
                                href={publicBusinessDirectoryDetail?.tiktok_url}
                                className="text-blue-600 break-all"
                              >
                                {publicBusinessDirectoryDetail?.tiktok_url}
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="gap-3 text-sm">
                        <h3 className="mb-3 flex items-center gap-2 font-semibold">
                          <span className="rounded-full bg-[#dff2ff] p-1">
                            <PackageSearch className="h-4 w-4 text-[#2980B9]" />
                          </span>
                          Products &amp; Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {publicBusinessDirectoryDetail?.service
                            ?.split(", ")
                            .map((service: string) => (
                              <p
                                key={service}
                                className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600 hover:bg-gray-200"
                              >
                                {service}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="photoGallery" className="mt-6">
                    <div className="space-y-6">
                      {modalImageOpen ? (
                        <Lightbox
                          medium={`${modalImage}`}
                          large={`${modalImage}`}
                          alt=""
                          onClose={onHandleCloseModalImage}
                        />
                      ) : (
                        <></>
                      )}

                      <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                          {publicBusinessDirectoryDetail?.thumbnail
                            ?.split(", ")
                            .map((item: any, index: number) => (
                              <div key={index + 1}>
                                <div
                                  className="w-full h-[300px] cursor-pointer"
                                  onClick={() => onHandleOpenModalImage(item)}
                                >
                                  <Image
                                    src={item}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover object-center"
                                    alt=""
                                  />
                                </div>
                              </div>
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
            <Card>
              <CardContent className="p-6">
                {/* Map Image */}
                <div className="relative h-[300px] w-full">
                  <GoogleMapIFrame
                    googleMapURL={publicBusinessDirectoryDetail?.map_url}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-[#dff2ff] p-1">
                    <Star className="h-4 w-4 text-[#2980B9]" />
                  </span>
                  People Also Looked for
                </h3>
                <div className="space-y-4">
                  {publicBusinessDirectoryRelatedList?.map(
                    (businessDirectory: any) => {
                      return (
                        <Link
                          href={`/business-directory/${businessDirectory?.id}`}
                          className="flex gap-4 hover:bg-gray-50"
                          key={businessDirectory?.id}
                        >
                          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-200/30">
                            <Image
                              src={
                                businessDirectory?.business_logo ||
                                "/placeholder-image.jpg"
                              }
                              alt="Business"
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="py-1">
                            <h4 className=" text-base font-semibold">
                              {businessDirectory?.business_name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {businessDirectory?.business_name_en}
                            </p>
                          </div>
                        </Link>
                      );
                    }
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <JoinSection />
    </div>
  );
}
