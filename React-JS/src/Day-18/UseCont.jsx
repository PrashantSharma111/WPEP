import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function UseCont() {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <div>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

const Toolbar = () => {
  return <ThemeButton />;
};

const ThemeButton = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h3>UseContext Example</h3>
      <button onClick={ToggleTheme}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );
};

export default UseCont;
