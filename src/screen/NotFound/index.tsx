"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundScreen = () => {
  const pathName = usePathname();
  const lang = pathName.split("/")[1] as "kh" | "en-US";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full  px-4  text-center ">
        <Link href="/">
          <div className="mb-8">
            <Image
              src={"/moc-logo.png"}
              alt={"moc-logo"}
              width={330}
              height={120}
              className="mx-auto"
            />
          </div>
        </Link>
        <div className="mb-6">
          <p className="text-2xl font-semibold text-gray-800">
            {lang === "en-US"
              ? "Oops... we couldn't find this page."
              : "អូ៎... រកមិនឃើញទំព័រនេះទេ"}
          </p>
          <Image
            src={"/404.png"}
            alt={"404"}
            width={850}
            height={450}
            className="mx-auto mt-4"
          />
        </div>
        <div>
          <Link href="/">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              {lang === "en-US" ? "BACK TO HOME" : "ត្រឡប់ទៅទំព័រដើម"}
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>ឆ្នាំ 2023 - 2024 © រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ ក្រសួងពាណិជ្ជកម្ម</p>
      </div>
    </div>
  );
};

export default NotFoundScreen;
