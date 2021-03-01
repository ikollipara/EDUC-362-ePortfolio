/* index.tsx
 * Ian Kollipara
 * 2021.01.23
 * HomePage
 */

// Imports
import Head from "next/head";
import { Col, Container, Media, Row } from "react-bootstrap";
import styles from "../styles/home.module.css";

function Index() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className={`jumbotron-fluid bg-light text-white text-center ${styles.heroImage}`}
      >
        <div className="d-flex flex-column align-items-center px-lg-5 py-xl-5 animate__animated animate__fadeIn">
          <h1 className="display-2 heading-font">Ian Kollipara's</h1>
          <h2 className="display-4 heading-font text-white-50">ePortfolio</h2>
        </div>
      </div>
      <Container className="pt-5">
        <Row>
          <Col>
            <Media>
              <Media.Body>
                <h1 className="heading-font">Programmer</h1>
                <p className="text-font">
                  Future Programmer with a B.S. in Computer Science with:{" "}
                  <ul>
                    <li>Mathematics Minor</li>
                    <li>Python3, TypeScript, JavaScript, Elm, etc.</li>
                  </ul>
                </p>
              </Media.Body>
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/259/desktop-computer_1f5a5.png"
                className="img-fluid w-25"
              />
            </Media>
          </Col>
          <Col>
            <Media>
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/259/teacher_1f9d1-200d-1f3eb.png"
                className="img-fluid w-25"
              />
              <Media.Body>
                <h1 className="heading-font">Teacher</h1>
                <p className="text-font">
                  Future Educator with a B.S. in Elementary Education with:{" "}
                  <ul>
                    <li>Infomation Technology Certification</li>
                    <li>Lutheran Teacher's Diploma</li>
                  </ul>
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="d-flex flex-row justify-content-around">
              <a href="/about" className="btn btn-outline-primary px-5">
                About Me
              </a>
              <a
                href="/ePortfolio/resume"
                className="btn btn-outline-primary px-5"
              >
                Resume
              </a>
              <a href="/reflections" className="btn btn-outline-primary px-5">
                Reflections
              </a>
              <a
                href="https://github.com/ikollipara"
                className="btn btn-outline-primary px-5"
              >
                Github
              </a>
              <a
                href="https://instagram.com/ikollipara5"
                className="btn btn-outline-primary px-5"
              >
                Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Index;
