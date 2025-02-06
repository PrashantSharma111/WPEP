import React, { useRef } from "react";

function FormuseRef() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}, Age: ${ageRef.current.value}`);
  };
  return (
    <div>
      <h3>UseRef Form</h3>
      <form action="" method="post">
        <label htmlFor="name">Enter your name</label>
        <input type="text" ref={nameRef} />
        <br />
        <br />
        <label htmlFor="age">Enter your age</label>
        <input type="number" ref={ageRef} />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default FormuseRef;
