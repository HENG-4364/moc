import style from "./basic-information.module.scss";

export const BasicInformation = () => {
  return (
    <div className={`text-lg`}>
      <h2 className={`leading-9 ${style.title_text}`}>
        ក. ព័ត៌មានមូលដ្ឋាន<sup>១</sup>
      </h2>

      <p className="leading-10" style={{ textIndent: "50px" }}>
        <span className="font-semibold">គ្រាប់ស្វាយចន្ទីមានសំបក</span>{" "}
        នាមវល្លី(HS Code) ០៨០១៣១។
      </p>
      <p className="leading-10" style={{ textIndent: "50px" }}>
        <span className="font-semibold">គ្រាប់ស្វាយចន្ទីបកសំបក</span>{" "}
        នាមវល្លី(HS Code) ០៨០១៣២។
      </p>

      <hr />
      <div className="leading-10 mt-5">
        <p>
          <strong>ប្រភព៖</strong>
        </p>
        <sup>១</sup>{" "}
        ផែនការយុទ្ធសាស្ត្រទាញយកប្រយោជន៍ជាអតិបរិមាពីការអនុវត្តកិច្ចព្រមព្រៀងពាណិជ្ជកម្មសេរី,
        ទំព័រ ៨២
        <br />
      </div>
    </div>
  );
};
