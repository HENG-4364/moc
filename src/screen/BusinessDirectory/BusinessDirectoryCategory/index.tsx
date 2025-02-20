"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Title } from "@/components/Title/Title";
import { useRouter } from "next/navigation";
import { link } from "fs";

const services = [
  {
    icon: "/category/c1.png",
    title: "ទេសចរណ៍ និងសណ្ឋាគារ",
    alt: "Tourism and hospitality icon",
    link: "/business-directory/category/1",
  },
  {
    icon: "/category/c2.png",
    title: "សេវាកម្មរដ្ឋ",
    alt: "Government services icon",
    link: "/business-directory/category/2",
  },
  {
    icon: "/category/c3.png",
    title: "ឧស្សាហកម្ម និងសិប្បកម្ម",
    alt: "Industry and crafts icon",
    link: "/business-directory/category/3",
  },
  {
    icon: "/category/c4.png",
    title: "ដឹកជញ្ជូន និងឡូជីស្ទីក",
    alt: "Transport and logistics icon",
    link: "/business-directory/category/4",
  },
  {
    icon: "/category/c5.png",
    title: "អចលនទ្រព្យ",
    alt: "Real estate icon",
    link: "/business-directory/category/5",
  },
  {
    icon: "/category/c6.png",
    title: "អាហារ និងភេសជ្ជៈ",
    alt: "Food and beverage icon",
    link: "/business-directory/category/6",
  },
  {
    icon: "/category/c7.png",
    title: "សេវាកម្មសុខភាព",
    alt: "Healthcare services icon",
    link: "/business-directory/category/7",
  },
  {
    icon: "/category/c8.png",
    title: "បច្ចេកវិទ្យា",
    alt: "Technology icon",
    link: "/business-directory/category/8",
  },
  {
    icon: "/category/c9.png",
    title: "សេវាកម្មហិរញ្ញវត្ថុ",
    alt: "Financial services icon",
    link: "/business-directory/category/9",
  },
];

export default function BusinessDirectoryCategoryScreen() {
  const router = useRouter();
  return (
    <section className="bg-[#F6F7F8]">
      <div className="container mx-auto px-4 py-8">
        <Title title="ប្រភេទអាជីវកម្ម" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              onClick={() => router.push(`${service.link}`)}
              key={index}
              className="shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 rounded-md cursor-pointer"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.alt}
                    width={1000}
                    height={1000}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-base">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
