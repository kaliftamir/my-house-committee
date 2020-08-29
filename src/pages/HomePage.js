import React, { } from 'react';
import { Container } from 'react-bootstrap';
import CommitteeNavbar from '../components/CommitteeNavbar';



function HomePage(props) {

    const {activeUser} = props 
        

    return (
        <div>
            <CommitteeNavbar activeUser={activeUser}/>
            
                 <Container>
                    <h1>Home Page</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.</h4>
                    
                </Container>
            

        </div>
    );
    
}

export default HomePage;