import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <nav style={{ zIndex: 1 }}>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Ian Kollipara</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/reflections">Reflections</Nav.Link>
            <NavDropdown
              title="ePortfolio"
              id="ePortfolio-dropdown"
            ></NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;
