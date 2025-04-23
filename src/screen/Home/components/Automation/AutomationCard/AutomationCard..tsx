"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpenCheck, ChevronRight } from "lucide-react";
import { PiTrademark } from "react-icons/pi";
import { useState } from "react";

type AutomationListCardProps = {
  icon?: any;
  title?: string;
  link?: string;
  color?: string;
  image: string;
};

export default function AutomationCard({
  image,
  link,
  title,
  color,
  icon
}: AutomationListCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <Card
      className="w-full max-w-md relative overflow-hidden h-[180px] cursor-pointer transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md"
    >
      <div
        className={`absolute top-0 right-0 bg-gradient-to-bl ${color} w-[4.5rem] h-[4.5rem] rounded-bl-full flex items-start justify-end p-2  `}
      >
        {icon}
      </div>

      <CardContent className="p-6 h-full flex flex-col justify-between">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full h-full flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full mt-6">
            <h3 className="text-xl font-semibold  line-clamp-1 overflow-hidden leading-9 " title={title}>
              {title}
            </h3>
            <span className="text-gray-500">ចុះបញ្ជីតាមប្រព័ន្ធអេឡិកត្រូនិក</span>
          </div>
        </a>

        <div className={`flex items-center text-sm font-medium transition-all duration-300 hover:text-[#2980B9] text-gray-500 mt-2`}>
          <span>ព័ត៌មានលម្អិត</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardContent>
    </Card>


  );
}
