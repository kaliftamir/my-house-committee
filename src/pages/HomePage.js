import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import CommitteeNavbar from '../components/CommitteeNavbar';



function HomePage(props) {

    const {activeUser} = props 
        

    return (
        <div>
            <CommitteeNavbar activeUser={activeUser}/>
            <Jumbotron>
                 <Container>
                    <h1>Home Page</h1>
                    
                </Container>
            </Jumbotron>

        </div>
    );
    
}

export default HomePage;