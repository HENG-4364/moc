import { useParams } from "next/navigation";
import React from "react";
import style from "./category_mobile_lists.module.scss";

function CategoryMobileLists({
  data,
  dict,
  currentNewsCategory,
  setCurrentNewsCategory,
}: any) {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang;
  const handleChangeNewsCategory = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    tabNumber: number
  ) => {
    e.preventDefault();
    setCurrentNewsCategory(tabNumber);
  };

  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {         
            display:none
          }       
        `}
      </style>
      <div className="pb-2 d-flex flex-wrap justify-content-center align-items-center ">
        <div className="w-100 ">
          <ul
            className={`list-inline-item d-flex flex-row gap-2 p-0 overflow-auto hide-scrollbar ${style.abc}`}
          >
            <li
              className={`list-inline-item d-flex align-items-center px-2 py-1  rounded rounded-2 text-black ${
                style.official_document_sidebar_nav
              } 
   ${currentNewsCategory === 0 ? style.official_document_navlink_active : ""}`}
              style={{ textWrap: "nowrap", background: "#E7F1FD" }}
              onClick={(e) => {
                handleChangeNewsCategory(e, 0);
              }}
            >
              {dict?.all}
            </li>
            {data?.publicNewsCategoryList?.map((item: any, idx: number) => (
              <li
                className={`list-inline-item d-flex align-items-center px-2 py-1  rounded rounded-2 text-black ${
                  style.official_document_sidebar_nav
                } 
   ${
     currentNewsCategory === item.id
       ? style.official_document_navlink_active
       : ""
   }`}
                key={idx}
                style={{ textWrap: "nowrap", background: "#E7F1FD" }}
                onClick={(e) => {
                  handleChangeNewsCategory(e, item.id);
                }}
              >
                {lang == "kh"
                  ? item?.name
                  : item?.name_en
                  ? item?.name_en
                  : item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoryMobileLists;
