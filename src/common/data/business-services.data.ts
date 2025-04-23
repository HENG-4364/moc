import { BookOpenCheck, GraduationCap, NotebookPen } from "lucide-react";
import { PiCertificate, PiTrademark, PiTrademarkRegisteredLight } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
export const businessServicesData = [
  {
    id: 1,
    title: "ចុះបញ្ជីពាណិជ្ជកម្ម",
    title_en: "Business Registration",
    link: "https://www.businessregistration.moc.gov.kh",
    icon: PiTrademarkRegisteredLight,
    color: "bg-blue-500/10 text-blue-500",
    image: "/bs2.webp",
  },
  {
    id: 2,
    title: "អាជ្ញាប័ណ្ណពាណិជ្ជកម្មអេឡិចត្រូនិក",
    title_en: "Business license",
    link: "https://ecommercelicensing.moc.gov.kh",
    icon: PiCertificate,
    color: "bg-green-500/10 text-green-500",
    image: "/bs3.webp",
  },
  {
    id: 3,
    title: "កម្មសិទ្ធិបញ្ញា",
    title_en: "Intellectual Property",
    link: "https://cambodiaip.gov.kh",
    icon: PiTrademarkRegisteredLight,
    color: "bg-orange-500/10 text-orange-500",
    image: "/bs1.webp",
  },
  {
    id: 4,
    title: "ប្រតិបត្តិការដែលមានកិច្ចធានា",
    title_en: "Secured Transactions Filing Office",
    link: "http://www.setfo.gov.kh",
    icon: PiTrademark,
    color: "bg-yellow-500/10 text-yellow-500",
    image: "/bs4.webp",
  },
  {
    id: 5,
    title: "សេវានាំចេញទំនិញ",
    title_en: "CO Automation",
    link: "https://co.moc.gov.kh",
    icon: LiaCertificateSolid,
    color: "bg-purple-500/10 text-purple-500",
    image: "/bs5.webp",
  },
];
