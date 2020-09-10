import React from 'react'
import { Card , CardColumns, Row, Col, Container} from 'react-bootstrap'
import './jobField.css';

const jobField = ()=> {
    return (
        <div>
            <p className="text">Job Fields</p>
            <Container>
            <Row xs={1} md={3}  >
                <Col >
                    <Card className="jobfields-class">
                        <Card.Body>
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
                            <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                        
                        </Card.Body>
                    </Card></Col>
                <Col  >
                    <Card className="jobfields-class">
                        <Card.Body>
                            <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
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