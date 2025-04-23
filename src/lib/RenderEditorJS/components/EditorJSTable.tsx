import React from "react";
import EditorJSTableRow from "./EditorJSTableRow";

type EditorJSTableProps = {
  body: any
}

const EditorJSTable = (props: EditorJSTableProps) => {
  const body = props.body

  return (
    <table className={`table`}>
      <tbody>
        {body.map((row: any, idx: number) => (
          <React.Fragment key={idx + 1}>
            <EditorJSTableRow row={row} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default EditorJSTable