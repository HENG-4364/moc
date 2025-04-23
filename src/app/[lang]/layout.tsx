import { getPrimaryMenuAction } from "@/common/actions";
import "./globals.css";
import { Layout } from "@/components/Layout";
import ApolloWrapper from "@/components/Layout/ApolloWrapper";
import { getPublicDocumentCategoryListAction } from "@/screen/OfficialDocument/actions";
import AppInitializer from "@/stores/me/AppInitializer";
import { verifySession } from "@/lib/jwt/jwt";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [getPublicDocumentCategoryListRes, getPrimaryMenuRes] =
    await Promise.all([
      getPublicDocumentCategoryListAction(),
      getPrimaryMenuAction(),
    ]);

  const { data } = await verifySession();
  return (
    <ApolloWrapper>
      <AppInitializer me={data}>
        <Layout
          publicDocumentCategoryList={
            getPublicDocumentCategoryListRes?.publicDocumentCategoryList?.data
          }
          primaryMenu={getPrimaryMenuRes?.primaryMenu}
        >
          {children}
        </Layout>
      </AppInitializer>
    </ApolloWrapper>
  );
}
