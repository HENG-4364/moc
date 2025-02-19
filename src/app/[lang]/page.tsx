import { Title } from "@/components/Title/Title";
import HomeScreen from "@/screen/Home/HomeScreen";
import { Metadata } from "next";
import { getDictionaryByFolder } from "./dictionaries";
type Params = Promise<{ lang: string }>;
export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "home");
  return (
    <>
      <HomeScreen dict={dict} />
    </>
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
