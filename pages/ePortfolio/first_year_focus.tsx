/* pages/ePortfolio/first_year_focus.tsx
 * Ian Kollipara
 * 2021.04.14
 * First Year Focus Page
 */

// Imports
import React from "react";
import head from "next/head";
import Header from "../../components/header";
import { Col, Row, Container } from "react-bootstrap";

function FirstYearFocus() {
  return (
    <main>
      <head>
        <title>First Year Focus</title>
      </head>
      <article>
        <Header />
        <Container fluid>
          <Row>
            <Col lg={12}>
              <h2 className="display-3 heading-font text-center">
                First Year Focus
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
              <h4 className="text-font">
                <strong>Goal:</strong> To Create a Student-Driven Learning
                Environment
              </h4>
              <h4 className="text-font">
                <strong>Why: </strong>
                The classroom is, arguably, the place students spend the most
                time in. It is then of the utmost importance that students play
                a major role in how the classroom learns. It is here that I want
                to make note of the word, "learning" in my goal. Students will
                not be running the classroom. That is my job. Rather, students
                will be taking ownership of their learning - and using
                differentiation as a baseline - to achieve their potential.
              </h4>
              <h4 className="text-font">
                <strong>How: </strong>
                The fundemental keys to achieving this boil down to:
                <ol>
                  <li>Student Buy-In</li>
                  <li>Flexible Curriculum</li>
                  <li>Adaptation as a requirement</li>
                </ol>
                <em>Student Buy-In</em>
                <br />
                Students must want this to work, just as much as I do. A room
                full of uninspired, unmotivated, unenthusiastic kids can barely
                learn when its teacher-driven, let alone when they're driving.
                As such, student motivation and buy-in become important.
                <br />
                To achieve motivation and such I must first get to know my kids,
                both in and outside of the classroom. Through this knowledge I
                can better cater their learning to them, as well as understand
                where their interest/ability will shine through.
                <br />
                <br />
                <em>Flexible Curriculum</em>
                <br />
                For me to do anything student-led the curriculum must allow for
                it. This is why to truly achieve this I cannot teach where
                curriculum is law. If curriculum is law, then the students are
                prisoners. Curriculum then, should act as the main road, with
                plenty of well-trodden paths diverging and reconnecting.
                <br />
                <br />
                <em>Adaptation as a Requirement</em>
                <br />I must become adaptable to all of my students. If I become
                stuck in one function, one style, one mode, then the entirety of
                this goal will fail. I have to be just as much, if not more,
                flexible than the curriculum. I must be inventive and most of
                all, I must listen to my students and let them have a say.
              </h4>
              <Container>
                <Row>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Innovator's Mindset</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>Risk-Taker</li>
                        <li>Observant</li>
                      </ul>
                    </p>
                  </Col>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Today's Classroom</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>Choice</li>
                      </ul>
                    </p>
                  </Col>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Tech Tools</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>Google Forms</li>
                        <li>Kahoot!</li>
                        <li>Integrated Classroom Environment (ICE)</li>
                      </ul>
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </article>
    </main>
  );
}

export default FirstYearFocus;
