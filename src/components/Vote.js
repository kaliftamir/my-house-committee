import React, { } from 'react';
import { Card,Button,Accordion,Row,Col } from 'react-bootstrap';
import './Vote.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parse from 'parse';
import { Doughnut } from 'react-chartjs-2';




function Vote(props) {

    const { id,title,details,opt1,opt2,opt3,dueDate,votes} = props
    

    const rnd1 = Math.floor(Math.random() * 100); 
    const rnd2 = Math.floor(Math.random() * 100); 
    const rnd3 = Math.floor(Math.random() * 100); 

    const chartData = {
        labels: [
            opt1,
            opt2,
            opt3
        ],
        datasets: [{
            data: [rnd1, rnd2, rnd3],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    }
   
    return(

        <div className="c-vote">

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
                                            <Row className="date">
                                                <Col xs={4}>
                                                    End Date:
                                                </Col>
                                                <Col xs={4}>
                                                    {dueDate}
                                                </Col> 
                                                <Col xs={4}>
                                                    <Button value={id} variant="primary" size="sm">Update End Date</Button>
                                                </Col>                                                                                               
                                            </Row>                                                            

                                        </div>                        
                                                       
                                    </Card.Body>
                                </Col> 
                                <Col xs={3}>
                                    {/* <Card.Img variant="top" src="kramer.jpg"/> */}
                                    <Doughnut data={chartData} width={100}/>
                                </Col>
                            </Row>                                                    
                    
                    </Accordion.Collapse>
                    <Card.Footer>
                        <Button>{opt1}</Button>
                        <Button>{opt2}</Button>
                        <Button>{opt3}</Button>
                    </Card.Footer>
                </Card>
            
            </Accordion>
         

        </div>

        

    )
}


export default Vote;