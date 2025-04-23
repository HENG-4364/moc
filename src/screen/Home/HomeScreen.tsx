"use client";
import React from "react";
import { Announcement } from "./components/Announcement/Announcement";
import Automation from "./components/Automation/Automation";
import KeyEconomicIndicators from "./components/KeyEconomicIndicators/KeyEconomicIndicators";
import KeyActivities from "./components/KeyActivities/KeyActivities";
import OfficialDocuments from "./components/OfficialDocument/OfficialDocument";
import dynamic from "next/dynamic";
import { HeroSection } from "./components/MessageFromMinister/MessageFromMinister";

export type HomeScreenProps = {
  dict: any;
  publicAnnouncementList: any;
  publicNewsList: any;
  importTradeProductCategory: any;
  exportTradeProductCategory: any;
  publicKeyEconomicIndicators: any;
};

const HomeScreen = ({
  dict,
  publicAnnouncementList,
  publicNewsList,
  importTradeProductCategory,
  exportTradeProductCategory,
  publicKeyEconomicIndicators,
}: HomeScreenProps) => {
  return (
    <div>
      <HeroSection />
      <Announcement
        dict={dict}
        publicAnnouncementList={publicAnnouncementList}
      />
      <Automation dict={dict} />
      <KeyEconomicIndicators
        dict={dict}
        importTradeProductCategory={importTradeProductCategory}
        exportTradeProductCategory={exportTradeProductCategory}
        publicKeyEconomicIndicators={publicKeyEconomicIndicators}
      />
      <KeyActivities dict={dict} publicNewsList={publicNewsList} />
      <OfficialDocuments dict={dict} />
    </div>
  );
};

export default HomeScreen;
