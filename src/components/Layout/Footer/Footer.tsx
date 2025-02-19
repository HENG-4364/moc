import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Youtube,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
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
                  សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។
                  ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម
                  ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់
                  កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ
                </p>
              </div>
              {/* Social Media Links */}
              <div className=" mt-8">
                <div className="mb-4">បណ្តាញសង្គម: ក្រសួងពាណិជ្ជកម្ម</div>
                {/* <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Send className="h-5 w-5" />
                    <span className="sr-only">Telegram</span>
                  </Link>
                </div> */}
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
              <div className="font-semibold mb-6 text-lg">តំណភ្ជាប់សំខាន់ៗ</div>
              <ul className="space-y-3 list-disc ml-5 ">
                <li>
                  <Link href="#" className="">
                    អំពីក្រសួង
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    ឯកសារផ្លូវការ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    សន្ទស្សន៍ថ្លៃទំនិញប្រចាំថ្ងៃ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    សន្ទស្សន៍តម្លៃអ្នកប្រើប្រាស់
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mt-14 md:col-span-6 xl:col-span-3">
              <h3 className="font-semibold mb-6 text-lg">តំណផ្សេងៗ</h3>
              <ul className="space-y-3 list-disc ml-5">
                <li>
                  <Link href="#" className="">
                    ចុះបញ្ជីរពាណិជ្ជកម្ម អាជ្ញាប័ណ្ណពាណិជ្ជកម្ម
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    មអេឡិចត្រូនិក
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    កម្មសិទ្ធិបញ្ញា
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    ប្រតិបត្តិការដែលមានកិច្ចធានា
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    សេវានាំចេញទំនិញ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    អគ្គាធិការដ្ឋាន
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-14 md:col-span-6 xl:col-span-3">
              <h3 className="font-semibold mb-6 text-lg">ទំនាក់ទំនង</h3>
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
                <Link
                  href="http://www.moc.gov.kh/"
                  target="_blank"
                  className="text-white hover:underline sm:flex items-center justify-center gap-1"
                >
                  <span>
                    © ២០២៤ ក្រសួងពាណិជ្ជកម្ម. រក្សាសិទ្ធគ្រប់បែបយ៉ាងដោយ
                  </span>
                  <span>ក្រសួងពាណិជ្ជកម្ម</span>
                </Link>
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
