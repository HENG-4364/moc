import React, { Suspense } from "react";
import { Metadata } from "next";
import { OfficialDocumentScreen } from "@/screen/OfficialDocument";
import { getDictionaryByFolder } from "../../dictionaries";
import { getPublicDocCategoryListAction } from "@/screen/OfficialDocument/actions";

type Params = Promise<{ lang: string; parent_slug: string }>;
type SearchParams = Promise<{ page: string; select: string }>;

async function DocumentCategory({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { lang, parent_slug } = await params;
  const { page, select } = await searchParams;
  const { documentCategory, document_category } =
    await getPublicDocCategoryListAction(parent_slug);

  const dict = await getDictionaryByFolder(lang, "document_category");

  return (
    <Suspense fallback={null}>
      <OfficialDocumentScreen
        publicDocumentCategory={document_category}
        publicDocumentList={documentCategory}
        dict={dict}
        selectDocumentCategory={select}
      />
    </Suspense>
  );
}

export default DocumentCategory;

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { lang } = await params;

  const dict = await getDictionaryByFolder(lang, "document_category");

  return {
    title: dict?.head_title,
  };
}
