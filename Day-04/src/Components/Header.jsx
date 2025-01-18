import React from "react";

function top() {
  let mess = "Good Morning!";

  const obj = {
    name: "Manas\n",
    age: 39,
  };
  return (
    <>
      <p>{mess}</p>
      <p>
        {obj.name} {obj.age}
      </p>
    </>
  );
}

export default top;
