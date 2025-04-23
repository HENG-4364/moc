import Image from "next/image";

export const CommodityPriceNoData = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
          <div className="w-50 h-50 mb-2">
            <Image
              src="/no-data.svg"
              alt="No results found"
              width={128}
              height={128}
              className="w-full h-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            គ្មានទិន្នន័យ
          </h2>
        </div>
      </div>
    </div>
  );
};
