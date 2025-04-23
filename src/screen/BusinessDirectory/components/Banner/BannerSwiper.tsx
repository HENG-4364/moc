"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import "swiper/css";
import SwiperCard from "./components/swiper";
import { useUserStore } from "@/stores/me";

export function JoinSection() {
  const router = useRouter();
  const me = useUserStore((state) => state.me);

  return (
    <>
      <div className="bg-primary text-white py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-5 ">
            <div className="col-span-1 xl:col-span-2 mb-8 xl:mb-0 flex items-center">
              <div>
                <p className="text-blue-200 mb-2">ចូលរួមជាដៃគូរអាជីវកម្ម!</p>
                <h2 className="text-3xl font-bold mb-4">
                  ទទួលបានអត្ថប្រយោជន៍បន្ថែម និងផ្សព្វផ្សាយអាជីវកម្មរបស់អ្នក។
                </h2>
                <div className="space-x-4">
                  {me ? <>
                    <Button
                      className="bg-white text-black hover:bg-white"
                      onClick={() => router.push("/business-directory/profile")}
                    >
                      ចូលគណនី
                    </Button></> : <>
                    <Button
                      className="bg-white text-black hover:bg-white"
                      onClick={() => router.push("/business-directory/signin")}
                    >
                      ចូលគណនី
                    </Button></>}
                  <Button
                    className="border"
                    onClick={() => router.push("/business-directory/register")}
                  >
                    ចុះឈ្មោះឥឡូវនេះ
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-1 xl:col-span-3">
              <SwiperCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
