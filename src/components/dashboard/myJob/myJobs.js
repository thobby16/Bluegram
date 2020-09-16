import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import small from '../../../images/smallpic.png'
import './myJobs.css'
import { Card , Form, NavLink, Nav, Row, Col} from 'react-bootstrap'
import FullTime from '../../icons/latestJobsIcons/fulltime'
import Love from '../../icons/latestJobsIcons/love'
import deloitee2 from '../../../images/deloitee2.png'
import Dollar from '../../icons/latestJobsIcons/dollar'
import Location from '../../icons/latestJobsIcons/location'
import Favorite from '../../icons/myJobsIcons/favorite'


class MyJobs extends Component{
    render(){
        return(
            <div>
                <Dashnav/>
                <div className="myJobProfile">
                    <div style={{width:'18%', float:"left"}}>
                    <Card border="info" >
                        <img src={small}/>
                        <h2>Alan Dare</h2>
                        
                        <Card.Body>
                            <h3>Financial Accounting</h3>
                            <p>Registered on: 10-08-2020</p>
                            <Form.Control as="select" defaultValue="Actively Searching">
                                    <option>Actively Searching</option>
                                    <option>...</option>
                                </Form.Control>
                        <p className="subtext">Your job profile is currently visible to everyone actively employing. Click on the drop down to change job status</p>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="myJobBody">
                        <Nav style={{paddingLeft:"38px"}}>
                        <NavLink>Saved Jobs</NavLink>
                        <NavLink>Jobs Applied For</NavLink>
                        </Nav>
                        <Row xs={1} sm={3} style={{width:"60%" }} >
                            <Col style={{paddingLeft:"38px", marginTop:"31px"}}>  <Card className="myjob-class">
                            <Card.Body>
                            
                                <span className="fulltime"><FullTime/></span>
                              
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        <Col style={{paddingLeft:"38px" , marginTop:"31px"}}>  <Card className="myjob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        <Col style={{paddingLeft:"38px" , marginTop:"31px"}}> <Card className="myjob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        <Col style={{paddingLeft:"38px", marginTop:"31px"}}>  <Card className="myjob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        <Col style={{paddingLeft:"38px" , marginTop:"31px"}}>  <Card className="myjob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        <Col style={{paddingLeft:"38px" , marginTop:"31px"}}> 
                         <Card className="myjob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Favorite/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> </Col>
                        </Row>
                        
                       
                    
                     </div>
                </div>
                
            </div>
        )
    }
}

export default MyJobs;