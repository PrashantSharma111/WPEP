import React, { useState, useRef, useEffect } from "react";

function PrevvalueuseRef() {
  const [count, setCount] = useState(0);
  const prevCounter = useRef(null);

  useEffect(() => {
    prevCounter.current = count;
  }, [count]);
  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Prev Count : {prevCounter.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PrevvalueuseRef;
