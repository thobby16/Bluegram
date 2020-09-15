import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button, InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import Signup1 from '../../../images/signup.png'
import PersonalInfo from '../personalInformation/personalInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLock } from '@fortawesome/free-solid-svg-icons';
import './signup.css'

class Signup extends Component{
    constructor(){
        super()
        this.state ={
            step: 1,
            fullname:'',
            email:'',
            password:''   
        }
    }

    nextstep = ()=>{

    }
    render(){
        return(
            <div className="signup1">
                      
                    <div className="image">
                    <img src={Signin}/>
                    </div>        
                    
                    <div className="form">
                    <img src={Signup1}/>
                    <h2>Sign Up</h2>
                    <p>Ready to discover some amazing job opportunities?</p>
                    <Form>
                        <Form.Group as={Row} >
                            
                            <Col sm={10}>
                                <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faUser} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control  type="text" placeholder="Fullname" onChange={this.changeHandler}  required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="Email" onChange={this.changeHandler} required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="Password(minimum of 8 characters)" onChange={this.changeHandler} required/>
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