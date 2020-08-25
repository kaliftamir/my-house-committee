import React, { } from 'react';
import { Card,Button,Accordion,Row,Col } from 'react-bootstrap';
import './Message.css'


function Message(props) {

    const { image,name,details} = props


    return(

        <div className="c-message">

            <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {name}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    
                        <Row>
                            <Col xs={3}>
                                <Card.Img variant="top" src={image}/>
                            </Col>
                            <Col xs={9}>
                                <Card.Body className="card-body">
                                    <Card.Title>Name: </Card.Title>
                                    <Card.Text> 
                                        Details:  {details}                                                            

                                    </Card.Text>
                                    <Card.Text> 
                                        Priority                                                              

                                    </Card.Text>
                                    <Row className="tenant-options"> 
                                        <Button variant="primary" size="sm">Update</Button>
                                        <Button variant="danger" size="sm">Delete</Button> 
                                    
                                    </Row>
                                                    
                                </Card.Body>
                            </Col> 
                        </Row> 

                    </Card.Body>
                 
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Click me!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

        </div>

        

    )
}


export default Message;