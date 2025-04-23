"use client";

import { FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PdfCardProps {
  title: string;
  date: any;
  time: any;
  link: string;
}

export function PdfCard({ title, date, time, link }: PdfCardProps) {
  const changeHttpToHttps = (fileURL: string) => {
    if (fileURL?.startsWith("http://")) {
      return fileURL?.replace("http://", "https://");
    }

    return fileURL;
  };

  return (
    <Card className="shadow-lg border-none relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2980B9]/10 group cursor-pointer">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2980B9] to-[#21638f]" />

      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex gap-4">
          <div className="relative">
            <div className="size-12 rounded-lg bg-[#4e8bb320] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileText className="size-6 text-[#2980B9]" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className=" text-lg leading-7 mb-2 line-clamp-2 font-semibold">
              {title}
            </h3>
            <div className=" text-sm text-gray-500">
              <div>{date}</div>
            </div>
            <div className="text-sm text-gray-500">
              <div>{time}</div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div
          className={`mt-4 flex items-center justify-between transition-opacity duration-300 $`}
        >
          <span className="text-sm text-gray-500"></span>
          <Link href={`${changeHttpToHttps(link)}`} target="_blank">
            <Button
              size="sm"
              className="bg-[#2980B9] hover:bg-[#21638f] text-white gap-2"
            >
              <Download className="size-4" />
              ទាញយក
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
