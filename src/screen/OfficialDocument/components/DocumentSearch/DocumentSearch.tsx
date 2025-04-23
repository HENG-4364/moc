"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function DocumentSearch() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="search"
        className="pl-10 w-full max-w-xl border border-gray-100 shadow-sm  "
        placeholder="ស្វែងរកឯកសារ..."
      />
    </div>
  );
}
