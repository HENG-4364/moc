"use client";

import Image from "next/image";
const EmptySearch = () => (
  <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center py-16">
    <div className="w-80 h-80 mb-2">
      <Image
        src="/No-data-amico.svg"
        alt="No results found"
        width={128}
        height={128}
        className="w-full h-full"
      />
    </div>
    <h2 className="text-xl font-semibold text-gray-900 mb-2">
      មិនមានលទ្ធផលស្វែងរក
    </h2>
    <p className="text-gray-600 text-center max-w-md">
      សូមព្យាយាមជាមួយពាក្យគន្លឹះផ្សេងទៀត...
    </p>
  </div>
);
export default EmptySearch;
