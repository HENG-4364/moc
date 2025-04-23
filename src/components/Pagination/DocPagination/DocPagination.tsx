"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

function convertToKhmerNumberWithZeroPrefix(num: string): string {
  const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  return num
    .padStart(2, "0")
    .split("")
    .map((digit) => khmerNumbers[parseInt(digit)])
    .join("");
}

type Props = {
  total: number;
  size: number;
  currentPage: number;
  limit: number;
  variableName?: string;
  isMedia?: boolean;
  dict?: any
};

export function DocumentPagination({
  total,
  size,
  currentPage,
  limit,
  variableName = "doc_page",
  isMedia = false,
  dict,
}: Props) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const pathname = usePathname();
  const params = useParams<{ lang: string }>();
  const currentLang = params?.lang || "en-US";

  const current_url = pathname.split("?")[0];
  const base = `${current_url}?${searchQuery ? `q=${searchQuery}&` : ""}`;

  const pagesPage = Math.ceil(total / limit);
  let start = 1;
  let middle = Math.min(pagesPage, 5);

  if (currentPage > 3) {
    start = currentPage - 2;
    if (currentPage + 2 > pagesPage) {
      middle = 5 - (currentPage + 2 - pagesPage);
    }
  }

  const doc_page: ReactNode[] = [];

  // Previous Page
  doc_page.push(
    <li key="_previous" className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}>
      <Button variant="outline" size="icon" asChild>
        <Link href={`${base}${variableName}=${currentPage - 1}`} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>
    </li>
  );

  if (currentPage > 4) {
    doc_page.push(
      <li key="_first-dot" className="hidden sm:block opacity-50 pointer-events-none">
        <Button variant="outline" size="icon" disabled>
          •••
        </Button>
      </li>
    );
  }

  // Center Pages
  for (let i = 0; i < middle; i++) {
    const pageNumber = i + start;
    const isActive = pageNumber === currentPage;
    doc_page.push(
      <li key={pageNumber} className={`${isActive ? "pointer-events-none" : "hidden sm:block"}`}>
        <Button
          variant={isActive ? "secondary" : "outline"}
          size="icon"
          asChild
          className={isActive ? "bg-[#2980B9] text-white" : ""}
        >
          <Link href={`${base}${variableName}=${pageNumber}${isMedia ? "&type=media" : ""}`}>
            {currentLang === "kh" ? convertToKhmerNumberWithZeroPrefix(pageNumber.toString()) : pageNumber}
          </Link>
        </Button>
      </li>
    );
  }

  // Next Page
  doc_page.push(
    <li key="next" className={currentPage * limit >= total ? "opacity-50 pointer-events-none" : ""}>
      <Button variant="outline" size="icon" asChild>
        <Link href={`${base}${variableName}=${currentPage + 1}`} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </li>
  );

  return (
    <div className="space-y-4 mb-10">
      <div className="text-center text-sm text-muted-foreground">
        {dict?.pagination.showing}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix(
            ((currentPage - 1) * limit + 1).toString()
          )
          : (currentPage - 1) * limit + 1}{" "}
        {dict?.pagination.to}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix(
            ((currentPage - 1) * limit + size).toString()
          )
          : (currentPage - 1) * limit + size}{" "}
        {dict?.pagination.of}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix((total || 0).toString())
          : (total || 0).toString()}{" "}
        {dict?.pagination.entries}
      </div>
      <nav className="flex justify-center" aria-label="Pagination">
        <ul className="flex space-x-1">{doc_page}</ul>
      </nav>
    </div>
  );
}
