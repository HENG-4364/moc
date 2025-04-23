import { cn } from "@/lib/utils";

export const CommodityPriceLoading = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
          <div className="w-50 h-50 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="82"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "animate-spin",
                "w-full h-full mb-4 text-green-600"
              )}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            ទិន្នន័យកំពុងដំណើរការ
          </h2>
        </div>
      </div>
    </div>
  );
};
