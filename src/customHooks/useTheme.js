import React, { useState } from "react";
import { THEMELIST } from "../contexts/ThemeContext";

const useTheme = ({ initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEMELIST.DARK) {
        setTheme(THEMELIST.LIGHT);
      } else {
        setTheme(THEMELIST.DARK);
      }
    },
  };
};

export default useTheme;
