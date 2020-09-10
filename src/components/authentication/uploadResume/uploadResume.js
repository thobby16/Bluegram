import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import Upload from '../../../images/uploadresume.png'
import './uploadResume.css'

class UploadResume extends Component{
    render(){
        return(
            <div className="signup">
                      
                    <div className="image">
                    <img src={Signin}/>
                    </div>        
                    
                    <div className="form">
                        <img src={Upload}/>
                    <h2>Upload Resume</h2>
                    <p>Ready to discover some amazing job opportunities?</p>
                    <Form>

                        
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Highest qualification</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Job field</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row className="last">
                        <Form.Group as={Col} md={5} controlId="formGridState">
                            <Form.Label>Years of experience</Form.Label>
                                
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            

                        </Form.Row>
                        <Form.Row>
                            <Col>
                            <p>Add a resume and easily apply for jobs from anywhere. It’s simple to set up.</p>
                            </Col>
                        
                        </Form.Row>
                        

                        {/* <Form.Group as={Row} controlId="Email">
                            
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password(minimum of 8 characters)" required/>
                            </Col>
                        </Form.Group> */}
                        <Button as ={Link} to="/PersonalInformation" variant="primary" type="submit">
                                Sign Up
                            </Button>
                    </Form>
                    </div>
                    
                       
                    
               
            </div>
        )
    }
}

export default UploadResume;