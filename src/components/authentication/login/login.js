import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import './login.css'

class Login extends Component{
    render(){
        return(
            <div className="login">
                      
                    <div className="image">
                    <img src={Signin}/>
                    </div>        
                    
                    <div className="form">
                    <h2>Sign In</h2>
                    <p>Ready to discover some amazing job opportunities?</p>
                    <Form>
                        <Form.Group as={Row} controlId="Email">
                            
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email"  required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" required />
                            </Col>
                        </Form.Group>
                        <p className="forget">Forget Password?</p>
                        <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p className="need">Need an account? <a  href="/Signup">Sign Up</a></p>
                    </Form>
                    </div>
                    
                       
                    
               
            </div>
        )
    }
}

export default Login;