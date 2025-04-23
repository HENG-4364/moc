import { ReactNode } from "react";
import React from "react";
import styleHTML from "./render_editor_js.module.scss";
import Link from "next/link";
import EditorJSTable from "./components/EditorJSTable";
import Image from "next/image";

export function renderImage(params: any, idx: number) {
  return (
    <div key={idx} className="custom_container">
      <Image
        className={styleHTML.editorImage}
        src={params.data.file.url}
        alt={params.data.file.url}
        style={{ width: "100%", height: "auto", marginBottom: "25px" }}
        width={1500}
        height={1490}
      />
      <div
        className={params.data.caption ? styleHTML.editorImageCaption : ""}
        dangerouslySetInnerHTML={{ __html: params.data.caption }}
      ></div>
    </div>
  );
}

export function renderTitle(params: any, idx: number) {
  if (params.data.level == 1) {
    return (
      <div className={styleHTML.section_title}>
        <h1
          className={styleHTML.editHeading1}
          key={idx}
          dangerouslySetInnerHTML={{ __html: params.data.text }}
        ></h1>
      </div>
    );
  } else if (params.data.level == 2) {
    return (
      <h2
        className={styleHTML.editHeading2}
        key={idx}
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></h2>
    );
  } else if (params.data.level == 3) {
    return (
      <h3
        className={styleHTML.editHeading3}
        key={idx}
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></h3>
    );
  } else if (params.data.level == 4) {
    return (
      <h4
        className={styleHTML.editHeading4}
        key={idx}
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></h4>
    );
  } else if (params.data.level == 5) {
    return (
      <h5
        className={styleHTML.editHeading5}
        key={idx}
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></h5>
    );
  } else if (params.data.level == 6) {
    return (
      <h6
        className={styleHTML.editHeading6}
        key={idx}
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></h6>
    );
  }
}

export function renderText(params: any) {
  return (
    <div
      key={params.data.text}
      id="paragraphBlock"
      className={styleHTML.editorPara}
    >
      <p dangerouslySetInnerHTML={{ __html: params.data.text }}></p>
    </div>
  );
}

export function renderList(params: any, idx: any) {
  const list = params.data;
  let parentListNode: ReactNode;
  let listNode: ReactNode[] = [];
  listNode = list.items.map((item: any, idx: any) => (
    <li key={idx + 1} dangerouslySetInnerHTML={{ __html: item }}></li>
  ));

  if (list.style === "ordered") {
    parentListNode = <ol className={styleHTML.orderList}>{listNode}</ol>;
  } else {
    parentListNode = <ul className={styleHTML.unorderList}>{listNode}</ul>;
  }

  return <div key={idx}>{parentListNode}</div>;
}

export function renderTextBlock(params: any, idx: any) {
  return (
    <div key={idx}>
      <aside
        key={params.data.content}
        dangerouslySetInnerHTML={{ __html: params.data.content }}
      ></aside>
    </div>
  );
}

export function renderQuote(params: any, idx: any) {
  return (
    <blockquote className="quote" key={idx}>
      <aside
        className="darkmode-career-title"
        dangerouslySetInnerHTML={{ __html: params.data.text }}
      ></aside>
      <p
        className="quote-caption darkmode-career-title"
        dangerouslySetInnerHTML={{ __html: params.data.caption }}
      ></p>
    </blockquote>
  );
}

export function renderSource(params: any, idx: any) {
  return (
    <div className={styleHTML.sourceTitle} key={idx}>
      <b>ប្រភព​​​៖ &#8203;&#8203;&#8203;</b>
      <Link
        className={styleHTML.accordingLink}
        style={{ textDecoration: "underline", cursor: "pointer" }}
        target="_blank"
        href={params.data.sourceLink}
        rel="noreferrer"
      >
        {params.data.sourceName}
      </Link>
    </div>
  );
}

export function renderTable(params: any) {
  return <EditorJSTable body={params.data.content} />;
}

export const renderEmbed = (block: any, key: any) => {
  const data = block.data;
  const rawServices = ["instagram", "tiktok", "twitter", "dailymail", "bbc"];

  if (rawServices.indexOf(data.service) > -1) {
    return (
      <figure key={key} className={"article-content-embed " + data.service}>
        <div dangerouslySetInnerHTML={{ __html: data.source }}></div>

        {data.caption && (
          <figcaption className="article-content-caption">
            <i className="fal fa-rss"></i>{" "}
            <span dangerouslySetInnerHTML={{ __html: data.caption }}></span>
          </figcaption>
        )}
      </figure>
    );
  } else if (data.service === "youtube") {
    return (
      <figure key={key} className={"article-content-embed " + data.service}>
        <div
          style={{
            width: "100%",
            position: "relative",
            paddingBottom: (data.height / data.width) * 100 + "%",
            height: "0px",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            title={data.caption || "Untitled"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder={0}
            width={data.width}
            height={data.height}
            src={data.embed}
          />
        </div>

        {data.caption && (
          <figcaption className="article-content-caption">
            {/* <i className="fal fa-video"></i>{" "} */}
            <span dangerouslySetInnerHTML={{ __html: data.caption }}></span>
          </figcaption>
        )}
      </figure>
    );
  } else if (data.service === "facebook_video" || data.service === "facebook") {
    return (
      <figure key={key} className={"article-content-embed " + data.service}>
        {/* <div className="fb-video" data-href={data.embed}></div> */}
        <div
          style={{
            // width: "100%",
            position: "relative",
            paddingBottom: "420px",
            height: "0px",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "420px",
            }}
            allowFullScreen
            title={data.caption || "Untitled"}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder={0}
            src={data.embed}
          />
        </div>

        {data.caption && (
          <figcaption className="article-content-caption">
            {/* <i className="fal fa-video"></i>{" "} */}
            <span dangerouslySetInnerHTML={{ __html: data.caption }}></span>
          </figcaption>
        )}
      </figure>
    );
  } else if (data.service === "facebook_post") {
    return (
      <figure key={key} className={"article-content-embed " + data.service}>
        <div className="fb-post" data-href={data.embed}></div>

        {data.caption && (
          <figcaption className="article-content-caption">
            <i className="fal fa-rss"></i>{" "}
            <span dangerouslySetInnerHTML={{ __html: data.caption }}></span>
          </figcaption>
        )}
      </figure>
    );
  }
};

export const renderLink = (params: any) => {
  return (
    <>
      <p style={{ fontSize: 16 }}>
        <Link
          target="_blank"
          href={`${params.data.hyperlink}`}
          rel="noreferrer"
        >
          {params.data.text}
        </Link>
      </p>
    </>
  );
};
