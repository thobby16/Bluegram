import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import personalInfo from '../../../images/personalinfo.png'
import './personalInfo.css'

class PersonalInfo extends Component{
    constructor(){
        super()
        this.state={
            dateOfBirth:"",
            gender:"",
            phone:""
        }
    }
    render(){
        return(
            <div className="personal">
                      
                    <div className="image">
                    <img src={Signin}/>
                    </div>        
                    
                    <div className="form">
                        <img src={personalInfo}/>
                    <h2>Personal Information</h2>
                    <p>Ready to discover some amazing job opportunities?</p>
                    <Form>

                        
                        <Form.Row>
                            <Form.Group as={Col} >
                            <Form.Label>Date of birth</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                            <Form.Label>Month</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            
                            <Form.Group as={Col} >
                            <Form.Label>Year</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row className="last">
                        <Form.Group as={Col} md={4} controlId="formGridState">
                            <Form.Label>Country code</Form.Label>
                                
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md={8} controlId="formGridState">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text" required/>
                            </Form.Group>

                        </Form.Row>
                      
                        
                        <Button as ={Link} to="/UploadResume" variant="primary" type="submit">
                                Continue
                            </Button>
                    </Form>
                    </div>
                    
                       
                    
               
            </div>
        )
    }
}

export default PersonalInfo;