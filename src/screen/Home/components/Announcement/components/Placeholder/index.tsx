import type React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface AnnouncementPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> { }

export function AnnouncementPlaceholder({ className, ...props }: AnnouncementPlaceholderProps) {
  return (
    <div
      className={cn("flex items-center gap-3 bg-gradient-to-r from-[#2980B9] to-[#57a0d0] text-white border-none rounded-lg shadow-sm p-6", className)}
      {...props}
    >
      <Skeleton className="h-10 w-10 flex-shrink-0 bg-white/30 rounded-full" />
      <div className="flex flex-1 justify-between gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-5/6 bg-white/30 rounded" />
          <Skeleton className="h-4 w-3/4 bg-white/30 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-24 bg-white/30 rounded-full" />
          </div>
        </div>
        <div className="flex items-end">
          <Skeleton className="h-6 w-20 bg-white/30 rounded" />
        </div>
      </div>
    </div>
  )
}

