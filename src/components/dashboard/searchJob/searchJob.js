import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import SearchBanner from '../../../images/searchBanner.png'
import {Form ,Row,Col,Card} from 'react-bootstrap'
import './searchJob.css'
import Love from '../../icons/latestJobsIcons/love'
import Location from '../../icons/latestJobsIcons/location'
import Dollar from '../../icons/latestJobsIcons/dollar'
import deloitee2 from '../../../images/deloitee2.png'
import FullTime from '../../icons/latestJobsIcons/fulltime'
import PartTime from '../../icons/latestJobsIcons/partTime'



class SearchJob extends Component{
    render(){
        return(
            <div>
                <Dashnav/>
                <div className="searchHead1">
                <div  className="searchHead2">
                <h2>Search Jobs</h2>
                <p>Accounting Intern</p>
                        <Form.Row>
                            <Form.Group as={Col}>
                        <Form.Control as="select" defaultValue="Actively Searching">
                                            <option>Job Type </option>
                                            <option>...</option>
                        </Form.Control>
                        </Form.Group >
                        <Form.Group as={Col}>
                        <Form.Control as="select" defaultValue="Actively Searching">
                                            <option>Posted Anytime</option>
                                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Control as="select" defaultValue="Actively Searching">
                                            <option>Any Location</option>
                                            <option>...</option>
                        </Form.Control>
                        </Form.Group >
                        
                        <Form.Group as={Col}>
                        <Form.Control as="select" defaultValue="Actively Searching">
                                            <option>Salary Estimate</option>
                                            <option>...</option>
                        </Form.Control>
                        </Form.Group>
                       
                       
                       <Form.Group as={Col}>
                       <Form.Control as="select" defaultValue="Actively Searching">
                                            <option>Experience level</option>
                                            <option>...</option>
                        </Form.Control>
                       </Form.Group>
                        
                        </Form.Row>

                </div>
                
               
                </div>
                <div className="searchBody1">
                    <div className="searchBody2">

                    <Card  className="last" border="#E5E5E5" >
                        <Card.Header>Related Jobs 
                            <a href="#">see all</a>
                            <p>we found some jobs based on your profile</p>
                        </Card.Header>
                        
                        <Card.Body>
                        <Card.Title>Telsa</Card.Title>
                        
                        <Card.Text>
                        Audit
                        </Card.Text>
                        <span className="location1"><Location/></span>
                        <hr/>
                        <Card.Title>Genaral motors</Card.Title>
                        
                        <Card.Text>
                        Accounting Officer
                        </Card.Text>
                        <span className="location1"><Location/></span>
                        <hr/>
                        <Card.Title>Boeing</Card.Title>
                        
                        <Card.Text>
                        Risk Management
                        </Card.Text>
                        <span className="location1"><Location/></span>
                        <hr/>
                        <Card.Title>Lockheed</Card.Title>
                        
                        <Card.Text>
                        Analyst
                        </Card.Text>
                        <span className="location1"><Location/></span>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="searchBody2">
                    
                             <Card className="searchJob-class">
                            <Card.Body>
                            
                                <span className="fulltime"><FullTime/></span>
                              
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> 
                         <Card className="searchJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                         <Card className="searchJob-class">
                            <Card.Body>
                                <span className="fulltime"><PartTime/></span>
                                
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> 
                          <Card className="searchJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card> 
                          <Card className="searchJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                       <Card className="searchJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <img src={deloitee2}/>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                        

                    </div>
                
                </div>
            </div>
        )
    }
}

export default SearchJob;