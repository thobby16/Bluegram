import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import { Card, Button, Form ,Col} from 'react-bootstrap'
import Location from '../../icons/latestJobsIcons/location'
import Dollar from '../../icons/latestJobsIcons/dollar'
import DeloitteH from '../../../images/deloitteHead.png'
import './application.css'
import SubmitModal from './submitModal/submitModal'


//const [modalShow, setModalShow] = React.useState(false);
class Application extends Component{
   constructor(){
       super()
       this.state={
           modalShow: false
       }
   }
   showModal = (e) =>{
        console.log("submitted");
        this.setState({modalShow:true})
   }

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
                                    <h6>Upload Your Resume</h6>
                                       <div className="mid" style={{display:"flex"}}>
                                       <label for="file-upload" className="btn btn-primary" >Upload Your Resume</label>
                                        <input type="file" style={{display:"none"}} id="file-upload" />
                                       <Form.Check type="checkbox" label="Fill out application with my resume" />
                                           </div> 
                                    <p className="info"> Please attach your resume and fill out the application below. Do not leave any information blank. Remember to answer all questions to the best of your ability. This application will assist us in determining the most qualified candidate for employment.</p>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label className="req" >First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name"  />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label className="req">Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label className="req">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label className="req">Phone</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label className="req">State/Province</Form.Label>
                                            <Form.Control type="text" placeholder="Select State/Province" />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label className="req">Zip/Postal Code</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>Current/Most Recent Job Title</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                            <Form.Label>Desired Salary in USD</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>

                                            <Form.Group as={Col} >
                                            <Form.Label>LinkedIn Profile Link</Form.Label>
                                            <Form.Control type="text"  />
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                    <div className="bottom">
                                    <div className="bottom1">
                                        <label>Upload Cover letter</label>
                                        <label for="file-upload" className="btn btn-primary" >Select Cover Letter</label>
                                        <input type="file" style={{display:"none"}} id="file-upload" />
                                        <p>.pdf and .doc files only, 4MB file size limit</p>
                                    </div>
                                    <div>
                                        <label>Upload Additional Files</label>
                                        <label for="file-upload" className="btn btn-primary" >Select File(s)</label>
                                        <input type="file" style={{display:"none"}} id="file-upload" />
                                        <p>.pdf and .doc files only, 4MB file size limit</p>
                                    </div>
                                    </div>
                                    <p className="footer">
                                    I’d like to receive Job Alerts and other marketing emails from Bluegram to assist me with my job search. I understand that I may opt out at any time.</p>
                                    <p className="footer2"> I authorize Bluegram to contact me regarding my employment, future opportunities, marketing or advertisements related to the services at the phone number provided, including, SMS and pre-recorded messages through the use of automated technology. I understand that I may opt out at any time as stated in the <a href="#">Terms and Conditions.</a>
                                    </p>
                                    <Button onClick={this.showModal}>Submit</Button>
                                   <SubmitModal
                                   show={this.state.modalShow}
                                   />

                        </Card.Body>
                    </Card>

                </div>
            </div>
        )
    }
}

export default Application