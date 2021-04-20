import React, { createContext } from "react";
import useTheme from "../customHooks/useTheme";

const THEMELIST = {
  DARK: "dark",
  LIGHT: "light",
};

const ThemeContext = createContext();
const ThemeProvider = ({ children, initialTheme }) => {
  const state = useTheme(initialTheme);
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, THEMELIST };
