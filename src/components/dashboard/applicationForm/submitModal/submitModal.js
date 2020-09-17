import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import Submit from '../../../icons/SubmitIcon/submit';
import {Link } from 'react-router-dom'
import './submitModal.css'


function submitModal (props){
    
    return(
        <div>
            <Modal
      {...props}
      size="md"
     
      centered
    >
      
      <Modal.Body>
          <span className="submitIcon"> <Submit/></span>
        <h4>Your application has been sent Succesfully</h4>
        <Button as ={Link} to="/Apply">Continue</Button>
      </Modal.Body>
    </Modal>
        </div>
    )

}

export default submitModal;