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
                    
                </Container>
            

        </div>
    );
    
}

export default HomePage;