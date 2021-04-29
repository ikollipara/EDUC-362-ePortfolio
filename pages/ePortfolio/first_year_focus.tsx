/* pages/ePortfolio/first_year_focus.tsx
 * Ian Kollipara
 * 2021.04.14
 * First Year Focus Page
 */

// Imports
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header";
import { Col, Row, Container } from "react-bootstrap";

function FirstYearFocus() {
  return (
    <main>
      <Head>
        <title>First Year Focus</title>
      </Head>
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
                <Image
                  src="/worktime.jpg"
                  layout="responsive"
                  objectFit="cover"
                  width={720}
                  height={100}
                  priority={true}
                />
                <h3 className="text-font mt-5">
                <strong>Goal:</strong> To Create a Student-Driven Learning
                Environment
              </h3>
                            <h5 className="text-font">
                <strong>Why: </strong>
                The classroom is, arguably, the place students spend the most
                time in. It is then of the utmost importance that students play
                a major role in how the classroom learns. It is here that I want
                to make note of the word, "learning" in my goal. Students will
                not be running the classroom. That is my job. Rather, students
                will be taking ownership of their learning - and using
                differentiation as a baseline - to achieve their potential.
              </h5>
              <h5 className="text-font">
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
                learn when it's teacher-driven, let alone when they're driving.
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
              </h5>
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
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10}>
                <Image
                  src="/integrated.jpg"
                  layout="responsive"
                  objectFit="cover"
                  width={720}
                  height={100}
                  priority={true}
                />
              <h3 className="text-font mt-5">
                <strong>Goal:</strong> Ingrain Technology Fundementals in the 
                Classroom
              </h3>
              <h5 className="text-font">
                <strong>Why: </strong>
                Technology is a fundemental aspect of modern life. As such, it is of
                vital importance that students are not only competent, but actively learn
                and improve at, technology. I firmly believe that technology literacy is the
                most important future skill that is not met in current education. This extends
                beyond just simple word, excel, etc. but more into troubleshooting, coding, and 
                problem solving.
              </h5>
              <h5 className="text-font">
                <strong>How: </strong>
                I provide a unique ability in this area, being my CS degree. As such I 
                can help more in this technical aspects. I would begin by allowing more use
                of technology in the classroom to begin with. This could include: projectors, 
                laptops, embedded systems, etc. Just things to spark the mind and curiosity of
                the children.
                <br />
                Next I would incorporate more problem solving based issues in computer class. Things
                like crashing errors and how to look them up. Knowing how to identify the problem is 
                most of the battle, and if a student can do that, then they will succeed when it comes
                to technology.
                <br />
                The biggest hurdle is budget, and as such much of what I want to do will be
                relegated for future years. In this first year I want to add troubleshooting
                to the computer classes, along with more time dedicated to logic and problem
                solving games. I would also have a unit dedicated to Office Suite Tool usage,
                something that will most definitely become vital as they age.
              </h5>
              <Container>
                <Row>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Innovator's Mindset</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>Problem-Finder</li>
                        <li>Risk-Taker</li>
                      </ul>
                    </p>
                  </Col>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Today's Classroom</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>Opportunities for Innovation</li>
                      </ul>
                    </p>
                  </Col>
                  <Col lg={4} className="d-flex flex-column align-items-center">
                    <h5 className="heading-font">Tech Tools</h5>
                    <p className="lead text-font">
                      <ul>
                        <li>CoolMathGames</li>
                        <li>DayOfCode</li>
                        <li>Integrated Classroom Environment (ICE)</li>
                        <li>Microsoft Office</li>
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
