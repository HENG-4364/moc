"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel } from "lucide-react";

type KeyEconomicIndicatorsCardProps = {
  date?: string;
  title?: string;
  link?: string;
  image: string;
  name?: string;
  dict?: any;
  color?: string;	
  icon?: any;
};

export default function KeyEconomicIndicatorsCard({
  image,
  link,
  title,
  date,
  name,
  dict,
  color,
  icon,
}: KeyEconomicIndicatorsCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <Card
      className="cursor-pointer transition-colors duration-300 hover:bg-gray-50 shadow-md border-gray-100/95 "
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div>
          <div className="text-[20px] md:text-[18px] mb-2">{title}</div>
          <div className="flex justify-between mb-3">
            <div className="text-[25px] flex items-center font-bold">
              {name}
            </div>
            <div className="flex justify-end items-center">
              {/* <Image src={image} width={70} height={70} alt={title || ""} /> */}
             
              <div
                className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
             {icon}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[14px]">
              {dict?.key_economic_indicators?.date} : {date}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
