import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import {
  ThemeProvider,
  ThemeContext,
  THEMELIST,
} from "../contexts/ThemeContext";

const LayoutComponent = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const toggleThemeColor =
    theme === THEMELIST.LIGHT
      ? "overflow-auto bg-white"
      : "overflow-auto bg-gray-700";

  return (
    <div className={toggleThemeColor}>
      <div className="mx-4 my-3">
        <Header />
        <Menu />
        {children}
        <Footer />
      </div>
    </div>
  );
};

const Layout = ({ children }) => (
  <ThemeProvider initialTheme={THEMELIST.LIGHT}>
    <LayoutComponent>{children}</LayoutComponent>
  </ThemeProvider>
);

export default Layout;
