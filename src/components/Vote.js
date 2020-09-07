import React, { } from 'react';
import { Card,Button,Accordion,Row,Col } from 'react-bootstrap';
import './Message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parse from 'parse';



function Vote(props) {

    const { id,title,details,options,dueDate,votes } = props
    
    
      
    return(

        <div className="c-message">

            <Accordion>
                <Card>
                    <Card.Header className="title">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                           <span className="title-text">
                            title={"Tamir"}
                           </span>
                                               
                           

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        
                            <Row>
                                
                                <Col xs={9}>
                                    <Card.Body className="card-body">
                                        <Card.Title></Card.Title>
                                            <div className="details">
                                                <Row>
                                                    <Col xs={3}>
                                                        Details:
                                                    </Col>
                                                    <Col xs={6}>
                                                        details={"bla bla bla bla"}
                                                    </Col>                                                           

                                                </Row>
                                                
                                            </div>
                                        <div> 
                                            <Row>
                                                <Col xs={4}>
                                                    End Date:
                                                </Col>
                                                <Col xs={2}>
                                                    
                                                </Col> 
                                                <Col xs={6}>
                                                    <Button value={id} variant="primary" size="sm">Update End Date</Button>
                                                </Col>                                                                        
                                                        

                                            </Row>                               
                                                                                                          

                                        </div>
                                        
                                                       
                                    </Card.Body>
                                </Col> 
                                <Col xs={3}>
                                    <Card.Img variant="top" src="kramer.jpg"/>
                                </Col>
                            </Row> 

                        </Card.Body>
                    
                        </Accordion.Collapse>
                    </Card>
            
            </Accordion>
         

        </div>

        

    )
}


export default Vote;