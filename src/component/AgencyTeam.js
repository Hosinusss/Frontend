import React from "react";
import { Container, CardBody, Col, Row, Card } from "reactstrap";

import Image1 from "../assets/images/client/01.jpg";
import Image2 from "../assets/images/client/02.jpg";
import Image3 from "../assets/images/client/03.jpg";
import Image4 from "../assets/images/client/04.jpg";

/**
 * Agency team section
 */
export default function AgencyTeam() {
    const team =
        [
            {
                name: 'Cristino Murphy',
                profile: Image1,
                department: 'Management'
            },
            {
                name: 'Leosy Clony',
                profile: Image2,
                department: 'Management'
            },
            {
                name: 'Amanda Lair',
                profile: Image3,
                department: 'Management'
            },
            {
                name: 'Calvin Carlo',
                profile: Image4,
                department: 'Management'
            }
        ]



    return (
        <>
            <section className="section overflow-hidden" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Our Mind Power</h4>
                                <p className="para-desc mx-auto text-muted mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        {team.map((item, key) => (
                            <Col lg={3} md={6} className="mt-4 pt-2" key={key}>
                                <Card className="border-0 text-center shadow border-0 overflow-hidden rounded">
                                    <img src={item.profile} className="img-fluid" alt="" />
                                    <CardBody>
                                        <h5 className="mb-1">{item.name}</h5>
                                        <small className="text-muted">{item.department}</small>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
};