import React, { Component } from 'react';
import { Card,Button,Col,Row } from 'react-bootstrap';
import './Tenant.css'


function Tenant(props) {

    const { image,name,email,apt} = props


    return(

        <div className="c-tenant">

            <Card block>
                <Row>
                    <Col xs={3}>
                        <Card.Img variant="top" src={image} />
                    </Col>
                    <Col xs={9}>
                        <Card.Body className="card-body">
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Text> 
                                <p>email: {email}</p>
                                <p>Apt. {apt}</p>              
                                                        

                            </Card.Text>
                            <Row className="tenant-options"> 
                                <Button variant="primary" size="sm">update</Button>
                                <Button variant="danger" size="sm">Delete</Button>  
                            
                            </Row>
                                              
                        </Card.Body>
                    </Col> 
                </Row>   
            </Card>

        </div>

        

    )
}


export default Tenant;