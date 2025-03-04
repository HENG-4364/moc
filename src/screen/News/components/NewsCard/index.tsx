"use client";

import Image from "next/image";
import { BiSolidCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { FacebookShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

type NewsCardProps = {
  date?: string;
  category?: string;
  title?: string;
  description?: any;
  image?: any;
  link?: string;
  btnName?: string;
  dict?: any;
  id?: string;
  categoryLink?: number;
};

export default function NewsCard({
  date,
  category,
  description,
  image,
  link,
  title,
  btnName,
  dict,
  id,
  categoryLink,
}: NewsCardProps) {
  const router = useRouter();
  return (
    <div className="bg-white shadow-xl rounded-lg border-none">
      <a href={link} className="block text-white">
        <div className="relative rounded-t-lg overflow-hidden h-[280px]">
          <Image
            src={image}
            className="w-full h-full object-cover "
            alt="Card Image"
            width={500}
            height={500}
          />
          {date && (
            <span className="absolute top-4 right-6 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {date}
            </span>
          )}
        </div>
      </a>
      <div className="border border-gray-200 rounded-b-lg">
        <div className="p-6">
          <h5
            className="flex items-center gap-2 text-lg font-semibold text-gray-600 cursor-pointer"
            onClick={() => {
              router.push(`/category/${categoryLink}`);
            }}
          >
            <span className="bg-[#2980B9] text-white text-xl rounded-full w-8 h-8 flex items-center justify-center">
              <BiSolidCategory />
            </span>
            {category}
          </h5>
          <Link className="text-decoration-none" href={`${link}`}>
            <h4 className="mt-6 mb-2 text-lg font-semibold text-gray-800 line-clamp-2">
              {title}
            </h4>
            <p className="text-gray-500 text-sm line-clamp-3 leading-6">{description}</p>
          </Link>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            ចែករំលែក :
            <FacebookShareButton
              url={`https://moc.gov.kh/news/${id}?w=370&h=224`}
            >
              <FaFacebook className="text-[#2980B9] text-xl" />
            </FacebookShareButton>
          </div>
          <div
            className="bg-[#2980B9] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#297fb9e7]"
            onClick={() => {
              router.push(`${link}`);
            }}
          >
            អានបន្ថែម
          </div>
        </div>
      </div>
    </div>
  );
}
