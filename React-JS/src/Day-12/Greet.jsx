import React from "react";

function Greet() {
  function greet() {
    alert("Good Morning!");
  }
  return (
    <div>
      <button onClick={greet}>Click Me</button>
    </div>
  );
}

export default Greet;
