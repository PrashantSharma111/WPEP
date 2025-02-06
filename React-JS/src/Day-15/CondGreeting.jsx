import React from "react";

function CondGreeting() {
  const isLogged = !false;
  function Greet() {
    return (
      <>
        <h2>Welcome to Hell</h2>
      </>
    );
  }

  function Info() {
    return (
      <>
        <h2>Log In First</h2>
      </>
    );
  }
  return (
    <div>
      {/* {isLogged ? <h2>Welcome</h2> : <h2>Log In Please</h2>} */}
      {/* {isLogged && <h2>Welcome</h2>} */}
      {/* {!isLogged && <h2>Log In First</h2>} */}

      {isLogged ? <Greet /> : <Info />}
    </div>
  );
}

export default CondGreeting;
