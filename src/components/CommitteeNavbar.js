import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CommitteeNavbar (props) {
 
    const { activeUser } = props    

            

        // rendering the menu items depending on whether we have an active user or not
         const loginMenuItem = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
         const signupMenuItem = activeUser ? <Nav.Link href="#/signup">Sign up</Nav.Link> : null;
         const logoutMenuItem = activeUser ? <Nav.Link href="#">Logout</Nav.Link> : null;
         const dashboardMenuItem = activeUser ? <Nav.Link href="#/dashboard">Dashboard</Nav.Link> : null;
         const tenantsMenuItem = activeUser ? <Nav.Link href="#/tenants">Tenants</Nav.Link> : null;
         const messagesMenuItem = activeUser ? <Nav.Link href="#/messages">Messages</Nav.Link> : null;
         const votingMenuItem = activeUser ? <Nav.Link href="#/votings">Voting</Nav.Link> : null;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">HCA Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {dashboardMenuItem}
                    {tenantsMenuItem}
                    {messagesMenuItem}
                    {votingMenuItem}
                </Nav>
                <Nav className="ml-auto">
                    {loginMenuItem}
                    {signupMenuItem}
                    {logoutMenuItem}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    
}

export default CommitteeNavbar;