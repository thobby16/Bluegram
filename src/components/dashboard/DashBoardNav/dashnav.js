import React from 'react'
import { Navbar, Nav ,Button,Form,FormControl, NavDropdown , MenuItem} from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import profileimg from '../../../images/profileimage.png';

import styles from './dashnav.css';
import Login from '../../authentication/login/login';

const dashnav = ()=>{
    return(
        <Navbar fixed="top" sticky="top"  bg="light" expand="lg"  >
            <Navbar.Brand as={Link} to="/Home" className={styles.navbar}> BLUEGRAM </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
         <Nav.Link  as={Link} to="/MyJobs">My Jobs</Nav.Link>
         <Nav.Link to="#About Us">Job Listing</Nav.Link>
         <Form inline>
      <FormControl type="text" placeholder="Search for jobs" className="mr-sm-4" />
        </Form>
        
        </Nav>
        <Nav>
        <NavDropdown eventKey={1} 
                title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src={profileimg} 
                            alt="user pic"
                        />
                    </div>
                } 
                id="basic-nav-dropdown">

                <NavDropdown.Item eventKey={1.1} href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item>Notifications</NavDropdown.Item>
                <NavDropdown.Item eventKey={1.3}>
                    <i className="fa fa-sign-out"></i> Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        
        </Navbar.Collapse>
        </Navbar>
    );

}

export default dashnav