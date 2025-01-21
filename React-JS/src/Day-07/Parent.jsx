import React from "react";
import Child from "./Child";
import Dest from "./Dest";

function Parent() {
  const author = "Marle Wills";
  const obj = {
    name: "John Wick",
    age: 49,
    fav: "Serial Killer",
  };
  const { name, age } = obj;
  return (
    <div>
      <Child author={author} />
      <Dest name={name} age={age} />
    </div>
  );
}

export default Parent;
