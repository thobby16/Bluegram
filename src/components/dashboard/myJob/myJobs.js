import React, { Component } from 'react'
import Dashnav from '../DashBoardNav/dashnav'
import './myJobs.css'
import { Card } from 'react-bootstrap'


class MyJobs extends Component{
    render(){
        return(
            <div>
                <Dashnav/>
                <div className="myJobProfile">
                    <div>
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Info Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyJobs;