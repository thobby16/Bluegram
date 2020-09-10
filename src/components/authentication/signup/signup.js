import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import Signup1 from '../../../images/signup.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLock } from '@fortawesome/free-solid-svg-icons';
import './signup.css'

class Signup extends Component{
    render(){
        return(
            <div className="signup">
                      
                    <div className="image">
                    <img src={Signin}/>
                    </div>        
                    
                    <div className="form">
                    <img src={Signup1}/>
                    <h2>Sign Up</h2>
                    <p>Ready to discover some amazing job opportunities?</p>
                    <Form>
                        <Form.Group as={Row} controlId="Fullname">
                            
                            <Col sm={10}>
                                <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control  type="text" placeholder="Fullname"  required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="Email">
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="Email" required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="Password(minimum of 8 characters)" required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Button className="signb" as ={Link} to="/PersonalInformation" variant="primary" type="submit">
                                Continue
                            </Button>
                    </Form>
                    </div>
                    
                       
                    
               
            </div>
        )
    }
}

export default Signup;