import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import Signup1 from '../../../images/signup.png'
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
                            <Form.Control type="text" placeholder="Fullname"  required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="Email">
                            
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password(minimum of 8 characters)" required/>
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