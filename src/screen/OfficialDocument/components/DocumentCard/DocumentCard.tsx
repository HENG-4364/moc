"use client";

import { FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PdfCardProps {
  title: string;
  date: string;
  time: string;
  fileSize?: string;
}

export function PdfCard({
  title,
  date,
  time,
  fileSize = "2.5MB",
}: PdfCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="shadow-lg border-none relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2980B9]/10 group cursor-pointer"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
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
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{date}</span>
              <span className="size-1 rounded-full bg-gray-300" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div
          // className={`mt-4 flex items-center justify-between transition-opacity duration-300 ${
          //   isHovered ? "opacity-100" : "opacity-0"
          // }`}
          className={`mt-4 flex items-center justify-between transition-opacity duration-300 $`}
        >
          <span className="text-sm text-gray-500">{fileSize}</span>
          <Button
            size="sm"
            className="bg-[#2980B9] hover:bg-[#21638f] text-white gap-2"
          >
            <Download className="size-4" />
            ទាញយក
          </Button>
        </div>
      </div>
    </Card>
  );
}
