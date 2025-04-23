import { siteConfig } from "@/common/config";
import {
  getPublicBusinessDirectoryDetailAction,
  getPublicBusinessDirectoryRelatedListAction,
} from "@/screen/BusinessDirectory/actions";
import BusinessDirectoryDetailScreen from "@/screen/BusinessDirectory/BusinessDirectoryDetail";
import { Metadata } from "next";
import React from "react";

type Params = Promise<{ lang: string; id: string }>;

const BusinessDirectoryDetailPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const getPublicBusinessDirectoryDetailRes =
    await getPublicBusinessDirectoryDetailAction({ id: Number(id) || 0 });

  const getPublicBusinessDirectoryRelatedListRes =
    await getPublicBusinessDirectoryRelatedListAction({
      businessCategoryId:
        getPublicBusinessDirectoryDetailRes?.publicBusinessDirectoryDetail
          ?.business_directory_category?.id || 0,
    });

  return (
    <div>
      <BusinessDirectoryDetailScreen
        publicBusinessDirectoryDetail={
          getPublicBusinessDirectoryDetailRes?.publicBusinessDirectoryDetail
        }
        publicBusinessDirectoryRelatedList={
          getPublicBusinessDirectoryRelatedListRes?.publicBusinessDirectoryRelatedList
        }
      />
    </div>
  );
};

export default BusinessDirectoryDetailPage;

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const { id } = await params;

  const getPublicBusinessDirectoryDetailRes =
    await getPublicBusinessDirectoryDetailAction({ id: Number(id) || 0 });

  const { lang } = params;

  const publicBusinessDirectoryDetail =
    getPublicBusinessDirectoryDetailRes?.publicBusinessDirectoryDetail;

  const business_name =
    lang === "kh"
      ? publicBusinessDirectoryDetail?.business_name
      : publicBusinessDirectoryDetail?.business_name_en;

  const title = `${business_name} | moc.gov.kh`;

  const description =
    lang === "kh"
      ? publicBusinessDirectoryDetail?.description
      : publicBusinessDirectoryDetail?.description_en;

  return {
    title: title,
    description: description || "",
    openGraph: {
      title: title,
      description: description,
      url: siteConfig.url,
      images: [
        {
          url: publicBusinessDirectoryDetail?.thumbnail,
        },
      ],
    },
  };
}
