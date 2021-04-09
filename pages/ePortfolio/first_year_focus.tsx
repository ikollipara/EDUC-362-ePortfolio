import React from 'react';
import head from 'next/head';
import Header from '../../components/header';
import { Col, Row } from 'react-bootstrap';

function FirstYearFocus() {
    return  (
        <main>
            <head>
                <title>First Year Focus</title>
            </head>
            <article>
                <Header />
                <div className="container-fluid">
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
                                <strong>Goal:</strong> To Create a Student-Driven Learning Environment
                            </h4>
                        </Col>
                    </Row>
                </div>
            </article>
        </main>
    )
}

export default FirstYearFocus;