import React, { Component } from 'react';
import { Container, Form , Row , Col ,Button,InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Signin from '../../../images/signin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import {faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faLock } from '@fortawesome/free-solid-svg-icons';
import './login.css'

var headers = {
    'Access-Control-Allow-Origin': '*',        
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

class Login extends Component{
   
    constructor() {
        super()
        this.state ={
            email:'',
            password:'',
            submit:false
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    
    changeHandler =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e)=>{
        console.log(this.state)
        e.preventDefault();
        axios({
            method:'POST',
            url:'https://bluegram-api.herokuapp.com/api/v1/auth/login' ,
            data:{
                email: this.state.email,
                password: this.state.password
            }
            
        }).then (response=>{
                this.setState({submit:true})
                console.log(response);
                this.props.history.push("/Dashboard");
        }).catch(error=>{
            console.log(error)
        })
        
    }


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
                        <Form.Group as={Row} >
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="email" placeholder="Email" id="email" onChange={this.changeHandler}  required/>
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                            
                            <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock} color="#0056C6"/></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="password" placeholder="Password" id="password" onChange={this.changeHandler} required />
                            </InputGroup>
                            </Col>
                        </Form.Group>
                        <p className="forget">Forget Password?</p>
                        <Button  variant="primary" type="submit" onClick={this.handleSubmit}>
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