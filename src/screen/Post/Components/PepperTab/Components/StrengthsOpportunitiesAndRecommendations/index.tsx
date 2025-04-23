import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import style from "../../../../high_potential_products_screen.module.scss";

export const StrengthsOpportunitiesAndRecommendations = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`lh-lg pb-2 ${style.bold_text}`}>
        {dict?.pepper?.strength_opportunity_and_recommendation?.title}
        <sup>
          {dict?.pepper?.strength_opportunity_and_recommendation?.sup_desc_one}
        </sup>
      </h2>

      <Table className="border-collapse [&_*]:border-[#dee2e6]">
        <TableHeader>
          <TableRow className="text-lg bg-white ">
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {dict?.pepper?.strength_opportunity_and_recommendation?.strength}
            </TableHead>
            <TableHead className="border p-4 text-center font-semibold  w-1/2">
              {
                dict?.pepper?.strength_opportunity_and_recommendation
                  ?.opportunity
              }
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-[#F2F2F2]">
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2 leading-loose">
                <li>លក្ខខណ្ឌអាកាសធាតុ នៃការដាំដុះអំណោយផល</li>
                <li>មានផ្ទៃដីច្រើនសម្រាប់ការដាំដុះ</li>
                <li>ការបង្កើនចំណេះដឹង នៃការដាំដុះផ្លៃម្រេច</li>
              </ul>
            </TableCell>
            <TableCell className="align-top border p-4 text-lg">
              <ul className="list-disc pl-5 space-y-2 leading-loose">
                <li>មានសក្តានុពលសម្រាប់ការបង្កើនទិន្នផលខ្លាំង</li>
                <li>អាចបង្កើនការផលិត សម្រាប់ម្រេច</li>
                <li>អាចបង្កើនការកែច្នៃម្រេច</li>
                <li>បង្កើនការធានាគុណភាព និងសុវត្ថិភាពម្រេច</li>
                <li>
                  ការដំាដុះដោយមិនប្រើប្រាស់សារធាតុគីមី (Organic production)
                </li>
                <li>
                  កិច្ចព្រមព្រៀងពាណិជ្ជកម្មសេរីរវាងកម្ពុជា និងចិន
                  នឹងជួយជំរុញការនាំចេញម្រេចទៅកាន់ប្រទេសចិន
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h3 className={`text-base leading-loose pt-2 ${style.font_Moul}`}>
        {dict?.pepper?.strength_opportunity_and_recommendation?.recommendation}
      </h3>

      <ul className="list-disc pl-5 space-y-2 leading-loose">
        <li>
          ជំរុញការអនុវត្ត ផែនការយុទ្ធសាស្រ្តអភិវឌ្ឍន៍វិស័យកសិកម្ម២០១៩-២០២៣
        </li>
        <li>
          ចាប់ផ្តើមកម្មវិធីផ្សព្វផ្សាយកសិកម្មតម្រង់ទិស
          ផលិតកម្មម្រេចជាលក្ខណៈពាណិជ្ជកម្ម
        </li>
        <li>
          ចាប់ផ្តើមកម្មវិធីបច្ចេកវិទ្យាក្រោយប្រមូលផល (Postharvest Technology
          Program) ដោយផ្តោតលើការអនុលោមតាមការតម្រូវ អនាម័យ និងភូតគាមអនាម័យ (SPS)
        </li>
        <li>រៀបចំធ្វើតេស្ត ពិនិត្យសំណល់ថ្នាំពុលកសិកម្មលើម្រេច</li>
        <li>អភិវឌ្ឍន៍ការអនុវត្តកសិកម្មល្អ និងរៀបចំស្តង់ដារលើលើផលិតកម្មម្រេច</li>
        <li>លើកកម្ពស់សមាគមម្រេច</li>
        <li>ការវេចខ្ចប់តាមបទដ្ឋានអន្តរជាតិ និងតម្រូវការទីផ្សារ</li>
        <li>កសាងហេដ្ឋារចនាសម្ព័ន្ធផ្លូវជនបទ</li>
        <li>បង្កើតបណ្តាញខ្សែច្រវាក់តម្លៃ និងបង្កើតរោងចក្រកែច្នៃម្រេច</li>
        <li>កំណត់ទំនិញសម្ភាល់ភូមិសាស្រ្តសម្រាប់ម្រេច</li>
        <li>
          បង្កើនការយល់ដឹងអំពីការដាំដុះ ផលចំណេញសេដ្ឋកិច្ច
          និងការតម្រូវផ្សេងក្នុងពាណិជ្ជកម្ម
        </li>
        <li>បង្កើតម៉ាកសញ្ញា branding and trade mark</li>
        <li>ជំរុញផលិតកម្ម បង្កើនផ្ទៃដីដាំដុះ និងបង្កើនផលិតភាពផលិតកម្ម</li>
        <li>ការវេចខ្ចប់តាមបទដ្ឋានអន្តរជាតិ និងតម្រូវការទីផ្សារ</li>
        <li>ភស្តុភារកម្ម (យល់ដឹងអំពីបច្ចេកទេសក្នុងការដឹកជញ្ជូន ស្តុកទុក )</li>
        <li>ធ្វើការផ្សាយពាណិជ្ជកម្មឌីជីថល</li>
        <li>ជុំរុញធ្វើពិពិធកម្មទីផ្សារនាំចេញ</li>
      </ul>

      <hr className="my-6" />

      <div className="leading-loose">
        <p>
          <strong>
            {dict?.pepper?.strength_opportunity_and_recommendation?.source}
          </strong>
        </p>
        <sup>
          {dict?.pepper?.strength_opportunity_and_recommendation?.sup_desc_one}
        </sup>
        {dict?.pepper?.strength_opportunity_and_recommendation?.source_desc}
      </div>
    </div>
  );
};
