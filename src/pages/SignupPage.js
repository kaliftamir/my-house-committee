import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './SignupPage.css'
import { Form, Col, Row, Button,Alert } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../model/UserModel';


function SignupPage(props) {
    
    const { users,accounts,handleSignup,handleNewAccount } = props;

    const [newUser, setNewUser] = React.useState(false)
    const [activeAccount, setActiveAccount] = React.useState(false)

    

    // controlled components
    const [userNameSignup, setUserNameSignup] = React.useState("tamir")
    const [emailSignup, setEmailSignup] = React.useState("tamir@kalif.com")
    const [pwdSignup, setPwdSignup] = React.useState("TamirKalif1") 
    const [tenantSignup, setTenantSignup] = React.useState(true) 
    const [committeeMemberSignup, setCommitteeMemberSignup] = React.useState(false) 
    const [apartmentSignup, setApartmentSignup] = React.useState("4") 
    const [buildingSignup, setBuildingSignup] = React.useState("44") 
    const [addressSignup, setAddressSignup] = React.useState("rashi") 
    const [citySignup, setCitySignup] = React.useState("tel-aviv") 
    
    const [redirectToHome, setRedirectToHome] = React.useState(false) 
    // alerts     
    const [showInvalidUser, setShowInvalidUser] = React.useState(false)
    const [showInvalidAccount, setShowInvalidAccount] = React.useState(false)
    const [showAlertSignup, setShowAlertSignup] = React.useState(false)

    

    // // adds new account on signup when submit
    //  function handleCreateAccount() {
       
    //     const newAccount = {                 
            
    //         building:buildingSignup,
    //         address: addressSignup,
    //         city: citySignup  
    //     };
            
    //     handleNewAccount(newAccount);
    // }
    
    //  function signup() {

    //     const user = new Parse.User()
    //     user.set('username', userNameSignup);
    //     user.set('email', emailSignup);
    //     user.set('apartment', apartmentSignup);
    //     user.set('isTenant', true);
    //     user.set('isCommitteeMember', true);
    //     //user.set('accountId', new Parse.Object("2PKEblicxa"));
    //     user.set('password', pwdSignup);
        

    //     user.signUp().then((user) => {
    //         // If the login is valid: notify App and redirect to "/"
    //         setTimeout(function() {
    //             setShowAlertSignup(true)
                
    //           }, 5000);
              
    //         setRedirectToHome(true)
                
                
                
    //       }).catch(error => {
    //            // If user already exist: show an error alert
              
    //            setShowInvalidUser(true)
    //            console.log(pwdSignup)
    //       });
        
    // }

    function signup() {        
        setActiveAccount(true)
    }
    
    
    useEffect(() => {
        
        if (activeAccount) { 

                const user = new Parse.User()
                user.set('username', userNameSignup);
                user.set('email', emailSignup);
                user.set('apartment', apartmentSignup);
                user.set('isTenant', true);
                user.set('isCommitteeMember', true);
                //user.set('accountId', new Parse.Object("2PKEblicxa"));
                user.set('password', pwdSignup);                
        
                user.signUp().then((user) => {
                    // If the user is valid: create new account 
                                 
                    //setNewUser(true) 
                    const account = Parse.Object.extend('account');
                    const myNewObject = new account();
                    
                    myNewObject.set('building', buildingSignup);
                    myNewObject.set('address', addressSignup);
                    myNewObject.set('city', citySignup);
                    
                    myNewObject.save().then(
                      (result) => {
    
                        // If the signup is valid: notify user and redirect to homePage
                        setShowAlertSignup(true)
    
                        setTimeout(function() {
                            setRedirectToHome(true)                          
                        }, 2000);
                       
                      },
                      (error) => {
                        setShowInvalidAccount(true)
    
                      }
                    );
                    
                                                            
                        
                }).catch(error => {
                    // If user already exist: show an error alert                      
                    setShowInvalidUser(true)
                      
                }); 
                              

            // if(newUser) {
                
                // const account = Parse.Object.extend('account');
                // const myNewObject = new account();
                
                // myNewObject.set('building', buildingSignup);
                // myNewObject.set('address', addressSignup);
                // myNewObject.set('city', citySignup);
                
                // myNewObject.save().then(
                //   (result) => {

                //     // If the signup is valid: notify user and redirect to homePage
                //     setShowAlertSignup(true)

                //     setTimeout(function() {
                //         setRedirectToHome(true)                          
                //     }, 2000);
                   
                //   },
                //   (error) => {
                //     setShowInvalidAccount(true)

                //   }
                // );
                
                
            // }
        }
        
    }, [activeAccount])   
    

        if (redirectToHome) {
            return <Redirect to="/" />
        }
   
    return (
            <div className="p-signup">
                
                <h1>Create a Committe Member Account</h1>
                <Form>
                    <Row>
                         <Col lg={12} >
                   
                            {showAlertSignup ? <Alert className="signup-alert" variant="success">
                                    New user was signed up
                                </Alert> : <Alert></Alert>}
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={6} sm={12} >
                            
                            {showInvalidUser ? <Alert className="signup-alert" variant="danger">
                            The user already exists!
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
                                        onChange={(e) => (setEmailSignup(e.target.value))}/>
                                </Col>                    
                            </Form.Group>

                            <Form.Group as={Row} controlId="formBasicPassword">
                                <Col sm={12}>
                                <Form.Label id="passward">Password:</Form.Label>                    
                                <Form.Control type="passward" value={pwdSignup}
                                        onChange={(e) => (setPwdSignup(e.target.value))} />
                                </Col>         
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <Form.Label id="apartment">Apartment:</Form.Label>                   
                                    <Form.Control type="text" value={apartmentSignup}
                                        onChange={(e) => (setApartmentSignup(e.target.value))}/>
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

                            {showInvalidAccount ? <Alert className="signup-alert" variant="danger">
                            The account already exists!
                            </Alert> : <Alert></Alert>} 

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <Form.Label id="building">Building:</Form.Label>                   
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