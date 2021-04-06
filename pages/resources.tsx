import React from "react";
import Header from "../components/header";
import head from "next/head";
import { Tab, Row, Col, Nav } from "react-bootstrap";

function Resources() {
  return (
    <main>
      <head>
        <title>Digital Toolbox</title>
      </head>
      <Header />
      <article>
        <Tab.Container id="toolbox-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Adobe Spark</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Wikipedia</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Sway</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Prezi</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Google Earth</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h1 className="display-4 text-center heading-font">
                    Adobe Spark
                  </h1>
                  <img src="adobe_spark.jpg" className="img-fluid" style={{width: "60%"}} />
                  <p className="lead text-font">
                      Adobe Spark is a tool for creating videos and other
                      graphical media. The tool is free to use and the only
                      catch is the watermark in the bottom right.
                      <br />
                      Students will use this as an alternative presentation
                      format, as it allows more visually oriented students/artistic
                      students to thrive.
                  </p>
                  <a className="btn btn-outline-primary" href="https://spark.adobe.com">Go to...</a>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1 className="display-4 text-center heading-font">
                   Wikipedia 
                  </h1>
                  <img src="wikipedia.jpg" className="img-fluid" style={{width: "60%"}} />
                  <p className="lead text-font">
                      Wikipedia is an online encyclopedia of sorts that presents all types of
                      information. It is community driven, but constantly fact-checked. It also
                      provides a massive list of references.
                      <br />
                      Students will use this for an imformal source, as well as a launching ground
                      to build from.
                  </p>
                  <a className="btn btn-outline-primary" href="https://www.wikipedia.org/">Go to...</a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h1 className="display-4 text-center heading-font">
                      Microsoft Sway
                  </h1>
                  <img src="/microsoft_sway.jpg" className="img-fluid" style={{width: "60%"}} />
                  <p className="lead text-font">
                      Microsoft Sway is a tool for creating visually striking newsletters,
                      presentations, etc. The tool comes packages with Microsoft Office. The
                      final products are viewable via a link.
                      <br />
                      Students will use this in a similar vein to Adobe Spark, as it provides
                      another presentation avenue.
                  </p>
                  <a className="btn btn-outline-primary" href="https://sway.office.com">Go to...</a>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h1 className="display-4 text-center heading-font">
                      Prezi
                  </h1>
                  <img src="/prezi.jpg" className="img-fluid" style={{width: "60%"}} />
                  <p className="lead text-font">
                      Prezi is another presentation software. This one specializes in
                      attention-grabbing transitions and graphics.
                      <br />
                      This tools falls in the same line as Adobe Spark and Microsoft Sway.
                      All of these allow for students to create a presentation, yet provide
                      different toolkits and approaches that encourage student choice.
                  </p>
                  <a className="btn btn-outline-primary" href="https://prezi.com/" />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h1 className="display-4 text-center heading-font">
                      Google Earth
                  </h1>
                  <img src="/google_earth.jpg" className="img-fluid" style={{width: "60%"}} />
                  <p className="lead text-font">
                      Google Earth is arguably the most detailed Globe available.
                      It provides differing views of earth, including thermal sattelite, etc.
                      Google Earth also provides views of Mars.
                      <br />
                      Google Earth is a tool to help students visualize the earth, but also explore
                      it. Google Earth provides the tools needed to help a student make a report, or
                      something else along those lines.
                  </p>
                  <a className="btn btn-outline-primary" href="https://www.google.com/earth/">Go to...</a>
                </Tab.Pane>{" "}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </article>
    </main>
  );
}

export default Resources;
