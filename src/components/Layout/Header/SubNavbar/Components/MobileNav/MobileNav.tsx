"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";

const business_directory: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "បញ្ជីនាមករណ៍អាជីវកម្ម",
    href: "/business-directory",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "ប្រភេទអាជីវកម្ម",
    href: "/business-directory",
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu size={26} color="white" />
      </SheetTrigger>
      <SheetContent side="left" className="">
        <SheetHeader>
          <div className="flex justify-center">
            <Link href={"/"} onClick={handleLinkClick}>
              <Image
                src="/moc-logo.png"
                alt="moclogo"
                className="w-[163px] sm:w-[200px]"
                width={1500}
                height={416}
                quality={100}
                priority
              />
            </Link>
          </div>
        </SheetHeader>
        <div className="py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              disabled
              type="search"
              className="pl-10 w-full max-w-xl border border-gray-100 shadow-sm"
              placeholder="ស្វែងរកឯកសារ..."
            />
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div
            onClick={() => (router.push("/"), setOpen(false))}
            className="py-2 hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
          >
            <Link href="/" className="text-lg w-full">
              ទំព័រដើម
            </Link>
          </div>
          <AccordionItem value="item-1" className="border-none text-lg">
            <AccordionTrigger
              className="py-2 hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>អំពីក្រសួង</div>
            </AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/page/messages-from-minister"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ប្រសាស៍ពីលោកជំទាវរដ្ឋមន្រ្តី
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ប្រវត្តិក្រសួងពាណិជ្ជកម្ម
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  រចនាសម្ព័ន្ធអង្គភាព
                </Link>
                <Link
                  href="#"
                  className="text-base px-4 py-2 hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Socio-economic development master plan for Cambodia - Laos -
                  Vietnam development triangle (2004)
                </Link>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger
              className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>សេវាកម្មពាណិជ្ជកម្ម</div>
            </AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="https://www.businessregistration.moc.gov.kh"
                  target="_blank"
                  className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ការចុះឈ្មោះក្រុមហ៊ុន
                </Link>
                <Link
                  href="https://www.cambodiaip.gov.kh"
                  target="_blank"
                  className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  ការចុះឈ្មោះម៉ាកពាណិជ្ជកម្ម
                </Link>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger
              className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>ព័ត៌មានពាណិជ្ជកម្ម្ម</div>
            </AccordionTrigger>
            <AccordionContent>
              {business_information.map((item: any, idx: number) => (
                <nav key={idx} className="flex flex-col space-y-2">
                  <Link
                    href={item?.href}
                    className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    {item?.title}
                  </Link>
                </nav>
              ))}
            </AccordionContent>
          </AccordionItem>
          <div
            onClick={() => (router.push("/news"), setOpen(false))}
            className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
          >
            <Link href="/news">ព័ត៌មាន</Link>
          </div>
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger
              className="py-2 text-lg hover:font-semibold hover:bg-accent hover:px-2 rounded-md transition-all duration-300 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div>បញ្ជីនាមករណ៍អាជីវកម្ម</div>
            </AccordionTrigger>
            <AccordionContent>
              {business_directory.map((item: any, idx: number) => (
                <nav key={idx} className="flex flex-col space-y-2">
                  <Link
                    href={item?.href}
                    className="px-4 py-2 text-base hover:font-semibold hover:bg-accent hover:px-5 rounded-md transition-all duration-300 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    {item?.title}
                  </Link>
                </nav>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="absolute bottom-0 right-0 left-0">
          <div className="mb-4">
            <div className="flex justify-center mt-3">
              <Link href="https://www.facebook.com/moc.gov.kh" target="_blank">
                <div
                  className={`flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#3F71BA]`}
                >
                  <FaFacebookF color="white" size={20} />
                </div>
              </Link>
              <Link href="https://twitter.com/MoCCambodia" target="_blank">
                <div
                  className={`mx-3 flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#1A1A1A]`}
                >
                  <FaXTwitter color="white" size={20} />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/@mocgovkhcambodia/featured"
                target="_blank"
              >
                <div
                  className={`me-3 flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#FE0000]`}
                >
                  <FaYoutube color="white" size={20} />
                </div>
              </Link>
              <Link href="https://t.me/mocnewsfeed" target="_blank">
                <div
                  className={`flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#5499FF]`}
                >
                  <FaTelegramPlane color="white" size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
