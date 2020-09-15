import React from 'react'
import { Navbar, Nav ,Button,Form,FormControl} from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './navbar.css';
import Login from '../../authentication/login/login';

const navbar = ()=>{
    return(
        <Navbar fixed="top" sticky="top"  bg="light" expand="lg"  >
            <Navbar.Brand as={Link} to="/Home" className={styles.navbar}> BLUEGRAM </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
         <Nav.Link  as={Link} to="/Home">Home</Nav.Link>
         <Nav.Link to="#About Us">About Us</Nav.Link>
        <Nav.Link to="#Fields">Fields</Nav.Link>
        <Nav.Link as={Link} to="/FindJobs">Find Jobs</Nav.Link>
        <Nav.Link to="#Contact Us">Contact Us</Nav.Link>
        
        </Nav>
        <Button as ={Link} to="/Login" variant="outline-primary" >Login</Button>
        </Navbar.Collapse>
        </Navbar>
    );

}

export default navbar