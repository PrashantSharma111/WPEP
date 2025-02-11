import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postID } = useParams();
  return (
    <div>
      <h2>Viewing Post: {postID}</h2>
    </div>
  );
}

export default Post;
