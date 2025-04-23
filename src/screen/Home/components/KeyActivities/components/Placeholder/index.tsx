import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function KeyActivitiesPlaceholder() {
  return (
    <Card className="relative ">
      <Skeleton className="absolute inset-0 bg-gradient-to-b from-[#2980B9]/60 to-[#00000080]/70" />
      <CardContent className="relative h-[200px] p-6 flex flex-col justify-end">
        <div className="space-y-3">
          <Skeleton className="h-4 w-3/4 bg-white/30" />
          <Skeleton className="h-4 w-full bg-white/30" />
          <Skeleton className="h-4 w-5/6 bg-white/30" />
        </div>
        <div className="absolute right-4 bottom-4">
          <ChevronRight className="h-6 w-6 text-white/50" />
        </div>
      </CardContent>
    </Card>
  )
}

export function KeyActivitiesCardPlaceholder() {
  return (
    <div className="w-full overflow-hidden p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="">
          <KeyActivitiesPlaceholder />
        </div>
        <div className="hidden md:block">
          <KeyActivitiesPlaceholder />
        </div>
        <div className="hidden xl:block">
          <KeyActivitiesPlaceholder />
        </div>
      </div>
    </div>
  )
}

