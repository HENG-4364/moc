import Image from "next/image";

export default function EmptyData() {
  return (
    <div className=" flex flex-col items-center justify-center py-16 bg-background rounded-md shadow-sm">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Error Illustration */}
        <div className="relative w-full h-52 mb-8">
          <Image
            src="/no-data.svg"
            alt="404 Error Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Error Message */}
        <div className="text-base md:text-xl font-bold ">
          សូមអភ័យទោស! មិនទាន់មានទិន្នន័យ
        </div>
      </div>
    </div>
  );
}
 