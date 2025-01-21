import React from "react";

function Child(props) {
  return (
    <div>
      <p>The name of the author is: {props.author}</p>
    </div>
  );
}

export default Child;
