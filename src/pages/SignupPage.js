import React, {  } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupPage.css'
import { Form, Col, Row, Button,Alert } from 'react-bootstrap';
import Parse from 'parse';


function SignupPage(props) {
    
    const { users,accounts,handleSignup,handleNewAccount } = props;

    

    // controlled components
    const [nameSignup, setNameSignup] = React.useState("John")
    const [emailSignup, setEmailSignup] = React.useState("john@john.com")
    const [pwdSignup, setPwdSignup] = React.useState("123") 
    const [buildingSignup, setBuildingSignup] = React.useState("5") 
    const [addressSignup, setAddressSignup] = React.useState("Rashi") 
    const [citySignup, setCitySignup] = React.useState("Tel-Aviv") 
    
    const [redirectToDashboard, setRedirectToDashboard] = React.useState(false)      
    const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false)
    const [showInvalidAccount, setShowInvalidAccount] = React.useState(false)


    // adds new account on signup when submit
     function handleCreateAccount() {
       
        const newAccount = {                 
            
            building:buildingSignup,
            address: addressSignup,
            city: citySignup  
        };
            
        handleNewAccount(newAccount);
    }
    
    function signUp() {
    
    //-------------------------------------------------------------------------------------------
    //     const user = new Parse.User()
       
    //     user.set('name', nameSignup);
    //     user.set('email', emailSignup);
    //     user.set('password', pwdSignup);              
    //     user.set('building', buildingSignup);
    //     user.set('city', citySignup);
    //     user.set('address', addressSignup);

    //     //Parse.User.logIn(emailInput,pwdInput).then((user) => {
    //     user.signUp().then((user) => {
    //    //
    //     }).catch(error => {
    //     //
    //     });

        //-------------------------------------------------------------------------------------------
        
        // Check if the user exists (if there is a user with the same 
        // email in the users array)
        const userFound = users.find(user => emailSignup === user.email  && pwdSignup === user.pwd);

        if (userFound) {              

            // Checks if the account exists
            const accountFound = accounts.find(
                account => buildingSignup === account.building && addressSignup === account.address && citySignup===account.city);

            if (accountFound) {
                // If the signup account exists: show an error alert
                setShowInvalidAccount(true)               


            } else {
                // If the signup new account is valid: notify App  
                handleSignup(!accountFound);  // accountFound===false (not found)

                // redirect to "/dashboard"
                setRedirectToDashboard(true) 

                // add new account to the accounts array
                handleCreateAccount()      
              
            }         
            

        } else {
            // If the user already exists: show an error alert
            setShowInvalidCredentials(true) 
        } 
        
    }

    //console.log(redirectToDashboard)

        if (redirectToDashboard) {
            return <Redirect to="/dashboard" />
        }


    return (
            <div className="p-signup">
                
                <h1>Create a Committe Member Account</h1>
                <Form>
                     
                    {showInvalidCredentials ? <Alert className="signup-alert" variant="danger">
                        Invalid Credientails! Incorrect email or password
                    </Alert> : <Alert></Alert>}

                    {showInvalidAccount ? <Alert className="signup-alert" variant="danger">
                       This Account is already exist!
                    </Alert> :null}
                    

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
                                onChange={(e) => (setEmailSignup(e.target.value),setShowInvalidCredentials(false))}/>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPassword">
                        <Col sm={12}>
                        <Form.Label id="passward">Password:</Form.Label>                    
                        <Form.Control type="passward" value={pwdSignup}
                                onChange={(e) => (setPwdSignup(e.target.value),setShowInvalidCredentials(false))} />
                        </Col>         
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Col sm={12}>
                            <Form.Label id="building">Building/Condominium Community Name:</Form.Label>                   
                            <Form.Control type="text" value={buildingSignup}
                                onChange={(e) => (setBuildingSignup(e.target.value),setShowInvalidAccount(false))}/>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Col sm={12}>
                        <Form.Label id="address">Address:</Form.Label>                    
                        <Form.Control type="text" value={addressSignup}
                                onChange={(e) => (setAddressSignup(e.target.value),setShowInvalidAccount(false))}/>
                        </Col>                     
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Col sm={12}>
                            <Form.Label id="city">City:</Form.Label>                    
                            <Form.Control type="text" value={citySignup}
                                onChange={(e) => (setCitySignup(e.target.value),setShowInvalidAccount(false))}/>
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