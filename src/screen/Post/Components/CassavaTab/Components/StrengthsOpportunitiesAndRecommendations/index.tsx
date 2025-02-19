import style from "./strengths.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const StrengthsOpportunitiesAndRecommendations = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={` lh-lg pb-2 ${style.bold_text}`}>
        {dict?.cassava?.strength_opportunity_and_recommendation?.title}{" "}
        <sup>
          {" "}
          {dict?.cassava?.strength_opportunity_and_recommendation?.sup_desc_one}
        </sup>
      </h2>

      <Table className="border-collapse [&_*]:border-[#dee2e6]">
        <TableHeader>
          <TableRow className="text-lg bg-white ">
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {dict?.cassava?.strength_opportunity_and_recommendation?.strength}
            </TableHead>
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {
                dict?.cassava?.strength_opportunity_and_recommendation
                  ?.opportunity
              }
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-[#F2F2F2]">
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  ដំឡូងមី ជារុក្ខជាតិអាចសម្របខ្លួនតាមបរិយាកាស និងប្រភេទដីផ្សេងៗ
                </li>
                <li>
                  ជាប្រភពកាបូអ៊ីដ្រាតដែលមានតម្លៃថោក
                  ហើយអាចបរិភោគជំនួសបាយក្នុងពេលខ្វះខាត
                </li>
                <li>ការដាំដំឡូងមីនៅកម្ពុជាទទួលបានទិន្នផលខ្ពស់បំផុត</li>
                <li>លើសកលលោក ទិន្នផលជាមធ្យម 20-40 តោន/ហត</li>
                <li>
                  ដំឡូងមីផ្តល់ដល់កសិករនូវពេលវេលាប្រមូលផល
                  ដែលអាចបត់បែនតាមលក្ខខណ្ឌទីផ្សារសមរម្យ
                </li>
                <li>
                  ថ្លៃកម្លាំងពលកម្មទាបធ្វើឲ្យការដាំដុះ
                  និងការប្រមូលផលដំឡូងមីអាចគ្រប់គ្រងបានយ៉ាងប្រសើរ
                </li>
                <li>
                  ដំឡូងមីអាចប្រើប្រាស់បានច្រើនយ៉ាងនៅលើសកលលោកអាចជាចំណីអាហារ
                  ជាចំណីសត្វ ជាជីវឥន្ធនៈ
                </li>
                <li>ការយកដំឡូងមីជំនួសពោតក្នុងឧស្សាហកម្មជីវឥន្ធនៈ</li>
                <li>
                  ការទាក់ទាញការវិនិយោគដោយផ្ទាល់ពីបរទេសពីប្រទេសកូរ៉េខាងត្បូង
                  និងចិន (សម្រាប់ជីវឥន្ធនៈ)
                </li>
                <li>
                  ការនាំចេញដំឡូងមីរបស់កម្ពុជា ទទួលបានភាពអនុគ្រោះពន្ធពីអាស៊ាន EU
                  និងចិន
                </li>
                <li>
                  ការលេចឡើងថ្មីនូវប្រទេសមានតម្រូវការនាំចូល ដូចជា ឥណ្ឌា
                  បង់ក្លាដែស និងអារ៉ាប់ប៊ីសាអូឌីត (កែច្នៃម្សៅ
                  ទៅជាប្រេងរំអិលសម្រាប់ម៉ាស៊ីននាវាមុជទឹក)
                </li>
              </ul>
            </TableCell>
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  គ្រួសារក្រីក្របំផុតតាមជនបទ ជារឿយៗដាំដំឡូងមី
                  និងជាឱកាសស្វែងរកចំណូលខ្ពស់ជាងមុន
                  ធ្វើឲ្យមានការលើកកម្ពស់អត្ថប្រយោជន៍ និងសុខុមាលភាព
                </li>
                <li>ការធ្វើយន្តកម្មក្នុងការកាត់ដំឡូងមីជាចំណិតនៅឯចម្ការ</li>
                <li>អភិវឌ្ឍសមត្ថភាពកែច្នៃក្នុងស្រុក នៅក្បែរតំបន់ផលិត</li>
                <li>
                  ការធ្វើពិពិធកម្មនៃការនាំចេញទៅកាន់ទីផ្សារដទៃទៀតនៅអាស៊ី ជាពិសេស
                  ចិន កូរ៉េ ជប៉ុន ឥណ្ឌូនេស៊ី ម៉ាឡេស៊ីឥណ្ឌា បង់ក្លាដែស
                  អារ៉ាប៊ីសាអូឌីត
                </li>
                <li>
                  អនុស្សរណៈនៃការយោគយល់គ្នាកម្ពុជា និងចិន
                  ផ្តល់នូវវេទិកាដ៏សំខាន់ក្នុងការសម្របសម្រួលផ្លាស់ប្តូរបច្ចេកទេស
                  និងនាំចេញដំឡូងស្ងួត រហូតដល់មួយលានតោនក្នុងមួយឆ្នាំ
                </li>
                <li>
                  ការគាំទ្រ និងជំរុញអភិវឌ្ឍវិស័យដំឡូងមី ពីរាជរដ្ឋាភិបាល
                  តាមរយៈការអនុវត្តនូវ "គោលនយោបាយជាតិស្តីពីដំឡូងមី ២០២០-២០២៥"
                  ដែលទើបត្រូវបានអនុម័តថ្មីៗនេះ
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h3 className={`text-base leading-loose pt-2 ${style.font_Moul}`}>
        {dict?.cassava?.strength_opportunity_and_recommendation?.recommendation}
      </h3>

      <ul className="list-disc pl-5 space-y-2 leading-loose">
        <li>ជំរុញការអនុវត្តគោលនយោបាយជាតិ ស្តីពីដំឡូងមី ២០២០-២០២៥</li>
        <li>ពង្រឹងវិធានការនានា ដើម្បីសម្រួលពាណិជ្ជកម្ម និងជំរុញការនាំចេញ</li>
        <li>
          ពង្រីកផលិតកម្មក្នុងស្រុក ដើម្បីឆ្លើយតបតាមតម្រូវការទីផ្សារក្នុងស្រុក
          និងទីផ្សារក្រៅប្រទេស
        </li>
        <li>
          ជំរុញការផលិតឲ្យមានអនាម័យ គុណភាព សុវត្ថិភាព តាមលក្ខណៈស្តង់ដារអន្តរជាតិ
          ស្របតាមតម្រូវការទីផ្សារ និងតម្លៃអាចប្រកួតប្រជែង
        </li>
        <li>
          កសាងហេដ្ឋារចនាសម្ព័ន្ធផ្លូវជនបទ តភ្ជាប់ពីកន្លែងផលិតទៅកាន់ទីផ្សារ
        </li>
        <li>បង្កើតបណ្តាញខ្សែច្រវាក់តម្លៃ</li>
        <li>បង្កើតម៉ាកសញ្ញា branding and trademark</li>
        <li>ជំរុញផលិតកម្ម បង្កើនផ្ទៃដីដាំដុះ និងបង្កើនផលិតភាពផលិតកម្ម</li>
        <li>បង្កើត និងរៀបចំសមាគមដំឡូងមី</li>
        <li>ការវេចខ���ចប់តាមបទដ្ឋានអន្តរជាតិ និងតម្រូវការទីផ្សារ</li>
        <li>
          ភស្តុភារកម្ម (យល់ដឹងអំពីបច្ចេកទេសក្នុងការដឹកជញ្ជូន ការស្តុកទុក។ល។)
        </li>
        <li>ជំរុញការផ្សាយពាណិជ្ជកម្ម។</li>
      </ul>

      <hr className="my-6" />

      <div className="leading-loose">
        <p>
          <strong>
            {dict?.cassava?.strength_opportunity_and_recommendation?.source}
          </strong>
        </p>
        <sup>
          {dict?.cassava?.strength_opportunity_and_recommendation?.sup_desc_one}
        </sup>
        {dict?.cassava?.strength_opportunity_and_recommendation?.source_desc}
      </div>
    </div>
  );
};
