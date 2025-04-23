"use client";

import style from "./key-activities-card.module.scss";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type KeyActivitiesCardProps = {
  title?: string;
  link?: string;
  image: string;
  description?: string;
};

export default function KeyActivitiesCard({
  image,
  link,
  title,
}: KeyActivitiesCardProps) {
  const router = useRouter()
  return (
    <Card className="relative overflow-hidden group cursor-pointer" onClick={() => { router.push(`${link}`) }}>
      <div className="relative h-[250px] ">
        {/* Image with gradient overlay */}
        <Image fill src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2980B9]/40 to-[#00000080]/60" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="pr-10">
            <h3 className="text-[20px] font-bold mb-2 line-clamp-2">{title}</h3>
          </div>

          {/* Arrow icon */}
          <div className={`absolute right-6 bottom-6 ${style.button}`}>
            <ArrowRight
              className={`w-8 h-8 transform group-hover:translate-x-1 transition-transform ${style.arrow}`}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
