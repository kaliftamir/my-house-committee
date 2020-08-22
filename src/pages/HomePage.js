import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import CommitteeNavbar from '../components/CommitteeNavbar';



function HomePage(props) {

    const {activeUser} = props 
        

    return (
        <div>
            <CommitteeNavbar activeUser={activeUser}/>
            
                 <Container>
                    <h1>Home Page</h1>
                    
                </Container>
            

        </div>
    );
    
}

export default HomePage;