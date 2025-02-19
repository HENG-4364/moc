"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "../SubNavbar/Components/MobileNav/MobileNav";
import { useParams, usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const [language, setlanguage] = useState(
    params?.lang === "en-US" ? true : false
  );
  const { lang } = params;
  const onHandleChangeLanguage = () => {
    const { search } = window.location;
    const currentLang = params?.lang;
    if (pathname?.includes(currentLang || "")) {
      const newPathname = pathname?.replace(
        currentLang,
        currentLang === "en-US" ? "kh" : "en-US"
      );
      router.push(`${newPathname}${search}`);
      setlanguage(!language);
    }
  };
  return (
    <>
      <div className="bg-[#2980B9] py-[10px]  xl:hidden sticky top-0 z-50 transition-colors duration-300 ease-in-out">
        <div className="container mx-auto w-full">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <Image
                  src="/moclogo.png"
                  alt="moclogo"
                  className="w-[163px] sm:w-[261px]"
                  width={1500}
                  height={416}
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div className="flex items-start gap-3 cursor-pointer">
              <div>
                <div className="pe-3 " onClick={onHandleChangeLanguage}>
                  <Image
                    width={500}
                    height={500}
                    src={`${
                      lang === "en-US"
                        ? "/Flag_of_Cambodia.png"
                        : "/Flag_of_the_United_Kingdom.png"
                    }`}
                    alt="MoC Flag Change Language"
                    className="w-[30px] pt-1 "
                  />
                </div>
              </div>
              <div onClick={()=>router.push("/search")}>
                <Search size={26} color="white" />
              </div>
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <MobileNav />
                  </SheetTrigger>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2980B9] py-[10px] hidden xl:block top-0 z-50 transition-colors duration-300 ease-in-out">
        <div className="container mx-auto w-full">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <Image
                  src="/moclogo.png"
                  alt="moclogo"
                  className="w-[163px] sm:w-[261px]"
                  width={1500}
                  height={416}
                  quality={100}
                  priority
                />
              </Link>
            </div>
            <div className="">
              <Link href={`#`}>
                <Image
                  src="/kh-flag-title.png"
                  alt="moclogo"
                  className="w-[163px] sm:w-[261px]"
                  width={1500}
                  height={416}
                  quality={100}
                  priority
                />
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
