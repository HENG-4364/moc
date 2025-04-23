"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  LogOut,
  Search,
  User,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import SubMenuHover from "./Components/MouseHover";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { getDictionaryClient } from "@/lib/dictionaries-client";
import { businessServicesData } from "@/common/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Cookies from "js-cookie";
import { useUserStore } from "@/stores/me";

const businessDirectorySubMenu: {
  title: string;
  title_en: string;
  href: string;
  description: string;
}[] = [
    {
      title: "បញ្ជីនាមករណ៍អាជីវកម្ម​",
      title_en: "Business Directory",
      href: "/business-directory",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "ប្រភេទអាជីវកម្ម",
      title_en: "Business Directory Category",
      href: "/business-directory/category",
      description:
        "For sighted users to preview content available behind a link.",
    },
  ];

export type SubNavbarProps = {
  publicDocumentCategoryList: any;
  primaryMenu: any;
};

export function SubNavbar({
  publicDocumentCategoryList,
  primaryMenu,
}: SubNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const me = useUserStore((state) => state.me);

  const [language, setLanguage] = useState(
    params?.lang === "en-US" ? true : false
  );
  const { lang } = params;
  const dict = getDictionaryClient(lang);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    Cookies.remove("token");
    router.replace("/business-directory");
    router.refresh();
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ease-in-out ${isScrolled ? "bg-[#2980B9]" : "bg-white"
        }`}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="container mx-auto ">
        <div className="hidden xl:flex justify-between items-center py-[10px] ">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-base md:text-[16px] font-semibold ${isScrolled ? "text-white" : ""
                        } ${navigationMenuTriggerStyle()}`}
                    >
                      {dict?.sub_navbar?.home}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={primaryMenu?.map((item: any) => {
                      return {
                        title: lang === "kh" ? item?.title : item?.title_en,
                        href: `/page/${item?.slug}`,
                      };
                    })}
                    menuName={dict?.sub_navbar?.about_ministry}
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={businessServicesData?.map((item) => {
                      return {
                        title: lang === "kh" ? item?.title : item?.title_en,
                        href: item?.link,
                      };
                    })}
                    menuName={dict?.sub_navbar?.business_services}
                    target="_blank"
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={publicDocumentCategoryList?.map((item: any) => {
                      return {
                        title:
                          lang === "kh"
                            ? item?.category_name
                            : item?.category_name_en,
                        href: `/document-category/${item?.slug}`,
                      };
                    })}
                    menuName={dict?.sub_navbar?.business_information}
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-base md:text-[16px] font-semibold ${isScrolled ? "text-white" : ""
                        } ${navigationMenuTriggerStyle()}`}
                    >
                      {dict?.sub_navbar?.news}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={businessDirectorySubMenu?.map((item) => {
                      return {
                        title: lang === "kh" ? item?.title : item?.title_en,
                        href: item?.href,
                      };
                    })}
                    menuName={dict?.sub_navbar?.business_directory}
                  />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer ${isScrolled ? "text-white" : ""
              }`}
          >
            <div onClick={() => router.push("/search")}>
              <Search size={20} />
            </div>
            <svg
              width="5"
              height="15"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="0.499999"
                y2="11.5"
                stroke={`${isScrolled ? "#FFFFFF" : "#333333"}`}
                strokeLinecap="round"
              ></line>
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <div className={`${lang === "kh" ? "pt-1" : ""}`}>
                  {lang === "kh" ? "EN" : "ខ្មែរ"}
                </div>
                <div className="pe-3 " onClick={onHandleChangeLanguage}>
                  <Image
                    width={500}
                    height={500}
                    src={`${lang === "en-US"
                      ? "/Flag_of_Cambodia.png"
                      : "/Flag_of_the_United_Kingdom.png"
                      }`}
                    alt="MoC Flag Change Language"
                    className="w-[25px]"
                  />
                </div>
              </div>
            </div>
            <svg
              width="5"
              height="15"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="0.499999"
                y2="11.5"
                stroke={`${isScrolled ? "#FFFFFF" : "#333333"}`}
                strokeLinecap="round"
              ></line>
            </svg>
            {pathname.startsWith(`/${lang}/business-directory`) && (
              <>
                {
                  me ? <>
                    <div className="relative">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                          <Avatar className="w-8 h-8">
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
                        <DropdownMenuContent className="w-64 mt-2 p-3 shadow-md bg-white border rounded-md">
                          <div className="text-sm font-medium">{me?.first_name} {me?.last_name}</div>
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
                  </> : ""
                }
              </>
            )}
            <div>
              <DropdownMenu modal>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-[#2980B9] text-white hover:bg-[#297fb9dd] hover:text-white"
                  >
                    {dict?.sub_navbar?.social_media}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="https://www.facebook.com/moc.gov.kh"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaFacebookF className="bg-[#3F71BA] text-white p-1 rounded-full !w-6 !h-6" />{" "}
                        Facebook
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="https://twitter.com/MoCCambodia"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaXTwitter className="bg-[#1A1A1A] text-white p-1 rounded-full !w-6 !h-6" />{" "}
                        X (Formerly Twitter)
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="https://www.youtube.com/@mocgovkhcambodia/featured"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaYoutube className="bg-[#FE0000] text-white p-1 rounded-full !w-6 !h-6" />{" "}
                        Youtube
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="https://t.me/mocnewsfeed"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FaTelegram className="bg-[#5499FF] text-white p-1 rounded-full !w-6 !h-6" />{" "}
                        Telegram
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
