import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function BasicNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="content" className="nav-link">
              Content
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
