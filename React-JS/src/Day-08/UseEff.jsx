import React, { useEffect, useState } from "react";

function UseEff() {
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  useEffect(() => {
    setCal(() => count * 2);
  }, [count]);
  return (
    <div>
      <p>Count : {count}</p>
      <p>Caluclation : {cal}</p>
      <button
        onClick={() => {
          if (count < 5) setCount((prev) => prev + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
}

export default UseEff;
