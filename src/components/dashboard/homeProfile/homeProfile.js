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
                <div className="main">
                    <div className="first1">
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
                        Second class (UPPER)
                        </Card.Text>
                        <Card.Title>School</Card.Title>
                        <Card.Text>
                        The University of Texas, Austin
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="second1">
                    <Card className="middle" border="light" >
                        <Card.Header >Summary</Card.Header>
                        <Card.Body>
                        <Card.Title className="t1"> You haven’t added a profile summary yet!</Card.Title>
                        <Card.Text className="t2">
                            <Add/>
                            Add Profile Summary
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" style={{ marginTop:"23px"}} >
                        <Card.Header >Experience</Card.Header>
                        <Card.Body>
                        <Card.Title className="t1">You haven’t added any job experience</Card.Title>
                        <Card.Text className="t2">
                        <Add/>
                            Add Experience
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" style={{ marginTop:"23px"}} >
                        <Card.Header >Skills</Card.Header>
                        <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" style={{ marginTop:"23px"}} >
                        <Card.Header  style={{paddingBottom:"0", display:"flex"}}>Education
                        <span className="add" style={{marginLeft: "63%"}}><Add/></span> 
                        <span className="addp"><p> Add more </p></span> 
                        </Card.Header>
                        <Card.Body>
                      
                                 <Card.Text>
                                The University of Texas, Austin  
                                <span className="edit3" style={{marginLeft:"16%"}}><Edit3/></span>
                               <span className="delete" style={{paddingLeft:"19px"}}><Delete1/></span>
                                </Card.Text>
                                <Card.Text className="sub">
                                Bachelor’s Degree, Accounting
                                </Card.Text>
                                
                                <Card.Text className="sub">
                                Sept 2017 - Aug 2020
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="middle" border="light" style={{ marginTop:"23px"}} >
                        <Card.Header style={{paddingBottom:"0", display:"flex"}} >License and Certifications
                        <span className="add" style={{marginLeft: "36%"}}><Add/></span> 
                        <span className="addp"><p> Add more </p></span>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <span className="award" Style={{marginLeft:"39%"}}><Award/></span>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="third">
                    <Card  className="last" border="#E5E5E5" >
                        <Card.Header>Resume/CV
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Upload a resume</Card.Title>
                       
                        
                        </Card.Body>
                    </Card>
                    <Card  className="last" border="#E5E5E5" style={{marginTop:'20px'}} >
                        <Card.Header>Employment Info
                            <span className="edit"><Edit/></span>
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>Years of Experience</Card.Title>
                        <hr/>
                        <Card.Text>
                        0
                        </Card.Text>
                        <Card.Title>Availability</Card.Title>
                        <hr/>
                        <Card.Text>
                        Immediate Employment
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>

                </div>
           
               
            </div>
        )
    }
}

export default HomeProfile;