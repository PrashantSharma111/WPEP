import React from "react";

function callback() {
  const a_name = "William Morgan";
  function func1() {
    console.log(func2());
  }

  function func2() {
    console.log("The name of the author: ", a_name);
    return "Called successfully!";
  }
  func1(func2);

  return <div></div>;
}

export default callback;
