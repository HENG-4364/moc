"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import style from "./message-from-minister.module.scss";

interface MessageFromMinisterProps {
  title: string;
  subtitle: string;
  bgImage: string;
  image: string;
}

export function MessageFromMinister({
  title,
  subtitle,
  bgImage,
  image,
}: MessageFromMinisterProps) {
  const params = useParams<{ lang: string }>();
  const currentLang = params?.lang;

  return (
    <div
      className=" lg:hidden w-full py-[20px] md:py-[50px] lg:py-[60px]"
      style={{
        background: `url(${bgImage}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src={`${image ? image : "/ministry-of-commerece.jpg"}`}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="space-y-6">
              <div className={` `}>
                <div className="mb-6">
                  {currentLang === "kh" ? (
                    <>
                      <div
                        className={` mb-5 text-[23px] lg:text-[28px] xl:text-[36px] leading-[1.8] ${style.font_fam}`}
                        style={{
                          fontFamily: "Moul, serif !important",
                        }}
                      >
                        {title}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={` mb-5 text-[23px] lg:text-[28px] xl:text-[36px] leading-[1.8] uppercase ${style.font_fam_en}`}
                        style={{
                          fontWeight: "700  !important",
                        }}
                      >
                        {title}
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2">
                    <div className="h-1 w-24 bg-[#FAB4A2]" />
                    <div className="h-1 w-8 bg-[#FE724E]" />
                  </div>
                </div>
              </div>
              <div className="leading-[2] text-[18px] lg:text-[20px] font-semibold">
                {subtitle}
              </div>
              {/* Uncomment and adjust as needed for the button
              <Link
                href={`/${currentLang}/page/messages-from-minister`}
                className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {button}
              </Link>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
