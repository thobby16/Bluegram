import React, { Component } from 'react'
import Navbar from '../layout/header/navbar'
import Rectangle from '../../images/Rectangle.png'
import './home.css'
import { Card, Button, Form, Col ,CardColumns} from 'react-bootstrap'
import JobField from '../layout/content/jobFields/jobField';
import LatestJob from '../layout/content/latestJobs/latestJob';
import Map from '../icons/homeIcon/map'
import ConnectStep from '../layout/content/connectStep/connectStep';
import Footer from '../layout/footer/footer'


const home = () => {
        return(
            <div>
           
           <Card className="bg-dark ">
            <Card.Img src={Rectangle} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Looking for career oppurtunities?</Card.Title>
                <Card.Text>
                we connect people and jobs at record breaking speed
                </Card.Text>
                <div className="cta">
               <Button className="first">Apply for jobs</Button>
               <Button className="second">Hire Top staffs</Button>
               </div>
            </Card.ImgOverlay>
            </Card>
           <Card className="search">
           <Card.Text style={{color: 'black'}}>
                Search between more than 50,000+ open jobs
                </Card.Text>
               <Form>
               <Form.Row>
                <Form.Group as={Col} >
                
                <Form.Control type="text" placeholder="Job title" />
                </Form.Group>

                <Form.Group as={Col} >
                
                <Form.Control  type="text" placeholder="City,state or Zipcode">
                </Form.Control>
                <span className="Map"><Map/></span>
                
                </Form.Group>
                <Form.Group as={Col} >
                
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Job fields</option>
                    <option>Finance</option>
                    <option>Technology</option>
                </Form.Control>
                </Form.Group>
        
            </Form.Row>
            <Button>Search Job</Button>
               </Form>
           </Card>
           
           
            <JobField/>
            <LatestJob/>
            <ConnectStep/>
            <Footer/>
            
            </div>
        
            
        )
    }


export default home;