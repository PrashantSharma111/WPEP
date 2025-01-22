import React from "react";
import { useState } from "react";

function UseSt() {
  const obj = {
    name: "Mahesh",
    e_des: "fresher",
  };

  const [des, setdes] = useState(obj.e_des);

  const togglerole = () => {
    setdes((prev) => (prev === "fresher" ? "Manager" : obj.e_des));
  };
  return (
    <div>
      <p>
        Name : {obj.name} Designation : {des}
      </p>
      <button onClick={togglerole}>Update</button>
    </div>
  );
}

export default UseSt;
