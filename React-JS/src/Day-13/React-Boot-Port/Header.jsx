import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="justify-content-space">
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
            width={40}
            height={50}
          />
          Name
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>

        <Button variant="danger">Click Me</Button>
      </Navbar>
    </>
  );
}

export default Header;
