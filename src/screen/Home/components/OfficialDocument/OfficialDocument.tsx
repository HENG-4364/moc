"use client";

import { Title } from "@/components/Title/Title";
import OfficialDocumentCard from "./OfficialDocumentCard/OfficialDocumentCard";

export type OfficialDocumentsProps = {
  dict: any;
};

export default function OfficialDocuments({ dict }: OfficialDocumentsProps) {
  return (
    <div>
      <Title title={dict?.official_documents_title} />

      <div className="bg-[#f6f7f8] py-12">
        <div className="container mx-auto">
          <OfficialDocumentCard dict={dict} />
        </div>
      </div>
    </div>
  );
}
