import React, { Component } from 'react';
import { Card,Button,Col,Row } from 'react-bootstrap';
import './Tenant.css'


function Tenant() {


    return(

        <div className="c-tenant">

            <Card style={{ width: '18rem' }}>
                <Row>
                    <Col  xs={3}>
                        <Card.Img variant="top" src="jerry.jpg" />
                    </Col>
                    <Col xs={9}>
                        <Card.Body className="card-body">
                            <Card.Title>Jerry</Card.Title>
                            <Card.Text>
                        committe member
                            </Card.Text>                        
                        </Card.Body>
                    </Col> 
                </Row>   
            </Card>

        </div>

        

    )
}


export default Tenant;