import React from "react";
import { Metadata } from "next";
import { getDictionaryByFolder } from "../dictionaries";
import NewsScreen from "@/screen/News";

export default async function News() {
  return <NewsScreen />;
}
