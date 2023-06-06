import React from "react";
import classes from "./Layout.module.css";
import { Header } from "@/components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main>{children}</main>
      {/* <Footer/> */}
    </div>
  );
};
