import React from 'react'
import { Card , CardColumns ,Row , Col, Container} from 'react-bootstrap'
import del from '../../../../images/deloitee1.png';
import './latestjob.css';

const latestJob = ()=> {
    return (
        <div className="latestjob">
            <div className="headtext">
            <a to="#latestjobs" className="first">Latest jobs</a>
            <a to="#featuredjobs" className="second"> Featured jobs </a>
            </div>
                <Container>
                <Row xs={1} md={3}>
                    <Col >
                        <Card className="latestjob-class">
                            <Card.Body>
                                <img src={del}/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                        <Card.Body>
                        <img src={del}/>
                            <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                <Card.Text className="card-text-jobfield">
                                    (300 open positions)
                                </Card.Text>
                
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <img src={del}/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                    
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <img src={del}/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <img src={del}/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                    
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <img src={del}/>
                                <Card.Title className="card-title-jobfield">Accounting, Auditing and Finance</Card.Title>
                                    <Card.Text className="card-text-jobfield">
                                        (300 open positions)
                                    </Card.Text>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                   
                </Row>
                </Container>
                
            
            <a to="#seemore" className="third">See more</a>

        </div>
         
    )
}

export default latestJob