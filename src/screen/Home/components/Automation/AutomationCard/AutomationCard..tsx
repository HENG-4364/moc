"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

type AutomationListCardProps = {
  icon?: string;
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
}: AutomationListCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <Card
      className="cursor-pointer transition-colors duration-300 hover:bg-gray-100"
      onClick={handleClick}
    >
      <CardContent className="p-6 flex flex-col items-center">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="w-full h-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`flex flex-col items-center justify-center h-[170px] w-full ${color}`}
          >
            <Image
              src={image}
              width={80}
              height={80}
              alt={title || "Automation icon"}
              className="mb-4"
            />
            <h3
              className="text-lg font-semibold text-center line-clamp-1 overflow-hidden leading-[30px]"
              title={title}
            >
              {title}
            </h3>
          </div>
        </a>
      </CardContent>
    </Card>
  );
}
