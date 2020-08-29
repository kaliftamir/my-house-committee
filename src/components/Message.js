import React, { } from 'react';
import { Card,Button,Accordion,Row,Col } from 'react-bootstrap';
import './Message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Message(props) {

    const { image,title,details,priority,icon} = props

   
  
    return(

        <div className="c-message">

            <Accordion>
                <Card>
                    <Card.Header className="title">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                           <span className="title-text">
                            {title}
                           </span>
                             
                                                    
                            <FontAwesomeIcon className="icon" icon={icon} />                      
                           

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
                                        <Card.Title></Card.Title>
                                            <div className="details">
                                                <Row>
                                                    <Col xs={2}>
                                                        Details:
                                                    </Col>
                                                    <Col xs={7}>
                                                        {details} 
                                                    </Col>                                                           

                                                </Row>
                                                
                                            </div>
                                        <div> 
                                            <Row>
                                                <Col xs={2}>
                                                    Priority:
                                                </Col>
                                                <Col xs={7}>
                                                    {priority} 
                                                </Col> 
                                                <Col xs={3}>
                                                    <Button variant="primary" size="sm">Update</Button>
                                                    <Button variant="danger" size="sm">Delete</Button>  
                                                </Col>                                                                                                   
                                                               

                                            </Row>
                                                                                                          

                                        </div>
                                        
                                                       
                                    </Card.Body>
                                </Col> 
                            </Row> 

                        </Card.Body>
                    
                        </Accordion.Collapse>
                    </Card>
            
            </Accordion>
         

        </div>

        

    )
}


export default Message;