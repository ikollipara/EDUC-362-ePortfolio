/* pages/ePortfolio/philosophy.tsx
 * Ian Kollipara
 * 2021.04.14
 * Philosophy of Education Page
 */

// Imports
import Head from 'next/head';
import {Col, Container, Row} from 'react-bootstrap';
import Header from '../../components/header';

function Philosophy(){
  return (
    <main>
      <Head>
        <title>Philosophy of Education</title>
      </Head>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h4 className="display-3 heading-font text-center">
              Philosophy of Education
            </h4>
          </Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6} className="d-flex flex-column align-items-center justify-content-center">
            <hr />
            <h2 className="text-font font-italic text-center">
              Education is an exploration to discover a passion.
              My job, therefore, is to facilitate this discovery of passion,
              and allow it to grow.
            </h2>
            <hr />
            <img src="/Ian.jpg" alt="Ian Kollipara" className="img-fluid rounded-circle mr-3" />
          </Col>
          <Col lg={3}></Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <hr />
            <h4 className="text-font font-italic">
              To expand, to facilitate a discovery of passion requires that the 
              student's needs are met in such a way that learning can happen. These
              needs are: Social, Emotional, and Physical. All of these must be met for
              a student to learn, but to discover a passion requires that a teacher be
              passionate. It requires that I be passionate, not just about my students,
              but about their learning.
            </h4>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Philosophy;
