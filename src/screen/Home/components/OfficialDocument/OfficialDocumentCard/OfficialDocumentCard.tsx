import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ClipboardCheck, Scale, ScrollText, Search, Ship, Image } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const officialDocumentsKh = [
  {
    title: "សេចក្តីជូនដំណឹង",
    icon: Search,
    url: "/document-category/official-document?page=1&select=notice",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "ប្រកាស",
    icon: Image,
    url: "/document-category/official-document?page=1&select=prakas",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "ច្បាប់ពាក់ព័ន្ធវិស័យពាណិជ្ជកម្ម",
    icon: Ship,
    url: "/document-category/official-document?page=1&select=business-law",
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "អនុក្រឹត្យ",
    icon: ScrollText,
    url: "/document-category/official-document?page=1&select=sub-degree",
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
    icon: Scale,
    url: "/document-category/official-document?page=1&select=agreement",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "គោលនយោបាយ",
    icon: ClipboardCheck,
    url: "/document-category/official-document?page=1&select=គោលនយោបាយ",
    color: "bg-teal-500/10 text-teal-500",
  },
];
const officialDocumentsEn = [
  {
    title: "Notice",
    icon: Search,
    url: "/document-category/official-document?page=1&select=notice",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Posts",
    icon: Image,
    url: "/document-category/official-document?page=1&select=prakas",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Business Law",
    icon: Ship,
    url: "/document-category/official-document?page=1&select=business-law",
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Sub Decree",
    icon: ScrollText,
    url: "/document-category/official-document?page=1&select=sub-degree",
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Trade Agreement",
    icon: Scale,
    url: "/document-category/official-document?page=1&select=agreement",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Policy",
    icon: ClipboardCheck,
    url: "/document-category/official-document?page=1&select=គោលនយោបាយ",
    color: "bg-teal-500/10 text-teal-500",
  },
];

export type OfficialDocumentCardProps = {
  dict: any;
};

export default function OfficialDocumentCard({
  dict,
}: OfficialDocumentCardProps) {
  const params = useParams<{ lang: string }>();
  const { lang } = params;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lang === "kh" ? (
        <>
          {officialDocumentsKh?.map((item: any, idx: number) => {
            const Icon = item.icon;
            return (
              <Link key={idx + 1} href={item?.url}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-md text-muted-foreground">
                        មើលបន្ថែម
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    {/* <p className="text-muted-foreground text-md">{item.description}</p> */}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </>
      ) : (
        <>
          {officialDocumentsEn?.map((item: any, idx: number) => {
            const Icon = item.icon;
            return (
              <Link key={idx + 1} href={item?.url}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-md text-muted-foreground">
                        See more
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    {/* <p className="text-muted-foreground text-md">{item.description}</p> */}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}
