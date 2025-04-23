import HomeScreen from "@/screen/Home/HomeScreen";
import { Metadata } from "next";
import { getDictionaryByFolder } from "./dictionaries";
import {
  getPublicAnnouncementAction,
  getPublicKeyEconomicIndicatorsAction,
  getPublicNewsListAction,
} from "@/screen/Home/actions";
import { getSasImportExportAction } from "@/common/actions";

type Params = Promise<{ lang: string }>;

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "home");

  const [
    getPublicAnnouncementRes,
    getPublicNewsListRes,
    getSasImportExportRes,
    getPublicKeyEconomicIndicatorsRes,
  ] = await Promise.all([
    getPublicAnnouncementAction(),
    getPublicNewsListAction(),
    getSasImportExportAction(),
    getPublicKeyEconomicIndicatorsAction(),
  ]);

  return (
    <HomeScreen
      dict={dict}
      publicAnnouncementList={getPublicAnnouncementRes?.publicAnnounceList}
      publicNewsList={getPublicNewsListRes?.publicNewsList}
      importTradeProductCategory={
        getSasImportExportRes?.importTradeProductCategory
      }
      exportTradeProductCategory={
        getSasImportExportRes?.exportTradeProductCategory
      }
      publicKeyEconomicIndicators={
        getPublicKeyEconomicIndicatorsRes?.publicKeyEconomicIndicators
      }
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "home");
  return {
    title: dict?.head_title,
  };
}
