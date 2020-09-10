import React from 'react'
import {ModalFooter, Container ,Row ,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook , faInstagram ,faTwitter ,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './footer.css'

const footer = ()=>{
    return(
        <div className="main-footer">
        <Container>
            <Row xs={1} md={4}>
                <h4>BLUEGRAM</h4>
                
                
            <Col sm>
                <h6>Company</h6>
                
                    <ul className="list-unstyled">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </Col>
                
           
            <Col sm>
                <h6>Resources</h6>
                
                    <ul className="list-unstyled">
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </Col>
                
          
            <Col sm>
                <h6>Privacy & Security</h6>
                
                    <ul className="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security Policy</a></li>
                
                    </ul>
                </Col>
                
            </Row>

            
        </Container>
        <div className= "copyright">
            <p>Copyright © BLUEGRAM 2020. All Rights Reserved.</p>
            <div className="socials">
                <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faTwitter} color="#FFFFFF"></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faFacebook} color="#FFFFFF"></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faInstagram} color="#FFFFFF"></FontAwesomeIcon></li>
                    <li><FontAwesomeIcon icon={faLinkedinIn} color="#FFFFFF"></FontAwesomeIcon></li>
                    
                </ul>
            </div>
        </div>
      </div>
    )
}

export default footer