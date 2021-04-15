import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Layout = ({ children }) => {
  return (
    <div className="mx-4 my-3">
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
