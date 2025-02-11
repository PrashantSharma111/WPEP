import React from "react";
import { useState } from "react";

function Practice() {
  const [count, setCount] = useState(0);

  const handInc = (e) => {
    e.preventDefault();

    setCount((count) => count + 1);

    // if (count >= 10) {
    //   setMessage("Your reached the highest mark!");
    // } else {
    //   setMessage("Keep going!");
    // }
  };

  const handDec = (e) => {
    e.preventDefault();

    setCount((count) => count - 1);

    // if (count <= 0) {
    //   setMessage("Your reached the negative mark!");
    // } else {
    //   setMessage("Keep going!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <p style={{ fontWeight: "bold", fontSize: "30px" }}>Count: {count}</p>
      <p
        style={{
          color: count >= 10 ? "green" : count < 0 ? "red" : "black",
        }}
      >
        {count < 0
          ? "You reached the negative mark!"
          : count >= 10
          ? "You reached the highest mark!"
          : "Keep going!"}
      </p>
      <button
        onClick={handInc}
        className="btn btn-secondary"
        style={{ margin: "3px" }}
        disabled={count >= 10}
      >
        Increment
      </button>
      <button
        onClick={handDec}
        className="btn btn-danger"
        disabled={count == -15}
      >
        Decrement
      </button>
    </div>
  );
}

export default Practice;
