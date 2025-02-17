import React, { useState, useContext } from "react";
import UseCont from "./UseCont";
import UseMemo from "./UseMemoExample";

function DropDown() {
  const [selectdHook, setSelectedHook] = useState("useContext");

  const renderSelectedHook = () => {
    switch (selectdHook) {
      case "useContext":
        return <UseCont />;
      case "useMemo":
        return <UseMemo />;
      default:
        break;
    }
  };
  return (
    <div>
      <h3>Learn about React Hooks</h3>
      <label htmlFor="choose">Select your hook</label>
      <select
        id="hook-selector"
        value={selectdHook}
        onChange={(e) => setSelectedHook(e.target.value)}
      >
        <option value="useContext">Learn useContext</option>
        <option value="useMemo">Learn useMemo</option>
        <option value="useState">Learn useState</option>
      </select>
      <hr />
      {selectdHook === "useContext" ? <UseCont /> : <UseMemo />}
    </div>
  );
}

export default DropDown;
