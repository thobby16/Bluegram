import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import { Card, Button, Form } from 'react-bootstrap'
import Location from '../../icons/latestJobsIcons/location'
import Dollar from '../../icons/latestJobsIcons/dollar'
import DeloitteH from '../../../images/deloitteHead.png'
import './application.css'



class Application extends Component{
    render(){
        return(
            <div>
                <Dashnav/>
                <div className="applicationForm">
                    <Card>
                        <Card.Body>
                        <img src={DeloitteH}/>
                                <h4>Accounting  Intern</h4>
                                    <span className="locationIcon"> <Location/> </span>
                                    <span className="dollarIcon"> <Dollar/> </span>
                                    <p>Upload Your Resume</p>
                                       <div className="mid" style={{display:"flex"}}>
                                       <Button>Upload Your Resume</Button>
                                       <Form.Check type="checkbox" label="Fill out application with my resume" />
                                           </div> 
                                    <p className="info"> Please attach your resume and fill out the application below. Do not leave any information blank. Remember to answer all questions to the best of your ability. This application will assist us in determining the most qualified candidate for employment.</p>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        )
    }
}

export default Application