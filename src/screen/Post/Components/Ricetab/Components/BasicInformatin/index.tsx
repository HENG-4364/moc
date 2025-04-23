"use client";

import style from "../../../../high_potential_products_screen.module.scss";
export const BasicInformation = ({ dict }: any) => {
  return (
    <div className={`text-lg ${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.rice?.primary_information?.title}
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        <span className="fw-bold">
          {dict?.rice?.primary_information?.product_name}
        </span>
        {dict?.rice?.primary_information?.desc_one}
        <sup>{dict?.rice?.primary_information?.sup_desc_one}</sup>
      </p>
      <hr />
      <div className="leading-10">
        <p>
          <strong>{dict?.rice?.primary_information?.source}</strong>
        </p>
        <sup>{dict?.rice?.primary_information?.sup_desc_one}</sup>
        {dict?.rice?.primary_information?.source_desc}
        <br />
      </div>
    </div>
  );
};
