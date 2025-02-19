"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { UnderlineTitle } from "../Border/Border";

// Fake data for demonstration
const fakeNews = [
  {
    id: 1,
    title:
      "កិច្ចសម្ភាសន៍ពិសេស លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម ជាមួយទូរទស្សន៍ជាតិកម្ពុជា ស្ដីពី “កិច្ចសហប្រតិបត្តិការ តំបន់ត្រីកោណអភិវឌ្ឍន៍កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA)",
    title_en:
      "កិច្ចសម្ភាសន៍ពិសេស លោកជំទាវ ចម និម្មល រដ្ឋមន្រ្តីក្រសួងពាណិជ្ជកម្ម ជាមួយទូរទស្សន៍ជាតិកម្ពុជា ស្ដីពី “កិច្ចសហប្រតិបត្តិការ តំបន់ត្រីកោណអភិវឌ្ឍន៍កម្ពុជា-ឡាវ-វៀតណាម (CLV-DTA)",
    thumbnail: "/news1.webp",
    created_at: "០៩-សីហា-២០២៤",
    category: "Technology",
  },
  {
    id: 2,
    title:
      "លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អញ្ជើញជាអធិបតីក្នុងពិធីបើកសម្ពោធ “ពិព័រណ៍ពាណិជ្ជកម្មអន្តរជាតិកម្ពុជា",
    title_en:
      "លោកជំទាវ ចម និម្មល រដ្ឋមន្ត្រីក្រសួងពាណិជ្ជកម្ម អញ្ជើញជាអធិបតីក្នុងពិធីបើកសម្ពោធ “ពិព័រណ៍ពាណិជ្ជកម្មអន្តរជាតិកម្ពុជា",
    thumbnail: "/news2.webp",
    created_at: "០៩-សីហា-២០២៤",
    category: "Technology",
  },
  {
    id: 3,
    title:
      "មន្រ្តីជំនាញនៃសាខា ក.ប.ប. ខេត្តរតនគិរី រៀបចំវគ្គផ្សព្វផ្សាយ «ស្តីពីសុវត្ថិភាពម្ហូបអាហារ និងបទប្បញ្ញត្តិពាក់ព័ន្ធនានា» ជូនដល់សិស្សានុសិស្ស លោកគ្រូ អ្នកគ្រូ និងអាជីវករលក់ម្ហូបអាហារក្នុងសាលារៀនសរុបប្រមាណ ៣០០នាក់",
    title_en:
      "មន្រ្តីជំនាញនៃសាខា ក.ប.ប. ខេត្តរតនគិរី រៀបចំវគ្គផ្សព្វផ្សាយ «ស្តីពីសុវត្ថិភាពម្ហូបអាហារ និងបទប្បញ្ញត្តិពាក់ព័ន្ធនានា» ជូនដល់សិស្សានុសិស្ស លោកគ្រូ អ្នកគ្រូ និងអាជីវករលក់ម្ហូបអាហារក្នុងសាលារៀនសរុបប្រមាណ ៣០០នាក់",
    thumbnail: "/news3.webp",
    created_at: "០៩-សីហា-២០២៤",
    category: "Technology",
  },
  {
    id: 4,
    title:
      "មន្ត្រីជំនាញ សាខា ក.ប.ប. ខេត្តចំនួន៣ បន្តចុះត្រួតពិនិត្យទំនិញ និងគ្រឿងឧបភោគបរិភោគនៅតាមទីផ្សារ",
    title_en:
      "មន្ត្រីជំនាញ សាខា ក.ប.ប. ខេត្តចំនួន៣ បន្តចុះត្រួតពិនិត្យទំនិញ និងគ្រឿងឧបភោគបរិភោគនៅតាមទីផ្សារ",
    thumbnail: "/news1.webp",
    created_at: "០៩-សីហា-២០២៤",
    category: "Technology",
  },
];

const fakeCategories = [
  { id: 1, name: "Technology", name_en: "Technology" },
  { id: 2, name: "Politics", name_en: "Politics" },
  { id: 3, name: "Science", name_en: "Science" },
  { id: 4, name: "Entertainment", name_en: "Entertainment" },
  { id: 5, name: "Notification", name_en: "Notification" },
  { id: 6, name: "Meeting", name_en: "Meeting" },
  { id: 7, name: "Workshop", name_en: "Workshop" },
];

export default function NewsDetailSidebar() {
  const params = useParams<{ lang: string }>();
  const currentLang = params?.lang || "en-US";

  const convertLatinMonth = (month: string) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[parseInt(month) - 1];
  };

  const convertToLatinNumber = (num: string) => num;

  return (
    <aside className="sticky top-[70px] mb-6 w-full ">
      <div className="mb-8">
        <div className="pb-8">
          <UnderlineTitle>ព័ត៌មានថ្មីៗ</UnderlineTitle>
        </div>
        {fakeNews.map((news) => (
          <article key={news.id} className="mb-4 flex items-start">
            <Link
              href={`/news/${news.id}`}
              className="mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-xs"
            >
              <img
                src={news.thumbnail}
                alt={currentLang === "kh" ? news.title : news.title_en}
                className="h-full w-full object-cover"
              />
            </Link>
            <div>
              <h4 className="mb-1 text-sm font-medium">
                <Link
                  href={`/news/${news.id}`}
                  className="line-clamp-2 leading-[1.5] text-[16px]"
                >
                  {currentLang === "kh" ? news.title : news.title_en}
                </Link>
              </h4>
              <time className="text-xs text-gray-500">
                {currentLang === "kh" ? (
                  news.created_at.replaceAll("/", "-")
                ) : (
                  <>
                    {convertToLatinNumber(news.created_at.split("/")[0])}-
                    {convertLatinMonth(news.created_at.split("/")[1])}-
                    {convertToLatinNumber(news.created_at.split("/")[2])}
                  </>
                )}
              </time>
            </div>
          </article>
        ))}
      </div>

      <div>
        <div className="pb-8">
          <UnderlineTitle>ប្រភេទព័ត៌មាន</UnderlineTitle>
        </div>
        <ul>
          {fakeCategories.map((category) => (
            <li key={category.id} className="mb-2 flex items-center">
              <div className="mr-2 h-2 w-2 flex-shrink-0 bg-[#2980B9]" />
              <span className="text-gray-700 hover:text-[#2980B9]">
                <Link href={`/category/${category.id}`} className="">
                  {currentLang === "kh" ? category.name : category.name_en}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
