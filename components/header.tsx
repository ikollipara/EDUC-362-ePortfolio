/* components/header.tsx
 * Ian Kollipara
 * 2021.04.14
 * Header Component
 */

// Imports
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
            <Nav.Link href="/resources">Digital Toolbox</Nav.Link>
            <NavDropdown
              title="ePortfolio"
              id="ePortfolio-dropdown"
              className="text-black"
            >
              <NavDropdown.Item href="/ePortfolio/resume" className="text-font">
                Resume
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/ePortfolio/first_year_focus"
                className="text-font"
              >
                First Year Focus
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/ePortfolio/connected_educator_plan"
                className="text-font"
              >
                Connected Educator Plan
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/ePortfolio/philosophy"
                className="text-font"
              >
                Philosophy of Education
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/ePortfolio/sample_lesson_plan"
                className="text-font"
              >
                Sample Lesson Plan
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/ePortfolio/field_experience"
                className="text-font"
              >
                Field Experience
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default Header;
