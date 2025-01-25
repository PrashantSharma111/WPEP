import React from "react";
import "../App.css";

function Ques() {
  return (
    <div>
      <form action="" method="GET" className="formdata">
        <h4 className="header">Feedback Form</h4>
        <label htmlFor="food">What is your favourite food</label>
        <br />
        <input type="text" name="food" id="food" />
        <br />
        <br />
        <label htmlFor="hobby">Mention any 3 hobbies</label>
        <br />
        1.
        <input type="" name="" id="" />
        <br />
        2.
        <input type="" name="" id="" />
        <br />
        3.
        <input type="" name="" id="" />
        <br />
        <br />
        <label htmlFor="happy">When will you feel happy</label>
        <br />
        <textarea name="happy" id="happy" rows={4} cols={20}></textarea>
        <br />
        <br />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Ques;
