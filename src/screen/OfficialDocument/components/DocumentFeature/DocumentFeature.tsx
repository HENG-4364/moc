import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText } from "lucide-react";

export function FeaturedDocuments() {
  const featuredDocs = [
    {
      id: 1,
      title: "សេចក្តីជូនដំណឹងស្តីពីការដាក់ឱ្យអនុវត្តន៍",
      type: "សេចក្តីជូនដំណឹង",
      date: "២០​ ធ្នូ ២០២៣",
      status: "ថ្មី",
      urgent: true,
    },
    {
      id: 2,
      title: "អនុក្រឹត្យស្តីពីការគ្រប់គ្រងការដឹកជញ្ជូន",
      type: "អនុក្រឹត្យ",
      date: "១៥ ធ្នូ ២០២៣",
      status: "សំខាន់",
    },
    {
      id: 3,
      title: "សេចក្តីណែនាំស្តីពីនីតិវិធីនាំចេញ-នាំចូល",
      type: "គោលការណ៍ណែនាំ",
      date: "១០ ធ្នូ ២០២៣",
      status: "ធម្មតា",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredDocs.map((doc) => (
        <Card
          key={doc.id}
          className="hover:shadow-lg transition-all duration-300"
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <Badge variant={doc.urgent ? "destructive" : "secondary"}>
                {doc.status}
              </Badge>
              <FileText className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg mb-2 line-clamp-2">
              {doc.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {doc.date}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
