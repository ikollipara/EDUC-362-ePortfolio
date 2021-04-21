/* pages/ePortfolio/first_year_focus.tsx
 * Ian Kollipara
 * 2021.04.14
 * First Year Focus Page
 */

// Imports
import React from "react";
import Head from "next/head";
import Header from "../../components/header";
import { Col, Container, Row } from "react-bootstrap";

function ConnectedEducatorPlan() {
  return (
    <main>
      <Head>
        <title>Connected Educator Plan</title>
      </Head>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h3 className="display-3 heading-font text-center">
              Connected Educator Plan
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <p className="lead text-font">
              As the world becomes more and more integrated with technology, I -
              as a future educator - must become more savvy with it as well.
              However, due to my other passion being technology, my connected
              educator plan differs from that of a traditional teacher.
              <br />
              To elaborate, I plan to:
              <ul>
                <li>Follow Important Developments in the Tech World</li>
                <li>Join communities of School Tech Coordinators</li>
                <li>
                  Explore ways to Integrate New Technologies into Teaching
                </li>
              </ul>
              All of these together allow me to do what my unique talents allow,
              that is finding intersections where technology can enhance
              learning. This will be aided by these different Tech Coordinator
              communities, where this is their occupation. I also plan to do my
              own learning outside of an educational aspect, such as:
              <ul>
                <li>Arch Linux</li>
                <li>Rust</li>
                <li>Go</li>
                <li>Raspberry Pi's</li>
              </ul>
              In terms of just education, I also plan to particpate in a variety
              of convention-esque meetings, where multiple speakers can talk
              about new things in education, as well as great practices. I
              already to this quite a bit with technology, so I see this as a
              natural progression.
            </p>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </main>
  );
}

export default ConnectedEducatorPlan;
