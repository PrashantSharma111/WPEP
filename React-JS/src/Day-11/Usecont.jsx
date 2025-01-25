import React from "react";
import { useContext, createContext, useState } from "react";
const userCont = React.createContext();

function Usecont() {
  const [count, setCount] = useState(0);
  function func() {
    setCount((prev) => prev + 1);
  }
  return (
    <userCont.Provider value={{ count, func }}>
      <Product />
      <People />
      <Cart />
    </userCont.Provider>
  );
}

function Product() {
  const { func } = useContext(userCont);
  return (
    <>
      <h2>I am inside Product Component</h2>
      <button onClick={func}>Click Me</button>
      <button onClick={func}>Click Me</button>
      <button onClick={func}>Click Me</button>
    </>
  );
}

function People() {
  return (
    <>
      <h2>I am inside People Component</h2>
    </>
  );
}

function Cart() {
  const { count } = useContext(userCont);
  return (
    <>
      <h2>I am inside Cart Component</h2>
      <p>Count: {count}</p>
    </>
  );
}

export default Usecont;
