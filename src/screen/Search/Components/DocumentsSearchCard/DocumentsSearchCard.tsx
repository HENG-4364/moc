import React from "react";
import { FaFilePdf } from "react-icons/fa6";

type DocumentsCardProps = {
  title: string;
  onClick: () => void;
};

const DocumentsSearchCard = ({ title, onClick }: DocumentsCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-xl p-4 mb-4 flex items-center gap-2 cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <div className="p-2 rounded">
          <span className="text-red-500 font-bold text-sm">
            <FaFilePdf size={40} />
          </span>
        </div>
      </div>
      <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
        {title}
      </h3>
    </div>
  );
};

export default DocumentsSearchCard;
