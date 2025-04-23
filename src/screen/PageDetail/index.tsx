import React from "react";
import PageBody from "../../components/PageBody";

export default function PageDetailScreen({ page, dict }: any) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="blog-details-desc">
          <div className="article-content">
            <PageBody data={page?.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
