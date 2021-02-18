import Image from 'next/image';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <nav>
      <Navbar className={styles.lemonMeringue} variant="light" expand="md">
        <Navbar.Brand className="text-font" href="/">
          <img src="/favicon.ico" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="mr-auto text-font">
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/reflections">Reflections</Nav.Link>
            <NavDropdown
              title="ePortfolio"
              id="ePortfolio-dropdown"
              className="text-black"
            >
              <NavDropdown.Item href="/ePortfolio/resume" className="text-font">
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;
