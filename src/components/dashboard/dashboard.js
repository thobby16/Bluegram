import React, { Component } from 'react'
import DashNav from '../dashboard/DashBoardNav/dashnav'
import { Button ,Row,Col,Card } from 'react-bootstrap'
import mainpic from '../../../src/images/mainprofile.png'
import './dashboard.css'
import Edit from '../icons/profileIcons/edit'
import Edit2 from '../icons/profileIcons/edit2'
import Edit3 from '../icons/profileIcons/edit3'
import Delete1 from '../icons/profileIcons/delete1'
import Add from '../icons/profileIcons/add'
import Award from '../icons/profileIcons/award'

class Dashboard extends Component{
    render(){
        return(
            <div >
                <DashNav/>
                <div className="cover">
                <Row  >
                <img className="pic" src ={mainpic}/>
                    <Col>
                   
                    <Button>Add cover photo</Button></Col>
                   
                </Row>   
                </div>
                <Row className="main" style={{backgroundColor:'#ffffff'}} >
                    
                    <Card border="#E5E5E5" >
                        <Card.Header>Basic Information
                            <span className="edit"><Edit/></span>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Email Address</Card.Title>
                        <Card.Text>
                        alandare@gmail.com
                        </Card.Text>
                        <Card.Title>Phone Number</Card.Title>
                        <Card.Text>
                           08034545426
                        </Card.Text>
                        <Card.Title>Discipline</Card.Title>
                        <Card.Text>
                        B.Sc Financial Accounting
                        </Card.Text>
                        <Card.Title>Second class (UPPER) </Card.Title>
                        <Card.Text>
                        Second class (UPPER
                        </Card.Text>
                        <Card.Title>School</Card.Title>
                        <Card.Text>
                        The University of Texas, Austin
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Col>
                        <Card className="content">
                            
                            <Card.Body>
                                
                                <Card.Title>About Me
                                <span className="econtent"><Edit2/></span>
                                </Card.Title>
                                <Card.Text>
                                I’m a product designer who believes that design should be purposeful, functional and harmonious to its original intention. my purpose is to constantly reinvent the way we experience the world and beyond.
                                </Card.Text>
                                <Card.Title className="after">Experience
                                <span className="add"><Add/></span>
                               <span className="addp"> <p>Add more</p></span>
                                </Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                                <Card.Title className="after">Skills</Card.Title>
                                <Card.Text>
                                
                                </Card.Text>
                                <Card.Title className="after">Education
                                <span className="add"><Add/></span>
                               <span className="addp"> <p>Add more</p></span>
                               </Card.Title>
                               <span className="edit3"><Edit3/></span>
                               <span className="delete"><Delete1/></span>
                               
                                <Card.Text>
                                The University of Texas, Austin  
                                </Card.Text>
                                <Card.Text>
                                Bachelor’s Degree, Financial Accounting
                                </Card.Text>
                                <Card.Text>
                                Austin, Texas
                                </Card.Text>
                                <Card.Text className="date">
                                Sept 2017 - Aug 2020
                                </Card.Text>


                                <Card.Title className="after">License and Certifications</Card.Title>
                                <Card.Text>
                               N/A
                                </Card.Text>
                                <span className="add" ></span>
                                <Award/>
                                
                               <span className="addp"> <p> <Add/><a href="#">Add a licence or certification</a> you have earned!</p></span>
                            </Card.Body>
                            
                            
                            
                        </Card>

                    </Col>
                   
                </Row>
               
            </div>
        )
    }
}

export default Dashboard;