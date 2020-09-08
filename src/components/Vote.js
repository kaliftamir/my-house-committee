import React, { } from 'react';
import { Card,Button,Accordion,Row,Col } from 'react-bootstrap';
import './Message.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parse from 'parse';



function Vote(props) {

    const { id,title,details,opt1,opt2,dueDate,votes} = props

   
    return(

        <div className="c-message">

            <Accordion>
                <Card>
                    <Card.Header className="title">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                           <span className="title-text">
                            {title}
                           </span>
                                               
                           

                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">                   
                        
                            <Row>                                
                                <Col xs={9}>
                                    <Card.Body className="card-body">
                                        
                                        <div className="details">
                                            <Row>
                                                <Col xs={4}>
                                                    Details:
                                                </Col>
                                                <Col xs={6}>
                                                    {details}
                                                </Col> 
                                            </Row>                                                
                                        </div>

                                        <div> 
                                            <Row>
                                                <Col xs={4}>
                                                    End Date:
                                                </Col>
                                                <Col xs={2}>
                                                    {dueDate}
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
                    
                    </Accordion.Collapse>
                    <Card.Footer>
                        <Button>{opt1}</Button>
                        <Button>{opt2}</Button>
                    </Card.Footer>
                </Card>
            
            </Accordion>
         

        </div>

        

    )
}


export default Vote;