import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TypeOfBusinessCardPlaceholder() {
  return (
    <Card className="shadow-lg bg-white rounded-md border-none p-10 overflow-hidden relative text-center transition-all duration-300 ease-in-out hover:bg-white">
      <CardContent className="p-0">
        <div className="relative rounded-lg overflow-hidden">
          <Skeleton className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
        </div>
        <div className="mt-2 mb-2 flex justify-center">
          <Skeleton className="h-4 w-1/2 bg-gray-200" />
        </div>
      </CardContent>
    </Card>
  );
}
