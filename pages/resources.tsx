import React from "react";
import Header from "../components/header";
import head from "next/head";
import { Tabs, Tab, Row, Col, Card } from "react-bootstrap";

function Resources() {
  return (
    <main>
      <head>
        <title>Digital Toolbox</title>
      </head>
      <Header />
      <article>
        <Tabs defaultActiveKey="1" id="toolbox-tabs">
          <Tab eventKey="1" title="Adobe Spark">
            <Card className="d-flex flex-column align-items-center">
              <Card.Title className="display-4 text-center heading-font">
                Adobe Spark
              </Card.Title>
              <Card.Img src="/adobe_spark.jpg" className="img-fluid w-50" />
              <Card.Text className="lead text-font mx-2">
                Adobe Spark is a tool for creating videos and other graphical
                media. The tool is free to use and the only catch is the
                watermark in the bottom right.
                <br />
                Students will use this as an alternative presentation format, as
                it allows more visually oriented students/artistic students to
                thrive.
              </Card.Text>
              <Card.Link className="mb-3" href="https://spark.adobe.com">
                Go to...
              </Card.Link>
            </Card>
          </Tab>
          <Tab eventKey="2" title="Wikipedia">
            <Card className="d-flex flex-column align-items-center">
              <Card.Title className="display-4 heading-font">
                Wikipedia
              </Card.Title>
              <Card.Img src="/wikipedia.jpg" className="img-fluid w-50" />
              <Card.Text className="lead text-font mx-2">
                Wikipedia is an online encyclopedia of sorts that presents all
                types of information. It is community driven, but constantly
                fact-checked. It also provides a massive list of references.
                <br />
                Students will use this for an imformal source, as well as a
                launching ground to build from.
              </Card.Text>
              <Card.Link className="mb-3" href="https://www.wikipedia.org/">
                Go To...
              </Card.Link>
            </Card>
          </Tab>
          <Tab eventKey="3" title="Sway">
            <Card className="d-flex flex-column align-items-center">
              <Card.Title className="display-4 heading-font">
                Microsoft Sway
              </Card.Title>
              <Card.Img src="/microsoft_sway.jpg" className="img-fluid w-50" />
              <Card.Text className="lead text-font mx-2">
                Microsoft Sway is a tool for creating visually striking
                newsletters, presentations, etc. The tool comes packages with
                Microsoft Office. The final products are viewable via a link.
                <br />
                Students will use this in a similar vein to Adobe Spark, as it
                provides another presentation avenue.
              </Card.Text>
              <Card.Link className="mb-3" href="https://sway.office.com">
                Go To...
              </Card.Link>
            </Card>
          </Tab>
          <Tab eventKey="4" title="Prezi">
            <Card className="d-flex flex-column align-items-center">
              <Card.Title className="display-4 heading-font">Prezi</Card.Title>
              <Card.Img src="/prezi.jpg" className="img-fluid w-50" />
              <Card.Text className="lead text-font mx-2">
                Prezi is another presentation software. This one specializes in
                attention-grabbing transitions and graphics.
                <br />
                This tools falls in the same line as Adobe Spark and Microsoft
                Sway. All of these allow for students to create a presentation,
                yet provide different toolkits and approaches that encourage
                student choice.
              </Card.Text>
              <Card.Link className="mb-3" href="https://prezi.com/">
                Go To...
              </Card.Link>
            </Card>
          </Tab>
          <Tab eventKey="5" title="Google Earth">
            <Card className="d-flex flex-column align-items-center">
              <Card.Title className="display-4 heading-font">
                Google Earth
              </Card.Title>
              <Card.Img src="/google_earth.jpg" className="img-fluid w-50" />
              <Card.Text className="lead text-font mx-2">
                Google Earth is arguably the most detailed Globe available. It
                provides differing views of earth, including thermal sattelite,
                etc. Google Earth also provides views of Mars.
                <br />
                Google Earth is a tool to help students visualize the earth, but
                also explore it. Google Earth provides the tools needed to help
                a student make a report, or something else along those lines.
              </Card.Text>
              <Card.Link className="mb-3" href="https://www.google.com/earth/">
                Go To...
              </Card.Link>
            </Card>
          </Tab>
        </Tabs>
      </article>
    </main>
  );
}

export default Resources;
