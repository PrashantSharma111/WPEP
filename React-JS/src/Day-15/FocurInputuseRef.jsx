import React from "react";
import { useRef } from "react";

function FocurInputuseRef() {
  const inputRef = useRef(null);  //avoid the necessary re-rendering of the component only update the req one

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="number" ref={inputRef} placeholder="Enter any number" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocurInputuseRef;
