import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function DocumentCardPlaceholder() {
  return (
    <Card className="shadow-lg border-none relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#2980B9]/10 group cursor-pointer">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2980B9] to-[#21638f]" />
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <Skeleton className="h-12 w-12 bg-[#4e8bb320] rounded-md" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 ">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}

export function DocumentListingPlaceholder() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <DocumentCardPlaceholder key={index} />
          ))}
      </div>
    </div>
  )
}

