import { ThemeContext } from "./../context/themeContext";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside themeProvider ");
  }
  return context;
};
