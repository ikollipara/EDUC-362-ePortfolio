/* pages/ePortfolio/field_experience.tsx
 * Ian Kollipara
 * 2021.04.14
 * Field Experience Page
 */

// Imports
import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/header";


function FieldExperience() {
  return (
    <main>
      <Head>
        <title>Field Experience</title>
      </Head>
      <Header />
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="display-3 heading-font text-center">
              Field Experience
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h5 className="text-font font-italic">
              This page will be filled up when I student-teach
            </h5>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </main>
  )
}

export default FieldExperience;
