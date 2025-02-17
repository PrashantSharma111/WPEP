import React from "react";

import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "black" : "white",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    ></div>
  );
}

export default HomePage;
