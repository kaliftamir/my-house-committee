import React, {  } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupPage.css'
import { Form, Col, Row, Button,Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../model/UserModel';


function SignupPage(props) {
    
    const { users,accounts,handleSignup,handleNewAccount } = props;

    

    // controlled components
    const [userNameSignup, setUserNameSignup] = React.useState("tamir")
    const [emailSignup, setEmailSignup] = React.useState("tamir@kalif.com")
    const [pwdSignup, setPwdSignup] = React.useState("TamirKalif1") 
    const [tenantSignup, setTenantSignup] = React.useState(true) 
    const [committeeMemberSignup, setCommitteeMemberSignup] = React.useState(false) 
    const [apartmentSignup, setApartmentSignup] = React.useState("4") 
    const [buildingSignup, setBuildingSignup] = React.useState("44") 
    const [addressSignup, setAddressSignup] = React.useState("Rashi") 
    const [citySignup, setCitySignup] = React.useState("Tel-Aviv") 
    
    const [redirectToDashboard, setRedirectToDashboard] = React.useState(false)      
    const [showInvalidCredentials, setShowInvalidCredentials] = React.useState(false)
    const [showInvalidAccount, setShowInvalidAccount] = React.useState(false)


    // // adds new account on signup when submit
    //  function handleCreateAccount() {
       
    //     const newAccount = {                 
            
    //         building:buildingSignup,
    //         address: addressSignup,
    //         city: citySignup  
    //     };
            
    //     handleNewAccount(newAccount);
    // }
    
    function signup() {


        const user = new Parse.User()
        user.set('username', userNameSignup);
        user.set('email', emailSignup);
        user.set('apartment', apartmentSignup);
        user.set('isTenant', true);
        user.set('isCommitteeMember', true);
        //user.set('accountId', new Parse.Object("2PKEblicxa"));
        user.set('password', pwdSignup);
        

        user.signUp().then((user) => {
            alert("y")
          }).catch(error => {
               // If user already exist: show an error alert
               setShowInvalidCredentials(true)
          });


        // useEffect(() => {
       
        //     if (activeUser) {
                
        //     }
        // }, [activeUser])  
    
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
        // const userFound = users.find(user => emailSignup === user.email  && pwdSignup === user.pwd);

        // if (userFound) {              

        //     // Checks if the account exists
        //     const accountFound = accounts.find(
        //         account => buildingSignup === account.building && addressSignup === account.address && citySignup===account.city);

        //     if (accountFound) {
        //         // If the signup account exists: show an error alert
        //         setShowInvalidAccount(true)               


        //     } else {
        //         // If the signup new account is valid: notify App  
        //         handleSignup(!accountFound);  // accountFound===false (not found)

        //         // redirect to "/dashboard"
        //         setRedirectToDashboard(true) 

        //         // add new account to the accounts array
        //         handleCreateAccount()      
              
        //     }         
            

        // } else {
        //     // If the user already exists: show an error alert
        //     setShowInvalidCredentials(true) 
        // } 
        
    }

    //console.log(redirectToDashboard)

        if (redirectToDashboard) {
            return <Redirect to="/dashboard" />
        }
   
    return (
            <div className="p-signup">
                
                <h1>Create a Committe Member Account</h1>
                <Form>

                    <Row>

                        <Col lg={6} sm={12} >
                            
                            {showInvalidCredentials ? <Alert className="signup-alert" variant="danger">
                                This User already exist!
                            </Alert> : <Alert></Alert>}

                                            

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={12}>
                                <Form.Label id="name">User Name:</Form.Label>                    
                                <Form.Control type="text" value={userNameSignup}
                                        onChange={(e) => (setUserNameSignup(e.target.value))}/>
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
                                    <Form.Label id="apartment">Apartment:</Form.Label>                   
                                    <Form.Control type="text" value={apartmentSignup}
                                        onChange={(e) => (setApartmentSignup(e.target.value),setShowInvalidAccount(false))}/>
                                </Col>                    
                            </Form.Group>

                            <Form.Group as={Row} controlId="formBasicCheckbox"> 
                                <Col sm={12}>                               
                                <Form.Check type="checkbox" label="Tenant?" checked={tenantSignup}
                                onChange={(e) => (setTenantSignup(e.target.checked))}/>
                                </Col>                                
                            </Form.Group>

                            <Form.Group as={Row} controlId="formBasicCheckbox"> 
                                <Col sm={12}>                      
                                <Form.Check type="checkbox" label="Committee Member?" checked={committeeMemberSignup}
                                onChange={(e) => (setCommitteeMemberSignup(e.target.checked))}/> 
                                </Col>                               
                            </Form.Group>

                         
                        </Col> 
                        <Col lg={6} sm={12}>

                            <Alert></Alert>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <Form.Label id="building">Building:</Form.Label>                   
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
                            </Col>
                        </Row>     
                        <Button variant="primary" onClick={signup} block type="button">
                            Submit
                        </Button>
                        
                          
                </Form>   
                

            </div>
    );
    
} 

export default SignupPage;