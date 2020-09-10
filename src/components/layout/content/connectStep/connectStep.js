import React, { Component } from 'react';
import {Card, Button, Form,Col, Row , Container,Carousel} from 'react-bootstrap'
import './connectStep.css'
import connect from '../../../../images/Rectangle1865.png';
import Daimler from '../../../../images/daimler.png';
import Deloitte from '../../../../images/deloitte.png';
import Hulu from '../../../../images/hulu.png';
import Quatar from '../../../../images/quatar.png';
import img1 from '../../../../images/dp1.png';
import img2 from '../../../../images/dp2.png';
import img3 from '../../../../images/dp3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight , faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

class connectStep extends Component{
    render(){
        return(
            <div className="connectStep">
        <div className="connect">
            <Card  className="connect1">
                <Card.Body >
                    <Card.Title className="chead">Connect with Top Employers</Card.Title>
                        <Card.Text className="cbody">
                            <Row>
                                <Col className="begin">
                                <h5>Step</h5>
                                <p className= "alpha">1</p>
                                <h6 className= "alpha">Sign up</h6>
                                </Col>
                                <Col className="line" ><hr/></Col>
                                
                                <Col className="middle">
                                <h5>Step</h5>
                                <p>2</p>
                                <h6>Complete Profile</h6>
                                </Col>
                                <Col className="line"><hr/></Col>
                                
                                <Col className="End">
                                <h5>Step</h5>
                                <p>3</p>
                                <h6>Start Applying</h6>
                                </Col>
                            </Row>
                        </Card.Text>
                    <Button className="bbody">Find Jobs</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="connect2">
            <h2 className="headp"> Get a job in a whole different way</h2>
            <p className="pbody" >
            If you need work, we have it. PeopleReady puts thousands of people to work every day, and we’re growing. And that means we need hard workers like you. From general labor to hospitality to warehouse and manufacturing, start your application and see what jobs fit with your skills
            <a className="abody" to="Readmore">Read more</a>
            </p>
        </div>
        <div className="about">
            <div className="connect3">
                <h2 className="abouth">what people say about us</h2>
                <p className="aboutp"> Our national teams provide expertise in flexible, industry-specific solutions for construction, hospitality, manufacturing and logistics, marine, transportation, warehousing and distribution, waste and recycling, and many other industries. </p>
            </div>
            <div className="connect4"> 
                <Card className="connect5"> 
                    <Card.Body>
                        <h1 >"</h1>
                         <Card.Text className="connectText">
                    The company has potential being world no one and can help many thousands and thousand's get jobs month on month. And can be among top company's in India.
                       
                        </Card.Text>
                        <img src={img1}/>
                        <h4 className="hconnect">Alex Sanders</h4>
                        <h6>Accountant Bank of America</h6>
                    </Card.Body>

                </Card>
                <Card className="connect5">
                    <Card.Body>
                        <h1 >"</h1>
                        <Card.Text className="connectText">
                    The company has potential being world no one and can help many thousands and thousand's get jobs month on month. And can be among top company's in India.
                        </Card.Text>
                        <img src={img2}/>
                        <h4>Alex Sanders</h4>
                        <h6>Accountant Bank of America</h6>
                    </Card.Body>

                </Card>
                <Card className="connect5">
                    <Card.Body>
                        <h1 >"</h1>
                        <Card.Text className="connectText">
                    The company has  many thousands and thousand's get jobs month on month. And can be among top company's in India.
                        </Card.Text>
                        <img src={img3}/>
                        <h4>Alex Sanders</h4>
                        <h6>Accountant Bank of America</h6>
                    </Card.Body>

                </Card>

            </div>
        </div>
        <div className="base">
            
        </div>
        <div className="connect6">
            <Container>
                    <h2>Connecting you with top employers</h2>
                    <p>Your next job could be with one of these leading companies</p>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <Row xs={1} md={4}>
                                <Col xs={6}><img src={Daimler}/> </Col>
                                <Col xs={6}><img src={Deloitte}/> </Col>
                                <Col xs={6}><img src={Hulu}/></Col>
                                <Col xs={6}><img src={Quatar}/></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Row xs={1} md={4}>
                                <Col xs={6}><img src={Quatar}/> </Col>
                                <Col xs={6}><img src={Hulu}/> </Col>
                                <Col xs={6}><img src={Hulu}/></Col>
                                <Col xs={6}><img src={Deloitte}/></Col>
                            </Row>

                        </Carousel.Item>
                       
                    </Carousel>
                    <div className="arrow">
                        
                        <FontAwesomeIcon role="button" data-slide="prev" icon={faArrowCircleLeft} color="#0056C6" font-size ="40px" />
                        
                    
                    <FontAwesomeIcon icon={faArrowCircleRight} color="#0056C6" font-size ="40px" />
                    
                    </div>
                    
                   
                    
                   
                    
            </Container>

        </div>
        <div className="connect7">
            <div className="connect8"> 
            <img src={connect}></img>
            </div>
            <div className="connect9">
            <h2 className="headp"> Stay connected with us.</h2>
            <p>Subscribe to receive email updates about Bluegram</p>
            <Form>
               
                <Form.Group  controlId="formGridEmail">
                <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                
                </Form>
                <Button>Subscribe</Button>
            </div>
        </div>
        
           
        
      </div>

        )
    }
} 

export default connectStep;