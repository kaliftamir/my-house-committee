import React, { } from 'react';
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import { Col, Row,Container } from 'react-bootstrap';



function DashboardPage(props) {
    
    const { activeUser } = props;

    const [newReportedIssues, setNewReportedIssues] = React.useState([])
    const [overdueIssues, setOverdueIssues] = React.useState([])
    const [votingPercentage, setVotingPercentage] = React.useState([])


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
            
            DashboardPages-start

        </Container>      
          

        </div>
    );
    
}

export default DashboardPage;