import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useParams } from "next/navigation";
import { getDictionaryClient } from "@/lib/dictionaries-client";
import { businessServicesData } from "@/common/data";
import { convertToKhmerNumberWithZeroPrefix } from "@/function/DayNumberToKhmerNumber";
const Footer = () => {
  const params = useParams<{ lang: string }>();
  const { lang } = params;

  const dict = getDictionaryClient(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Decorative Banner */}
      <div className="w-full">
        <Image
          src="/footer-title-image.png"
          alt="Decorative cultural banner"
          width={1920}
          height={1000}
          className="hidden sm:flex w-full"
        />
      </div>
      <div className="bg-[#F6F7F8] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-6 xl:col-span-4">
              <Image
                src="/moc-logo.png"
                alt="Ministry of Commerce Logo"
                width={800}
                height={800}
                className="w-[240px]"
              />
              <div className="mt-6">
                <p className="text-base text-muted-foreground  leading-8">
                  {dict?.footer?.welcome_message}
                </p>
              </div>
              {/* Social Media Links */}
              <div className=" mt-8">
                <div className="mb-4">{dict?.footer?.social_title}</div>
                <div className="flex mt-3">
                  <Link
                    href="https://www.facebook.com/moc.gov.kh"
                    target="_blank"
                  >
                    <div
                      className={`flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#3F71BA]`}
                    >
                      <FaFacebookF color="white" size={25} />
                    </div>
                  </Link>
                  <Link href="https://twitter.com/MoCCambodia" target="_blank">
                    <div
                      className={`mx-3 flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#1A1A1A]`}
                    >
                      <FaXTwitter color="white" size={25} />
                    </div>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@mocgovkhcambodia/featured"
                    target="_blank"
                  >
                    <div
                      className={`me-3 flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#FE0000]`}
                    >
                      <FaYoutube color="white" size={25} />
                    </div>
                  </Link>
                  <Link href="https://t.me/mocnewsfeed" target="_blank">
                    <div
                      className={`flex items-center justify-center w-[35px] h-[35px] rounded-full hover:cursor-pointer hover:brightness-75 bg-[#5499FF]`}
                    >
                      <FaTelegramPlane color="white" size={25} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-14 md:col-span-6 xl:col-span-2">
              <div className="font-semibold mb-6 text-lg">
                {dict?.footer?.key_link_title}
              </div>
              <ul className="space-y-3 list-disc ml-5 ">
                <li>
                  <Link href="/page/organization-structure" className="">
                    {dict?.footer?.key_link?.about_ministry}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/document-category/official-document"
                    className=""
                  >
                    {dict?.footer?.key_link?.official_documents}
                  </Link>
                </li>
                <li>
                  <Link href="/commodity-values" className="">
                    {dict?.footer?.key_link?.daily_commodity_price}
                  </Link>
                </li>
                <li>
                  <Link href="/cpi" className="">
                    {dict?.footer?.key_link?.consumer_price_index}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-14 md:col-span-6 xl:col-span-3">
              <h3 className="font-semibold mb-6 text-lg">
                {dict?.footer?.other_link_title}
              </h3>
              <ul className="space-y-3 list-disc ml-5">
                {businessServicesData?.map((item) => {
                  return (
                    <li key={item?.id}>
                      <Link href={item?.link} target="_blank" className="">
                        {lang === "kh" ? item?.title : item?.title_en}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-14 md:col-span-6 xl:col-span-3">
              <h3 className="font-semibold mb-6 text-lg">
                {dict?.footer?.contact_title}
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-12">
                  <Phone
                    className="w-5 h-5 mt-1 text-primary col-span-1 md:col-span-2 "
                    color="#2980B9"
                  />
                  <div className="col-span-11 md:col-span-10">
                    <p className="font-medium">1266</p>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <Mail
                    className="w-5 h-5 mt-1 text-primary col-span-1 md:col-span-2"
                    color="#2980B9"
                  />
                  <div className="col-span-11 md:col-span-10">
                    <p className="font-medium break-all">
                      cabinet.info@moc.gov.kh
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <MapPin
                    className="w-5 h-5 mt-1 text-primary col-span-1 md:col-span-2"
                    color="#2980B9"
                  />
                  <div className="space-y-1 col-span-11 md:col-span-10">
                    <p className="font-medium">HV57+GMX</p>
                    <p>No. 19-61, Russian Federation Blvd (110)</p>
                    <p>Phnom Penh 12102</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="bg-[#3D8ABE] py-10 relative">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-white">
                  <span>
                    ©{" "}
                    {lang === "en-US"
                      ? currentYear?.toString()
                      : convertToKhmerNumberWithZeroPrefix(
                          currentYear?.toString()
                        )}{" "}
                    {dict.footer.copyright}
                  </span>
                  <span> {dict.footer.copyright_moc}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none hidden xl:block">
            <div className="absolute right-0 top-0 w-[400px] h-full">
              <Image
                src="/footer.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
