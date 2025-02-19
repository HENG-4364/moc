import { Card, CardContent } from "@/components/ui/card";
import {
  ScrollText,
  Search,
  Image,
  Ship,
  Scale,
  ClipboardCheck,
} from "lucide-react";

export default function OfficialDocumentCard() {
  const documents = [
    {
      id: 1,
      icon: Search,
      title: "សេចក្តីជូនដំណឹង",
      description: "ស្វែងរកឯកសារផ្លូវការ និងសេចក្តីជូនដំណឹងផ្សេងៗ",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      id: 2,
      icon: Image,
      title: "ប្រកាស",
      description: "ប្រកាសព័ត៌មាន និងការផ្សព្វផ្សាយផ្សេងៗ",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      id: 3,
      icon: Ship,
      title: "ឯកសារក្នុងផ្នែកដឹកជញ្ជូន",
      description: "ឯកសារពាក់ព័ន្ធនឹងការដឹកជញ្ជូន និងឡូជីស្ទីក",
      color: "bg-green-500/10 text-green-500",
    },
    {
      id: 4,
      icon: ScrollText,
      title: "អនុក្រឹត្យ",
      description: "អនុក្រឹត្យ និងឯកសារផ្លូវការផ្សេងៗ",
      color: "bg-red-500/10 text-red-500",
    },
    {
      id: 5,
      icon: Scale,
      title: "កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម",
      description: "កិច្ចព្រមព្រៀង និងឯកសារពាណិជ្ជកម្មផ្សេងៗ",
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      id: 6,
      icon: ClipboardCheck,
      title: "គោលការណ៍ណែនាំ",
      description: "គោលការណ៍ណែនាំ និងបទបញ្ជាផ្សេងៗ",
      color: "bg-teal-500/10 text-teal-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((doc) => {
        const Icon = doc.icon;
        return (
          <Card
            key={doc.id}
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-16 h-16 rounded-xl ${doc.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-md text-muted-foreground">
                  {23} ឯកសារ
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-muted-foreground text-md">{doc.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
