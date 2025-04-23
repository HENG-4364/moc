"use client";
import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Props {
  children?: React.ReactNode;
  publicDocumentCategoryList: any;
  primaryMenu: any;
}

export function Layout({
  children,
  publicDocumentCategoryList,
  primaryMenu,
}: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header
        publicDocumentCategoryList={publicDocumentCategoryList}
        primaryMenu={primaryMenu}
      />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
