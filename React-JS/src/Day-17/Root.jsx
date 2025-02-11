import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

const Root = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright @2025. All Rights Reserved.</footer>
    </>
  );
};

export default Root;
