/* index.tsx
 * Ian Kollipara
 * 2021.01.23
 * HomePage
 */

// Imports
import Head from "next/head";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import Header from "../components/header";
import styles from "../styles/home.module.css";

function Index() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Jumbotron fluid className={styles.heroImage}>
        <div className="d-flex flex-column align-items-center text-white">
          <img src="/Ian.jpg" className="img-fluid rounded-circle" />
          <h5 className="display-3 heading-font animate__animated animate__fadeInUp">Ian Kollipara's</h5>
          <h5 className="display-4 text-font text-muted animate__animated animate__fadeInUp">ePortfolio</h5>
        </div>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col lg={6} className="d-flex flex-column align-items-center">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/259/desktop-computer_1f5a5.png"
              className="img-fluid mr-3"
              style={{ width: "15%" }}
            />
            <h5 className="display-4 heading-font">Software Developer</h5>
            <p className="lead text-font">
              Future Software Developer with a B.S in Computer Science
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Mathematics Minor</li>
                <li className="list-group-item">
                  Flask, React, Docker, MongoDB, etc.
                </li>
              </ul>
            </p>
          </Col>
          <Col lg={6} className="d-flex flex-column align-items-center">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/259/teacher_1f9d1-200d-1f3eb.png"
              className="img-fluid mr-3"
              style={{ width: "15%" }}
            />
            <h5 className="display-4 heading-font">Educator</h5>
            <p className="lead text-font">
              Future Educator with a B.S. in Elementary Education
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Infomation Technology (InfoTech) Certification
                </li>
                <li className="list-group-item">
                  Lutheran Teacher's Diploma (LTD)
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h3 className="display-3 heading-font text-center">Contact Me</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="lead text-font text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-inline-flex flex-column align-items-center">
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                  className="img-fluid"
                  style={{ width: "7%" }}
                />
                <a href="https://github.com/ikollipara">Github</a>
              </li>
              <li className="list-group-item d-inline-flex flex-column align-items-center">
                <img
                  src="https://waterextractionexperts.com/wp-content/uploads/2018/01/email-icon-png-download-icons-logos-emojis-email-icons-2400.png"
                  className="img-fluid"
                  style={{ width: "7%" }}
                />
                <a href="mailto:ian.kollipara@cune.org">Email</a>
              </li>
            </ul>
          </Col>
          <Col lg={6} className="lead text-font text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-inline-flex flex-column align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                  className="img-fluid"
                  style={{ width: "7%" }}
                />
                <a href="https://instagram.com/ikollipara5">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Index;
