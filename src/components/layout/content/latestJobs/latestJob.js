import React from 'react'
import { Card , CardColumns ,Row , Col, Container} from 'react-bootstrap'
import del from '../../../../images/deloitee1.png';
import Love from '../../../icons/latestJobsIcons/love';
import Dollar from '../../../icons/latestJobsIcons/dollar';
import './latestjob.css';
import FullTime from '../../../icons/latestJobsIcons/fulltime';
import Location from '../../../icons/latestJobsIcons/location';

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
                                <span className="fulltime"><FullTime/></span>
                                <img src={del}/>
                                <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                        <Card.Body>
                        <span className="fulltime"><FullTime/></span>
                        <img src={del}/>
                        <span className="love"><Love/></span>
                            <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                <Card.Text className="card-text-latestjob">
                                Deloitte
                                </Card.Text>
                                <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <span className="fulltime"><FullTime/></span>
                            <img src={del}/>
                            <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <span className="fulltime"><FullTime/></span>
                            
                            <img src={del}/>
                            <span className="love"><Love/></span>
                            
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <span className="fulltime"><FullTime/></span>
                            <img src={del}/>
                            <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                        Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                         </Card>
                    </Col>
                    <Col >
                        <Card  className="latestjob-class">
                            <Card.Body>
                            <span className="fulltime"><FullTime/></span>
                            <img src={del}/>
                            <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                        Deloitee
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
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