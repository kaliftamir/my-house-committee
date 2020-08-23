import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import { Col, Row,Container } from 'react-bootstrap';




function DashboardPage(props) {
    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }   

    return (
        <div>
          <CommitteeNavbar activeUser={activeUser}/> 
          <Container>
            <Row>
                <Col md={6}>
                 <h2>New Report Issues</h2>
                </Col>
                <Col md={6}>
                 <h2>Overdue Issues</h2>
                </Col>
                
            </Row>
            DashboardPage

        </Container>
         
        
          

        </div>
    );
    
}

export default DashboardPage;