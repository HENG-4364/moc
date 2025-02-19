"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
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
  dict?: any;
};

export function OfficialDocumentPagination({
  total,
  size,
  currentPage,
  limit,
  variableName = "page",
  isMedia = false,
  dict = {
    showing: "Showing",
    to: "to",
    of: "of",
    entries: "entries",
  },
}: Props) {
  let start: number;
  let pages: ReactNode[] = [];

  const search = new URLSearchParams(
    typeof window !== "undefined" ? window?.location?.search : ""
  );
  search.delete(variableName);
  const pathname = usePathname();

  const current_url: string = pathname?.split("?")[0] ?? "";
  const base: string = `${current_url}?${
    search.toString() !== "" ? `${search.toString()}&` : ""
  }`;

  const pagesPage = Math.ceil(total / limit);

  let middle = Math.min(pagesPage, 5);

  start = 1;
  const params = useParams<{ lang: string }>();

  const currentLang = params?.lang || "en-US";
  if (currentPage > 3) {
    start = currentPage - 2;

    if (currentPage + 2 > pagesPage) {
      middle = 5 - (currentPage + 2 - pagesPage);
    }
  }

  // Construct Previous Page
  pages.push(
    <li
      key="_previous"
      className={`${currentPage === 1 ? "opacity-50 pointer-events-none " : ""}`}
    >
      <Button variant="outline" size="icon" asChild>
        <Link href={`${base}${variableName}=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      </Button>
    </li>
  );

  if (currentPage > 4) {
    pages.push(
      <li
        key="_first-dot"
        className="hidden sm:block opacity-50 pointer-events-none"
      >
        <Button variant="outline" size="icon" disabled>
          •••
        </Button>
      </li>
    );
  }

  // Construct Center Page
  for (let i = 0; i < middle; i++) {
    pages.push(
      <li
        key={i + start}
        className={`${currentPage === i + start ? "" : "hidden sm:block"} ${
          i + start === currentPage ? "pointer-events-none " : ""
        }`}
      >
        <Button
          variant={i + start === currentPage ? "secondary" : "outline"}
          size="icon"
          asChild
          className={i + start === currentPage ? "bg-[#2980B9] text-white" : ""}
        >
          <Link
            href={`${base}${variableName}=${i + start}${
              isMedia ? "&type=media" : ""
            }`}
          >
            {currentLang === "kh"
              ? convertToKhmerNumberWithZeroPrefix((i + start).toString())
              : i + start}
          </Link>
        </Button>
      </li>
    );
  }

  // Construct Next Page
  pages.push(
    <li
      key="next"
      className={`${
        currentPage * limit >= total ? "opacity-50 pointer-events-none " : ""
      }`}
    >
      <Button variant="outline" size="icon" asChild>
        <Link href={`${base}${variableName}=${currentPage + 1}`}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      </Button>
    </li>
  );

  return (
    <div className="space-y-4 mb-10">
      <div className="text-center text-sm text-muted-foreground">
        {dict.showing}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix(
              ((currentPage - 1) * limit + 1).toString()
            )
          : (currentPage - 1) * limit + 1}{" "}
        {dict.to}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix(
              ((currentPage - 1) * limit + size).toString()
            )
          : (currentPage - 1) * limit + size}{" "}
        {dict.of}{" "}
        {currentLang === "kh"
          ? convertToKhmerNumberWithZeroPrefix((total || 0).toString())
          : (total || 0).toString()}{" "}
        {dict.entries}
      </div>

      <nav className="flex justify-center" aria-label="Pagination">
        <ul className="flex space-x-1">{pages}</ul>
      </nav>
    </div>
  );
}
