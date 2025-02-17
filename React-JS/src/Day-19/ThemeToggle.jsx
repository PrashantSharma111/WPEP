import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";

const ThemeToggle = () => {
  const dispath = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  return (
    <>
      <button onClick={() => dispath(toggleTheme())}>
        Switch to {theme === "light" ? "Dark" : "Light"} mode
      </button>
    </>
  );
};
