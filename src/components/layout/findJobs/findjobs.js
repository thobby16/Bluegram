import React, { Component } from 'react'
import './findJobs.css'
import Love from '../../icons/latestJobsIcons/love'
import FullTime from '../../icons/latestJobsIcons/fulltime'
import Dollar from '../../icons/latestJobsIcons/dollar'
import Location from '../../icons/latestJobsIcons/location'
import del from '../../../images/deloitee1.png'
import { Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'

class findJobs extends Component{
    componentDidMount(){
        axios.get('https://bluegram-api.herokuapp.com/api/v1/job/1')
        .then(Response=>{
            console.log(Response);
        })
    }
    render(){
        return(
            <div>
            <div className="findJobCover">
                
                <h2>Find Jobs</h2>
                <p>Find available jobs below</p>

            </div>
            <div className="findJobBody">
                
                    <Card className="findJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                     <Card className="findJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                     <Card className="findJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
                                <Card.Title className="card-title-latestjob">Accounting Intern</Card.Title>
                                    <Card.Text className="card-text-latestjob">
                                    Deloitte
                                    </Card.Text>
                                    <span className="dollar"> <Dollar/></span>
                                    <span className="location"><Location/></span>
                    
                            </Card.Body>
                        </Card>
                      <Card className="findJob-class">
                            <Card.Body>
                                <span className="fulltime"><FullTime/></span>
                                
                                <span className="love"><Love/></span>
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

        )
    }
}

export default findJobs