import React from "react";
import { MessageFromMinister } from "./components/MessageFromMinister/MessageFromMinister";
import { Announcement } from "./components/HotNew/HotNews";
import Automation from "./components/Automation/Automation";
import KeyEconomicIndicators from "./components/KeyEconomicIndicators/KeyEconomicIndicators";
import KeyActivities from "./components/KeyActivities/KeyActivities";
import OfficialDocuments from "./components/OfficialDocument/OfficialDocument";
import { HomeScreenProps } from "./components/Type/types";
import { HeroSection } from "@/screen/Home/components/text/text";
import { HeroSection_1 } from "./components/text_1/text_1";
const HomeScreen = ({ dict }: any) => {
  return (
    <div>
      <MessageFromMinister
        title={dict?.banner_title}
        subtitle={`សូមស្វាគមន៍មកកាន់ក្រសួងពាណិជ្ជកម្មនិងសូមអរគុណចំពោះការចូលមកកាន់គេហទំព័ររបស់យើងខ្ញុំ។ ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្ម ទីផ្សារថ្មីៗ និងបន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់ កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ។`}
        bgImage={"/bc-homepage.png"}
        image={"/ministry-of-commerece.jpg"}
      />
      <HeroSection />
      {/* <HeroSection_1 /> */}
      <Announcement />
      <Automation />
      <KeyEconomicIndicators />
      <KeyActivities />
      <OfficialDocuments />
    </div>
  );
};

export default HomeScreen;
