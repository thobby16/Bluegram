import React from 'react'
import { Card , CardColumns, Row, Col, Container} from 'react-bootstrap'
import './jobField.css';
import Tech from '../../../icons/jobFieldIcons/tech';
import Bank from '../../../icons/jobFieldIcons/bank';
import Agric from  '../../../icons/jobFieldIcons/agric'
import Build from '../../../icons/jobFieldIcons/build';

const jobField = ()=> {
    return (
        <div>
            <p className="text">Job Fields</p>
            <Container>
            <Row xs={1} md={3}  >
                <Col >
                    <Card className="jobfields-class">
                        <Card.Body>
                            <Bank/>
                            <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="jobfields-class">
                            <Card.Body>
                                <Tech/>
                                <Card.Title className="card-title-jobfield">Engineering & Technology</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col >
                    <Card className="jobfields-class">
                            <Card.Body>
                                <Agric/>
                                <Card.Title className="card-title-jobfield">Farming and Agriculture</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col  >
                    <Card className="jobfields-class">
                            <Card.Body>
                                <Build/>
                                <Card.Title className="card-title-jobfield">Building & Architecture</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                            
                            </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="jobfields-class">
                            <Card.Body>
                            <Bank/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                            
                            </Card.Body>
                    </Card>
                </Col>
                <Col  >
                    <Card className="jobfields-class">
                        <Card.Body>
                            <Agric/>
                            <Card.Title className="card-title-jobfield">Farming and Agriculture</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card className="jobfields-class">
                        <Card.Body>
                            <Tech></Tech>
                            <Card.Title className="card-title-jobfield">Engineering & Technology</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                        
                        </Card.Body>
                    </Card></Col>
                <Col  >
                    <Card className="jobfields-class">
                        <Card.Body>
                            <Build></Build>
                            <Card.Title className="card-title-jobfield">Building & Architecture</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
                      </Container>
           
           
        </div>
         
    )
}

export default jobField