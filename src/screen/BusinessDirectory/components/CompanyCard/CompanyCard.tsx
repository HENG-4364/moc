"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import type React from "react"; // Added import for React

type CompanyCardProps = {
  khCompanyName?: string;
  enCompanyName?: string;
  companyType?: string;
  logoSrc: string;
  dict?: any;
  link?: string;
  phoneNumber?: string;
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  khCompanyName,
  enCompanyName,
  companyType,
  logoSrc,
  dict,
  link,
  phoneNumber,
}) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer bg-white rounded-lg p-4 h-full shadow-lg"
      onClick={() => router.push(link || "")}
    >
      <div className="p-0">
        <div className="flex items-start justify-between mb-4">
          <div className="w-2/3 mb-4 xl:mb-0">
            <div className="text-xl font-bold mb-1 truncate">
              {khCompanyName}
            </div>
            <div className="font-bold truncate">{enCompanyName}</div>
          </div>
          <div className="w-full flex justify-end">
            <Image
              alt={`${enCompanyName} logo`}
              src={logoSrc || "/placeholder.svg"}
              width={1000}
              height={1000}
              className="rounded-full object-cover object-center w-[80px] h-[80px]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap">
            <p>
              {dict?.contact_number ? dict?.contact_number : "លេខទំនាក់ទំនង"}{" "}
              ៖&nbsp;
            </p>
            <p className="font-bold">{phoneNumber}</p>
          </div>
          <div className="flex flex-wrap">
            <p>
              {dict?.type_of_work ? dict?.type_of_work : "ប្រភេទការងារ"} ៖&nbsp;
            </p>
            <p className="font-bold">{companyType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
