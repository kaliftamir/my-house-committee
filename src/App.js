import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, HashRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import TenantsPage from './pages/TenantsPage';
import MessagesPage from './pages/MessagesPage';
import VotingsPage from './pages/VotingsPage';
import jsonUsers from './data/users.json'
import jsonAccounts from './data/accounts.json'
// import jsonMessage from './data/messages.json'


// States:

// activeUser - object - a User object contains the details for the active user.
//  If there is no active user this state will hold the value of null.

// activeAccount - object - an Account object contains the details for the active account.
//  If there is no active account this state will hold the value of null.



// users - array - an array that contains all the users in the system (this is a HACK
//   since we don't have a server side)

// recipes - array - an array that contains all the recipes in the system (this is a HACK
//   since we don't have a server side)
class App extends React.Component {

  constructor(props) {
    super(props);
        
    this.state = {

      activeUser: null,
      // activeUser: {
      //   id: 123,
      //   name: "John Doe",
      //   email: "john@john.com",
      //   apartment:6,
      //   pwd:"123",
      //   isTenant: true,
      //   isCommitteeMember: true
      // }, 
      activeAccount:null,
      // activeAccount:{
      //   "id": 1,
      //       "building":"44",
      //       "address": "Rashi",
      //       "city": "tel-Aviv" 
      // },
        
      users: jsonUsers,
      accounts: jsonAccounts
      // messages: jsonMessages
    }
  
  //   this.handleLogout = this.handleLogout.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
     this.handleSignup = this.handleSignup.bind(this);
     this.handleNewAccount = this.handleNewAccount.bind(this);
  //   this.handleNewRecipe = this.handleNewRecipe.bind(this);

  }
  

  handleLogin(activeUser) {
    this.setState({
      activeUser: activeUser
    })
  }

  handleSignup(activeAccount) {
    this.setState({
      activeAccount: activeAccount,
    })
    this.setState({
      activeUser: activeAccount
    })
  }

  handleNewAccount(account) {

    const { activeAccount, accounts } = this.state

    // Adding to the users object usedId and id
    //account.id = activeAccount.id;

    // for id - taking the id of the last user in the array and adding 1
    account.id = accounts[accounts.length - 1].id + 1;

    this.setState({
      accounts: accounts.concat(account)
    })
    console.log(accounts)
  }

  // handleLogout() {
  //   this.setState({
  //     activeUser: null
  //   })
  // }



  render() {

    const { activeUser,activeAccount,users,accounts } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} activeAccount={activeAccount}/>
          </Route>
          <Route exact path="/login">
            <LoginPage activeUser={activeUser} activeAccount={activeAccount} users={users} handleLogin={this.handleLogin}/>
          </Route>

          <Route exact path="/signup">
            <SignupPage activeUser={activeUser} activeAccount={activeAccount} users={users} accounts={accounts} handleSignup={this.handleSignup} handleNewAccount={this.handleNewAccount}/>
          </Route>

          <Route exact path="/dashboard">
            <DashboardPage activeUser={activeUser} activeAccount={activeAccount}/>
          </Route>
          <Route exact path="/users">
            <TenantsPage activeUser={activeUser} activeAccount={activeAccount}/>
          </Route>
          <Route exact path="/messages">
            <MessagesPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/votings">
            <VotingsPage activeUser={activeUser}/>
          </Route>          

        </Switch>
      </HashRouter>
    );
  }
}

export default App;

