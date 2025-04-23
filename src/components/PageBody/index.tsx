"use client";

import {
  renderEmbed,
  renderImage,
  renderLink,
  renderList,
  renderQuote,
  renderSource,
  renderTable,
  renderText,
  renderTextBlock,
  renderTitle,
} from "@/lib/RenderEditorJS/render_editor_js";

interface Props {
  data: {
    blocks: any;
  };
}

const PageBody = (props: Props) => {
  const jsonA = props?.data?.blocks;

  const renderFunc: any = {
    paragraph: renderText,
    image: renderImage,
    list: renderList,
    "text-block": renderTextBlock,
    quote: renderQuote,
    header: renderTitle,
    source: renderSource,
    table: renderTable,
    embed: renderEmbed,
    link: renderLink,
  };

  return (
    <>
      <div className="page-description">
        {jsonA?.map((jsonA: any, idx: number) => {
          if (renderFunc[jsonA.type] === undefined) return null;
          return <div key={idx + 1}>{renderFunc[jsonA.type](jsonA, idx)}</div>;
        })}
      </div>
    </>
  );
};

export default PageBody;
