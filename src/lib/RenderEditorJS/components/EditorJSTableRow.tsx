import React from "react";
import styleHTML from "../render_editor_js.module.scss";

type EditorJSTableRowProps = {
  row: any
}


const EditorJSTableRow = (props: EditorJSTableRowProps) => {
  const row = props.row;

  return (
    <tr>
      {row.map((val: any, idx: number) => (
        <React.Fragment key={idx + 1}>
          <td className={styleHTML.tableData}>{val}</td>
        </React.Fragment>
      ))}
    </tr>
  );
}

export default EditorJSTableRow