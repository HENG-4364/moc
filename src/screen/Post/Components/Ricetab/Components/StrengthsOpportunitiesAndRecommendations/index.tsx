import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import style from "./strengths.module.scss";
interface Dict {
  rice: {
    strength_opportunity_and_recommendation: {
      title: string;
      sup_desc_one: string;
      strength: string;
      opportunity: string;
      recommendation: string;
      source: string;
      source_desc: string;
    };
  };
}

interface StrengthsOpportunitiesAndRecommendationsProps {
  dict: Dict;
}

export const StrengthsOpportunitiesAndRecommendations = ({
  dict,
}: StrengthsOpportunitiesAndRecommendationsProps) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.rice?.strength_opportunity_and_recommendation?.title}
        <sup>
          {dict?.rice?.strength_opportunity_and_recommendation?.sup_desc_one}
        </sup>
      </h2>

      <Table className="border-collapse [&_*]:border-[#dee2e6]">
        <TableHeader>
          <TableRow className="text-lg bg-white ">
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {dict?.rice?.strength_opportunity_and_recommendation?.strength}
            </TableHead>
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {dict?.rice?.strength_opportunity_and_recommendation?.opportunity}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-[#F2F2F2]">
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  គោលនយោបាយស្តីពីការជំរុញផលិតកម្មស្រូវ
                  និងការនាំចេញអង្ករក្នុងឆ្នាំ២០១០
                  បានលើកទឹកចិត្តវិនិយោគិនឱ្យបង្កើនសមត្ថភាពកិនស្រូវ
                </li>
                <li>
                  តម្លៃស្រូវនៅទាបផ្តល់អត្ថប្រយោជន៍ឲ្យរោងម៉ាស៊ីនកិនស្រូវក្នុងស្រុកមានប្រៀបក្នុងការប្រកួតប្រជែងជាមួយបរទេស
                </li>
                <li>
                  ការបង្កបង្កើនផលស្រូវ មានការកើនឡើងយ៉ាងខ្លាំង និងទិន្នផល គឺ
                  ៣,០៩៥ តោនក្នុងមួយហិកតាក្នុងឆ្នាំ
                </li>
                <li>
                  ការបង្កើតសមត្ថភាពរោងម៉ាស៊ីនកិនស្រូវទំនើប ដែលមានសមត្ថភាពជាង ២
                  លានតោន/ឆ្នាំ
                </li>
                <li>
                  ជាប់ចំណាត់ថ្នាក់កំពូល ក្នុងការវាយតម្លៃគុណភាពអង្ករសកល
                  ក្នុងប៉ុន្មានឆ្នាំថ្មីៗនេះ
                </li>
                <li>
                  ការបង្កើនកេរ្តិ៍ឈ្មោះអន្តរជាតិ
                  និងការធ្វើស្លាកយីហោអង្ករក្រអូបរបស់កម្ពុជា ដែលបានឈ្នះពានរង្វាន់
                  "អង្ករល្អបំផុតនៅលើពិភពលោក" ក្នុងឆ្នាំ២០១២, ២០១៣, ២០១៤, និង
                  ២០១៨ (និងជាប់លេខ២ នៅឆ្នាំ២០១៥, ២០១៦ និង ២០១៧)
                </li>
                <li>
                  ការគាំទ្ររបស់រាជរដ្ឋាភិបាលក្នុងការវិនិយោគលើកន្លែងស្តុកទុក
                  ការលើកលែងពន្ធ និងផ្តល់ឥណទានពិសេសដល់អ្នកកែច្នៃនៅពេលប្រមូលផល
                </li>
                <li>
                  បង្កើនការចំណាយសាធារណៈលើវិស័យកសិកម្ម ប្រព័ន្ធធារាសាស្រ្ត
                  និងការអភិវឌ្ឍជនបទ
                </li>
                <li>
                  កែសម្រួលឱ្យកាន់តែប្រសើរឡើង នូវហេដ្ឋារចនាសម្ព័ន្ធផ្លូវដែក
                  កំពង់ផែ និងការនាំចេញ
                </li>
              </ul>
            </TableCell>
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  ការចូលទៅក្នុងទីផ្សារសកលលោកកាន់តែខ្លាំង
                  នឹងធ្វើឲ្យចំណូលបានពីឧស្សាហកម្មនេះកាន់តែប្រសើរ
                  និងផ្តល់សក្តានុពលចំណូលខ្ពស់សម្រាប់កសិករ
                </li>
                <li>
                  ពាណិជ្ជកម្មអង្ករសកលលោករំពឹងថា
                  នឹងរក្សាទំហំធំរបស់ខ្លួនថេរក្នុងរយៈពេលមធ្យម (ក្នុងបរិមាណជាង ៤០
                  លានតោនក្នុងមួយឆ្នាំ)
                </li>
                <li>
                  មានទីផ្សារនាំចូលអង្ករធំជាមួយទិដ្ឋភាពកំណើនខ្លាំង នៅក្បែរកម្ពុជា
                  រួមមាន ឥណ្ឌូនេស៊ី ហ្វ៊ីលីពីន និងចិន
                </li>
                <li>
                  បន្តការពង្រីក
                  និងធ្វើទំនើបកម្មវិស័យកិនស្រូវនៅកម្ពុជានឹងបង្កើនការនាំចេញក្នុងតម្លៃទាបជាងគេ
                </li>
                <li>អគ្គិសនីចុះថោកជារៀងរាល់ឆ្នាំ</li>
                <li>បង្កើនតម្លៃបន្ថែមតាមរយៈការចុះបញ្ជីផលិតផល GI</li>
                <li>
                  ទីផ្សារអឺរ៉ុប និងអាម៉េរិក
                  មានតម្រូវការខ្ពស់អង្ករសរីរាង្គដែលទទួលបានលិខិតបញ្ជាក់
                  និងសម្រាប់ម៉ាកថ្មី
                </li>
                <li>
                  កិច្ចព្រមព្រៀងពាណិជ្ជកម្មសេរីរវាងកម្ពុជា និងចិន
                  នឹងជួយជំរុញការនាំចេញអង្ករទៅកាន់ប្រទេសចិន
                </li>
                <li>
                  ឱកាសថ្មីសម្រាប់ការធ្វើពិពិធកម្មទីផ្សារ (អាហ៊្វ្រ៊ិក
                  និងមជ្ឈិមបូព៌ា)
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h3 className={`text-base leading-loose pt-2 ${style.font_Moul}`}>{dict?.rice?.strength_opportunity_and_recommendation?.recommendation}</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          ជំរុញការអនុវត្តផែនការយុទ្ធសាស្រ្តអភិវឌ្ឍន៍វិស័យកសិកម្ម ២០១៩-២០២៣
        </li>
        <li>ពង្រឹងវិធានការនានា ដើម្បីសម្រួលពាណិជ្ជកម្ម និងជំរុញការនាំចេញ</li>
        <li>
          ពង្រីកផលិតកម្មក្នុងស្រុក ដើម្បីឆ្លើយតបតាមតម្រូវការទីផ្សារក្នុងស្រុក
          និងទីផ្សារក្រៅប្រទេស
        </li>
        <li>
          ជំរុញការផលិតឲ្យមានអនាម័យ គុណភាព សុវត្ថិភាព តាមលក្ខណៈស្��ង់ដារអន្តរជាតិ
          ស្របតាមតម្រូវការទីផ្សារ តម្លៃអាចប្រកួតប្រជែង
        </li>
        <li>
          កសាងហេដ្ឋារចនាសម្ព័ន្ធផ្លូវជនបទ តភ្ជាប់ពីកន្លែងផលិតទៅកាន់ទីផ្សារ
        </li>
        <li>បង្កើតបណ្តាញខ្សែច្រវាក់តម្លៃ</li>
        <li>បង្កើតម៉ាកសញ្ញា branding and trademark</li>
        <li>ជំរុញផលិតកម្ម បង្កើនផ្ទៃដីដាំដុះ និងបង្កើនផលិតភាពផលិតកម្ម</li>
        <li>សហការជាមួយសហព័ន្ធស្រូវអង្ករ</li>
        <li>ការវេចខ្ចប់តាមបទដ្ឋានអន្តរជាតិ និងតម្រូវការទីផ្សារ</li>
        <li>
          ភស្តុភារកម្ម (យល់ដឹងអំពីបច្ចេកទេសក្នុងការដឹកជញ្ជូន ការស្តុកទុក។ល។)
        </li>
        <li>ជំរុញការផ្សាយពាណិជ្ជកម្ម។</li>
      </ul>

      <hr className="my-6" />

      <div className="leading-loose">
        <p>
          <strong>
            {dict?.rice?.strength_opportunity_and_recommendation?.source}
          </strong>
        </p>
        <p>
          <sup>
            {dict?.rice?.strength_opportunity_and_recommendation?.sup_desc_one}
          </sup>
          {dict?.rice?.strength_opportunity_and_recommendation?.source_desc}
        </p>
      </div>
    </div>
  );
};
