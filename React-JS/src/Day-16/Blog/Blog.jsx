import React from "react";
import { Link, Outlet } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <nav>
        <Link to="post1">Blog post 1</Link>
        <Link to="post2">Blog post 2</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Blog;
