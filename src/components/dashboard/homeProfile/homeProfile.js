import React, { Component } from 'react'
import DashNav from '../DashBoardNav/dashnav'
import { Button ,Row,Col,Card } from 'react-bootstrap'
import mainpic from '../../../images/mainprofile.png'
import './homeProfile.css'
import Edit from '../../icons/profileIcons/edit'
import Edit2 from '../../icons/profileIcons/edit2'
import Edit3 from '../../icons/profileIcons/edit3'
import Delete1 from '../../icons/profileIcons/delete1'
import Add from '../../icons/profileIcons/add'
import Award from '../../icons/profileIcons/award'

class HomeProfile extends Component{
    render(){
        return(
            <div>
                <DashNav/>
                <div className="cover2">
                <Row  >
                <img className="pic2" src ={mainpic}/>
                <h4>Alan Dare</h4>
                <p>Accounting | Huston, Texas </p>
                    
                   
                </Row>   
                </div>
                <Row className="main" >
                    
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
                    <Card className="middle" border="light" >
                        <Card.Header >Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" >
                        <Card.Header >Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" >
                        <Card.Header >Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" >
                        <Card.Header >Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" >
                        <Card.Header >Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Light Card Title</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card  className="last" border="#E5E5E5" >
                        <Card.Header>Resume/CV
                            <span className="edit"><Edit/></span>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Email Address</Card.Title>
                        <Card.Text>
                        alandare@gmail.com
                        </Card.Text>
                        
                        </Card.Body>
                    </Card>
                    <Card  className="last" border="#E5E5E5" >
                        <Card.Header>Employment Info
                            <span className="edit"><Edit/></span>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Email Address</Card.Title>
                        <Card.Text>
                        alandare@gmail.com
                        </Card.Text>
                        
                        </Card.Body>
                    </Card>
                       
                    </Col>
                   
                </Row>
               
            </div>
        )
    }
}

export default HomeProfile;