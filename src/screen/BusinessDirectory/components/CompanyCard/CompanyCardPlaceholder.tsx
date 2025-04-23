import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CompanyCardPlaceholder = () => {
  return (
    <Card className="cursor-pointer mb-4 bg-white shadow-lg rounded-lg p-5 border-none  overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div className="space-y-2 w-2/3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>

        <div className="flex gap-2 mt-4 mb-2">
          <Skeleton className="h-4 w-1/6" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        <div className="flex gap-2 mb-3">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCardPlaceholder;
