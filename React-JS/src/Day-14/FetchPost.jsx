import React, { useState, useEffect } from "react";

const FetchPost = () => {
  const [resourceType, setresourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {
      method: "POST",

      body: JSON.stringify({
        title: "Hello",
        body: "Bye",
      }),

      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setresourceType("posts")}>Get Posts</button>
      <button onClick={() => setresourceType("comments")}>Get Comments</button>
      <button onClick={() => setresourceType("users")}>Get Users</button>
      <h2>You clicked {resourceType}</h2>
    
    
    </div>
  );
};

export default FetchPost;
