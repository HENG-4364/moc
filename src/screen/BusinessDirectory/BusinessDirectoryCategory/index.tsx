"use client";
import Image from "next/image";
import { Title } from "@/components/Title/Title";
import { useParams, useRouter } from "next/navigation";
import { JoinSection } from "../components/Banner/BannerSwiper";

export type BusinessDirectoryCategoryScreenProps = {
  publicBusinessDirectoryCategoryList: any;
};

export default function BusinessDirectoryCategoryScreen({
  publicBusinessDirectoryCategoryList,
}: BusinessDirectoryCategoryScreenProps) {
  const router = useRouter();
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;

  return (
    <section className="bg-[#F6F7F8]">
      <div className="container mx-auto px-4 py-8">
        <Title title="ប្រភេទអាជីវកម្ម" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {publicBusinessDirectoryCategoryList?.data?.map(
            (item: any, idx: number) => {
              const { name_en, name_kh, id, thumbnail } = item;
              return (
                <div
                  onClick={() =>
                    router.push(`/business-directory/category/${id}`)
                  }
                  key={idx + 1}
                  className="shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 rounded-md cursor-pointer"
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4">
                      <Image
                        src={thumbnail || "/placeholder.svg"}
                        alt={lang === "kh" ? name_kh : name_en}
                        width={1000}
                        height={1000}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-base">
                      {lang === "kh" ? name_kh : name_en}
                    </h3>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <JoinSection />
    </section>
  );
}
