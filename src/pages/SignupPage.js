import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container,Form, Col, Row, Button } from 'react-bootstrap';




function SignupPage(props) {
    
    const { activeUser } = props;

    const [redirectToSignup, setRedirectToSignup] = React.useState(false)


    function signUp() {

         setRedirectToSignup(true) 

    }

    if (redirectToSignup) {
        return <Redirect to="/signup" />
    }       

    return (
        <div>
            <Container>
              <h1>Create a Committe Member Acount</h1>
              <Form>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Name"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email"/>
                        </Col>
                    </Form.Group>                  

                    <Form.Group>
                            <Button type="button"  onClick={signUp} block variant="primary">Add</Button>
                    </Form.Group>
                </Form>
            </Container>

        </div>
    );
    
}

export default SignupPage;