import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import SearchBanner from '../../../images/searchBanner.png'
import {Form ,Row,Col,Card, Button} from 'react-bootstrap'
import './apply.css'
import Love from '../../icons/latestJobsIcons/love'
import Location from '../../icons/latestJobsIcons/location'
import Dollar from '../../icons/latestJobsIcons/dollar'
import deloitee2 from '../../../images/deloitee2.png'
import FullTime from '../../icons/latestJobsIcons/fulltime'
import PartTime from '../../icons/latestJobsIcons/partTime'
import Back from '../../icons/myJobsIcons/back'



class apply extends Component{
    render(){
        return(
            <div>
                <Dashnav/>
                <div className="applyHead1">
                <div  className="applyHead2">
                
                      

                </div>
                
               
                </div>
                <div className="applyBody1">
                    <div className="applyBody2">

                    <Card  className="last" border="#E5E5E5" >
                        <span className="backIcon"><Back/></span>
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
                    <div className="applyBody3">
                        <Card >
                            <Card.Body>
                                <h5>Deloitte</h5>
                                <h4>Accounting  Intern</h4>
                                    <span className="locationIcon"><Location/></span>
                                    <span className="dollarIcon"><Dollar/></span>
                                    <Button>Apply Now</Button>
                                    <Card.Link href="#">Job</Card.Link>
                                    <Card.Link href="#">Company</Card.Link>
                                    <Card.Link href="#">Benefits</Card.Link>
                                <hr/>
                                
                                <Card.Text>
                                <h4>Job Summary</h4>
                                <p>
                                Prepare monthly financial statements, reports and records by collecting, analyzing and summarizing account information;</p>
                                <p> Fixed asset processing and reporting, including AFE set-up and monitoring, capital accruals, ARO, ad valorem taxes and depreciation; </p>
                                <p> Cash management, including borrowings and debt compliance, cash projections and wire transfers; bank reconciliation;</p>
                                <p>Commodity and interest rate derivatives accounting; </p>
                                 <p> Preparation of journal entries and GL account reconciliations; </p>
                                  <p>Coordination of annual external audit and partnership tax reporting;</p>
                                 <p>  Accounting for acquisitions and dispositions;
                                </p>
                                <h4>Education and Experience</h4>
                                <li>Completion of first degree courses in Accounting. Book keeping experience</li>
                                <li>Book Keeping Experience</li>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                            
                    </div>
                
                </div>
            </div>
        )
    }
}

export default apply;