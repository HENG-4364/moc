"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { LogOut, Search, User } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "../SubNavbar/Components/MobileNav/MobileNav";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Cookies from "js-cookie";
import { useUserStore } from "@/stores/me";

const Navbar = () => {
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const me = useUserStore((state) => state.me);
  const [language, setLanguage] = useState(
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
      setLanguage(!language);
    }
  };

  const handleLogOut = () => {
    Cookies.remove("token");
    router.replace("/business-directory");
    router.refresh();
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
                    src={`${lang === "en-US"
                      ? "/Flag_of_Cambodia.png"
                      : "/Flag_of_the_United_Kingdom.png"
                      }`}
                    alt="MoC Flag Change Language"
                    className="w-[30px] pt-1 "
                  />
                </div>
              </div>
              {(!pathname.startsWith(`/${lang}/business-directory`) || !me) && (
                <div onClick={() => router.push("/search")}>
                  <Search size={26} color="white" />
                </div>
              )}

              {me && (
                <> <div>
                  {pathname.startsWith(`/${lang}/business-directory`) && (
                    <>
                      <div className="relative">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            className="flex items-center space-x-2 focus:outline-none"
                            asChild
                          >
                            <Avatar className="w-7 h-7">
                              <AvatarImage
                                src={me?.profile_picture ? me?.profile_picture : "/placeholder.svg"}
                                alt="user pic"
                                className="object-cover"
                              />
                              <AvatarFallback className="text-black">
                                {"CJ"}
                              </AvatarFallback>
                            </Avatar>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            className="w-52 mt-2 p-3 shadow-md bg-white border rounded-md"
                            align="end"
                          >
                            <div className="text-sm font-medium">
                              {me?.first_name} {me?.last_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {me?.email}
                            </div>
                            <div className="border-t my-2" />
                            <DropdownMenuItem>
                              <div
                                onClick={() =>
                                  router.push("/business-directory/profile")
                                }
                                className="flex items-center space-x-2 w-full"
                              >
                                <User size={20} />
                                <span>គណនី</span>
                              </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <div
                                onClick={handleLogOut}
                                className="flex items-center space-x-2 w-full text-red-500 cursor-pointer"
                              >
                                <LogOut size={20} />
                                <span>ចាកចេញ</span>
                              </div>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </>
                  )}
                </div></>
              )}

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
                  className="w-[261px]"
                  width={1500}
                  height={416}
                  priority
                />
              </Link>
            </div>
            <div className="">
              <Link href={`#`}>
                <Image
                  src="/kh-flag-title.png"
                  alt="moclogo"
                  className="w-[261px]"
                  width={1500}
                  height={416}
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
