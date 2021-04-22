/* pages/ePortfolio/sample_lesson_plan.tsx
 * Ian Kollipara
 * 2021.04.14
 * Sample Lesson Plan Page
 */

// Imports
import Head from 'next/head';
import {Col, Container, Row} from 'react-bootstrap';
import Header from '../../components/header';

function SampleLessonPlan() {
  return (
    <main>
      <Head>
        <title>Sample Lesson Plan</title>
      </Head>
      <Header />
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="display-3 heading-font text-center">
              Sample Lesson Plan
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col lg={3}>
            <h5 className="heading-font">
              <strong>Topic/Central Focus: </strong>
              Fractions, Decimals, and Percents
            </h5>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Container fluid>
              <Row>
                <Col lg={12}>
                  <h5 className="heading-font">
                    <strong>Grade Level:</strong> 5th Grade
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h5 className="heading-font">
                    <strong>Subject:</strong> Math
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h5 className="heading-font">
                    <strong>Time Frame:</strong> 50 Minutes
                  </h5>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center"><strong>Standards:</strong></h5>
            <p className="lead text-font">
              <ul>
                <li>CCSS.MATH.CONTENT.5.NFA.1:
                  <br />
Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions in such a way as to produce an equivalent sum or difference of fractions with like denominators. For example, 2/3 + 5/4 = 8/12 + 15/12 = 23/12. (In general, a/b + c/d = (ad + bc)/bd.)
                </li>
                <li>CCSS.MATH.CONTENT.5.NBT.B.7:
                  <br />
                  Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction; relate the strategy to a written method and explain the reasoning used.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <h5 className="heading-font text-center"><strong>Learning Objective</strong></h5>
            <p className="lead text-font">
              <ul>
                <li>
                  Students will be able to identify the numerator and denominator
                </li>
                <li>
                  Students will be able to relate percents and decimal numbers
                </li>
                <li>
                  Students will be able to match each term to its respective symbol
                </li>
              </ul>
            </p>
          </Col>
          <Col lg={6}>
            <h5 className="heading-font text-center"><strong>Assessment Tool(s) and Procedures</strong></h5>
            <p className="lead text-font">
              <ul>
                <li>
                  Kahoot! Quiz:<br />
                  This will be the formative assessment at the end of the class to see if the students understand the lesson
                </li>
                <li>
                  Jigsaw Groups:<br />
                  Students will be presenting on a topic, and each person must speak. I will also be walking around the room to listen in on group discussion.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center">
              <strong>
                Research-Based Best Practice used in lesson and why it is appropriate/useful
              </strong>
            </h5>
            <p className="lead text-font">
              <ul>
                <li>
                  <strong>Jigsaw</strong>
                  <br />
                  This, combined with Guided Learning Discovery, give the students initiative in the lesson. It also provides a way for students who struggle with math to still contribute and learn.
                </li>
                <li>
                  <strong>Flexible Grouping</strong>
                  <br />
                  Students will be separated into assigned groups that combine different levels of ability to help all level contribute
                </li>
                <li>
                  <strong>Guided Learning Discovery</strong>
                  <br />
                  The format of the lesson is a guided discovery.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center">
              <strong>
                Student Engagement used througout the lesson
              </strong>
            </h5>
            <p className="lead text-font">
              Students will be researching the topic in their group, and teaching it back to the class. The formative assessment allows students to utilize their technology.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <h5 className="heading-font text-center">
              <strong>Academic Language</strong>
            </h5>
            <p className="lead text-font">
              <ul>
                <li>
                  Numerator
                </li>
                <li>
                  Denominator
                </li>
                <li>
                  Fraction
                </li>
                <li>
                  Percent
                </li>
                <li>
                  Decimal
                </li>
              </ul>
            </p>
          </Col>
          <Col lg={4}></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <h5 className="heading-font text-center">
              <strong>Materials</strong>
            </h5>
            <p className="lead text-font">
              <ul>
                <li>
                  Saxon Math Textbook
                </li>
                <li>
                  iPad
                </li>
              </ul>
            </p>
          </Col>
          <Col lg={6}>
            <h5 className="heading-font text-center">
              <strong>Technology</strong>
            </h5>
            <p className="lead text-font">
              <ul>
                <li>
                  Kahoot! Quiz
                </li>
                <li>
                  Selected Websites for the Guided Discovery
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center">
              <strong>Assets</strong>
            </h5>
            <p className="lead text-font">
              Students must provide an example of a fraction, decimal or percent in real life, which draws on their assets.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center">
              <strong>Differentiating Instruction</strong>
            </h5>
            <p className="lead text-font">
              The lesson will be differentiated in process by learning profile.
              <br />
              <br />
              The groups are separated into:
              <br />
              Group 1: Scott, Brock, David, Oscar, and 3 average students
              <br />
              Group 2: Emma, Samantha, Liz, Brian, Madison, and 3 average students.
              <br />
              Group 3: Sarah, Kristen, and 6 average students
              <br />
              <br />
              The Groups are set up so that Sarah is paired with a group that will be more scaffolded than others, being that it doesn’t contain a high achiever or gifted students.
              <br />
              <br />
I’ve attempted to split the other groups evenly to allow for a good mixing of abilities. What each student must do will also be written to stop the high achievers from railroading the whole activity for the strugglers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h5 className="heading-font text-center">
              <strong>Procedure with time allotments</strong>
            </h5>
            <p className="lead text-font">
              Hook/Engage/Pre-Assess Students
              <br />
              Show a pizza as a circle, then cut it into slices. Have students count the total slices and the slices I’ve “eaten”. I will then write this as a fraction, and begin the main part of the lesson. 5 minutes
              <br />
              <br />
              B) Communicate the purpose of the lesson to students (objective/assessment)
              <br />
              Show me you can identify a fraction and its parts, and convert between a decimal number and a percent.
              <br />
              <br />
              C) Instructional Sequence:
              <br />
              Students will be divided into groups and assigned the topic of fraction, percent, or decimal. Each group will be asked to define it, give an example in numbers and real life, and show how to add and subtract with it. 15 Minutes
              <br />
Students will then come back together and each group will present to the room.
              20 Minutes
              <br />
              <br />
              D) Closure:
              <br />
              We will wrap up with a Kahoot! Quiz to review the terms. 10 Minutes
              <br />
              Students will be assigned 7 problems, as well as 3 challenge problems - of which they must complete one.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SampleLessonPlan;
