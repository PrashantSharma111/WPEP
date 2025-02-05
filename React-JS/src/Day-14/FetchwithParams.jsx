import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchwithParams = () => {
  const [resourceType, setresourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((data) => setItems(data.data))
      .catch((error) => console.log(error));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setresourceType("posts")}>Get Posts</button>
      <button onClick={() => setresourceType("comments")}>Get Comments</button>
      <button onClick={() => setresourceType("users")}>Get Users</button>
      <h2>You clicked {resourceType}</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ol>
    </div>
  );
};

export default FetchwithParams;
