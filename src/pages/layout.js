import React from "react";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
