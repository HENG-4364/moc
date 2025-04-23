import HighPotentialProductsScreen from "@/screen/Post";
import React, { Suspense } from "react";
import { getDictionaryByFolder } from "../../dictionaries";

type Params = Promise<{ lang: string }>;

export default async function HighPotentialProducts({
  params,
}: {
  params: Params;
}) {
  const { lang } = await params;
  const dict = await getDictionaryByFolder(lang, "high_potential_products");
  return (
    <Suspense fallback={<></>}>
      <HighPotentialProductsScreen dict={dict} />
    </Suspense>
  );
}
