import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import style from "./strengths.module.scss";
export const StrengthsOpportunitiesAndRecommendations = () => {
  return (
    <div className="text-lg">
      <h2 className={`mb-2 ${style.title_text}`}>
        ឃ. ការវិភាគចំណុចខ្លាំង ឱកាស និងអនុសាសន៍<sup>៤</sup>
      </h2>

      <Table className="border-collapse [&_*]:border-[#dee2e6]">
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="border p-4 text-center font-normal w-1/2">
              <h3 className="text-lg font-bold">ចំណុចខ្លាំង</h3>
            </TableHead>
            <TableHead className="border p-4 text-center font-normal w-1/2">
              <h3 className="text-lg font-bold">ឱកាស</h3>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-[#F2F2F2]">
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-3">
                <li>និន្នាការនាំចេញមានការកើនឡើងជាលំដាប់</li>
                <li>មានតម្រូវការទីផ្សារខ្ពស់ទាំងក្នុង និងក្រៅប្រទេស</li>
                <li>
                  អាកាសធាតុ និងកត្តាដីកម្ពុជា មានលក្ខណៈអំណោយផលដល់ការដាំដុះ
                </li>
                <li>ផ្ទៃដីដាំដុះនៅមានចំនួនច្រើន</li>
                <li>ការដាំដុះមានការកើនឡើង និងស្ទើរគ្រប់ខេត្ត</li>
                <li>
                  ក្រសួងពាណិជ្ជកម្មកំពុងចងក្រងគោលនយោបាយជាតិស្តីពីគ្រាប់ស្វាយចន្ទី
                  ២០២២-២០២៧
                </li>
              </ul>
            </TableCell>
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-3">
                <li>ទីផ្សារចិនឈរនៅលំដាប់ទី១ ក្នុងការនាំចូលពីកម្ពុជា</li>
                <li>
                  ការនាំចេញកសិផលកម្ពុជា ភាគច្រើនទទួលបានការ អនុគ្រោះកូតា
                  និងពន្ធពីប្រទេសដៃគូ
                </li>
                <li>កិច្ចព្រមព្រៀងពាណិជ្ជកម្មសេរីទ្វេភាគីកម្ពុជា-ចិន</li>
                <li>
                  ជំរុញការដាំដុះជាបណ្តុំសហគមន៍ និងប្រែក្លាយជាតំបន់កសិ-ទេសចរណ៍
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h3 className={`text-base leading-loose pt-2 ${style.font_Moul}`}>អនុសាសន៍</h3>

      <ul className="list-disc pl-5 space-y-2">
        <li>ជំរុញការអនុវត្តគោលនយោបាយអភិវឌ្ឍន៍កសិកម្ម ២០១៩-២០២៣</li>
        <li>បង្កើនការចរចា SPS ជាមួយប្រទេសនាំចូល</li>
        <li>ពង្រឹងវិធានការនានា ដើម្បីសម្រួលពាណិជ្ជកម្ម និងជំរុញការនាំចេញ</li>
        <li>
          ពង្រីកផលិតកម្មក្នុងស្រុក ដើម្បីឆ្លើយតបតាមតម្រូវការទីផ្សារក្នុងស្រុក
          និងទីផ្សារក្រៅប្រទេស
        </li>
        <li>អនុវត្តគោលការណ៍ GAP</li>
        <li>
          ជំរុញការផលិតឲ្យមានអនាម័យ គុណភាព សុវត្ថិភាព តាមលក្ខណៈស្តង់ដារអន្តរជាតិ
          ស្របតាមតម្រូវការទីផ្សារ តម្លៃអាចប្រកួតប្រជែង
        </li>
        <li>កសាងហេដ្ឋារចនាសម្ព័ន្ធផ្លូវជនបទ</li>
        <li>លើកទឹកចិត្តដល់វិនិយោគិនឲ្យបង្កើតរោងចក្រកែច្នៃ</li>
        <li>បង្កើត និងរៀបចំសមាគមគ្រាប់ស្វាយចន្ទី</li>
        <li>បង្កើតបណ្តាញខ្សែច្រវាក់តម្លៃ</li>
        <li>បង្កើតម៉ាកសញ្ញា branding and trademark</li>
        <li>
          ភស្តុភារកម្ម (យល់ដឹងអំពីបច្ចេកទេសក្នុងការដឹកជញ្ជូន ការស្តុកទុក។ល។)
        </li>
        <li>ជំរុញការផ្សព្វផ្សាយពាណិជ្ជកម្ម។</li>
      </ul>
      <hr className="my-4" />
      <div className="leading-loose">
        <p>
          <strong>ប្រភព៖</strong>
        </p>
        <p>
          <sup>៤</sup>
          ក្រសួងពាណិជ្ជកម្ម (២០២៣)
          ផែនការយុទ្ធសាស្ត្រទាញយកប្រយោជន៍ជាអតិបរិមាពីការអនុវត្តកិច្ចព្រមព្រៀងពាណិជ្ជកម្មសេរី,
          ទំព័រ ៨៤-៨៥
        </p>
      </div>
    </div>
  );
};
