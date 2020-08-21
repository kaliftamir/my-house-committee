import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupPage.css'
import { Container,Form, Col, Row, Button } from 'react-bootstrap';




function SignupPage(props) {
    
    const { community,handleSignup } = props;

    

    // controlled components
    const [nameSignup, setNameSignup] = React.useState("Tamir")
    const [emailSignup, setEmailSignup] = React.useState("tamir@tamir.com")
    const [pwdSignup, setPwdSignup] = React.useState("123") 
    const [buildingSignup, setBuildingSignup] = React.useState("44a") 
    const [addressSignup, setAddressSignup] = React.useState("Rashi") 
    const [citySignup, setCitySignup] = React.useState("Tel-Aviv") 
    
    const [redirectToDashboard, setRedirectToDashboard] = React.useState(false)


    function signUp() {

        // Check if the signup is valid (if a item part of community array)       
        const communityFound = community.find(item =>
           buildingSignup === item.building && addressSignup === item.address && citySignup===item.city );

        if (communityFound) {
            // If the signup is valid: notify App and redirect to "/dashboard"
            handleSignup(communityFound);
            setRedirectToDashboard(true) 

        } else {
            // If the login is not valid: show an error alert
            alert("Ther is no such of community!")
        }


         

    }

    if (redirectToDashboard) {
        return <Redirect to="/dashboard" />
    }       

    return (
        <div className="p-signup">
            
            <h1>Create a Committe Member Acount</h1>
            <Form>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                       <Form.Label id="name">Name:</Form.Label>                    
                       <Form.Control type="text" value={nameSignup}
                             onChange={(e) => (setNameSignup(e.target.value))}/>
                    </Col> 
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="email">Email:</Form.Label>
                        <Form.Control type="email" value={emailSignup}
                             onChange={(e) => (setEmailSignup(e.target.value))}/>
                    </Col>                    
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicPassword">
                    <Col sm={12}>
                       <Form.Label id="passward">Password:</Form.Label>                    
                       <Form.Control type="passward" value={pwdSignup}
                             onChange={(e) => (setPwdSignup(e.target.value))}/>
                    </Col>         
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="building">Building/Condominium Community Name:</Form.Label>                   
                        <Form.Control type="text" value={buildingSignup}
                             onChange={(e) => (setBuildingSignup(e.target.value))}/>
                    </Col>                    
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                       <Form.Label id="address">Address:</Form.Label>                    
                       <Form.Control type="text" value={addressSignup}
                             onChange={(e) => (setAddressSignup(e.target.value))}/>
                    </Col>                     
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={12}>
                        <Form.Label id="city">City:</Form.Label>                    
                        <Form.Control type="text" value={citySignup}
                             onChange={(e) => (setCitySignup(e.target.value))}/>
                    </Col>                     
                </Form.Group>
                
                <Button variant="primary" onClick={signUp} block type="button">
                    Submit
                </Button>
            </Form>   
            

        </div>
    );
    
}

export default SignupPage;