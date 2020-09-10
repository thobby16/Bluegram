import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import Upload from '../../../images/uploadresume.png'
import './uploadResume.css'

class UploadResume extends Component{
    render(){
        return(
            <div className="upload">
                      
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
                                <Form.Control as="select" defaultValue="Select">
                                    <option>Select</option>
                                    <option>Degree</option>
                                    <option>Diploma</option>
                                    <option>High School</option>
                                    <option>MBA/MSC</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Job field</Form.Label>
                                <Form.Control as="select" defaultValue="Select">
                                    <option>Select</option>
                                    <option>Accounting , Auditing & Finance</option>
                                    <option>Admin & Office</option>
                                    <option>Building & Architecture</option>
                                    <option>Creative & Design</option>
                                    <option>Engineering & Technology</option>
                                    <option>Farming & Agriculture</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row className="last">
                        <Form.Group as={Col} md={5} controlId="formGridState">
                            <Form.Label>Years of experience</Form.Label>
                                
                                <Form.Control as="select" defaultValue="select">
                                    <option>select</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            

                        </Form.Row>
                        <Form.Row className="bottom">
                            <Col>
                            <p className="apply">Add a resume and easily apply for jobs from anywhere. It’s simple to set up.</p>
                            </Col>
                            <Form.File id="formcheck-api-regular">
                        <Form.File.Label data-browse="select a file"></Form.File.Label>
                        <Form.File.Input />
                        </Form.File>
                        
                        </Form.Row>
                        
                        
                        <Button as ={Link} to="/PersonalInformation" variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <p>By clicking "Sign Up", you agree to our <a href="#">terms & conditions</a> and <a href="#">privacy policy</a></p>
                    </Form>
                    </div>
                    
                       
                    
               
            </div>
        )
    }
}

export default UploadResume;