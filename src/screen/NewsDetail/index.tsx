"use client";

import { Calendar, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NewsDetailSidebar from "./components/NewsDetailSidebar";
import { FacebookShareButton } from "react-share";
import { FaFacebookF } from "react-icons/fa6";
const news = [
  {
    id: "1",
    thumbnail: "/news-detail-1.webp",
  },
  {
    id: "2",
    thumbnail: "/news-detail-2.webp",
  },
  {
    id: "3",
    thumbnail: "/news-detail-3.webp",
  },
  {
    id: "4",
    thumbnail: "/news-detail-4.webp",
  },
  {
    id: "5",
    thumbnail: "/news-detail-5.webp",
  },
];
function NewsDetailScreen() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
  };
  return (
    <>
      <section className="pt-4 lg:pt-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-9">
            <div className="w-full  col-span-1 lg:col-span-8">
              <div className="blog-details-desc">
                <div className="text-xl sm:text-2xl md:text-[1.7rem] lg:text-[2rem] font-bold mt-5 mobile-title-detail leading-9 md:leading-[1.5] lg:leading-[1.5] mb-3">
                  រូបភាពខ្លះៗពីការចូលទស្សនាពន្លាជាតិកម្ពុជា
                  នៅក្នុងពិព័រណ៍ទំនិញនាំចូលអន្តរជាតិចិន លើកទី៧ នៅទីក្រុងសៀងហៃ
                  សាធារណរដ្ឋប្រជាមានិតចិន នាថ្ងៃទី៧ ខែវិច្ឆិកា ឆ្នាំ២០២៤
                </div>
                <div className="flex flex-wrap items-center text-xs sm:text-sm md:text-base text-gray-600">
                  <Calendar className="w-5 h-5"  />
                  <span className="ml-2">
                    ថ្ងៃផ្សព្វផ្សាយ: <strong>០៧-វិច្ឆិកា-២០២៤</strong>
                  </span>
                  <span className="mx-2">|</span>
                  <span>
                    ប្រភេទព័ត៌មាន:{" "}
                    <strong className="text-blue-400 underline hover:text-blue-500">
                      {" "}
                      <Link href={`#`}>ព័ត៌មានទូទៅ</Link>
                    </strong>
                  </span>
                </div>
                <hr className="my-4" />
                <div className="flex items-center mb-3 gap-x-2">
                  <span>ចែករំលែក: </span>
                  <FacebookShareButton url={`https://moc.gov.kh/news/${1}`}>
                    <div
                      className={`flex items-center justify-center w-[25px] rounded-sm h-[25px] hover:cursor-pointer hover:brightness-95 bg-[#1978D3]`}
                    >
                      <FaFacebookF color="white" size={18} />
                    </div>
                  </FacebookShareButton>
                  <LinkIcon
                    size={20}
                    className="cursor-pointer font-semibold"
                    onClick={copyToClipboard}
                  />
                </div>
                <div className="article-image">
                  <Image
                    src={"/news-detail.webp"}
                    alt={"news-detail.webp"}
                    className="next-image"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="article-content">
                  <div className="entry-meta mt-5 leading-[2]">
                    (សៀងហៃ, ចិន)៖ រូបភាពខ្លះៗពីការចូលទស្សនាពន្លាជាតិកម្ពុជា
                    នៅក្នុងពិព័រណ៍ទំនិញនាំចូលអន្តរជាតិចិន លើកទី៧ នៅទីក្រុងសៀងហៃ
                    សាធារណរដ្ឋប្រជាមានិតចិន នាថ្ងៃទី៧ ខែវិច្ឆិកា ឆ្នាំ២០២៤ នេះ។
                    (Shanghai, China)—Highlight photos from the Cambodian
                    National Pavilion at the 7th China International Import Expo
                    in Shanghai City, People's Republic of China, on 7 November
                    2024.
                  </div>
                </div>
                <div className="">
                  {news?.map((item) => (
                    <>
                      <Image
                        src={item?.thumbnail}
                        alt={item?.thumbnail}
                        className="next-image mb-8"
                        width={1000}
                        height={1000}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full  col-span-1 lg:col-span-4">
              <NewsDetailSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsDetailScreen;
