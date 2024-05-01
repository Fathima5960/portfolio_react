import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="shadow" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ fontFamily: "Kanit" }}
            className="text-white fw-bold fs-2"
            href="#home"
          >
            Fathima N K
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white me-5" href="#banner">
                Home
              </Nav.Link>
              <Nav.Link className="text-white me-5" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="text-white me-5" href="#portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link className="text-white me-5" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
