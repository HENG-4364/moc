import style from "../../../../high_potential_products_screen.module.scss";
export const BasicInformation = ({ dict }: any) => {
  return (
    <div className={`${style.paragraph}`}>
      <h2 className={`leading-9 ${style.bold_text}`}>
        {dict?.pepper?.primary_information?.title}
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        <span className="fw-bold">
          {dict?.pepper?.primary_information?.product_name_one}
        </span>
        {dict?.pepper?.primary_information?.desc_one}
        <sup>{dict?.pepper?.primary_information?.sup_desc_one}</sup>
      </p>
      <hr />
      <div className="leading-10">
        <p>
          <strong>{dict?.pepper?.primary_information?.source}</strong>
        </p>
        <sup>{dict?.pepper?.primary_information?.sup_desc_one}</sup>
        {dict?.pepper?.primary_information?.source_desc}
        <br />
      </div>
    </div>
  );
};
