import React, {  } from 'react';
import { Form, Col, Row, Button, Alert } from 'react-bootstrap';
import './LoginPage.css'
import UserModel from '../model/UserModel';
import { Redirect } from 'react-router-dom';
import Parse from 'parse';



function LoginPage (props) {

    // users props not need anymore  (JSON)
    const { handleLogin } = props;
    
    // controlled components
    const [emailInput, setEmailInput] = React.useState("john@john.com")
    const [pwdInput, setPwdInput] = React.useState("123")    
    
    
    const [redirectToDashboard, setRedirectToDashboard] = React.useState(false)
    const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false)

    
    function login() {

        // Pass the username and password to logIn function
        Parse.User.logIn(emailInput,pwdInput).then((user) => {
            // Do stuff after successful login
            // If the login is valid: notify App and redirect to "/dashboard"
            handleLogin(new UserModel(user));
            setRedirectToDashboard(true) 
        }).catch(error => {
            // Do stuff after unsuccessful login
            // If the login is not valid: show an error alert
            setShowInvalidCredentials(true)

        })
        
        // old code of JSON ---------------------------------------------------------------------
        // // Check if the login is valid (if a user with the same 
        // // email and pwd was found in the users array)
        // const userFound = users.find(user => emailInput === user.email && pwdInput === user.pwd);

        // if (userFound) {
        //     // If the login is valid: notify App and redirect to "/dashboard"
        //     handleLogin(userFound);
        //     setRedirectToDashboard(true) 

        // } else {
        //     // If the login is not valid: show an error alert
        //     setShowInvalidCredentials(true)
        // }
    }
    
    console.log(redirectToDashboard)  
    
        if (redirectToDashboard) {
            return <Redirect to="/dashboard" />
        }


    return (
            <div className="p-login">
                <h1>Login to Committee App</h1>
                or <a href="#/signup">create a new account</a>
                <Form>
                    {showInvalidCredentials ? <Alert variant="danger">
                        Invalid Credientails! Incorrect email or password
                    </Alert> : <Alert/>}
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" value={emailInput}
                             onChange={(e) => (setEmailInput(e.target.value),setShowInvalidCredentials(false))}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" value={pwdInput}
                             onChange={(e) => (setPwdInput(e.target.value),setShowInvalidCredentials(false))}/>
                        </Col>
                    </Form.Group>

                    <Form.Group>
                            <Button type="button" onClick={login} block variant="primary">Login</Button>
                    </Form.Group>
                </Form>
            </div>
    );
    
}

export default LoginPage;