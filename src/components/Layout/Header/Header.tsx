import React from "react";
import Navbar from "./Navbar/Navbar";
import { SubNavbar } from "./SubNavbar/SubNavbar";

export type HeaderProps = {
  publicDocumentCategoryList: any;
  primaryMenu: any;
};

const Header = ({ publicDocumentCategoryList, primaryMenu }: HeaderProps) => {
  return (
    <>
      <Navbar />
      <SubNavbar
        publicDocumentCategoryList={publicDocumentCategoryList}
        primaryMenu={primaryMenu}
      />
    </>
  );
};

export default Header;
