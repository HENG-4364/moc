"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useEffect, useState, useRef } from "react";

interface SubMenuItem {
  title: string;
  href: string;
}

interface SubMenuHoverProp {
  data?: SubMenuItem[];
  menuName: string;
  target?: string;
}

const SubMenuHover: React.FC<SubMenuHoverProp> = ({
  data = [],
  menuName,
  target,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 30);
  };

  return (
    <div>
      <NavigationMenuTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`text-base md:text-[16px] font-semibold ${
          isScrolled ? "text-white" : ""
        }`}
      >
        {menuName}
      </NavigationMenuTrigger>
      {Array.isArray(data) && data.length > 0 && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`absolute mt-1 shadow-lg rounded-md bg-white flex items-center justify-between transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className={`flex justify-center`}>
            <div className="grid w-[250px] p-2 text-base md:text-[16px] font-semibold gap-2">
              {data.map((item: SubMenuItem) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target={target}
                  className="block select-none space-y-1 rounded-md p-2  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div>{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubMenuHover;
