import React from "react";

function Bank() {
  const amount = 100000;

  const func1 = () => {
    const am6 = (amount * 2 * 0.5) / 100;
    alert(`Amount after 6 months at 2 % rate: ${am6 + amount}`);
  };
  const func2 = () => {
    const am6 = (amount * 3 * 1) / 100;
    alert(`Amount after 1 year at 3 % arte: ${am6 + amount}`);
  };
  const func3 = () => {
    const am6 = (amount * 4 * 2) / 100;
    alert(`Amount after 2 years at 4 % rate: ${am6 + amount}`);
  };
  const func4 = () => {
    const am6 = (amount * 5 * 3) / 100;
    alert(`Amount after 3 yearsat 5 % rate: ${am6 + amount}`);
  };
  return (
    <div>
      <button onClick={func1}>6 Months</button>
      <button onClick={func2}>1 year</button>
      <button onClick={func3}>2 years</button>
      <button onClick={func4}>3 years</button>
    </div>
  );
}

export default Bank;
