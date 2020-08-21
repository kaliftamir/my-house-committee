import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupPage.css'
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
        <div className="p-signup">
            
            <h1>Create a Committe Member Acount</h1>
            <Form>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                       <Form.Label id="name">Name:</Form.Label>                    
                       <Form.Control type="text"/>
                    </Col> 
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="email">Email:</Form.Label>
                        <Form.Control type="email"/>
                    </Col>                    
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicPassword">
                    <Col sm={12}>
                       <Form.Label id="passward">Password:</Form.Label>                    
                       <Form.Control type="passward"/>
                    </Col>         
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="building">Building/Condominium Community Name:</Form.Label>                   
                        <Form.Control type="text"/>
                    </Col>                    
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                       <Form.Label id="address">Address:</Form.Label>                    
                       <Form.Control type="text"/>
                    </Col>                     
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="city">City:</Form.Label>                    
                        <Form.Control type="text"/>
                    </Col>                     
                </Form.Group>
                
                <Button variant="primary" block type="button">
                    Submit
                </Button>
            </Form>   
            

        </div>
    );
    
}

export default SignupPage;