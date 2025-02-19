"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CreditCard, Keyboard, Search, Settings, User } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import SubMenuHover from "./Components/MouseHover";
import { useParams, usePathname, useRouter } from "next/navigation";

const business_directory: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "បញ្ជីនាមករណ៍អាជីវកម្ម​",
    href: "/business-directory",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ប្រភេទអាជីវកម្ម",
    href: "/business-directory-category",
    description:
      "For sighted users to preview content available behind a link.",
  },
];
const business_information: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "ឯកសារផ្លូវការ​",
    href: "/document-category/official-document",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ព្រឹត្តិប័ត្រព័ត៌មានពាណិជ្ជកម្ម",
    href: "/document-category/bulletin",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "គម្រោង",
    href: "/document-category/projects",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "តំបន់សេដ្ឋកិច្ចពិសេស",
    href: "/document-category/special-economic-zone",
    description: "Visually or semantically separates content.",
  },
  {
    title: "របាយការណ៍បូកសរុបសន្និបាតប្រចាំឆ្នាំ",
    href: "/document-category/annual-meeting-report",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

const business_services: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "ការចុះឈ្មោះក្រុមហ៊ុន​",
    href: "https://www.businessregistration.moc.gov.kh",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ការចុះឈ្មោះម៉ាកពាណិជ្ជកម្ម",
    href: "https://www.cambodiaip.gov.kh",
    description:
      "For sighted users to preview content available behind a link.",
  },
];
const about_ministry: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "ប្រសាស៍ពីលោកជំទាវរដ្ឋមន្រ្តី​",
    href: "/page/messages-from-minister",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ប្រវត្តិក្រសួងពាណិជ្ជកម្ម",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "រចនាសម្ព័ន្ធអង្គភាព",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title:
      "Socio-economic development master plan for Cambodia - Laos - Vietnam development triangle (2004)",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
];
export function SubNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-[#2980B9]" : "bg-white"
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
                      className={`text-base md:text-[16px] font-semibold ${
                        isScrolled ? "text-white" : ""
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      ទំព័រដើម
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover data={about_ministry} menuName="អំពីក្រសួង" />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={business_services}
                    menuName="សេវាកម្មពាណិជ្ជកម្ម"
                    target="_blank"
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={business_information}
                    menuName="ព័ត៌មានពាណិជ្ជកម្ម"
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`text-base md:text-[16px] font-semibold ${
                        isScrolled ? "text-white" : ""
                      } ${navigationMenuTriggerStyle()}`}
                    >
                      ព័ត៌មាន
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <SubMenuHover
                    data={business_directory}
                    menuName="បញ្ជីនាមករណ៍អាជីវកម្ម"
                  />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div
            className={`flex items-center gap-3 cursor-pointer ${
              isScrolled ? "text-white" : ""
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
                    src={`${
                      lang === "en-US"
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
            <div>
              <DropdownMenu modal>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-[#2980B9] text-white hover:bg-[#297fb9dd] hover:text-white"
                  >
                    បណ្ដាញសង្គម
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      <span>Settings</span>
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
