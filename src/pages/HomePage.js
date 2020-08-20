import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import RecipeNavbar from '../components/RecipeNavbar';

class HomePage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <RecipeNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron>
                    <Container>
                      <h1>Home Page</h1>
                    
                    </Container>
                </Jumbotron>

            </div>
        );
    }
}

export default HomePage;