import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Star } from "lucide-react";

const GridCompanyCardPlaceholder = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className=" bg-gray-50">
        <div className="flex items-center justify-center p-3">
          <Skeleton className="w-44 h-44 " />
        </div>
      </div>
      <div className="p-4"><div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 text-gray-300`}
          />
        ))}
      </div>
        <div className="space-y-2">
          <div className="flex gap-2 mb-3">
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex gap-2 mb-3">
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Skeleton className="w-4 h-4 mr-2" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Skeleton className="w-4 h-4 mr-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCompanyCardPlaceholder;
