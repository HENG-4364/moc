"use client";

import style from "./key-activities-card.module.scss"
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
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
  description,
}: KeyActivitiesCardProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer">
      <div className="relative h-[250px] ">
        {/* Image with gradient overlay */}
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0373ec80]/60 to-[#00000080]/70" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="pr-10">
            <h3 className="text-[20px] font-bold mb-2 ">{title}</h3>
            <p className="text-[16px] opacity-90 line-clamp-1 leading-9 ">{description}</p>
          </div>

          {/* Arrow icon */}
          <div className={`absolute right-6 bottom-6 ${style.button}`}>
            <ArrowRight className={`w-8 h-8 transform group-hover:translate-x-1 transition-transform ${style.arrow}`} />
          </div>
        </div>
      </div>
    </Card>
  );
}
